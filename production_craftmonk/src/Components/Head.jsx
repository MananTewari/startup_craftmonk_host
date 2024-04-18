import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg head py-0">
        <div className="container justify-content-center">
          <div className="container">
            <Link to="/aipan" className="nav-link">
              <div className="navbar-brand">
                <h1 className="aipan">CraftMonk's exclusive Aipan's</h1>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Head;
