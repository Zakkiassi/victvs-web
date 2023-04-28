import CandidatePage from "./pages/CandidatePage/CandidatePage";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="flex justify-center w-full shadow">
        <Link to="/">
          <span className="text-primary font-black text-3xl">VICTVS</span>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:CandidateName" element={<CandidatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
