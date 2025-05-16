import React, { use, useMemo, useState } from "react";
import ComponentPageB from "../components/ComponentPageB";
import ComponentPageBChild from "../components/ComponentPageBChild";

const PageB = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("PageB count", count);

  // การใช้ useMemo ครอบ Component
  // const componentPageB = useMemo(() => {<ComponentPageB />;}, []);

  return (
    <div style={{ background: "blue" }}>
      <h4>PageB</h4>
      <button onClick={() => setCount((count) => ++count)}>
        PageB {count}
      </button>
      <ComponentPageB>{ComponentPageBChild}</ComponentPageB>
      {/* {componentPageB} */}
    </div>
  );
};

export default PageB;
