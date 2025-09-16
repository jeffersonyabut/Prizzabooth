import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Booth from "./Pages/Booth";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booth" element={<Booth />} />
      </Routes>
    </HashRouter>
  );
}
