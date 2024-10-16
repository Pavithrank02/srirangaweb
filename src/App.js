import { Route, Routes } from "react-router-dom";

import Home from "./view/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./view/AboutUs";
import Service from "./view/Service";
import Capabilities from "./view/Capabilities";
import Contact from "./view/Contact";
import LaserCutting from "./view/LaserCutting";
import MetalBending from "./view/MetalBending";
import Welding from "./view/Welding";
import ProductDesign from "./view/ProductDesign";
import PowderCoating from "./view/PowderCoating";
import MetalRolling from "./view/MetalRolling";


function App() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Service />} />
        <Route path="/capability" element={<Capabilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/laserservice" element={<LaserCutting />} />
        <Route path="/bendingservice" element={<MetalBending />} />
        <Route path="/welding" element={<Welding />} />
        <Route path="/products" element={<ProductDesign />} />
        <Route path="/rolling" element={<MetalRolling />} />
        <Route path="/powder" element={<PowderCoating />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
