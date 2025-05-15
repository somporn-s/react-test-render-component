import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const PageA = () => {
  const [count, setCount] = useState(0);
  console.log("PageA count", count);
  return (
    <div style={{ background: "green" }}>
      <h4>PageA</h4>
      <button onClick={() => setCount((count) => ++count)}>
        PageA{count}
      </button>
      <Outlet />
    </div>
  );
};

export default React.memo(PageA);
