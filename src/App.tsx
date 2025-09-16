import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Booth from "./Pages/Booth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booth" element={<Booth />} />
      </Routes>
    </BrowserRouter>
  );
}
