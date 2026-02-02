
import React from 'react';
import { ExternalLink, Info, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import CTASection from '../components/CTASection';

const Premies: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-white py-20 border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-text-black uppercase tracking-tight mb-6">Subsidies & Premiums</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Renovating can be a significant investment. Fortunately, there are several government support measures available in Flanders.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-8 border-roof-red p-10 rounded-r-3xl mb-16 shadow-sm">
           <div className="flex gap-6">
              <Info className="text-roof-red flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Crucial Information</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Rules and amounts for premiums (such as 'Mijn VerbouwPremie') change frequently. While we cannot guarantee eligibility or exact amounts, we provide all necessary technical certificates to ensure your application process is as smooth as possible.
                </p>
              </div>
           </div>
        </div>

        <div className="space-y-16 mb-24">
          <section className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Official Resources</h2>
            <p className="text-gray-600 mb-10 text-lg">Consult these official Flemish government portals for the most up-to-date information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://www.vlaanderen.be/mijnverbouwpremie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group border border-gray-100"
              >
                <span className="font-black text-xl uppercase tracking-tight">Mijn VerbouwPremie</span>
                <ExternalLink size={24} className="text-gray-300 group-hover:text-roof-red" />
              </a>
              <a 
                href="https://www.energiesparen.be/subsidies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all group border border-gray-100"
              >
                <span className="font-black text-xl uppercase tracking-tight">Energy Subsidies</span>
                <ExternalLink size={24} className="text-gray-300 group-hover:text-roof-red" />
              </a>
            </div>
          </section>

          <section className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Help with Application</h2>
            <p className="text-gray-600 mb-10 text-xl leading-relaxed">
              Once you start your project with us, we take care of correct invoicing and provide the technical documentation required for your claim. Not sure if your project qualifies?
            </p>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-4 bg-roof-red text-white px-10 py-5 rounded font-black text-lg hover:bg-red-800 transition-all shadow-xl"
            >
              <Phone size={24} />
              Call for a quick check
            </a>
          </section>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default Premies;
