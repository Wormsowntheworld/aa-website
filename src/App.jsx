import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

import AsiaMap from "./components/AsiaMap";

export default function App() {
  return (
    <main style={{ background: "#1C2A39", minHeight: "100vh", padding: "40px 20px" }}>
      <h2 style={{ color: "#C6A664", textAlign: "center", marginBottom: 24 }}>
        Our Sourcing & Delivery Network
      </h2>
      <AsiaMap showLabels drawRoutes />
    </main>
  );
}
