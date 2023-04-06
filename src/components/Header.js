import React from "react";
import {useSelector} from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "/Users/therendysuffren/Desktop/UDEMY COURSE 2023/shopmate2/src/images/bag-heart.svg";
import "./Header.css";
const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="shopmate logo" />
        <span>REDUX Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart {cartList.length}</span>
      </Link>
    </header>
  );
};

export default Header;
