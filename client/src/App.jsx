import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/dreams" element={<Posts />} />
      </Routes>
    </div>
  );
}
