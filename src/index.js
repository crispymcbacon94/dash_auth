/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Layout from "./pages/Layout";
import Devices from "./pages/Devices";
import LogIn from "./pages/LogIn";
import "./App.css";
import { AuthProvider } from "./components/Auth";
import ErrorPage from './pages/ErrorPage';


//<Upbar />
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <LogIn />,
    errorElement: <ErrorPage />
  },
  {
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"home",
        element: <Home />
      },
      {
        path:"user",
        element: <User />
      },
      {
        path:"devices",
        element: <Devices />
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
);
