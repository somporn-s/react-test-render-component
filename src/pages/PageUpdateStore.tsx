import React, { useState } from "react";

const PageUpdateStore = () => {
  const [count, setCount] = useState(0);
  console.log("PageUpdateStore count", count);
  return (
    <div style={{ background: "blue" }}>
      <h4>PageUpdateStore</h4>
      <button onClick={() => setCount((count) => ++count)}>
        PageUpdateStore {count}
      </button>
    </div>
  );
};

export default PageUpdateStore;
