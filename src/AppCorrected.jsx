import React from 'react';
import './App.css';
import HeaderUpdated from './components/HeaderUpdated';
import HeroSectionCorrected from './components/HeroSectionCorrected';
import AboutSectionCorrected from './components/AboutSectionCorrected';
import ProductsSection from './components/ProductsSection';
import ExpertiseSectionCorrected from './components/ExpertiseSectionCorrected';
import ContactSectionUpdated from './components/ContactSectionUpdated';

function AppCorrected() {
  return (
    <div className="App">
      <HeaderUpdated />
      <main>
        <HeroSectionCorrected />
        <AboutSectionCorrected />
        <ProductsSection />
        <ExpertiseSectionCorrected />
        <ContactSectionUpdated />
      </main>
    </div>
  );
}

export default AppCorrected;

