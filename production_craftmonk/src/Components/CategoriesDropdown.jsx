import React, { useState } from 'react';

const CategoriesDropdown = ({ data, handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  return (
    <>
      <label htmlFor="category">Select a Category:</label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        <option value="">-- Select --</option>
        {data.map((item, index) => (
          <option key={index} value={item.cateName}>
            {item.cateName}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoriesDropdown;
