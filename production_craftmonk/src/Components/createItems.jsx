import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ItemsCreater({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleBagSubmit = () => {
    console.log("Adding item to bag with ID:", item.id, "and quantity:", quantity);
    dispatch(bagSliceActions.addToBag({ id: item.id, quantity }));
  };
  
  const handleBagRemove = () => {
    console.log("Removing item from bag with ID:", item.id);
    dispatch(bagSliceActions.deleteFromBag(item.id));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="product-tile">
        <div className="product-image-container">
          <img src={item.image} className="product-image" alt="item image" />
        </div>
        <div className="product-details">
          <h5 className="product-title">{item.item_name}</h5>
          <p className="product-company">{item.company}</p>
          <p className="product-price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </p>
        </div>
        <div className="product-overlay">
          {bagItems.some(bagItem => bagItem.id === item.id) ? (
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
      <>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
              />
              </>
    </div>
  );
}

export default ItemsCreater;
