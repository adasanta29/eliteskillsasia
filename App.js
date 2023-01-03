import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Homequotes from "./components/home-quotes/Homequotes";
import Messi from "./components/messi/Messi";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Home/>
      <Homequotes/>
      <Messi/>
      <Footer/>
    </div>
    
  );
}

export default App;
