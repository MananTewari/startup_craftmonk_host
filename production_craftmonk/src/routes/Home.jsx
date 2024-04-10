import React from "react";
import { useSelector } from "react-redux";
import Banners from "../Components/Banners";
import ItemsCreater from "../Components/createItems";
import Login from "./Login";
import SortingTable from "../Components/SoringTable";
import SlideCard from "../Components/Slider";
import ItemCarousel from "../Components/itemsCarousel";
import Uttarakhand from "../Components/Uttarakhand";

function Home() {

 

  const items = useSelector((store) => store.items);

  // Render Home component if user is authenticated, otherwise render Login component
  return  (
    <main>
      <div>
        <SlideCard/>
        <ItemCarousel/>
        <Uttarakhand/>
        <SortingTable/>
        <div className="items-container">
          {Object.values(items).map((item) => (
            <ItemsCreater key={item.key} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home;
