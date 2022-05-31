import { useState } from "react"
import { Flex } from "./styles/Flex";
import { StyledProductForm } from "./styles/ProductForm.styled"
import { v4 as uuidv4 } from 'uuid';

const ProductAddForm = () => {
  const [product_name, setProductName] = useState("");
  const [description , setDescription ] = useState("");
  const [contact_info , setContactInfo ] = useState("");
  const [quantity_available , setQuantityAvailable ] = useState("");
  const upload_time = new Date().toISOString().split('T')[0];
  const id = uuidv4();
  const [isPanding, setISPanding] = useState(false);
  
  const onSubmit = (e) => {
    const product = {product_name, description, quantity_available, contact_info, upload_time, id};
    fetch("http://localhost:8001/product",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(product)
    }).then(() => {
    console.log("Product added succesfully");
    setISPanding(false);
    })
  }

  return (
    <StyledProductForm className="ProductAddForm">
      <Flex>
        <div className="formControl">
            <label>Name </label>
            <input
              type="text"
              placeholder="Product Name"
              required
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
            ></input>
        </div>
        <div className="formControl">
            <label>Description </label>
            <input 
              type="text"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
        </div>
        <div className="formControl">
            <label>Quantity </label>
            <input 
              type="number"
              placeholder="Quantity Available"
              required
              value={quantity_available}
              onChange={(e) => setQuantityAvailable(e.target.value)}
            ></input>
        </div>
        <div className="formControl">
            <label>Contact </label>
            <input 
              type="text"
              placeholder="Contact Info"
              required
              value={contact_info}
              onChange={(e) => setContactInfo(e.target.value)}
            ></input>
        </div>
        
        {!isPanding && <input type="submit" placeholder="Add Product" value="Add Product" onClick={onSubmit}></input>}
        {isPanding && <input disabled type="submit" value="Adding product..."></input>}
        </Flex>
    </StyledProductForm>
  )
}

export default ProductAddForm