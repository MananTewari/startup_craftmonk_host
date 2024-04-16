import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store/authSlice";
import { Link } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store logged-in user data
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse/expand of the login form
  const dispatch = useDispatch();

  useEffect(() => {
    // Set a timer to open the login form after 15 seconds if the user is not logged in
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20);
    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log(response.data.message);
      dispatch(authSliceActions.login());

      setLoggedInUser(response.data.user); // Store logged-in user data in state

      // Store logged-in user data in local storage
      localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  // Function to handle closing the login form
  const handleClose = () => {
    setIsOpen(false);
    console.log("closed From");
  };

  return (
    <>
      {isOpen && (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <div className="login-container d-flex justify-content-between">
            <div className="image-container">
              <img
                src="https://i.pinimg.com/originals/34/b0/d5/34b0d5b16c64587f2bf8e340267adf59.jpg"
                alt="CraftMonk Image"
                className="img-fluid login-image" // Changed class name to 'login-image'
              />
            </div>

            <div className="login-form-container"> {/* Changed class name to 'login-form-container' */}
              <div className="close-icon" onClick={handleClose}>
                <h1>X</h1>
              </div>
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <Link to="/register">
               <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
               </Link> 
              {error && <div className="text-danger">{error}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
