from uuid import uuid4
from pydantic import BaseModel
import datetime


class Product(BaseModel):
    id: str = uuid4()
    product_name: str
    description: str
    quantity_available: int = 1
    upload_time = str(datetime.datetime.now())
    contact_info: str
