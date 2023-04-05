/*
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";

import LogIn from "./pages/LogIn";
import { AuthProvider } from "./components/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
         <Route exact path="/" element={<LogIn />} />
          <Route exact path="login" element={<LogIn />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider router={router} />
  </React.StrictMode>
);


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



//<Upbar />
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />
  },
  {
    element: <Layout/>,
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
  <React.StrictMode>
  <Provider router={router} />
  </React.StrictMode>
);

*/