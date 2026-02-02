
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, MapPin, Hammer, Zap, PenTool, ThermometerSun } from 'lucide-react';
import { PHONE_NUMBER, SERVICES, PROJECTS, PROCESS_STEPS } from '../constants';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section - Left Aligned */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-text-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=2000" 
            alt="High-end Renovation Antwerp" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text-black via-text-black/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-roof-red text-white text-[10px] font-black mb-6 uppercase tracking-[0.2em] shadow-lg">
              <MapPin size={12} />
              Antwerpen & Omgeving
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] mb-8 uppercase tracking-tight">
              Roofing, <br/>
              <span className="text-roof-red">Insulation</span><br/>
              & Renovation.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              Professional execution for your entire property. We handle structural roofing, interior and exterior renovations, and energy-smart insulation to maximize your comfort and home value.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 bg-roof-red text-white px-10 py-5 rounded font-bold text-lg hover:bg-red-800 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                <Phone size={24} />
                Request a quote
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded font-bold text-lg hover:bg-white/20 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Approach */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-xs font-black text-roof-red uppercase tracking-[0.3em] mb-4">What we do</h2>
              <h3 className="text-4xl md:text-5xl font-black text-text-black uppercase tracking-tight mb-8">Integrated construction <br/>and maintenance</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our clients can engage us for specific trades or choose our <strong>all-in approach</strong>. We handle the entire process fully, identifying and prioritizing improvements so you get the maximum return on your investment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <Shield className="text-roof-red mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Roofing</h4>
                <p className="text-xs text-gray-500 italic">Pitched & Flat</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <ThermometerSun className="text-roof-red mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Insulation</h4>
                <p className="text-xs text-gray-500 italic">Energy Savings</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <Hammer className="text-roof-red mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Renovation</h4>
                <p className="text-xs text-gray-500 italic">Full Home</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <Zap className="text-roof-red mb-4" size={32} />
                <h4 className="font-black uppercase text-sm mb-2">Specialized</h4>
                <p className="text-xs text-gray-500 italic">Electric & Painting</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group flex flex-col h-full bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-xl font-black mb-4 text-text-black uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">{service.description}</p>
                <div className="mb-6 overflow-hidden rounded-lg h-40">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                </div>
                <Link to="/services" className="text-roof-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-widest border-t border-gray-50 pt-4">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-roof-red uppercase tracking-[0.3em] mb-4">Reliability</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-black uppercase tracking-tight">Our Work Method</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-roof-red transition-colors group">
                <h4 className="font-black text-roof-red mb-4 group-hover:scale-110 transition-transform origin-left">{step.title.split('. ')[1]}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
