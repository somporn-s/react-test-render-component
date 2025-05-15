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
      <div className="menu" style={{ background: "red", width: "50%" }}>
        Layout menu
        <button onClick={() => setCount((count) => ++count)}>
          Layout Layout {count}
        </button>
        <ul>
          <li>
            <Link to="/page-a/">PageA</Link>
            <ul>
              <li>
                <Link to="/page-a/page-a-child">PageAChild</Link>
              </li>
              <li>
                <Link to="/page-a/page-a-child2">PageAChild2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/page-b">PageB</Link>
          </li>
        </ul>
      </div>
      <div className="menu" style={{ background: "gray", width: "100%" }}>
        <p>Content</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
