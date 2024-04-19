import Emptycart from "./Emptycart"; // Assuming Emptycart is defined elsewhere
import BagItems from "./bagItems";

function BagLogic() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  console.log("Bag Items:", bagItems);
  console.log("All Items:", items);

  const finalItems = items.filter((item) => bagItems.includes(item.id));
  console.log("Final Item IDs:", finalItems.map(item => item.id));


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
  );
}

export default BagLogic;
