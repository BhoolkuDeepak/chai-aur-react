import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home (){

return (
  <div className="p-4">
    <h1 className="text-xl font-bold">Home Page</h1>
    <p>Welcome to the Home page!</p>
  </div>
)

}

function About () {
  return (
    <div >
    <h1 >About Page</h1>
    <p>About Page</p>
  </div>

  )

}

function RouterApp  () {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link  to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RouterApp;