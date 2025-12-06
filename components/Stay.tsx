import React, { useState } from 'react';
import { Home, Map, Train, Coffee, ChevronRight } from 'lucide-react';
import { Neighborhood } from '../types';

const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: '1',
    name: 'Vallastaden',
    vibe: 'Eco-Modern & Social',
    commuteTime: 15,
    tags: ['New Build', 'Sustainability', 'Campus Valla'],
    imageUrl: 'https://picsum.photos/600/400?random=50',
  },
  {
    id: '2',
    name: 'Innerstaden',
    vibe: 'Pulse & Culture',
    commuteTime: 5,
    tags: ['Nightlife', 'Shopping', 'History'],
    imageUrl: 'https://picsum.photos/600/400?random=51',
  },
  {
    id: '3',
    name: 'Ryd',
    vibe: 'Student Heart',
    commuteTime: 20,
    tags: ['Affordable', 'Parties', 'Forest'],
    imageUrl: 'https://picsum.photos/600/400?random=52',
  },
  {
    id: '4',
    name: 'Tannefors',
    vibe: 'Riverside Calm',
    commuteTime: 10,
    tags: ['Nature', 'Kayaking', 'Cozy'],
    imageUrl: 'https://picsum.photos/600/400?random=53',
  },
];

export const Stay: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <header className="md:flex md:justify-between md:items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Stay</h2>
            <p className="text-slate-500 text-sm md:text-base mt-1">Build your life in Linköping</p>
        </div>
        <button className="hidden md:block px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-700 hover:shadow-lg active:scale-95 transition-all duration-200">
            Saved Apartments
        </button>
      </header>

      {/* Dashboard Summary - Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <Home className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Housing</span>
            </div>
            <div className="text-3xl font-black text-slate-900">4</div>
            <div className="text-xs text-slate-400 font-medium">Viewings saved</div>
         </div>
         <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
                <Map className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Target Area</span>
            </div>
            <div className="text-xl md:text-2xl font-black text-slate-900 truncate">Vallastaden</div>
            <div className="text-xs text-slate-400 font-medium">Primary choice</div>
         </div>
         <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer md:col-span-2 flex flex-col justify-center items-start relative overflow-hidden group">
             <div className="relative z-10">
                <h4 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">Queue Status</h4>
                <p className="text-sm text-slate-500">Studentbostäder: <span className="font-bold text-indigo-600">850 points</span></p>
                <div className="w-full bg-slate-100 h-2 rounded-full mt-2 md:w-64">
                    <div className="bg-indigo-500 h-2 rounded-full w-2/3 group-hover:w-3/4 transition-all duration-1000 ease-out"></div>
                </div>
             </div>
             <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-200" />
         </div>
      </div>

      {/* Neighborhood Guide */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-6">Neighborhood Explorer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {NEIGHBORHOODS.map(area => (
                <div 
                    key={area.id}
                    onClick={() => setSelected(selected === area.id ? null : area.id)}
                    className={`bg-white rounded-3xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer group h-fit ${
                        selected === area.id 
                        ? 'border-indigo-500 ring-4 ring-indigo-50 shadow-2xl scale-[1.02] z-10' 
                        : 'border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]'
                    }`}
                >
                    <div className="h-40 md:h-48 relative overflow-hidden">
                        <img src={area.imageUrl} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="text-2xl font-bold">{area.name}</h4>
                            <p className="text-sm opacity-90 font-medium">{area.vibe}</p>
                        </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${selected === area.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}`}>
                        <div className="p-5 bg-white">
                            {/* Always visible info on desktop if space allows, but using expand on mobile/tablet */}
                             <div className="flex gap-4 mb-4">
                                <div className="flex flex-col items-center flex-1 p-2 bg-slate-50 rounded-xl">
                                    <Train className="w-5 h-5 text-indigo-500 mb-1" />
                                    <span className="text-xs font-bold text-slate-700">{area.commuteTime} min</span>
                                    <span className="text-[10px] text-slate-400">to Center</span>
                                </div>
                                <div className="flex flex-col items-center flex-1 p-2 bg-slate-50 rounded-xl">
                                    <Coffee className="w-5 h-5 text-orange-500 mb-1" />
                                    <span className="text-xs font-bold text-slate-700">High</span>
                                    <span className="text-[10px] text-slate-400">Livability</span>
                                </div>
                             </div>
                             <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                Perfect for those who value {area.tags[0].toLowerCase()} and {area.tags[1].toLowerCase()}. 
                                Popular among {area.id === '3' ? 'students' : 'young professionals'}.
                             </p>
                             <div className="flex flex-wrap gap-2 mb-4">
                                {area.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                             </div>
                             <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-indigo-600 hover:shadow-lg active:scale-95 transition-all duration-200 shadow-lg">
                                View Apartments
                             </button>
                        </div>
                    </div>
                     {/* Hint for mobile interaction if not selected */}
                    {!selected && (
                        <div className="p-4 md:hidden text-center text-xs font-bold text-indigo-500 uppercase tracking-widest animate-pulse">
                            Tap to Explore
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};