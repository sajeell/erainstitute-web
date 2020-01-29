import React from "react";
import Header from "./components/header.jsx";
import CarouselPage from "./components/carousel.jsx";
import Middle from "./components/middle.jsx";
import Service from "./components/service.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./components/contact.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselPage />
      <Middle />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
