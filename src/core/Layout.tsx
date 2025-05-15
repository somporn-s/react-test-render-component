import React, { useState } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const [count, setCount] = useState(0);
  console.log("Layout count", count);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="menu" style={{ background: "#dcdcdc", width: "50%" }}>
        Layout menu
        <button onClick={() => setCount((count) => ++count)}>
          Layout Layout {count}
        </button>
        <hr />
        <Link to="/page-a/">PageA</Link> <br />
        <Link to="/page-a/page-a-child">PageAChild</Link> <br />
        <Link to="/page-a/page-a-child2">PageAChild2</Link>
        <br /> <br />
        <Link to="/page-b">PageB</Link>
        <br />
        <Link to="/page-hoc">Page HOC</Link>
        <br />
        <Link to="/page-update-store">Page Update Store</Link>
        <br />
      </div>
      <div className="menu" style={{ background: "gray", width: "100%" }}>
        <p>Content</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
