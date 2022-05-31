
import React, {useState, useEffect} from  'react';
import axois from 'axios'

//components
import Header from './components/Header';
import Button from './components/Button';
import Products from './components/Products';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import { Flex } from './components/styles/Flex';
import ProductAddForm from './components/ProductAddForm';
import ProductDeleteForm from './components/ProductDeleteForm';
import ProductOwnerForm from './components/ProductOwnerForm';


function App() {

  //Set Products From Server
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }

    getProducts();
  }, [])

  //Fetch Products
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8001/products");
    const data = response.json();
    return data;
  }

  const [productsList, setProducts] = useState([])

  //Button Forms
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [showProductOwner, setShowProductOwner] = useState(false);

  return (
  <>
    <GlobalStyles />
      <Header 
      title="TreasureJunk"/>
      <Container className='Main'>
          <div className='Body'>
            <h1> 
              Rid Yourself Of Unwanted Items 
              or Find a Treasure
            </h1>
            <p>
              Add your unwanted items or search for items you would like,
              contact the owner and take your desired item 
            </p>
            <Flex>
              <Button 
              backgroundColor={!showAddProduct ? "black" : "Red"}
              text={!showAddProduct ? "Add Item" : "Close"}
              textColor="white"
              onClick={() => setShowAddProduct(!showAddProduct)}
              />
              <Button 
              backgroundColor={!showDeleteProduct ? "black" : "Red"}
              text={!showDeleteProduct ? "Delete Item" : "Close"}
              textColor="white"
              onClick={() => setShowDeleteProduct(!showDeleteProduct)}
              />
              <Button 
              backgroundColor={!showProductOwner ? "black" : "Red"}
              text={!showProductOwner ? "Contact Owner" : "Close"}
              textColor="white"
              onClick={() => setShowProductOwner(!showProductOwner)}
              />
            </Flex>
          </div>
          <div className='Buttons'>
          {showAddProduct && <ProductAddForm />}
          {showDeleteProduct && <ProductDeleteForm />}
          {showProductOwner && <ProductOwnerForm />}
          </div>
          <div className='Products'>
        <Products products={productsList}/>
        </div>
      </Container>
  </>
  );
}

export default App;
