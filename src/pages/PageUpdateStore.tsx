import React, { useState } from "react";
import ComponentStoreCount from "../components/ComponentStoreCount";
import { useDispatch, useSelector } from "react-redux";
import { increment, increment2 } from "../store/counterSlice";
import type { RootState } from "../store/store";

const PageUpdateStore = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const countValue = useSelector((store: RootState) => store.counter.value);

  // ทดสอบ update store โดยการ selector ทั้ง object ไว้ //สรุปผลหากค่าภายในเปลี่ยนจะอัพเดตตามทันที
  // const countSlice = useSelector((store: RootState) => store.counter);

  console.log("PageUpdateStore count value2", count, countValue);
  return (
    <div style={{ background: "#acac" }}>
      <h4>PageUpdateStore</h4>
      <button onClick={() => setCount((count) => ++count)}>
        click update in page {count}
      </button>
      <hr />
      <button onClick={() => dispatch(increment())}>
        click update store count value : {countValue}
      </button>
      <br />
      <button onClick={() => dispatch(increment2())}>
        click update store count value2 
      </button>
      <br />
      <p>show count value 1</p>
      <ComponentStoreCount />
    </div>
  );
};

export default React.memo(PageUpdateStore);
