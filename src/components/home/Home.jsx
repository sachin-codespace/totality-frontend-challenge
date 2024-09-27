import React, { useState } from "react";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import Header from "../header/Header";
import Checkout from "../checkout/Checkout"; 

const Home = () => {
  const [filters, setFilters] = useState({ location: "", priceRange: "", bhk: "" });
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const addToCart = (property) => {
    const existingItem = cartItems.find(item => item.id === property.id);
    if (existingItem) {
      alert("This property is already in your list.");
    } else {
      setCartItems([...cartItems, property]);
    }
  };

  const removeFromCart = (propertyId) => {
    setCartItems(cartItems.filter(item => item.id !== propertyId));
  };

  return (
    <>
      <Header cartItems={cartItems} onCheckout={() => setShowCheckout(true)} />
      {showCheckout ? (
        <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
      ) : (
        <>
          <Hero onFilterChange={handleFilterChange} />
          <Recent filters={filters} addToCart={addToCart} />
        </>
      )}
    </>
  );
};

export default Home;
