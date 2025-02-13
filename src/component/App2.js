import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
import App from "./App";
import Genap from "./genap";
import Ganjil from "./ganjil";
import Home from "./Home";
import FormControl from "./FormControl";
import FormControl2 from "./FormControl2";
import ZustandTry from "./ZustandTry";
import ZustandLocalTry from "./ZustandLocalTry";
import ReduxTry from "./ReduxTry";
import FetchApiTry from "./FetchApiTry";
import AxiosExample from "./AxiosApiTry";
import ReactQuery from "./ReactQuery";
import "bootstrap/dist/css/bootstrap.min.css";

function App2() {
  return (
    <Router>
      <nav className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
        <div className="logo">
          <h2>MyApp</h2>
        </div>
        <ul className="d-flex list-unstyled gap-4 m-0">
          <li>
            <a href="/" className="text-white text-decoration-none">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white text-decoration-none">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white text-decoration-none">
              Contact
            </a>
          </li>
          <li>
            <a href="/form" className="text-white text-decoration-none">
              Form
            </a>
          </li>
          <li>
            <a href="/form/zustand" className="text-white text-decoration-none">
              Zustand
            </a>
          </li>
          <li>
            <a
              href="/form/zustand/local"
              className="text-white text-decoration-none"
            >
              Zustand-Local
            </a>
          </li>
          <li>
            <a href="/form/redux" className="text-white text-decoration-none">
              Redux
            </a>
          </li>
          <li>
            <a
              href="/fetch-api-try"
              className="text-white text-decoration-none"
            >
              FetchAPI
            </a>
          </li>
          <li>
            <a href="/axios" className="text-white text-decoration-none">
              Axios
            </a>
          </li>
          <li>
            <a href="/react-query" className="text-white text-decoration-none">
              ReactQuery
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Ganjil />} />
          <Route path="/contact" element={<Genap />} />
          <Route path="/app" element={<App />} />
          <Route path="/form" element={<FormControl2 />} />
          <Route path="/form/zustand" element={<ZustandTry />} />
          <Route path="/form/zustand/local" element={<ZustandLocalTry />} />
          <Route path="/form/redux" element={<ReduxTry />} />
          <Route path="/fetch-api-try" element={<FetchApiTry />} />
          <Route path="/axios" element={<AxiosExample />} />
          <Route path="/react-query" element={<ReactQuery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
