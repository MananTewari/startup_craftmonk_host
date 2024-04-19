import { useSelector } from "react-redux";
import { useState } from "react";
import Checkout from "./Checkout";
import useDispatch from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const BagSummary = () => {
  
  const bagItemIds = useSelector((state) => state.bag);
  console.log(bagItemIds);
  const items = useSelector((state) => state.items);
console.log(items);
const bagItemIdsOnly = bagItemIds.map((item) => item.id);
const finalItems = items.filter((item) => bagItemIdsOnly.includes(item.id));

console.log(finalItems);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.reduce((acc, curr) => acc + curr.quantity, 0);
  let totalMRP = 0;
  let totalDiscount = 0;
  
  bagItemIds.forEach((bagItem) => {
    const item = finalItems.find((item) => item.id === bagItem.id);
    if (item) {
      totalMRP += item.original_price * bagItem.quantity;
      totalDiscount += (item.original_price - item.current_price) * bagItem.quantity;
    }
  });
  
  // Calculate final payment
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

  function placeOrder() {
    console.log("place order clicked");
    setOrderPlaced(true);
    

  }



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
