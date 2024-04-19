import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import BagItems from "../Components/bagItems";
import EmptyCart from "../Components/Emptycart";
import BagSummary from "../Components/summary";


function ShoppingBag() {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const bagItemIds = bagItems.map((item) => item.id);
  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  // Update finalItems to include quantity from bagItems
  const finalItemsWithQuantity = finalItems.map((item) => ({
    ...item,
    quantity: bagItems.find((bagItem) => bagItem.id === item.id)?.quantity || 0,
  }));

  // Get the authentication state from Redux store
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  console.log("login hai ki nahi", isAuthenticated);

  function handleClearCart() {
    dispatch(bagSliceActions.clearCart());
  }

  return isAuthenticated ? (
    bagItems.length === 0 ? (
      <EmptyCart />
    ) : (
      <div className="bag-page">
        <div className="bag-item-container">
          {finalItemsWithQuantity.map((item) => (
            <BagItems key={item.id} item={item} />
          ))}
        </div>
        <BagSummary/>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    )
  ) : (
  <Link to="/login">
    <button>Login</button>
  </Link>
  );
}

export default ShoppingBag;  