import { useState } from "react"
import { Flex } from "./styles/Flex";
import { StyledProductForm } from "./styles/ProductForm.styled"

const ProductOwnerForm = () => {

  const [id, setId] = useState("");
  const [contact_info, setContact_info] = useState("");
  const [isPanding, setISPanding] = useState(false);
  

  //Fetch Products
  const fetchProductById = async () => {
    const url = "http://localhost:8001/product/id/" + id;
    const response = await fetch(url);
    const promise = response.json();
    console.log("Product fetched succesfully")
    return promise;
  }

  
  const onSubmit = (e) => {
    e.preventDefault();
    setContact_info("Getting Contact Info..")
    const promise = fetchProductById();
    promise.then(result => setContact_info(result["contact_info"])).catch(err => console.log(err));
    setISPanding(false);
  }

  return (
    <StyledProductForm className="ProductOwnerForm">
      <Flex>
        <div className="formControl">
            <label>ID </label>
            <input
              required
              type="text"
              placeholder="Product ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
        </div>

        {!isPanding && <input type="submit" value="Contact" placeholder="Get Contact" onClick={onSubmit}></input>}
        {isPanding && <input disabled type="submit" value="Getting Contact Info..."></input>}
        </Flex>

        <h4>
        {contact_info}
        </h4>

    </StyledProductForm>
  )
}

export default ProductOwnerForm