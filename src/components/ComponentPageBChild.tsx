import React, { useState } from "react";

const ComponentPageBChild = () => {
  const [count, setCount] = useState(0);
  console.log("reder ComponentPageBChild", count);

  return (
    <div>
      <button onClick={() => setCount((count) => ++count)}>
        click ComponentPageBChild {count}
      </button>
    </div>
  );
};

export default React.memo(ComponentPageBChild);
