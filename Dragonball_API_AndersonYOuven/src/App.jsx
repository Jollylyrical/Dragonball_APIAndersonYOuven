import "./App.css";
import NavBar from "./Component/Nav_Bar/Nav_Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";
import Filter from "./Pages/Filter/Filter";
import Character_traits from "./Pages/Character_traits/Character_traits";
import About from "./Pages/About/About";
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter/:filterType/:filterValue" element={<Filter />} />
          <Route path="/character/:id" element={<Character_traits />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
