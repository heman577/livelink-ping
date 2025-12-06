import React, { useState } from 'react';
import { MapPin, Bookmark, Share2, ArrowRight } from 'lucide-react';
import { EventItem } from '../types';

const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Kravall @ Kårallen',
    type: 'party',
    location: 'Campus Valla',
    date: 'Tonight, 22:00',
    attendees: 450,
    imageUrl: 'https://picsum.photos/600/800?random=1',
    isTrending: true,
  },
  {
    id: '2',
    title: 'Tech Tuesday: AI Futures',
    type: 'tech',
    location: 'Mjärdevi Science Park',
    date: 'Tue, 17:00',
    attendees: 85,
    imageUrl: 'https://picsum.photos/600/800?random=2',
  },
  {
    id: '3',
    title: 'Kayaking in Stångån',
    type: 'nature',
    location: 'Tannefors Slussar',
    date: 'Sat, 10:00',
    attendees: 12,
    imageUrl: 'https://picsum.photos/600/800?random=3',
  },
  {
    id: '4',
    title: 'Vintage Market',
    type: 'culture',
    location: 'Agora, Skäggetorp',
    date: 'Sun, 11:00',
    attendees: 230,
    imageUrl: 'https://picsum.photos/600/800?random=4',
    isTrending: true,
  },
  {
    id: '5',
    title: 'After Work Quiz',
    type: 'food',
    location: 'O\'Learys',
    date: 'Fri, 18:00',
    attendees: 60,
    imageUrl: 'https://picsum.photos/600/800?random=5',
  },
  {
    id: '6',
    title: 'Hockey: LHC vs. Frölunda',
    type: 'party',
    location: 'Saab Arena',
    date: 'Thu, 19:00',
    attendees: 5000,
    imageUrl: 'https://picsum.photos/600/800?random=6',
    isTrending: true,
  }
];

export const Discover: React.FC = () => {
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const toggleSave = (id: string) => {
    const next = new Set(saved);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSaved(next);
  };

  const handleShare = (eventTitle: string) => {
    // In a real app, this would use the share API or copy a permalink
    if (navigator.share) {
        navigator.share({
            title: eventTitle,
            text: `Join me at ${eventTitle} in Linköping!`,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(`${eventTitle} - Link copied from LiveLinköping`);
        alert(`Link for "${eventTitle}" copied!`);
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Discover</h2>
          <p className="text-slate-500 text-sm md:text-base mt-1">The best of Linköping, curated for you.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-white rounded-full text-sm font-bold text-slate-600 shadow-sm border border-slate-100 hover:bg-slate-50 active:scale-95 transition-all duration-200">Filter</button>
           <button className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 transition-all duration-200">Explore Map</button>
        </div>
      </header>

      {/* Collections */}
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Curated Collections</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:grid md:grid-cols-5 md:overflow-visible">
          {['Trending', 'Student Life', 'Nightlife', 'Nature', 'Culture'].map((story, i) => (
            <div key={i} className="relative min-w-[140px] md:min-w-0 h-28 md:h-32 rounded-xl overflow-hidden shadow-sm flex-shrink-0 group cursor-pointer ring-1 ring-slate-900/5 hover:ring-indigo-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out active:scale-95">
              <img src={`https://picsum.photos/200/200?random=${10+i}`} alt={story} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <span className="absolute bottom-3 left-3 text-sm md:text-base font-bold text-white group-hover:translate-x-1 transition-transform duration-300">{story}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Feed Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 md:mb-6">Happening Soon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
              
              {/* Image Section */}
              <div className="relative h-64 md:h-56 lg:h-64 overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 rounded-xl px-3 py-2 text-center shadow-lg min-w-[60px] group-hover:scale-105 transition-transform duration-300">
                  <span className="block text-xs font-bold text-indigo-600 uppercase">
                      {event.date.includes('Tonight') ? 'NOW' : event.date.split(',')[0]}
                  </span>
                  <span className="block text-lg font-black leading-none">
                      {event.date.includes('Tonight') ? '22' : '15'}
                  </span>
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
                    <button 
                        onClick={() => handleShare(event.title)}
                        className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => toggleSave(event.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 ${saved.has(event.id) ? 'bg-red-500 text-white shadow-lg' : 'bg-black/20 text-white hover:bg-black/40'}`}
                    >
                      <Bookmark className={`w-5 h-5 ${saved.has(event.id) ? 'fill-current' : ''}`} />
                    </button>
                </div>

                {event.isTrending && (
                  <div className="absolute bottom-4 right-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg animate-fade-in-up">
                    <span className="animate-pulse w-1.5 h-1.5 bg-white rounded-full"></span> Trending
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1 block">{event.type}</span>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-indigo-600 transition-colors duration-200">{event.title}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                      </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                          <img key={i} src={`https://picsum.photos/50/50?random=${20+i}`} className="w-6 h-6 rounded-full border-2 border-white" alt="friend" />
                          ))}
                      </div>
                      <span className="text-xs text-slate-500 font-medium">+{event.attendees} going</span>
                  </div>

                  <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-700 hover:shadow-lg active:scale-95 transition-all duration-200 shadow-lg shadow-slate-200 group/btn">
                      RSVP <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};