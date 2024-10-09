import { Route, Routes } from "react-router-dom";

import Home from "./components/view/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/view/AboutUs";
import Service from "./components/view/Service";
import Capabilities from "./components/view/Capabilities";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/capability" element={<Capabilities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
