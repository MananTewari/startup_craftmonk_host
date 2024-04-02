import React, { useState } from 'react';

function SortingTable() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown} // Toggle the dropdown menu visibility
        aria-expanded={dropdownOpen ? 'true' : 'false'}
      >
        Sort By: Price(High To Low)
      </button>
      <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
        <li>
          <a className="dropdown-item" href="#">
           Low to High
          </a>
        </li>
     
      </ul>
    </div>
  );
}

export default SortingTable;
