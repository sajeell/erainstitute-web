import React from "react";
import Header from "./components/header.jsx";
import CarouselPage from "./components/carousel.jsx";
import Middle from "./components/middle.jsx";
import Service from "./components/service.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselPage />
      <Middle />
      <Service />
    </div>
  );
}

export default App;
