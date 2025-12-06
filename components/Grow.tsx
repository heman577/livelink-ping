import React, { useState } from 'react';
import { Briefcase, X, Check, Star, RefreshCw } from 'lucide-react';
import { JobItem } from '../types';

const MOCK_JOBS: JobItem[] = [
  {
    id: '1',
    role: 'UX Design Intern',
    company: 'Saab Aeronautics',
    type: 'internship',
    matchScore: 98,
    tags: ['Design', 'Aerospace', 'Paid'],
  },
  {
    id: '2',
    role: 'Master Thesis: AI in Forestry',
    company: 'Holmen',
    type: 'thesis',
    matchScore: 85,
    tags: ['Research', 'Sustainability'],
  },
  {
    id: '3',
    role: 'Junior Frontend Dev',
    company: 'Sectra',
    type: 'full-time',
    matchScore: 92,
    tags: ['MedTech', 'React', 'Linköping'],
  },
  {
    id: '4',
    role: 'Community Manager',
    company: 'Linköping Science Park',
    type: 'part-time',
    matchScore: 88,
    tags: ['Social', 'Events', 'Networking'],
  },
];

export const Grow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState<string | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setLastDirection(direction);
    setTimeout(() => {
      setLastDirection(null);
      setCurrentIndex((prev) => (prev + 1) % MOCK_JOBS.length);
    }, 300);
  };

  const currentJob = MOCK_JOBS[currentIndex];

  return (
    <div className="p-4 md:p-8 h-full flex flex-col max-w-7xl mx-auto">
      <header className="mb-6 md:text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Grow</h2>
        <p className="text-slate-500 text-sm md:text-base mt-1">Launch your career in Linköping</p>
      </header>

      {/* Card Stack Container */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full">
        
        {/* Background decorative elements for Desktop */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {currentJob ? (
          <div className={`
            relative z-10 w-full max-w-sm md:max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[550px] md:h-[600px]
            transition-transform duration-300 ease-out
            ${lastDirection === 'left' ? '-translate-x-20 -rotate-12 opacity-50' : ''}
            ${lastDirection === 'right' ? 'translate-x-20 rotate-12 opacity-50' : ''}
          `}>
            {/* Header / Image Placeholder */}
            <div className="h-44 md:h-52 bg-slate-900 relative flex items-center justify-center overflow-hidden group cursor-pointer">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
               </div>
               <div className="z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl font-bold text-slate-900 shadow-xl">
                    {currentJob.company.charAt(0)}
                  </div>
                  <h3 className="text-white font-bold text-xl tracking-wide">{currentJob.company}</h3>
               </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-2">{currentJob.role}</h2>
                    <span className="inline-block bg-indigo-50 text-indigo-700 text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide border border-indigo-100">
                        {currentJob.type}
                    </span>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-4 border-green-400 flex items-center justify-center text-sm font-bold text-slate-900 shadow-sm animate-bounce-slow">
                        {currentJob.matchScore}%
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase mt-1">Match</span>
                 </div>
              </div>

              <div className="space-y-4 mb-6 flex-1">
                 <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Join our team in Linköping to build the future of {currentJob.tags[0]}. 
                    Great culture, flexible hours, and central office. We are looking for passionate talents.
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {currentJob.tags.map(tag => (
                        <span key={tag} className="text-xs md:text-sm font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors cursor-default">
                            #{tag}
                        </span>
                    ))}
                 </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 md:p-8 pt-0 grid grid-cols-3 gap-6">
                <button 
                  onClick={() => handleSwipe('left')}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 hover:scale-110 active:scale-90 transition-all duration-200 mx-auto shadow-sm"
                >
                    <X className="w-7 h-7" />
                </button>
                <div className="flex items-center justify-center">
                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 hover:scale-110 active:scale-90 transition-all duration-200 shadow-inner">
                        <Star className="w-6 h-6" />
                    </button>
                </div>
                <button 
                  onClick={() => handleSwipe('right')}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-white shadow-xl hover:bg-emerald-500 hover:shadow-emerald-200 hover:scale-110 active:scale-90 transition-all duration-200 mx-auto"
                >
                    <Check className="w-7 h-7" />
                </button>
            </div>
          </div>
        ) : (
           /* Empty State */
           <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-200 max-w-sm animate-fade-in-up">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <Briefcase className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">All caught up!</h3>
              <p className="text-slate-500 text-base mb-6">You've seen all tailored opportunities for now.</p>
              <button 
                onClick={() => setCurrentIndex(0)}
                className="flex items-center gap-2 mx-auto text-indigo-600 font-bold text-sm bg-indigo-50 px-6 py-3 rounded-full hover:bg-indigo-100 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                  <RefreshCw className="w-4 h-4" />
                  Review Again
              </button>
           </div>
        )}
      </div>
    </div>
  );
};