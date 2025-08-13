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

