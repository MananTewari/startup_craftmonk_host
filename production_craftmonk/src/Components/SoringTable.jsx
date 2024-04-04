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

  const handleLowSort = () => {
    dispatch(itemAction.sortItemsByLowPrice());
    console.log("sort low called");
  };
  const handleHighSort=()=>{
    dispatch(itemAction.sortItemsByHighPrice());
    console.log("sort high called");
  };


  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={dropdownOpen ? 'true' : 'false'}
      >
        Sort By: Price
      </button>
      <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
        <li>
          <a className="dropdown-item" href="#" onClick={handleLowSort}>
            Low to High
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={handleHighSort}>
           High to Low
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SortingTable;
