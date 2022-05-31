from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from productClass import Product
import mongo_database as database

app = FastAPI()

origins = ['http://localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], )


@app.get("/")
def get_root():
    return {"message": "Welcome to TreasureJunk"}


@app.get("/products")
async def get_all_products():
    response = await database.fetch_all_products()
    return response


@app.get("/product/name/{i_product_name}", response_model=Product)
async def get_product_by_name(i_product_name: str):
    response = await database.fetch_one_product_by_name(i_product_name)
    if response:
        return response
    raise HTTPException(404, f"{i_product_name} not found in database")


@app.get("/product/id/{i_product_id}", response_model=Product)
async def get_product_by_id(i_product_id: str):
    response = await database.fetch_one_product_by_id(i_product_id)
    if response:
        return response
    raise HTTPException(404, f"{i_product_id} not found in database")


@app.post("/product", response_model=Product)
async def post_product(i_product: Product):
    response = await database.create_product(i_product.dict())
    if response:
        return response
    raise HTTPException(400, f"{i_product} Creation request error")


@app.put("/product/update/{i_product_name}/quantity")
async def update_product_quantity(i_product_name: str, i_product_quantity: int):
    response = await database.update_product_quantity(i_product_name, i_product_quantity)
    if response:
        return f"{i_product_name} quantity updated successfully"
    raise HTTPException(404, f"{i_product_name} not found in database")


@app.put("/product/update/{i_product_name}/description")
async def update_product_description(i_product_name: str, i_product_description: str):
    response = await database.update_product_quantity(i_product_name, i_product_description)
    if response:
        return f"{i_product_name} description updated successfully"
    raise HTTPException(404, f"{i_product_name} not found in database")


@app.delete("/product/remove/{i_product_id}")
async def delete_product(i_product_id: str):
    response = await database.remove_product(i_product_id)
    if response:
        return f"{i_product_id} removed successfully"
    raise HTTPException(404, f"{i_product_id} not found in database")
