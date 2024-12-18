import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Products from "./assets/components/Products";
import Contact from "./assets/components/Contact";
import AboutUs from "./assets/components/AboutUs";
import Footer from "./assets/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* Fix for "/home" */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} /> {/* Fix for "/about" */}
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
