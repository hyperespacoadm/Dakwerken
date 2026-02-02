
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Do you have a question or a specific project?", 
  subtitle = "Call us for professional advice and an honest estimate.",
  dark = true
}) => {
  return (
    <section className={`${dark ? 'bg-text-black text-white' : 'bg-gray-50 text-text-black'} py-20 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className={`text-lg mb-10 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-3 bg-roof-red text-white px-10 py-5 rounded font-bold text-lg hover:bg-red-800 transition-all shadow-xl hover:scale-105"
          >
            <Phone size={24} />
            Call us today
          </a>
          <Link
            to="/contact"
            className={`flex items-center justify-center gap-3 px-10 py-5 rounded font-bold text-lg border-2 transition-all ${
              dark ? 'border-gray-700 hover:bg-gray-800 text-white' : 'border-gray-200 hover:bg-white text-text-black shadow-sm'
            }`}
          >
            <MessageSquare size={24} />
            Leave a message
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
