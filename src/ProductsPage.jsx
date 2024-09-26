import { ProductsIndex } from "./ProductsIndex"

export function ProductsPage() {
  const products = [{
    id: 1, name: "xbox", price: 150, description: "made by MS", tax: 10, total: 160 
  }, {
    id: 1, name: "xbox", price: 150, description: "made by MS", tax: 10, total: 160 
  },
];



  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProductsIndex products={products}/>
    </main>
  )
}