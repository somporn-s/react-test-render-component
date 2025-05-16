import React from "react";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

const ComponentStoreCount = () => {
  const countValue2 = useSelector((store: RootState) => store.counter.value2);
  console.log("ComponentStoreCount count value 2", countValue2);

  return <div>ComponentStoreCount {countValue2}</div>;
};

export default React.memo(ComponentStoreCount);
