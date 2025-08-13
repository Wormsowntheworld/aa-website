import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSectionNoVideo from './components/HeroSectionNoVideo';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ContactSection from './components/ContactSection';

function AppNoVideo() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSectionNoVideo />
        <AboutSection />
        <ProductsSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default AppNoVideo;

