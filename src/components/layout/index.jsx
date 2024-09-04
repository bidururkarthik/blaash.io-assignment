import React from "react";
import { StyledLayout, StyledRightLayout } from "./layout.styled";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledRightLayout>
        <Header />
        {children}
      </StyledRightLayout>
    </StyledLayout>
  );
};

export default Layout;
