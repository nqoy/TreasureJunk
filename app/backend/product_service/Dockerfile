FROM python:3.9-slim

COPY product_contact_service.py .
COPY product_contact_service_requirements.txt .

WORKDIR .

Run pip install -r product_contact_service_requirements.txt

CMD ["uvicorn", "product_contact_service:app", "--host=0.0.0.0", "--reload", "--port", "8000"]