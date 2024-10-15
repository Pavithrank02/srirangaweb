import { Route, Routes } from "react-router-dom";

import Home from "./components/view/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./view/AboutUs";
import Service from "./view/Service";
import Capabilities from "./view/Capabilities";
import Contact from "./view/Contact";
import LaserCutting from "./view/LaserCutting";
import MetalBending from "./view/MetalBending";
import Welding from "./view/Welding";
import ProductDesign from "./components/ProductDesign";
import MetalShearing from "./view/MetalShearing";


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
        <Route path="/welding" element={<Welding />} />
        <Route path="/product" element={<ProductDesign />} />
        <Route path="/shearing" element={<MetalShearing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
