import { useState } from "react"
import { Flex } from "./styles/Flex";
import { StyledProductForm } from "./styles/ProductForm.styled"

const ProductDeleteForm = () => {
  const [id, setId] = useState("");
  const [isPanding, setISPanding] = useState(false);
  
  const onSubmit = (e) => {
    const url = "http://localhost:8001/product/remove/" + id;
    fetch(url,{
      method: "DELETE",
      headers: { "Content-Type": "application/json"},
    }).then(() => {
    console.log("Product deleted succesfully");
    setISPanding(false);
    })
  }

  return (
    <StyledProductForm className="ProductDeleteForm">
      <Flex>
        <div className="formControl">
            <label>ID </label>
            <input
              type="text"
              placeholder="Product ID"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
        </div>

        {!isPanding && <input type="submit" value="Delete Product" onClick={onSubmit}></input>}
        {isPanding && <input disabled type="submit" value="Removing Product..."></input>}
        </Flex>
    </StyledProductForm>
  )
}

export default ProductDeleteForm