import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FetchItemsStatus from "./Components/fetchItems";
import Head from "./Components/Head";

function App() {
  return (  
  <div>
   
    <Header/>
   <FetchItemsStatus/>
    <Outlet/>
    <Footer/>
  </div>
  );
}

export default App;