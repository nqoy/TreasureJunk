FROM python:3.9-slim

COPY ./main.py .
COPY ./productClass.py .
COPY ./mongo_database.py .
COPY ./test_endpoints.py .
COPY ./app_requirements.txt .

WORKDIR .

Run pip install -r app_requirements.txt

EXPOSE 8001

CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--reload", "--port", "8001"]