import Candidate from "./pages/Candidate";
import Home from "./pages/Home";
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
        <Route path="/:title" element={<Candidate />} />
      </Routes>
    </Router>
  );
}

export default App;
