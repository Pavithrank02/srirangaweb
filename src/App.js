import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShimmerUi from "./components/ShimmerUi";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./view/Home"));
const AboutUs = lazy(() => import("./view/AboutUs"));
const Service = lazy(() => import("./view/Service"));
const Capabilities = lazy(() => import("./view/Capabilities"));
const Contact = lazy(() => import("./view/Contact"));
const LaserCutting = lazy(() => import("./view/LaserCutting"));
const MetalBending = lazy(() => import("./view/MetalBending"));
const Welding = lazy(() => import("./view/Welding"));
const ProductDesign = lazy(() => import("./view/ProductDesign"));
const PowderCoating = lazy(() => import("./view/PowderCoating"));
const MetalRolling = lazy(() => import("./view/MetalRolling"));

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Header />

      {/* Scroll to the top when the route changes */}
      <ScrollToTop />

      <Suspense fallback={<div><ShimmerUi /></div>}>
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
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
