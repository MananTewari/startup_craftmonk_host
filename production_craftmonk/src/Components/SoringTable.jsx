import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import itemSlice, { itemAction } from '../store/itemSlice';
// Importing action creator from itemSlice

function SortingTable() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSort = () => {
    dispatch(itemAction.sortItemsByPrice());
    console.log("sort called");
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={dropdownOpen ? 'true' : 'false'}
      >
        Sort By: Price(High To Low)
      </button>
      <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
        <li>
          <a className="dropdown-item" href="#" onClick={handleSort}>
            Low to High
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SortingTable;
