
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, ADDRESS, VAT_NUMBER, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-roof-red pl-4 uppercase tracking-wider">
              Ulli Donckers Roofing
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your professional partner for roofing, renovations, and maintenance in Greater Antwerp. Expert craftsmanship you can rely on.
            </p>
            <div className="text-gray-300 text-sm space-y-1">
              <p>{ADDRESS}</p>
              <p>VAT: {VAT_NUMBER}</p>
              <p className="text-gray-400 mt-2">{EMAIL}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-roof-red uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Work With Us</Link></li>
              <li><Link to="/subsidies" className="text-gray-400 hover:text-white transition-colors">Subsidies & Premiums</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-roof-red uppercase tracking-wider">Contact</h3>
            <p className="text-gray-400 mb-4">Need advice or a direct quote?</p>
            <a href={`tel:${PHONE_NUMBER}`} className="block text-2xl font-bold hover:text-roof-red transition-colors mb-2">
              {PHONE_NUMBER}
            </a>
            <p className="text-sm text-gray-500 italic uppercase tracking-widest text-[10px]">Office: Mon - Fri | 08:00 - 18:00</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ulli Donckers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
