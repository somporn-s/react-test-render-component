import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import Homepage from "./Homepage";
import PageAChild from "./PageAChild";
import Layout from "../core/Layout";
import PageAChild2 from "./PageAChild2";

function App() {
  const [count, setCount] = useState(0);

  console.log(
    "App count",
    count,
    "// layout มีเรียกใช้งานใน component นี้จึงถูก render ไปด้วย"
  );

  return (
    <BrowserRouter>
      <Layout>
        <>
          <button onClick={() => setCount((count) => ++count)}>
            Click App In Layout {count}
          </button>
          <Routes>
            <Route path="" Component={Homepage}></Route>
            <Route path="page-a" Component={PageA}>
              <Route path="page-a-child" Component={PageAChild}></Route>
              <Route path="page-a-child2" Component={PageAChild2}></Route>
            </Route>
            <Route path="page-b" Component={PageB}></Route>
          </Routes>
        </>
      </Layout>
    </BrowserRouter>
  );
}

export default React.memo(App);
