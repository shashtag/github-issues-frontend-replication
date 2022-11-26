import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Issues from "./Pages/Issues";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/:org/:repo' element={<Issues />} />
    </Routes>
  );
}

export default App;
