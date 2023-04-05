import React,{ useContext } from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../components/Auth";
import { Navigate } from "react-router-dom";

export default function Layout() {
  const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Navigate to="/" />;
    }
  return(
    <>
    <Sidebar />
    <Outlet />
    </>
  );
}