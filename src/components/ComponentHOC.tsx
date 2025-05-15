import React, { useState, type JSX, type MemoExoticComponent } from "react";

type ComponentHOCProps = {
  Component?: MemoExoticComponent<() => JSX.Element>;
  element?: JSX.Element;
};
const ComponentHOC = ({ Component, element }: ComponentHOCProps) => {
  const [count, setCount] = useState(0);
  console.log("ComponentHOC");

  return (
    <div>
      <button onClick={() => setCount((count) => ++count)}>
        click ComponentHOC {count}
      </button>
      ComponentHOC
      <hr />
      {element ?? (Component && <Component />)}
    </div>
  );
};

// export default ComponentHOC;
export default React.memo(ComponentHOC);
