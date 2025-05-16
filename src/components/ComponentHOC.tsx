import React, { useState, type JSX, type MemoExoticComponent } from "react";

type ComponentHOCProps = {
  Component?: MemoExoticComponent<() => JSX.Element>;
  element?: JSX.Element;
  children?: JSX.Element;
};
const ComponentHOC = ({ Component, element, children }: ComponentHOCProps) => {
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
      {children}
    </div>
  );
};

export default React.memo(ComponentHOC);
