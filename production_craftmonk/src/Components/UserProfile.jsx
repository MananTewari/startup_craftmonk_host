import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(null); // State to store user data fetched from the backend

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a GET request to fetch user data from the backend
        const response = await axios.get("http://localhost:5000/userdata");
        // Assuming the response contains user data in JSON format
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Call the fetchUserData function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">User Profile</h2>
              {userData && ( // Render user data if it's available
                <div>
                  <p>Username: {userData.username}</p>
                  <p>Name: {userData.name}</p>
                  <p>Email: {userData.email}</p>
                  <p>Phone Number: {userData.phoneNumber}</p>
                  <img src={userData.profilePicture} alt="Profile" className="img-fluid" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
