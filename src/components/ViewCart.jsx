import React from "react";
import { useState, useEffect } from "react";
import "./ViewCart.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const ViewCart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.amt, 0));
  }, [cart]);

  return (
    <>
      <h1 className="c-head">Cart Products</h1>
      <div className="cart-container">
        {cart.length === 0 && <h2 className="c-empty">Cart is Empty...</h2>}
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name}></img>
            </div>
            <div className="details">
              <h3>{product.name}</h3>
              <p>Price Rs : {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="c-amount">Total Amount Rs: {total}</h2>
    </>
  );
};
