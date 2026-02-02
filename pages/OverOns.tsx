
import React from 'react';
import { PHONE_NUMBER } from '../constants';
import { Phone, CheckCircle, ShieldCheck, Users, Zap, Hammer } from 'lucide-react';
import CTASection from '../components/CTASection';

const OverOns: React.FC = () => {
  return (
    <div>
      {/* Editorial Header */}
      <div className="bg-text-black text-white py-32 border-b border-roof-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
              The <span className="text-roof-red">Team</span>.
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed">
              Craftsmanship you can rely on. We think proactively, communicate clearly, and we won't leave until you're satisfied.
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Content Focused on Reference Text and Human Touch */}
            <div className="relative z-10">
              <h2 className="text-xs font-black text-roof-red uppercase tracking-[0.3em] mb-6">Who we are</h2>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-10 leading-tight">
                Quality is our standard, <br/>not a bonus.
              </h3>
              
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
                <p>
                  Our team specializes in roofing and cladding, and that's evident in everything we do. We always work with an eye for detail, quality, and finish. 
                  <strong> Cleanliness on site isn't a bonus for us—it's a standard.</strong>
                </p>
                <p>
                  What truly sets us apart is our dedication and customer-focused approach. We think proactively, communicate clearly, and <strong>we won't leave until you're satisfied</strong>. With us, you won't get half-baked work, but craftsmanship you can rely on.
                </p>
                <p>
                  Combined, we bring over <strong>100 years of experience</strong> to the site. This collective depth of knowledge comes from our veteran craftsmen, our multidisciplinary specialists, and the high-quality supervision from our four-legged site manager (the dog).
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 text-roof-red rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold uppercase text-[11px] tracking-widest text-text-black">No Half-Baked Work</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 text-roof-red rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <span className="font-bold uppercase text-[11px] tracking-widest text-text-black">Proactive Thinking</span>
                </div>
              </div>

              <div className="mt-16">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-4 bg-text-black text-white px-10 py-5 rounded font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1"
                >
                  <Phone size={24} />
                  Consult our experts
                </a>
              </div>
            </div>

            {/* Right: Visual Image with quirky badge */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ulli Donckers Team including the dog site manager" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
              
              {/* Decorative Red Frame */}
              <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-roof-red rounded-[2.5rem] -z-10 translate-x-4 translate-y-4 opacity-30"></div>
              
              {/* Dog Supervisor Badge */}
              <div className="absolute bottom-10 -left-12 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] hidden md:block animate-bounce-slow">
                <p className="text-[10px] font-black uppercase text-roof-red tracking-widest mb-1 italic">V.I.P. Member</p>
                <p className="text-sm font-bold text-text-black">Our site manager 🐕 ensures the highest morale and quality control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <Users className="text-roof-red mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="font-black uppercase text-lg mb-4 tracking-tight">Direct Access</h4>
              <p className="text-gray-500 text-sm leading-relaxed">You communicate directly with the experts. Clear communication is our foundation.</p>
            </div>
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <CheckCircle className="text-roof-red mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="font-black uppercase text-lg mb-4 tracking-tight">Clean Worksites</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Cleanliness is a standard, not a bonus. We leave your property in pristine condition.</p>
            </div>
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <Hammer className="text-roof-red mx-auto mb-6 group-hover:scale-110 transition-transform" size={48} />
              <h4 className="font-black uppercase text-lg mb-4 tracking-tight">Craftsmanship</h4>
              <p className="text-gray-500 text-sm leading-relaxed">We won't leave until you're satisfied. Reliability is our core promise to you.</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OverOns;
