import React from "react";
import { Outlet } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      <h4>PageA</h4>
      <p>Content</p>
      <Outlet></Outlet>
    </div>
  );
};

export default PageA;
