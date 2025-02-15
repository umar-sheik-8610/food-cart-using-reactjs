import { useState } from "react";
import data from "../products.json";
import { Product } from "./Product";
import "./Home.css";

export const Home = () => {
  const [products] = useState(data);
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-container" key={product.id}>
          <Product key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};
