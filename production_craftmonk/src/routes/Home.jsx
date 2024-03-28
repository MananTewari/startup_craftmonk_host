import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banners from "../Components/Banners";
import ItemsCreater from "../Components/createItems";



function Home() {

  const items = useSelector((store) => store.items);
  console.log("Home", items);
  console.log("home", typeof(items));
  const itemsArray=Object.values(items);

  return (
    <main>
      <div>
        <Banners />
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