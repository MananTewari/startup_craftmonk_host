import { useDispatch, useSelector} from "react-redux";
import { bagSliceActions } from "../store/bagSlice";

function BagItems({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagSliceActions.deleteFromBag(item.id));
  };

  return (
    <div>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} alt={item.item_name} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              {item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by{" "}
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>

        <div className="quantity">Quantity: {item.quantity}</div> {/* Display quantity here */}
        <div className="remove-from-cart" onClick={handleRemoveItem}>
          X
        </div>
      </div>
    </div>
  );
}

export default BagItems;
