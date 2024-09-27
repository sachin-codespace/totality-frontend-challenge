import React from "react";
import "./Header.css";

const Header = ({ cartItems, onCheckout }) => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <a href="/">PropRent</a>
        </div>
        <h4 onClick={onCheckout}>
          <span>{cartItems.length}</span> My List
        </h4>
      </div>
    </header>
  );
};

export default Header;
