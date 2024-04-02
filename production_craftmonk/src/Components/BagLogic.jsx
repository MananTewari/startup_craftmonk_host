import { useSelector } from "react-redux";
import BagItems from "./bagItems";

function BagLogic() {

  const bagItems = useSelector((state) => state.bag);
const items = useSelector((state) => state.items);
const finalItems = items.filter((item) => bagItems.includes(item.id));

   return (
    
      <>
        {bagItems.length === 0 ? (
          <Emptycart />
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
    )}

export default BagLogic;