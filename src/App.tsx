import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./core/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Homepage from "./pages/Homepage";
import PageAChild from "./pages/PageAChild";
import PageAChild2 from "./pages/PageAChild2";
import PageHOC from "./pages/PageHOC";
import PageUpdateStore from "./pages/PageUpdateStore";

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
          <Homepage></Homepage>
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
            <Route path="page-hoc" Component={PageHOC}></Route>
            <Route path="page-update-store" Component={PageUpdateStore}></Route>
          </Routes>
        </>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
