import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./core/Layout";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  console.log("App count", count);

  return (
    <Layout>
      <>
        <button onClick={() => setCount((count) => ++count)}>
          Click App {count}
        </button>

        <BrowserRouter>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/page-a" Component={PageA}>
            <Route path="/page-a-child"></Route>
          </Route>
          <Route path="/page-b" Component={PageB}></Route>
        </BrowserRouter>
      </>
    </Layout>
  );
}

export default App;
