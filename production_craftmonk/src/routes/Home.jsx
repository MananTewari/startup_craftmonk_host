import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemsCreater from "../Components/createItems";
import SortingTable from "../Components/SoringTable";
import SlideCard from "../Components/Slider";
import ItemCarousel from "../Components/itemsCarousel";
import Uttarakhand from "../Components/Uttarakhand";
import CollapsibleRegistration from "../Components/CollapsibleRegistration";
import LoadingState from "../Components/LoadingState"; // Import your LoadingState component

function Home() {
  const items = useSelector((store) => store.items);
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated); // Get authentication state
  const [shouldRenderRegistration, setShouldRenderRegistration] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    // Check if the user has previously logged in
    const storedUser = localStorage.getItem("loggedInUser");
    const isLoggedIn = !!storedUser; // Convert storedUser to boolean
    // If not logged in, set the flag to render the registration form
    setShouldRenderRegistration(!isLoggedIn);
  }, []);

  useEffect(() => {
    // Set loading to true when fetch starts
    setLoading(fetchStatus.fetchingStarted);
    // Reset loading state when fetch is done
    if (fetchStatus.fetchDone) {
      // Set loading to false after 5 seconds
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 12000); // 5000 milliseconds = 5 seconds

      // Clear the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [fetchStatus]);

  return (
    <main>
      <div>
        <SlideCard />
        {/* Render the registration form if user is not authenticated */}
        {shouldRenderRegistration && <CollapsibleRegistration />} 
        <ItemCarousel />
        <Uttarakhand />
        <SortingTable />
        {loading ? (
          <LoadingState />
        ) : (
          <div className="items-container">
            {Object.values(items).map((item) => (
              <ItemsCreater key={item.key} item={item} fetched={fetched}/>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
