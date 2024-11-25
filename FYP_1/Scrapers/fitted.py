import requests
from bs4 import BeautifulSoup
import time
import random
from urllib.parse import urljoin
from pymongo import MongoClient
import logging

class FittedShopScraper:
    def __init__(self):
        # Logging configuration
        logging.basicConfig(level=logging.INFO, 
                            format='%(asctime)s - %(levelname)s: %(message)s')
        
        # Base URL and headers
        self.base_url = 'https://fittedshop.com'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
        }
        
        # MongoDB Connection
        self.client = MongoClient('mongodb+srv://shahzarkhalique:dTwfaE0WmZ43TtvV@cluster0.lhtjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        self.db = self.client['Contrast']
        self.collection = self.db['products']
        
        # Create a session to reuse connections
        self.session = requests.Session()

    def is_male_product(self, title):
        """Determine if the product is for males"""
        female_keywords = ['(WOMEN)', 'women\'s', 'womens']
        return not any(keyword.lower() in title.lower() for keyword in female_keywords)

    def get_soup(self, url):
        """Fetch and parse webpage"""
        try:
            response = self.session.get(url, headers=self.headers)
            time.sleep(random.uniform(1, 3))  # Randomized delay
            return BeautifulSoup(response.content, 'html.parser')
        except Exception as e:
            logging.error(f"Error fetching {url}: {e}")
            return None

    def extract_image_url(self, product_soup):
        """Extract first product image URL"""
        try:
            # First try to find image in the product gallery
            image_elem = product_soup.select_one('div[data-product-photos] img[data-photoswipe-src]')
            if image_elem:
                image_url = image_elem.get('data-photoswipe-src') or image_elem.get('src')
                
                # Add https: if URL starts with //
                if image_url.startswith('//'):
                    image_url = 'https:' + image_url
                    
                # Remove query parameters
                image_url = image_url.split('?')[0]
                return image_url
                
            # Fallback: try other common image selectors
            alternate_selectors = [
                'img.product-featured-media',
                'img[data-product-featured-image]',
                'img.featured-image',
                '.product__photo img'
            ]
            
            for selector in alternate_selectors:
                image_elem = product_soup.select_one(selector)
                if image_elem and image_elem.get('src'):
                    image_url = image_elem['src']
                    if image_url.startswith('//'):
                        image_url = 'https:' + image_url
                    return image_url.split('?')[0]
                    
            return ''
            
        except Exception as e:
            logging.error(f"Error extracting image URL: {e}")
            return ''

    def clean_price(self, price_str):
        """Clean and convert price to float"""
        try:
            if not price_str:
                return 0.0
            
            price_str = price_str.replace('Rs.', '').replace(',', '')
            
            if 'Sale price' in price_str:
                sale_price = price_str.split('Sale price')[-1]
                price = ''.join(char for char in sale_price if char.isdigit() or char == '.')
            else:
                price = ''.join(char for char in price_str if char.isdigit() or char == '.')
            
            return float(price) if price else 0.0
            
        except Exception as e:
            logging.error(f"Error cleaning price {price_str}: {e}")
            return 0.0

    def extract_current_price(self, price_elem):
        """Extract the current price (sale price if available, otherwise regular price)"""
        try:
            if not price_elem:
                return 0.0
                
            price_text = price_elem.get_text(strip=True)
            
            sale_price_elem = price_elem.find('span', class_='sale-price')
            if sale_price_elem:
                return self.clean_price(sale_price_elem.get_text(strip=True))
            
            return self.clean_price(price_text)
            
        except Exception as e:
            logging.error(f"Error extracting current price: {e}")
            return 0.0

    def upsert_product(self, product_data):
        """Insert or update product in MongoDB"""
        try:
            # Create new document with desired field order
            document = {
                'name': product_data['name'],
                'price': product_data['price'],
                'image': product_data['image'],
                'url': product_data['url'],
                'store': product_data['store']
            }
            
            # Remove existing document with same URL
            self.collection.delete_one({'url': document['url']})
            
            # Insert new document
            result = self.collection.insert_one(document)
            
            if result.inserted_id:
                logging.info(f"Inserted new product: {document['name']}")
                print(f"Product Details:")
                for key, value in document.items():
                    print(f"{key}: {value}")
                    
        except Exception as e:
            logging.error(f"Error upserting to MongoDB: {e}")

    def scrape_collection(self):
        """Scrape all products from the collection"""
        collection_url = f'{self.base_url}/collections/all'
        page = 1

        while True:
            page_url = f'{collection_url}?page={page}'
            logging.info(f"Scraping page: {page_url}")
            
            soup = self.get_soup(page_url)
            if not soup:
                logging.error("Failed to fetch page")
                break

            products = soup.find_all('a', class_='grid-product__link')
            if not products:
                logging.info("No more products found")
                break

            for product in products:
                try:
                    title = product.find('div', class_='grid-product__title').get_text(strip=True)
                    price_elem = product.find('div', class_='grid-product__price')
                    price = self.extract_current_price(price_elem)
                    product_url = urljoin(self.base_url, product.get('href'))
                    
                    product_soup = self.get_soup(product_url)
                    image_url = self.extract_image_url(product_soup) if product_soup else ''

                    if self.is_male_product(title):
                        product_data = {
                            'name': title,
                            'price': price,
                            'image': image_url,
                            'url': product_url,
                            'store': 'Fitted Shop'
                        }
                        
                        self.upsert_product(product_data)
                
                except Exception as e:
                    logging.error(f"Error processing product: {e}")
                    continue
            
            page += 1
            time.sleep(random.uniform(2, 5))

    def main_scrape(self):
        """Main scraping method with error handling"""
        try:
            self.collection.create_index([('name', 1)])
            self.collection.create_index([('url', 1)], unique=True)
            
            self.scrape_collection()
            
            total_products = self.collection.count_documents({})
            logging.info(f"Total products scraped: {total_products}")
        
        except Exception as e:
            logging.error(f"An error occurred in main execution: {e}")
        
        finally:
            self.client.close()

def main():
    scraper = FittedShopScraper()
    scraper.main_scrape()

if __name__ == "__main__":
    main()