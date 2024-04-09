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

  const handleHighSort = () => {
    dispatch(itemAction.sortItemsByHighPrice());
    console.log("sort high called");
  };


  return (
    <div className="sort_container">
      <div className="dropdown" style={{ marginRight: 'auto' }}>
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
      <div className="grid_head">
        <h1 className="grid_head">All your culture, in one place.</h1>
      </div>
    </div>
  );
}

export default SortingTable;
