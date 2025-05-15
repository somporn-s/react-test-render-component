import React, { useState } from "react";

const PageAChild2 = () => {
  const [count, setCount] = useState(0);
  console.log("PageA child2 count", count);
  return (
    <div style={{ background: "skyblue" }}>
      <button onClick={() => setCount((count) => ++count)}>
        PageA child2 {count}
      </button>
      Page A Child2
    </div>
  );
};

export default React.memo(PageAChild2);
