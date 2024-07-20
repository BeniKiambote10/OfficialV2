import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import HomePage from "./Pages/HomesPage.js";
import ProductsPage from "./Pages/ProductsPages.js";
import ContactPage from "./Pages/ContactForm.js";
import "./App.css";
import "./Pages/Home.css";
import "react-multi-carousel/lib/styles.css";
import Cart from "./components/Carts.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
