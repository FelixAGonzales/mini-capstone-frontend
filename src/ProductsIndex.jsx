export function ProductsIndex({products}) {
  return (
    <div>
      <h1>All products</h1>
      {products.map((product) => (
      <div key={product.id}>
        <h2> {product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.tax}</p>
        <p>{product.total}</p>
      </div>
      ))}
    </div>
  );
}