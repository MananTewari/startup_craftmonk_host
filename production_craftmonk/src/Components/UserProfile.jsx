import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${username}`)
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [username]);

  return (
    <div className="user-profile">
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Name: {user.name}</p>
          <p>Address: {user.address}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
