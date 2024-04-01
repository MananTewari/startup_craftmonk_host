import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSliceActions } from '../store/authSlice';
// Assuming authSlice is properly exported

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dispatch the login action
    console.log("login")
    dispatch(authSliceActions.login());
    // Update other state or perform other actions as needed
  };

  const handleLogout=(e)=>{
    e.preventDefault();
console.log("logout")
    dispatch(authSliceActions.logout());

  }



  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-header">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" id="remember" className="form-check-input" />
            <label htmlFor="remember" className="form-check-label">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-3d" onClick={handleLogin}>Login</button>
        </form>
        <div className="login-options">
          <button className="btn btn-secondary btn-block btn-3d" onClick={handleLogout} ><i className="fab fa-google"></i>LOGOUT</button>

        </div>
      </div>
    </div>
  );
};

export default Login;
