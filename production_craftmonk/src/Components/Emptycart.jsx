import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  const emptyCartStyles = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '20vh auto'
  };

  const headingStyles = {
    fontSize: '24px',
    marginBottom: '10px'
  };

  const shopNowButtonStyles = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={emptyCartStyles} className="emptycart">
      <h1 style={headingStyles}>Nothing Here</h1>
      <h2>Shop Now</h2>
      <Link to="/">
      <button style={shopNowButtonStyles}>Shop Now</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
