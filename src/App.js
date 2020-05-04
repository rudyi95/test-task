import React from 'react';
import Header from "./Components/Header/header";
import Slider from "./Components/Slider/slider";
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/services";
import About from "./Components/About/about";
import Clients from "./Components/Clients/clients";
import Footer from "./Components/Footer/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Intro />
      <Services />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
