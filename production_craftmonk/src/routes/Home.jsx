import React from "react";
import { useSelector } from "react-redux";
// Import the CollapsibleRegistration component

import ItemsCreater from "../Components/createItems";

import SortingTable from "../Components/SoringTable";
import SlideCard from "../Components/Slider";
import ItemCarousel from "../Components/itemsCarousel";
import Uttarakhand from "../Components/Uttarakhand";
import CollapsibleRegistration from "../Components/CollapsibleRegistration";

function Home() {
  const items = useSelector((store) => store.items);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated); // Get authentication state
console.log(isAuthenticated, "demn");
  return (
    <main>{/* Render the registration form if user is not authenticated */}
      <div>
        <SlideCard />
        {!isAuthenticated && <CollapsibleRegistration />} 
        <ItemCarousel />
        <Uttarakhand />
        <SortingTable />
        <div className="items-container">
          {Object.values(items).map((item) => (
            <ItemsCreater key={item.key} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
