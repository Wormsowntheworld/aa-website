import React from 'react';
import './App.css';
import HeaderUpdated from './components/HeaderUpdated';
import HeroSectionWithVideo from './components/HeroSectionWithVideo';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ExpertiseSectionUpdated from './components/ExpertiseSectionUpdated';
import ContactSectionUpdated from './components/ContactSectionUpdated';

function AppUpdated() {
  return (
    <div className="App">
      <HeaderUpdated />
      <main>
        <HeroSectionWithVideo />
        <AboutSection />
        <ProductsSection />
        <ExpertiseSectionUpdated />
        <ContactSectionUpdated />
      </main>
    </div>
  );
}

export default AppUpdated;

