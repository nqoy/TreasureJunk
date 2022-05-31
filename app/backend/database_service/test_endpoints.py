import time
import pytest
from fastapi.testclient import TestClient
from productClass import Product
from main import app

client = TestClient(app)

test_product = Product(
    product_name="pytest",
    description="new test product",
    quantity_available=4,
    contact_info="mail.com"

)

test_product_json_data = {
    "id": f"{test_product.id}",
    "product_name": f"{test_product.product_name}",
    "description": f"{test_product.description}",
    "quantity_available": test_product.quantity_available,
    "upload_time": test_product.upload_time,
    "contact_info": f"{test_product.contact_info}"
}


def test_new_product():
    assert test_product.id


def test_get_home():
    response = client.get("/")
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_post_product():
    response = client.post("http://Treasurejunk:8001/product", json=test_product_json_data)
    assert response.status_code == 200
    assert response.json() == test_product_json_data
    time.sleep(1)


@pytest.mark.asyncio
async def test_get_product_by_name():
    response = client.get(f"http://Treasurejunk:8001/product/name/{test_product.product_name}")
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_get_product_by_id():
    response = client.get(f"http://Treasurejunk:8001/product/id/{test_product.id}")
    assert response.status_code == 200


@pytest.mark.asyncio
async def test_get_all_products():
    response = client.get("/products")
    assert response.status_code == 200
    assert test_product_json_data in response.json()


@pytest.mark.asyncio
async def test_update_product_description():
    response = client.put(f"http://Treasurejunk:8001/product/update/{test_product.product_name}/description?i_product_description=Updated")
    assert response.status_code == 200
    assert response.json() == f"{test_product.product_name} description updated successfully"


@pytest.mark.asyncio
async def test_update_product_quantity():
    response = client.put(f"http://Treasurejunk:8001/product/update/{test_product.product_name}/quantity?i_product_quantity=10")
    assert response.status_code == 200
    assert response.json() == f"{test_product.product_name} quantity updated successfully"


@pytest.mark.asyncio
async def test_delete_product():
    response = client.delete(f"http://Treasurejunk:8001/product/remove/{test_product.product_name}")
    assert response.status_code == 200
    assert response.json() == f"{test_product.product_name} removed successfully"
