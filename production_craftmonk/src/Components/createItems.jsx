import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";

function ItemsCreater({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleBagSubmit = () => {
    dispatch(bagSliceActions.addToBag(item.id));
  };

  const handleBagRemove = () => {
    dispatch(bagSliceActions.deleteFromBag(item.id));
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="product-tile">
        <div className="product-image-container">
          <img
            src={item.image}
            className="product-image"
            alt="item image"
          />
        </div>
        <div className="product-details">
          <h5 className="product-title">{item.item_name}</h5>
          <p className="product-company">{item.company}</p>
          <p className="product-price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">
              ({item.discount_percentage}% OFF)
            </span>
          </p>
        </div>
        <div className="product-overlay">
          {elementFound ? (
            <button className="btn btn-danger" onClick={handleBagRemove}>
              Delete From Bag
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleBagSubmit}>
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemsCreater;
