import requests
from bs4 import BeautifulSoup
import time
import random
from urllib.parse import urljoin
from pymongo import MongoClient
from datetime import datetime
import logging
from collections import OrderedDict

class OutfittersScraper:
    def __init__(self):
        logging.basicConfig(level=logging.INFO, 
                            format='%(asctime)s - %(levelname)s: %(message)s')
        
        self.base_url = "https://outfitters.com.pk"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        
        self.product_selectors = [
            'div.product-item',
            'div.product-card',
            'div.product-grid-item',
            'div[class*="product"]',
            'div.product',
        ]
        
        self.client = MongoClient('mongodb+srv://shahzarkhalique:dTwfaE0WmZ43TtvV@cluster0.lhtjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        self.db = self.client['Contrast']
        self.collection = self.db['products']
        self.session = requests.Session()

    def get_men_categories(self):
        categories = [
            '/collections/men-sweatshirt-sale',
            '/collections/men-sweater-sale',
            '/collections/men-jackets-sale',
            '/collections/men-shirt-sale',
            '/collections/men-t-shirt-sale',
            '/collections/men-polo-sale',
            '/collections/men-activewear-sale',
            '/collections/men-jeans-sale',
            '/collections/men-trousers-sale',
            '/collections/men-shorts-sale',
            '/collections/men-shoes-sale',
            '/collections/accessories-men-sale',
            '/collections/men-underwear-sale'
        ]
        return categories

    def scrape_product_page(self, url, page=1):
        try:
            full_url = urljoin(self.base_url, url)
            
            if page > 1:
                full_url += f'?page={page}'
            
            logging.info(f"Fetching URL: {full_url}")
            
            response = self.session.get(full_url, headers=self.headers)
            logging.info(f"Status Code: {response.status_code}")
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                products = []
                for selector in self.product_selectors:
                    products = soup.select(selector)
                    if products:
                        logging.info(f"Found {len(products)} products using selector: {selector}")
                        break
                
                logging.info(f"Total products found on page {page}: {len(products)}")
                
                if not products:
                    logging.warning(f"No products found for URL: {full_url}")
                    return False
                
                for product in products:
                    try:
                        product_data = self.extract_product_details(product, url)
                        if product_data:
                            self.upsert_product(product_data)
                    except Exception as e:
                        logging.error(f"Error processing individual product: {e}")
                
                next_page_elem = soup.select_one('a.pagination__next, .next-page, .page-next')
                has_next_page = next_page_elem is not None
                
                return has_next_page
            
            else:
                logging.error(f"Failed to fetch page: {url}, Status Code: {response.status_code}")
                return False

        except Exception as e:
            logging.error(f"Error scraping page {url}: {e}")
            return False

    def extract_product_details(self, product, category_url):
        name_selectors = [
            'h3.product-title', 
            'a.product-title', 
            '.product-name', 
            'h2', 
            'h3'
        ]
        
        name = None
        for selector in name_selectors:
            name_elem = product.select_one(selector)
            if name_elem:
                name = name_elem.text.strip()
                break
        
        url = None
        url_elem = product.select_one('a[href*="/products/"]')
        if url_elem:
            url = urljoin(self.base_url, url_elem['href'])
        
        image_selectors = [
            'img.zoomImg',
            'img[src*="/cdn/shop/files/"]',
            'img.product-image',
            'img.product-thumbnail',
            '.product-image img',
            'img[src*="/products/"]',
            'img.lazy',
            'img[data-src]',
            'img[data-original]'
        ]
        
        image = None
        for selector in image_selectors:
            image_elem = product.select_one(selector)
            if image_elem:
                image_url = (
                    image_elem.get('data-src') or 
                    image_elem.get('data-original') or 
                    image_elem.get('src')
                )
                
                if image_url:
                    if image_url.startswith('//'):
                        image_url = 'https:' + image_url
                    elif not image_url.startswith('http'):
                        image_url = urljoin(self.base_url, image_url)
                    
                    image = image_url.split('?')[0]
                    break
        
        price = 0
        price_selectors = [
            'span.price', 
            'span.product-price', 
            '.price-item', 
            'div.price'
        ]
        
        for selector in price_selectors:
            price_elem = product.select_one(selector)
            if price_elem:
                price_text = price_elem.text.strip()
                if 'PKR' in price_text:
                    price = self.clean_price(price_text)
                    break
        
        if name and url:
            return {
                'name': name,
                'price': price,
                'image': image,
                'url': url,
                'store': 'Outfitters'
            }
        return None

    def clean_price(self, price_str):
        try:
            cleaned = ''.join(char for char in price_str if char.isdigit() or char == '.')
            return float(cleaned) if cleaned else 0.0
        except Exception as e:
            logging.error(f"Error cleaning price {price_str}: {e}")
            return 0.0

    def upsert_product(self, product_data):
        try:
            # Create a new document with fields in desired order
            document = {
                'name': product_data['name'],
                'price': product_data['price'],
                'image': product_data['image'],
                'url': product_data['url'],
                'store': product_data['store']
            }
            
            # Remove any existing document with the same URL
            self.collection.delete_one({'url': document['url']})
            
            # Insert the new document
            result = self.collection.insert_one(document)
            
            if result.inserted_id:
                logging.info(f"Inserted new product: {document['name']}")
                print("\nProduct Details:")
                for key, value in document.items():
                    print(f"{key}: {value}")
                    
        except Exception as e:
            logging.error(f"Error upserting to MongoDB: {e}")

    def scrape_category_fully(self, category_url):
        """Scrape all pages of a category"""
        page = 1
        
        while True:
            logging.info(f"Scraping {category_url} - Page {page}")
            
            # Try to scrape the page
            has_next_page = self.scrape_product_page(category_url, page)
            
            # Increment page and break if no more pages
            page += 1
            
            # Break the loop if no more pages
            if not has_next_page:
                break
            
            # Random delay between pages
            time.sleep(random.uniform(2, 4))
        
        logging.info(f"Finished scraping category: {category_url}")

    def main_scrape(self):
        try:
            # Create indexes
            self.create_indexes()
            
            # Scrape all categories
            categories = self.get_men_categories()
            logging.info(f"Found {len(categories)} categories to scrape")
            
            for category_url in categories:
                logging.info(f"\nScraping category fully: {category_url}")
                self.scrape_category_fully(category_url)
                
                # Random delay between categories
                time.sleep(random.uniform(3, 6))
            
            # Get and print statistics
            stats = self.get_product_stats()
            logging.info("\nScraping Statistics:")
            logging.info(f"Total products scraped: {stats['total_products']}")
            logging.info(f"Categories found: {', '.join(stats['categories'])}")
        
        except Exception as e:
            logging.error(f"An error occurred in main execution: {e}")
        
        finally:
            self.close_connection()

    def create_indexes(self):
        try:
            self.collection.create_index([('name', 1)])
            self.collection.create_index([('url', 1)], unique=True)
            logging.info("Successfully created indexes")
        except Exception as e:
            logging.error(f"Error creating indexes: {e}")

    def get_product_stats(self):
        try:
            total_products = self.collection.count_documents({})
            categories = self.collection.distinct('category')
            
            stats = {
                'total_products': total_products,
                'categories': categories,
            }
            
            return stats
        except Exception as e:
            logging.error(f"Error getting stats: {e}")
            return {'total_products': 0, 'categories': []}

    def close_connection(self):
        try:
            self.client.close()
            logging.info("MongoDB connection closed successfully")
        except Exception as e:
            logging.error(f"Error closing MongoDB connection: {e}")

def main():
    scraper = OutfittersScraper()
    scraper.main_scrape()

if __name__ == "__main__":
    main()