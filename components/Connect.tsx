import React from 'react';
import { MessageCircle, Hash, UserPlus, ArrowRight, Users } from 'lucide-react';

export const Connect: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <header className="md:flex md:items-end md:justify-between animate-fade-in-up">
        <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Connect</h2>
            <p className="text-slate-500 text-sm md:text-base mt-1">Find your squad in Lkpg</p>
        </div>
      </header>

      {/* Grid Layout for Desktop: Buddy + Communities side-by-side or stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Buddy & Chats */}
        <div className="lg:col-span-2 space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            {/* Buddy Matcher */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-[2rem] p-6 md:p-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 opacity-90">
                            <UserPlus className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-wider">City Buddy</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">New to Linköping?</h3>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md">Get matched with a young pro or senior student for coffee and local tips. Break the ice effortlessly.</p>
                    </div>
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow hover:bg-indigo-50 hover:shadow-lg active:scale-95 transition-all duration-200 whitespace-nowrap z-20">
                        Find a Buddy
                    </button>
                </div>
            </div>

             {/* Active Chats */}
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Active Discussions</h3>
                <div className="space-y-3">
                {[
                    { title: 'Best place to study on weekends?', replies: 24, time: '2m ago', tag: 'Study' },
                    { title: 'Anyone going to the Lars Winnerbäck concert?', replies: 156, time: '15m ago', tag: 'Music' },
                    { title: 'Looking for apartment in Vallastaden', replies: 8, time: '1h ago', tag: 'Housing' },
                    { title: 'Cheap lunch spots near University Hospital?', replies: 42, time: '3h ago', tag: 'Food' },
                ].map((topic, idx) => (
                    <div key={idx} className="bg-white p-4 md:p-5 rounded-xl border border-slate-100 flex items-center justify-between hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer group shadow-sm">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-slate-50 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-indigo-50 group-hover:scale-110 transition-all duration-300">
                                <MessageCircle className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-700 transition-colors text-sm md:text-base">{topic.title}</h4>
                                <div className="flex gap-2 items-center text-xs text-slate-500 mt-1">
                                    <span className="font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">{topic.tag}</span>
                                    <span>• {topic.replies} replies</span>
                                    <span>• {topic.time}</span>
                                </div>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* Right Col: Communities */}
        <div className="lg:col-span-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">Communities</h3>
                <span className="text-indigo-600 text-sm font-bold cursor-pointer hover:underline active:text-indigo-800 transition-colors">See All</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {[
                    { name: 'Startups @ Mjärdevi', members: '1.2k', color: 'bg-orange-100 text-orange-600' },
                    { name: 'Linköping Gamers', members: '850', color: 'bg-purple-100 text-purple-600' },
                    { name: 'Sustainable City', members: '430', color: 'bg-green-100 text-green-600' },
                    { name: 'Intl Foodies', members: '2.1k', color: 'bg-red-100 text-red-600' },
                    { name: 'LiU Sport', members: '3.5k', color: 'bg-blue-100 text-blue-600' },
                    { name: 'Musikhjälpen', members: '900', color: 'bg-pink-100 text-pink-600' },
                ].map((group, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer flex flex-col items-center text-center group hover:border-indigo-100">
                        <div className={`w-12 h-12 rounded-full ${group.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                            <Hash className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1 leading-tight group-hover:text-indigo-700 transition-colors">{group.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-medium bg-slate-50 px-2 py-0.5 rounded-full mt-1">
                             <Users className="w-3 h-3" />
                             {group.members}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};