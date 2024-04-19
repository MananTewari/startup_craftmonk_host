import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./UserProfile.css";
import axios from "axios";


function UserProfile() {
  // Get the logged-in user data from the Redux store
  const user = useSelector((state) => state.auth.user);
  
  // State to store user data fetched from the backend
  const [userData, setUserData] = useState(null);

// Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Profile</h2>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Field</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>Username</td>
                      <td>{user && user.username}</td> {/* Display logged-in user's username */}
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{user && user.name}</td> {/* Display logged-in user's name */}
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{user && user.email}</td> {/* Display logged-in user's email */}
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>{user && user.phoneNumber}</td> {/* Display logged-in user's phone number */}
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
