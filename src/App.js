import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import Footer from "./components/footer/footer";
import PageNotFound from "./components/Pagenotfound/PageNotFound";
import MovieDetail from "./components/movieDetail/movieDetail";
import DrawingCanvas from "./feature/canvas";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="conatainer">
        <Routes>
          <Route path="/" element={<DrawingCanvas />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
