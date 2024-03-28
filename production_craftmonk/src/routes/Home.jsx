
import Banners from "../Components/Banners";
import ItemsCreater from "../Components/createItems";
import { useSelector } from "react-redux";

function Home() {
    const items = useSelector((store) => store.items); // Selecting 'items' from the store
console.log(items);

const itemsArray = Object.values(items);
console.log(itemsArray);
return (
  <main>
    <div>
    
    <Banners/>
      <div className="items-container">
        {itemsArray.map((item) => (
          <ItemsCreater key={item.key} item={item} />
        ))}
      </div>
    </div>
  </main>
);

}

export default Home;
