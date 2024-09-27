import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductShow";

export function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductShowVisible] = useState (false);
  const [CurrentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/products.json").then( response => {
      setProducts(response.data);
    });
  };

  const handleCreate = (params, refreshProducts) => {
    axios.post("http://localhost:3000/products.json", params).then( response => { setProducts([...products, response.data]);
      refreshProducts();
    });
  };

  const handleShow = (product) => {
    setIsProductShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    setIsProductShowVisible(false);
  }


  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to Zamazon!</h1>
      <ProductsNew onCreate={handleCreate}/>
      <ProductsIndex products={products} onShow={handleShow}/>
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductsShow product={CurrentProduct}/>
      </Modal>
    </main>
  )
}