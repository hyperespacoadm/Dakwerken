
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Realisaties from './pages/Realisaties';
import WatWeDoen from './pages/WatWeDoen';
import OverOns from './pages/OverOns';
import WerkMetOns from './pages/WerkMetOns';
import Premies from './pages/Premies';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans antialiased text-text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Realisaties />} />
            <Route path="/services" element={<WatWeDoen />} />
            <Route path="/about" element={<OverOns />} />
            <Route path="/contact" element={<WerkMetOns />} />
            <Route path="/subsidies" element={<Premies />} />
            
            <Route path="/privacy-policy" element={
              <div className="py-20 max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-4">We respect your privacy. Data shared via our contact form is used solely to contact you regarding your request. We never sell your data to third parties.</p>
              </div>
            } />
            <Route path="/cookie-policy" element={
              <div className="py-20 max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
                <p className="text-gray-600 mb-4">This website uses only necessary functional cookies to ensure an optimal browsing experience.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
