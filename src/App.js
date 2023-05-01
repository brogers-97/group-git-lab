import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Header from "./components/partials/Header"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
