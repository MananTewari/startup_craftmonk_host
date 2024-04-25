import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    console.log("register clcikced")
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
        name,
        email,
        phoneNumber,
        profilePicture
      });
      alert(response.data.message); // Notify user that registration is successful
      // Redirect user to OTP verification page
      window.location.href = "/emailverification"; // Replace '/otp' with the actual path to your OTP verification page
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="containerdamn-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="registration-container d-flex justify-content-between">
        <div className="image-container">
          <img
            src="https://i.pinimg.com/originals/34/b0/d5/34b0d5b16c64587f2bf8e340267adf59.jpg"
            alt="CraftMonk Image"
            className="img-fluid collapse_image registration-image"
          />
        </div>
        <div className="registration-form">
          <h2 className="registration-card-title text-center">Registration</h2>
          <form onSubmit={handleRegister}>
            <div className="registration-form-group">
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
            <div className="registration-form-group">
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
            <div className="registration-form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="registration-form-group">
              <label htmlFor="profilePicture">Profile Picture:</label>
              <input
                type="text"
                className="form-control"
                id="profilePicture"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
          {error && <div className="text-danger">{error}</div>}
          {/* Link to navigate to OTP verification page */}
          <div className="text-center mt-3">
            <a href="/emailverification" className="btn btn-link">
              Go to OTP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;