import { useRef } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Home from "./Pages/Home";
import Issues from "./Pages/Issues";
import NotFound from "./Pages/NotFound";

function App() {
  const loadingRef = useRef(null);
  return (
    <>
      <LoadingBar color='#0045B3' ref={loadingRef} />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/:org/:repo'
          element={<Issues loadingRef={loadingRef} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
