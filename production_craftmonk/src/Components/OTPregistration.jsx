import React, { useState } from "react";
import axios from "axios";

function OTPVerification() {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      // Send OTP to backend for verification
      const response = await axios.post("http://localhost:5000/verify-otp", { otp });
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error("OTP verification failed:", error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="otp-verification-container">
        <h2 className="text-center">OTP Verification</h2>
        <form onSubmit={handleVerifyOTP}>
          <div className="form-group">
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              className="form-control"
              id="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Verify OTP
          </button>
        </form>
        {error && <div className="text-danger">{error}</div>}
        {successMessage && <div className="text-success">{successMessage}</div>}
      </div>
    </div>
  );
}

export default OTPVerification;
