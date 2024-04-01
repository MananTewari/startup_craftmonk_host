import React from "react";
import { useSelector } from "react-redux";
import Banners from "../Components/Banners";
import ItemsCreater from "../Components/createItems";
import Login from "./Login";

function Home() {
  // Get the authentication state from Redux store
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  // Assuming you also have 'items' in your Redux store
  const items = useSelector((store) => store.items);

  // Render Home component if user is authenticated, otherwise render Login component
  return isAuthenticated ? (
    <main>
      <div>
        <Banners />
        <div className="items-container">
          {Object.values(items).map((item) => (
            <ItemsCreater key={item.key} item={item} />
          ))}
        </div>
      </div>
    </main>
  ) : (
    <Login />
  );
}

export default Home;
