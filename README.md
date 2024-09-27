---

# Property Rental Platform

This project is a property rental platform developed using React, which includes property listings, booking management, and a checkout system. The platform is responsive, providing an optimal user experience across various devices.

### [Live Demo](https://proprent-task.netlify.app/)

---

## Project Overview

The objective of this project is to develop a fully responsive website that mimics a property rental platform. Users can view properties, filter them by location, price range, and BHK, add properties to the cart, and proceed through the checkout process. The project was deployed on Netlify.

---

## Features

### 1. **Property Listings**
- Display a variety of properties with images, names, locations, price per square foot, and BHK information.
- Users can filter properties by:
  - Location
  - Price Range
  - BHK (Bedrooms)
  
### 2. **Booking Management**
- Users can add properties to their cart by clicking the "Book Now" button.
- The cart dynamically updates as users add or remove properties.
- Real-time cart total and property count displayed in the header.
  
### 3. **Checkout Process**
- Users can view their cart items and proceed to checkout.
- Checkout screen calculates total cost based on selected properties.
  
### 4. **Responsive Design**
- Fully responsive layout for desktop, tablet, and mobile.
- On smaller screens, the property cards adjust to show fewer properties per row.

---

## Tech Stack

- **Frontend:** React.js, CSS (custom styling)
- **Deployment:** Netlify
- **Icons:** Font Awesome
- **State Management:** React Hooks 

---

## Approach

1. **Component-based Design:** 
   - Divided the app into reusable components for modularity and ease of maintenance (e.g., Hero, Recent, RecentCard, Header, and Checkout).
   
2. **State Management:** 
   - Managed filter and cart states using `useState` hooks, ensuring real-time updates and dynamic rendering of the UI.

3. **Responsive Layout:** 
   - Used CSS media queries to ensure proper layout scaling on different screen sizes.
   
4. **Dynamic Cart and Checkout:** 
   - Implemented dynamic functionality for booking management, with features like adding/removing properties from the cart and updating the checkout page in real- 
     time.

---

## How to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/sachin-codespace/totality-frontend-challenge.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

---

## Deployment

The project is deployed on [Netlify](https://proprent-task.netlify.app/) for live access.

---

## Additional Notes

- The project includes a responsive layout for smaller devices (tablets and mobile).
- Filters are applied in real-time as users change the search criteria.
- Booking management is dynamic, with a clean checkout process.
  
Feel free to explore the project through the live demo link!

---
