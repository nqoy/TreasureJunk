import asyncio

from productClass import Product

# MongoDB driver
import motor.motor_asyncio

cluster = "mongodb+srv://user:1234@cluster0.hfg0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(cluster)
# to use the same loop - needed for the tests
client.get_io_loop = asyncio.get_running_loop
database = client.TreasureJunk
collection = database.Products


async def fetch_one_product_by_name(i_product_name):
    document = await collection.find_one({"product_name": i_product_name})
    return document


async def fetch_one_product_by_id(i_product_id):
    document = await collection.find_one({"id": i_product_id})
    return document


async def fetch_all_products():
    products_list = []
    curser = collection.find({})
    async for document in curser:
        products_list.append(Product(**document))
    return products_list


async def create_product(i_product):
    document = i_product
    insert_action = collection.insert_one(document)
    return document


async def update_product_quantity(i_product_name, i_product_quantity):
    await collection.update_one({"product_name": i_product_name},
                                {"$set": {"quantity_available": i_product_quantity}})
    document = await collection.find_one({"product_name": i_product_name})
    return document


async def update_product_description(i_product_name, i_product_description):
    await collection.update_one({"product_name": i_product_name},
                                {"$set": {"description": i_product_description}})
    document = await collection.find_one({"product_name": i_product_name})
    return document


async def remove_product(i_product_id):
    response = await collection.delete_one({"id": i_product_id})
    return True
