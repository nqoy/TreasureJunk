import { StyledProduct } from "./styles/Product.styled"

const Product = ({product}) => {
  return (
    <StyledProduct className="product">
        <h2>{product.product_name}</h2>
        <p>Description: {product.description}</p>
        <p>Quantity Available: {product.quantity_available}</p>
        <p>Upload Time: {product.upload_time}</p>
        <p>ID: {product.id}</p> 
    </StyledProduct>
  )
}

export default Product