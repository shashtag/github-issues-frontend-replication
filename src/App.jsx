import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Issues from "./Pages/Issues";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/:org/:repo' element={<Issues />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
