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
    <div className="col-md-3 col-sm-6 mb-4"> {/* Add mb-4 for bottom margin */}
      <div className="card h-100">
        <img src={item.image} className="card-img-top" alt="item image" />
        <div className="card-body">
          <h5 className="card-title">{item.item_name}</h5>
          <p className="card-text">{item.company}</p>
          <p className="card-text">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </p>
        </div>
        <div className="card-footer">
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
