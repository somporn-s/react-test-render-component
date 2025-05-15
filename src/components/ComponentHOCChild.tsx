import React, { useState } from "react";
import ComponentHOC from "./ComponentHOC";

const ComponentHOCChild = () => {
  const [count, setCount] = useState(0);
  console.log("ComponentHOCChild");

  return (
    <div>
      <button onClick={() => setCount((count) => ++count)}>
        click ComponentHOCChild {count}
      </button>
      <p><span>ss</span>ComponentHOCChild</p>
    </div>
  );
};

export default React.memo(ComponentHOCChild);
