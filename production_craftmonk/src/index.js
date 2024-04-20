import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import ShoppingBag from './routes/ShoppingBag';
import Login from './routes/Login';
import App from './App';
import { Provider } from 'react-redux';
import craftmonkStore from './store/indexmain';
import Checkout from './Components/Checkout';
import Registration from './Components/Registration';
import UserProfile from './Components/UserProfile';
import OTP from "./Components/OTP"

import { createTheme } from '@mui/material/styles'; 
import Studio from './Components/Studio';
import Uttarakhand from './Components/Uttarakhand';
import Aipan from './Components/Aipan';
import IndiaMap from './Components/Indiamap';
import OTPVerification from './Components/OTPregistration';




const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children:
      [{ path: "/", element: <Home /> },
      { path: "/ShoppingBag", element: <ShoppingBag /> },
      { path: "/Login", element: <Login /> },
      { path: "/Checkout", element: <Checkout /> },
     {path:"/register", element:<Registration/>},
  {path:"/userprofie", element:<UserProfile/>},
  {path:"/otp", element:<OTP/>},
  {path:"/studio", element:<Studio/>},
  {path:"/regions", element:<Uttarakhand/>},
  {path:"/aipan", element:<Aipan/>},
  {path:"/map", element:<IndiaMap/>},
  {path:"/emailverification", element:<OTPVerification/>},
 

      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={craftmonkStore}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

