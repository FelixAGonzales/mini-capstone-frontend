export function ProductsShow({ product }) {
  return (
    <div>
      <h1>product information</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Tax: {product.tax}</p>
      <p>Total: {product.total}</p>
      
    </div>
  );
}