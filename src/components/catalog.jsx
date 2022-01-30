import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import React, { useEffect, useState } from "react";

const Catalog = () => {
  // state vars are IN MUTABLES
  let [products, setProducts] = useState([]);

  const loadCatalog = async () => {
    
    let service = new DataService();
    let data = await service.getCatalog();
    setProducts(data);
    console.log("Retrieved", data);
  };

  // hook to do something when the component is rendered the first time (only)
  useEffect(() => {
    // do this when the component loads
    loadCatalog();
   },[]);  // [] = dependencies, when a dependcy chnage, run the fn again.

  return (
    <div className="catalog">
      <h1>Here's The Heat For Your Feet</h1>
      <h3>We have {products.length} sneakers to choice from.</h3>

      {products.map((prod) => (
      <Product key={prod.id} info={prod}></Product>
      ))}
    </div>
  );
};

export default Catalog;
