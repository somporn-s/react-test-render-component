import React, { useState } from "react";

const PageB = () => {
  const [count, setCount] = useState(0);
  console.log("PageB count", count);
  return (
    <div style={{ background: "blue" }}>
      <h4>PageB</h4>
      <button onClick={() => setCount((count) => ++count)}>
        PageB {count}
      </button>
    </div>
  );
};

export default PageB;
