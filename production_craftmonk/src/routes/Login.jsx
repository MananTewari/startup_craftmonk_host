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
    <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">
              {loggedInUser ? "User Profile" : "Login"}
            </h2>
            <div className="login-container">
              {loggedInUser ? (
                // Render user profile if logged in
                <div className="text-center">
                  <img
                    src={"data:image/jpeg;base64,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"}
                    alt="Profile"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
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
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
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
                  <Link to="/register">
                    <button type="button" className="btn btn-secondary btn-block mt-3">
                      Register
                    </button>
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