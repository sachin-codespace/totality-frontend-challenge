import React, { useState } from "react";
import "./hero.css";

const Hero = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bhk, setBhk] = useState("");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ location: e.target.value, priceRange, bhk });
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
    onFilterChange({ location, priceRange: e.target.value, bhk });
  };

  const handleBhkChange = (e) => {
    setBhk(e.target.value);
    onFilterChange({ location, priceRange, bhk: e.target.value });
  };

  return (
    <section className='hero'>
      <div className='container-hero'>
        <div className='heading'>
          <h1>Search Your Next Home</h1>
          <p>Find new & featured property located in your local city.</p>
        </div>
        <form className='flex'>
          <div className='box'>
            <span>Location</span>
            <input
              type='text'
              placeholder='Enter Location'
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className='box'>
            <span>Price Range</span>
            <select value={priceRange} onChange={handlePriceRangeChange}>
              <option value="">Select Price Range</option>
              <option value="2000 - 5000">2000 - 5000</option>
              <option value="5000 - 10000">5000 - 10000</option>
              <option value="10000 - 15000">10000 - 15000</option>
            </select>
          </div>
          <div className='box'>
            <span>Bedrooms</span>
            <select value={bhk} onChange={handleBhkChange}>
              <option value="">Select BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
