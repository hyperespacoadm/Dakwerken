
import React, { useState } from 'react';
import { PROJECTS, PHONE_NUMBER } from '../constants';
import { Phone } from 'lucide-react';

const Realisaties: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Roofing', 'Renovation', 'Facade'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white py-20 border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-text-black uppercase tracking-tight mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Craftsmanship in focus. Browse a selection of our recent projects across Greater Antwerp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all border shadow-sm ${
                filter === cat
                  ? 'bg-roof-red border-roof-red text-white shadow-lg'
                  : 'bg-white border-gray-200 text-text-black hover:border-roof-red/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-96">
                <div className="overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} primary`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="overflow-hidden hidden sm:block">
                  <img 
                    src={project.images[1] || project.images[0]} 
                    alt={`${project.title} detail`} 
                    className="w-full h-full object-cover border-l border-gray-100 group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black text-roof-red uppercase tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-3xl font-black mt-2 text-text-black uppercase tracking-tight">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                  <a 
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-3 bg-roof-red text-white px-8 py-4 rounded font-bold hover:bg-red-800 transition-all shadow-md"
                  >
                    <Phone size={18} />
                    Similar project? Call us.
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <p className="text-gray-400 text-xl font-medium">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Realisaties;
