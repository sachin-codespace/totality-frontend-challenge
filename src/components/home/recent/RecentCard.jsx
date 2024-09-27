import React from "react";
import { list } from "../../data/Data";

const RecentCard = ({ filters, addToCart }) => {
  const filteredList = list.filter((property) => {
    const matchLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const priceRange = filters.priceRange.split(" - ");
    const matchPrice = priceRange.length === 2
      ? parseInt(property.price.replace("Rs. ", "").replace(",", "")) >= parseInt(priceRange[0]) &&
        parseInt(property.price.replace("Rs. ", "").replace(",", "")) <= parseInt(priceRange[1])
      : true;

    const matchBhk = filters.bhk ? property.bhk === filters.bhk : true;

    return matchLocation && matchPrice && matchBhk;
  });

  if (filteredList.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start',width:'100%' }}>
        <h2>No Properties Found</h2>
      </div>
    );
  }
  
  

  return (
    <div className='content'>
      {filteredList.map((val, index) => {
        const { cover, location, name, price, bhk } = val;
        return (
          <div className='box' key={index}>
            <div className='img'>
              <img src={cover} alt={name} />
            </div>
            <div className='text'>
              <h4>{name}</h4>
              <p><i className='fa fa-location-dot'></i> {location}</p>
              <p>{bhk} BHK</p>
              <div>{price} /sqft</div>
              <button onClick={() => addToCart(val)}>Book Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
