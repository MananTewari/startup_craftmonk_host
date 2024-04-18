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
  const dispatch = useDispatch();

  // Check for logged-in user data in local storage upon component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
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
  
  const handleLogout = () => {
    // Handle logout action, clear logged-in user data
    setLoggedInUser(null);
    dispatch(authSliceActions.logout());
    
    // Clear logged-in user data from local storage
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                {loggedInUser ? "User Profile" : "Login"}
              </h2>
              <div className="login-container">
                {loggedInUser ? (
                  // Render user profile if logged in
                  <div className="text-center">
                    <h4 className="mb-3">{loggedInUser.name}</h4>
                    <p>Email: {loggedInUser.email}</p>
                    <p>Phone Number: {loggedInUser.phoneNumber}</p>
                    <button className="btn btn-primary" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  // Render login form if not logged in
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {error && <div className="text-danger">{error}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <Link to="/register" className="btn btn-secondary btn-block mt-3">
                      Register
                    </Link>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
