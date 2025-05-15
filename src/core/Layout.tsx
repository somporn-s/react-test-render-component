import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  console.log("Layout");

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="menu" style={{ background: "red", width: "50%" }}>
        Layout menu
      </div>
      <div className="menu" style={{ background: "gray", width: "100%" }}>
        <p>Content</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
