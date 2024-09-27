import React, { useState } from "react";
import "./Checkout.css";

const Checkout = ({ cartItems, removeFromCart }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the booking and payment
    console.log("Booking Details:", bookingDetails);
    alert("Booking and payment submitted successfully!");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + parseInt(item.price.replace("Rs. ", "").replace(",", "")),
    0
  );

  return (
    <section className='checkout'>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='cart-items'>
          {cartItems.map((item) => (
            <div className='cart-item' key={item.id}>
              <h4>{item.name}</h4>
              <p>Location: {item.location}</p>
              <p>Price: {item.price}</p>
              <p>BHK: {item.bhk}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className='total'>
            <h3>Total Cost: Rs. {totalCost}</h3>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className='booking-details'>
          <h3>Enter Booking and Payment Details</h3>
          <form onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={bookingDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={bookingDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={bookingDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <h3>Payment Information</h3>
            <div className='form-group'>
              <label htmlFor='cardNumber'>Card Number:</label>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                value={bookingDetails.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='expirationDate'>Expiration Date:</label>
              <input
                type='text'
                id='expirationDate'
                name='expirationDate'
                placeholder='MM/YY'
                value={bookingDetails.expirationDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cvv'>CVV:</label>
              <input
                type='text'
                id='cvv'
                name='cvv'
                value={bookingDetails.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type='submit'>Submit Booking</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Checkout;
