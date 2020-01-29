import React from "react";
import Header from "./components/header.jsx";
import CarouselPage from "./components/carousel.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <CarouselPage />
    </div>
  );
}

export default App;
