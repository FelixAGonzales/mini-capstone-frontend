export function ProductsIndex({products, onShow}) {
  return (
    <div>
      <h1>All products</h1>
      {products.map((product) => (
      <div key={product.id}>
        <h2> Name: {product.name}</h2>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Tax: {product.tax}</p>
        <p>Total: {product.total}</p>
        <button onClick={ () => onShow(product)}> More Info </button>
      </div>
      ))}
    </div>
  );
}