import {  BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
import App from "./App"
import Genap from "./genap";
import Ganjil from "./ganjil";
import Home from "./Home";
import FormControl from "./FormControl";
import FormControl2 from "./FormControl2";
import "bootstrap/dist/css/bootstrap.min.css";

function App2() {
  return (
    <Router>
      <nav className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
      <div className="logo">
        <h2>MyApp</h2>
      </div>
      <ul className="d-flex list-unstyled gap-4 m-0">
        <li><a href="/" className="text-white text-decoration-none">Home</a></li>
        <li><a href="/about" className="text-white text-decoration-none">About</a></li>
        <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
        <li><a href="/form" className="text-white text-decoration-none">Form</a></li>
      </ul>
    </nav>

    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Ganjil />} />
        <Route path="/contact" element={<Genap />} />
        <Route path="/app" element={<App />} />
        <Route path="/form" element={<FormControl2 />} />
      </Routes>
    </div>

    </Router>
  );
}

export default App2;