import scrapy
from urllib.parse import urljoin
from pymongo import MongoClient
import logging


class FittedShopSpider(scrapy.Spider):
    name = "fittedshop"
    allowed_domains = ["fittedshop.com"]
    start_urls = ["https://fittedshop.com/collections/all"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # MongoDB Connection
        self.client = MongoClient(
            'mongodb+srv://shahzarkhalique:dTwfaE0WmZ43TtvV@cluster0.lhtjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
        self.db = self.client['Contrast']
        self.collection = self.db['products']

        # Create indexes in MongoDB for efficient queries
        self.collection.create_index([('name', 1)])
        self.collection.create_index([('url', 1)], unique=True)

    def is_male_product(self, title):
        """Determine if the product is for males"""
        female_keywords = ['(WOMEN)', "women's", "womens"]
        return not any(keyword.lower() in title.lower() for keyword in female_keywords)

    def clean_price(self, price_str):
        """Clean and convert price to float"""
        try:
            if not price_str:
                return 0.0
            price_str = price_str.replace('Rs.', '').replace(',', '')
            return float(price_str)
        except ValueError:
            return 0.0

    def parse(self, response):
        """Parse the collection page and navigate through pagination"""
        products = response.css('a.grid-product__link')
        for product in products:
            # Extract product details
            title = product.css('div.grid-product__title::text').get().strip()
            price_elem = product.css('div.grid-product__price::text').get()
            price = self.clean_price(price_elem) if price_elem else 0.0
            product_url = urljoin(response.url, product.attrib['href'])

            # If product is male, scrape additional details
            if self.is_male_product(title):
                yield scrapy.Request(
                    product_url,
                    callback=self.parse_product,
                    meta={'title': title, 'price': price, 'url': product_url},
                )

        # Follow pagination
        next_page = response.css('a.pagination__next::attr(href)').get()
        if next_page:
            yield scrapy.Request(urljoin(response.url, next_page), callback=self.parse)

    def parse_product(self, response):
        """Parse individual product pages"""
        title = response.meta['title']
        price = response.meta['price']
        product_url = response.meta['url']

        # Extract image URL
        image_url = response.css('div[data-product-photos] img::attr(data-photoswipe-src)').get()
        if not image_url:
            image_url = response.css('img.product-featured-media::attr(src)').get()

        if image_url and image_url.startswith('//'):
            image_url = 'https:' + image_url

        product_data = {
            'name': title,
            'price': price,
            'image': image_url,
            'url': product_url,
            'store': 'Fitted Shop',
        }

        # Upsert to MongoDB
        self.upsert_product(product_data)

    def upsert_product(self, product_data):
        """Insert or update product in MongoDB"""
        try:
            self.collection.update_one(
                {'url': product_data['url']}, {'$set': product_data}, upsert=True
            )
            self.log(f"Upserted product: {product_data['name']}", level=logging.INFO)
        except Exception as e:
            self.log(f"Error upserting product: {e}", level=logging.ERROR)

    def closed(self, reason):
        """Close MongoDB connection when spider finishes"""
        self.client.close()
