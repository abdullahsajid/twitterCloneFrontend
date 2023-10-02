import React from "react";
import Cookies from "universal-cookie";
import App from "../App";
import Home from "../layout/home/Home";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const cookies = new Cookies();
// { component: Component, ...rest }

export default function ProtectedRoutes() {
  const token = cookies.get("token");
  // const navigation = useNavigate();
  // if(token){
  //   return navigation('/home')
  // }
  return (
        <>
        {token ? <Outlet/>:<Navigate to={'/'}/>}
        </>
  );
}