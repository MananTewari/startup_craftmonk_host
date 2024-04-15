import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemsCreater from "../Components/createItems";
import SortingTable from "../Components/SoringTable";
import SlideCard from "../Components/Slider";
import ItemCarousel from "../Components/itemsCarousel";
import Uttarakhand from "../Components/Uttarakhand";
import CollapsibleRegistration from "../Components/CollapsibleRegistration";

function Home() {
  const items = useSelector((store) => store.items);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated); // Get authentication state
  const [shouldRenderRegistration, setShouldRenderRegistration] = useState(false);

  useEffect(() => {
    // Check if the user has previously logged in
    const storedUser = localStorage.getItem("loggedInUser");
    const isLoggedIn = !!storedUser; // Convert storedUser to boolean
    // If not logged in, set the flag to render the registration form
    setShouldRenderRegistration(!isLoggedIn);
  }, []);

  return (
    <main>
      <div>
        <SlideCard />
        {/* Render the registration form if user is not authenticated */}
        {shouldRenderRegistration && <CollapsibleRegistration />} 
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
