import { ProductsIndex } from "./ProductsIndex"
import axios from "axios";
import { useState, useEffect } from "react";

export function ProductsPage() {

  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/products.json").then( response => {
      setProducts(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to Zamazon!</h1>
      <ProductsIndex products={products}/>
    </main>
  )
}