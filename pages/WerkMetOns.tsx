
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_EMBED, EMAIL } from '../constants';

const WerkMetOns: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-text-black uppercase tracking-tight mb-8">Work With Us</h1>
          <p className="text-2xl text-gray-500 max-w-2xl leading-relaxed">
            Professional coordination begins with a clear conversation. Reach out directly to discuss your project requirements or request an onsite technical evaluation.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Direct Info */}
            <div>
              <div className="bg-text-black text-white p-12 rounded-3xl shadow-2xl mb-16 relative overflow-hidden group border-b-8 border-roof-red">
                <h2 className="text-3xl font-black mb-8 text-roof-red uppercase tracking-tight">Direct Phone Support</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  For urgent maintenance or technical advice regarding your renovation, calling us is the most efficient way to connect.
                </p>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="block text-5xl font-black hover:text-roof-red transition-all py-4 mb-4 tracking-tighter"
                >
                  {PHONE_NUMBER}
                </a>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Office Hours: 08:00 - 18:00 (Mon - Fri)</p>
              </div>

              <div className="space-y-12 px-6">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-roof-red border border-gray-100 group-hover:bg-roof-red group-hover:text-white transition-all">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-tight mb-2">Location</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-roof-red border border-gray-100 group-hover:bg-roof-red group-hover:text-white transition-all">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-tight mb-2">Email</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-black mb-10 uppercase tracking-tight">Project Inquiry</h2>
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-12 rounded-2xl text-center border border-green-100">
                   <h3 className="text-2xl font-black mb-4 uppercase">Success</h3>
                   <p className="text-lg font-medium">Your request has been received. Our technical team will review the details and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 focus:outline-none focus:border-roof-red transition-all text-lg font-medium" 
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]">Contact Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 focus:outline-none focus:border-roof-red transition-all text-lg font-medium" 
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]">Brief Project Description</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 px-0 py-4 focus:outline-none focus:border-roof-red transition-all text-lg font-medium" 
                      placeholder="Tell us about your renovation or roofing needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-text-black text-white font-black py-6 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                  >
                    <Send size={20} />
                    Send Inquiry
                  </button>
                  <p className="text-center text-[10px] font-black text-gray-300 uppercase tracking-widest mt-6">
                    Typically Responding within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="h-[550px] w-full border-t border-gray-100">
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ulli Donckers Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default WerkMetOns;
