import { FaUserAlt } from "react-icons/fa";
import { PiSmileyWinkFill } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import Head from "./Head";

function Header() {
  const bag = useSelector((store) => store.bag);
  function checkClick() {
    console.log("clicked");
  }

  return (
    <div>
  
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src={`${process.env.PUBLIC_URL}/images/logo_brand.png`}
              alt="Craftmonk"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Home & Living</Link>
          <Link to="/regions">Regions</Link>
          <Link to="/studio">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <CiSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link className="action_container" to="/Login">
            <div className="action_container">
              <FaUserAlt />
              <span className="action_name">Profile</span>
            </div>
          </Link>

          <Link
            className="action_container"
            to="/ShoppingBag"
            onClick={checkClick}
          >
            <IoBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
