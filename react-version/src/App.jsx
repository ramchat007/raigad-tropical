import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header.jsx';
import StickyWhatsAppFooter from '@/components/StickyWhatsAppFooter.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AccommodationsPage from '@/pages/AccommodationsPage.jsx';
import FacilitiesPage from '@/pages/FacilitiesPage.jsx';
import GalleryPage from '@/pages/GalleryPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
// Initialize with your Measurement ID from Google Analytics
ReactGA.initialize("G-XJF0P08TDD"); 

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodations" element={<AccommodationsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <StickyWhatsAppFooter />
      <Toaster />
    </>
  );
}

export default App;