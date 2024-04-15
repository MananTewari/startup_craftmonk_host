import React, { useState } from "react";
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log(response.data.message);
      dispatch(authSliceActions.login());
      setLoggedInUser(response.data.user); // Store logged-in user data
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const handleLogout = () => {
    // Handle logout action, clear logged-in user data
    setLoggedInUser(null);
    dispatch(authSliceActions.logout());
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                {loggedInUser ? "User Profile" : "Login"}
              </h2>
              {loggedInUser ? (
                // Render user profile if logged in
                <div>
                  <p>Username: {loggedInUser.username}</p>
                  <h1>name:{loggedInUser.name}</h1>
                  <h2>email:{loggedInUser.email}</h2>
<h2>Phone Number:{loggedInUser.phoneNumber}</h2>


                  
                  {/* Render other user profile details */}
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
                  <button type="submit" className="btn btn-primary btn-block">
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
  );
}

export default Login;
