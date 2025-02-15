import React from "react";
import "./product.css";

import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const name =
    product.name > 20 ? product.name.slice(0, 20) + "..." : product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name}></img>
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs : {product.amt}</p>
        {cart.includes(product) ? (
          <button className="btn-remove" onClick={removeCart}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
