import React, { Children, useMemo, useState } from "react";
import ComponentHOCChild from "../components/ComponentHOCChild";
import ComponentHOC from "../components/ComponentHOC";

const PageHOC = () => {
  const [count, setCount] = useState(0);
  console.log("PageHOC : ", count);

  const componentHOCChild = useMemo(() => <ComponentHOCChild />, []);
  return (
    <div>
      <h4>PageHOC</h4>
      <p>hoc มีหลายแบบ ได้แก่</p>
      <ol>
        <li>
          ทำ function รับ component ผ่าน param แล้ว return {"()"} =/ component
          <strong>ตรงตามความ hoc</strong> --แต่ตัว wrap ใช้ Hooc ไม่ได้
        </li>
        <li>
          ทำ component รับ props.children แล้วนำมาแสดง {"{children}"} --มันคือ
          Layout นั้นเอง
        </li>
        <li>
          ทำ component รับ props.[key] (สมมติเป็น Component) อะไรก็ได้
          แล้วนำมาแสดง {"<Component />"} --แตกต่างจาก Layout นิดหน่อย
        </li>
      </ol>
      <button onClick={() => setCount((count) => ++count)}>
        PageHOC {count}
      </button>
      <ComponentHOC
      // element={<ComponentHOCChild />}
      // Component={ComponentHOCChild}
      />
      {componentHOCChild}
    </div>
  );
};

export default PageHOC;
