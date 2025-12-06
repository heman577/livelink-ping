import React from 'react';
import { Tab } from '../types';
import { Compass, Users, Briefcase, Map, User, Hexagon, Share2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const tabs = [
    { id: Tab.DISCOVER, label: 'Discover', icon: Compass },
    { id: Tab.CONNECT, label: 'Connect', icon: Users },
    { id: Tab.GROW, label: 'Grow', icon: Briefcase },
    { id: Tab.STAY, label: 'Stay', icon: Map },
    { id: Tab.PROFILE, label: 'My City', icon: User },
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'LiveLinköping',
      text: 'Check out this app for Linköping! It helps you discover events, jobs, and communities.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      // In a real app we would use a toast notification here
      alert('App link copied to clipboard! Share it with your friends.');
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 w-full overflow-hidden">
      
      {/* --- DESKTOP/TABLET SIDEBAR --- */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 z-30 flex-shrink-0 h-full">
        <div 
          className="p-6 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onTabChange(Tab.DISCOVER)}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Hexagon className="w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">LiveLkpg</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 group active:scale-95 ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'fill-indigo-200' : 'stroke-[1.5] group-hover:text-slate-900'}`} />
                <span className={`font-semibold ${isActive ? 'font-bold' : ''}`}>
                  {tab.label}
                </span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-4">
           {/* Invite Button */}
           <button 
             onClick={handleShare}
             className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-white border border-indigo-100 text-indigo-600 rounded-xl font-bold text-sm shadow-sm hover:bg-indigo-50 hover:border-indigo-200 active:scale-95 transition-all duration-200"
           >
              <Share2 className="w-4 h-4" />
              Invite Friends
           </button>

           <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white shadow-lg transform transition-transform hover:scale-[1.02] cursor-pointer">
              <p className="text-xs font-medium opacity-80 mb-1">Upcoming Event</p>
              <p className="text-sm font-bold mb-2">Tech Tuesday @ Mjärdevi</p>
              <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg w-full transition-colors font-semibold">
                View Details
              </button>
           </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-full relative w-full overflow-hidden">
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth w-full">
           <div className="max-w-7xl mx-auto w-full min-h-full pb-24 md:pb-8">
              {children}
           </div>
        </div>
      </main>

      {/* --- MOBILE BOTTOM NAV --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-200 active:scale-90 ${
                  isActive ? 'text-indigo-600 -translate-y-1' : 'text-slate-400'
                }`}
              >
                <div className={`relative p-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-indigo-50' : ''}`}>
                    <Icon className={`w-6 h-6 ${isActive ? 'fill-indigo-600 text-indigo-600' : 'stroke-[1.5]'}`} />
                </div>
                <span className={`text-[10px] font-medium transition-opacity duration-200 ${isActive ? 'opacity-100 font-bold' : 'opacity-80'}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};