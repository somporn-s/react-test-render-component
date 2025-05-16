import React, { useState } from "react";
import ComponentPageBChild from "./ComponentPageBChild";

const ComponentPageB = ({children: Children}: any) => {

  const [count, setCount] = useState(0);
  console.log("reder ComponentPageB : ", count);
  return (
    <div>
      <button onClick={() => setCount((count) => ++count)}>
        click ComponentPageB {count}
      </button>
      {<Children />}
    </div>
  );
};

export default ComponentPageB;
