import React from "react";
import NavbarComponent from "./NavbarComponent";  
import FooterComponent from "./FooterComponent";  
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavbarComponent /> 
      <div style={{ flex: 1 }}> 
        <Outlet />  
      </div>
      <FooterComponent /> 
    </div>
  );
};

export default Layout;
