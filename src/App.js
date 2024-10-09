import { Route, Routes } from "react-router-dom";

import Home from "./components/view/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/view/AboutUs";
import Service from "./components/view/Service";
import Capabilities from "./components/view/Capabilities";
import Contact from "./components/view/Contact";
import LaserCutting from "./components/LaserCutting";
import MetalBending from "./components/MetalBending";
import Welding from "./components/Welding";


function App() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/capability" element={<Capabilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/laserservice" element={<LaserCutting />} />
        <Route path="/bendingservice" element={<MetalBending />} />
        <Route path="/Welding" element={<Welding />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
