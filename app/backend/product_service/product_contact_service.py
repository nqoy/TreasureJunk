from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import requests

app = FastAPI()

# linking 2 ports to have communication for frontend
origins = ['httpsL//localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], )


@app.post("/product")
async def create_product_interest(i_product_name: str):
    response = requests.get(f"http://treasurejunk:8001/product/{i_product_name}")
    if response:
        return response.json()
    raise HTTPException(404, f"{i_product_name} not found in database")
