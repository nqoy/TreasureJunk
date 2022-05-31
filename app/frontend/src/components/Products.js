import Product from "./Product"
const Products = ({products}) => {
    
  return (
    <>
    {products?.map((product) => (
    <Product className="products" key={product.id} product={product} />
    ))}
    </>
  )
}

export default Products