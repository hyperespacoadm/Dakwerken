
import React from 'react';
import { SERVICES, PHONE_NUMBER, PROCESS_STEPS } from '../constants';
import { Phone, CheckCircle, Settings, Target, Thermometer } from 'lucide-react';
import CTASection from '../components/CTASection';

const WatWeDoen: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-text-black uppercase tracking-tight mb-8">What We Offer</h1>
            <p className="text-2xl text-gray-500 leading-relaxed">
              We focus on delivering the highest possible return for your home. Our team provides specialized construction services, from structural roofing to fine internal finishes.
            </p>
          </div>
        </div>
      </div>

      {/* All-in vs Specific Choice */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Choose Your Level of Support</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every project is unique. You can engage us for specific technical components or choose our <strong>all-in approach</strong> to have us manage every detail from inspection to final delivery.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Target className="text-roof-red flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-black uppercase text-sm mb-1">Specific Task execution</h3>
                    <p className="text-gray-600 text-sm">Targeted expertise for roofing, insulation, or painting projects.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-roof-red/10">
                  <Settings className="text-roof-red flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-black uppercase text-sm mb-1">The All-In Approach</h3>
                    <p className="text-gray-600 text-sm">Complete project coordination, eliminating bottlenecks and optimizing resource use.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" alt="Specialized work onsite" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 bg-text-black text-white p-10 rounded-2xl shadow-xl hidden md:block border-l-8 border-roof-red">
                <p className="text-2xl font-black text-white mb-2 uppercase">Multidisciplinary</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Integrated trades, one responsible team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Insulation */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-roof-red uppercase tracking-[0.3em] mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-black uppercase tracking-tight">Technical Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <h3 className="text-3xl font-black text-text-black uppercase tracking-tight mb-6">{service.title}</h3>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 text-sm font-bold text-text-black uppercase tracking-widest">
                     <CheckCircle size={18} className="text-roof-red" /> Technical Mastery
                   </div>
                   <div className="flex items-center gap-3 text-sm font-bold text-text-black uppercase tracking-widest">
                     <CheckCircle size={18} className="text-roof-red" /> ROI Focused
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Step Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Our Proven 5-Step Process</h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              We believe in quality and transparency. Every project—large or small—deserves a structured approach to ensure the best outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col group">
                <span className="text-5xl font-black text-gray-100 mb-6 group-hover:text-roof-red transition-colors duration-500">0{idx + 1}</span>
                <h4 className="font-black text-lg text-text-black uppercase tracking-tight mb-4">{step.title.split('. ')[1]}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default WatWeDoen;
