import React from "react";
import "./Recent.css";
import RecentCard from "./RecentCard";

const Recent = ({ filters, addToCart }) => {
  return (
    <section className='recent'>
      <div className='container recent-container'>
        <RecentCard filters={filters} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default Recent;
