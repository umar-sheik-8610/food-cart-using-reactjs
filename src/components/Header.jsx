import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import { CartContext } from "./CartContext";
import { useContext } from "react";

import "./Header.css";

export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="logo">Foot Cart</div>
      <ul>
        <li>
          <Link to={"/"}>
            <img src={homeIcon} alt="home" className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <img src={cartIcon} alt="cart" className="icon" />
            View Cart
            <span className="cart-count">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
