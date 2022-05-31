# TreasureJunk

OOP driven and TDD of Microservises app, Treasurejunk.<br />
The project came to be as i cleaned for passover, there are many items that are not needed and better of in the garbage then wasting space.. but one person's junk is another's treasure.<br />
<br />
This project can offer to all the people who wish to throw away items but dont want to sell them or have the time to, or the items are too many/heavy and big to move around without hiring an expensive service, with the app you just need to upload the item and someone will contact you to get it out of your life.<br />


### Diagram:
![TreasureJunk drawio](https://github.com/EASS-HIT-2022/EASS-HIT-2022-NoyBenbenishty-Ex2/blob/master/TreasureJunkFront.drawio.png)


### Build & Run:
1. Clone the project repository from git: `git clone <git-repository-url>` or `GitHub CLI`
2. In app directory, Run docker-copmose: `docker-compose up -d`
3. Visit http://localhost:3000/ and use the app.

## Frontend:
Using JavaScript with React to build an interactive application.

### The app:
![Front](https://github.com/EASS-HIT-2022/EASS-HIT-2022-NoyBenbenishty-Ex2/blob/master/Front.png)

### Tests:
1. Enter the container: `docker exec -it react /bin/sh`
2. Start the tests: `npm test`
3. Expected output:
````

Test Suites: 7 passed, 7 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        4.286 s
Ran all test suites.

Watch Usage: Press w to show more.
````

## Backend:
Using Python with Fastapi and Mongodb cluster as the database.

### Fastapi Docs:
<img width="420" alt="image" src="https://user-images.githubusercontent.com/93088356/165307172-49bb3b5f-b0b7-4c60-ad2e-79edec4d2796.png">

### MongoDB:
<img width="297" alt="image" src="https://user-images.githubusercontent.com/93088356/165307028-2ec0ff37-1d17-4ab9-b053-eeaad7da21f0.png">

### Tests:
1. Enter the container: `docker exec -it treasurejunk /bin/sh`
2. Start the tests: `pytest -s -v test_endpoints.py`
3. Expected output:
````
test_endpoints.py::test_new_product PASSED
test_endpoints.py::test_get_home PASSED
test_endpoints.py::test_post_product PASSED
test_endpoints.py::test_get_product_by_name PASSED
test_endpoints.py::test_get_product_by_id PASSED
test_endpoints.py::test_get_all_products PASSED
test_endpoints.py::test_update_product_description PASSED
test_endpoints.py::test_update_product_quantity PASSED
test_endpoints.py::test_delete_product PASSED
========================================================== 9 passed, 1 warning in 3.95s =================================================================
````






