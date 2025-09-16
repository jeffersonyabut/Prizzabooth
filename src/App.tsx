import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Booth from "./Pages/Booth";

export default function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Booth">Booth</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booth" element={<Booth />} />
      </Routes>
    </HashRouter>
  );
}
