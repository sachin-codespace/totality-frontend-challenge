Totality Frontend Challenge

Project Overview
This project is a property rental platform developed using React. It features property listings, booking management, and a responsive design. The platform allows users to view and filter properties, add properties to a booking cart, and proceed to checkout with a dynamic cart system.

Features
1. Property Listings
Display a variety of properties with images, titles, descriptions, and prices.
Each property has a "Book Now" button for easy booking.
Implemented filters for sorting properties by:
    Location
    Price Range
    Number of Bedrooms

2. Booking Management
Users can book properties and manage their bookings in a cart.
Real-time updates for booked properties, including total price and number of bookings.
Users can increase, decrease, or remove booked properties from the cart.

3. Checkout Process
The cart shows a summary of booked properties and total cost.
Users can enter their booking details and proceed to checkout.
A responsive, user-friendly design ensures a smooth checkout process.

4. Responsive Design
The platform is fully responsive, providing an optimal experience across all devices.
The layout adapts to different screen sizes, ensuring ease of use on mobile and desktop.

Tech Stack
Frontend: React.js
Styling: CSS (with media queries for responsive design)
State Management: React Hooks
Data: Static data for property listings (stored in data.js file)

Approach
Modular Structure: The application is divided into reusable components like Header, Hero, Recent, and Checkout, ensuring scalability.
Dynamic Filters: Implemented real-time filtering based on location, price, and number of bedrooms.
Cart Management: Managed state to handle booking operations such as adding, removing, and updating properties in the cart.
Checkout Integration: Simulated a checkout process, calculating the total price and displaying the booked properties.
