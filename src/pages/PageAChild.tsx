import React, { useState } from "react";

const PageAChild = () => {
  const [count, setCount] = useState(0);
  console.log("PageA child count", count);
  return (
    <div style={{ background: "skyblue" }}>
      <button onClick={() => setCount((count) => ++count)}>
        PageA child {count}
      </button>
      PageAChild
    </div>
  );
};

export default React.memo(PageAChild);
