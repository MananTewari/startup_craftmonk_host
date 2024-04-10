import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [error, setError] = useState('');

  const handleRegister = () => {
    const newUser = {
      username,
      password,
      email,
      phone,
      address,
      profilePhoto: profilePhoto ? profilePhoto.name : '' // Store file name only
    };

    // Convert user object to JSON string
    const userData = JSON.stringify(newUser, null, 2);

    // Save user data to user.json file
    downloadObjectAsJson(userData, 'user');

    // Set registered user state
    setRegisteredUser(newUser);
  };

  // Function to download object as JSON file
  const downloadObjectAsJson = (exportObj, exportName) => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(exportObj);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `${exportName}.json`);
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="profile-container">
      <h2>Create Your Profile</h2>
      <form>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} />
        <button type="button" onClick={handleRegister}>Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      {registeredUser && (
        <div>
          <h3>User Registered Successfully!</h3>
          <p>Username: {registeredUser.username}</p>
          <p>Email: {registeredUser.email}</p>
          {/* Add other user details as needed */}
        </div>
      )}
    </div>
  );
}

export default Register;