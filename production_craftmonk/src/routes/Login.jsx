import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log(response.data.message);
      dispatch(authSliceActions.login());
      // Handle successful login, e.g., store user data in localStorage, redirect, etc.
      // Here you can handle issuing a session-based token
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setError(error.response.data.message); // Set the error message
    }
  };

  const handleLogoutmain = (e) => {
    e.preventDefault();
    console.log("logout");
    dispatch(authSliceActions.logout());
  };

  return (
    <>
  
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-header">Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div style={{ color: "red" }}>{error}</div>}{" "}
              {/* Display error message */}
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                id="remember"
                className="form-check-input"
              />
              <label htmlFor="remember" className="form-check-label">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-3d"
            >
              Login
            </button>
          </form>
          <div className="login-options">
            <button
              className="btn btn-secondary btn-block btn-3d"
              onClick={handleLogoutmain}
            >
              <i className="fab fa-google"></i>LOGOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
