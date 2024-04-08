import { useSelector } from "react-redux";
import { useState } from "react";
import Checkout from "./Checkout";
import useDispatch from "react-redux";
import { Link } from "react-router-dom";

const BagSummary = () => {
  
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  const [orderPlaced, setOrderPlaced] = useState(false);

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  function placeOrder() {
    console.log("place order clicked");
    setOrderPlaced(true);
  

  }

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      {orderPlaced ? (
        <Checkout totalItem={totalItem} totalDiscount={totalDiscount} totalMRP={totalMRP}/>
      ) : (
        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Discount on MRP</span>
              <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">₹99</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{finalPayment}</span>
            </div>
          </div>
  <Link to="/Checkout">
          <button className="btn-add-bag" onClick={placeOrder}>
            PLACE ORDER
          </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default BagSummary;
