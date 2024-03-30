import { useSelector } from "react-redux";
import BagItems from "../Components/bagItems";
import BagSummary from "../Components/summary";
import Emptycart from "../Components/Emptycart";

function ShoppingBag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));
  const length = bagItems.length;
  return (
    <>
      {bagItems.length === 0 ? (
       <Emptycart/>
      ) : (
        <div className="bag-page">
          <div className="bag-item-container">
            {finalItems.map((item) => (
              <BagItems key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      )}
    </>
  );
}
export default ShoppingBag;
