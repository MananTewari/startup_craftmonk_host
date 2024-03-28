import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice"; // Assuming you've exported only actions from bagSlice

function ItemsCreater({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleBagSubmit = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };

  const handleBagRemove = () => {
    dispatch(bagSliceActions.deleteFromBag(item.id));
  };

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button className="btn-red" onClick={handleBagRemove}>
            Delete From Bag
          </button>
        ) : (
          <button className="btn-green" onClick={handleBagSubmit}>
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemsCreater;
