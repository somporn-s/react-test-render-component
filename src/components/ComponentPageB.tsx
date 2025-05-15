import React, { useState } from "react";
import ComponentPageBChild from "./ComponentPageBChild";

const ComponentPageB = ({ children }: any) => {
  const [count, setCount] = useState(0);
  console.log("reder ComponentPageB : ", count);
  return (
    <div>
      <button onClick={() => setCount((count) => ++count)}>
        click ComponentPageB {count}
      </button>
      {children}
    </div>
  );
};

export default React.memo(ComponentPageB);
