import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="app__">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
