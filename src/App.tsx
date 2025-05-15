import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./core/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Homepage from "./pages/Homepage";
import PageAChild from "./pages/PageAChild";
import PageAChild2 from "./pages/PageAChild2";

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
            <Route path="page-a" element={<PageA />}>
              <Route path="page-a-child" element={<PageAChild />}></Route>
              <Route path="page-a-child2" element={<PageAChild2 />}></Route>
            </Route>
            <Route path="page-b" Component={PageB}></Route>
          </Routes>
        </>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
