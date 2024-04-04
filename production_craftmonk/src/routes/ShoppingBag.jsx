import { useDispatch, useSelector } from "react-redux";
import BagItems from "../Components/bagItems";
import BagSummary from "../Components/summary";
import Emptycart from "../Components/Emptycart";
import Login from "./Login";
import { bagSliceActions } from "../store/bagSlice";

function ShoppingBag() {
  const dispatch=useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));
  const length = bagItems.length;
  console.log("HERE", typeof(finalItems))
  
  // Get the authentication state from Redux store
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  function handleClearCart (){
dispatch(bagSliceActions.clearCart());
  }
  
 

  return (
    isAuthenticated ? (
      bagItems.length === 0 ? (
        <Emptycart />
      ) : (
        <div className="bag-page">
          <div className="bag-item-container">
            {finalItems.map((item) => (
              <BagItems key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )
    ) : (
      <Login />
    )
  );
}
//ad
export default ShoppingBag;
