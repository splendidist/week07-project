import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import About from "./pages/About";
import Nightmares from "./pages/Nightmares";
import Dreams from "./pages/Dreams";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/nightmares" element={<Nightmares />} />
      </Routes>
    </div>
  );
}
