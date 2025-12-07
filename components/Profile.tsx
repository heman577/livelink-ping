import React from 'react';
import { Award, TrendingUp, Settings, Copy, Gift, Zap } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const PROFILE_DATA = [
  { subject: 'Culture', A: 120, fullMark: 150 },
  { subject: 'Career', A: 98, fullMark: 150 },
  { subject: 'Social', A: 86, fullMark: 150 },
  { subject: 'Nature', A: 99, fullMark: 150 },
  { subject: 'Health', A: 85, fullMark: 150 },
  { subject: 'Food', A: 65, fullMark: 150 },
];

export const Profile: React.FC = () => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText("ALEX-LKPG-2024");
    alert("Referral code copied!");
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-5xl mx-auto">
      <header className="flex justify-between items-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">My City</h2>
        <button className="p-3 rounded-full bg-white shadow-sm border border-slate-100 hover:bg-slate-50 hover:rotate-90 active:scale-90 transition-all duration-300">
            <Settings className="w-5 h-5 text-slate-600" />
        </button>
      </header>

      {/* User Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 transition-all hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <div className="relative mx-auto md:mx-0 group cursor-pointer">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="https://picsum.photos/300/300?random=99" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-indigo-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full border-4 border-white transform transition-transform group-hover:scale-110 group-hover:-rotate-3 shadow-md flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> Lvl 12
            </div>
        </div>
        <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Alex Student</h3>
            <p className="text-slate-500 text-base mb-4 font-medium">Master in Design • LiU</p>
            <div className="flex gap-2 justify-center md:justify-start flex-wrap">
                <span className="text-xs md:text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg font-bold hover:scale-105 hover:-rotate-2 transition-transform cursor-default border border-yellow-200 shadow-sm">Explorer</span>
                <span className="text-xs md:text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-bold hover:scale-105 hover:rotate-2 transition-transform cursor-default border border-blue-200 shadow-sm">Techie</span>
                <span className="text-xs md:text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-lg font-bold hover:scale-105 hover:-rotate-2 transition-transform cursor-default border border-purple-200 shadow-sm">Night Owl</span>
            </div>
        </div>
        <div className="hidden md:flex flex-col items-end px-4 border-l border-slate-100">
            <div className="text-5xl font-black text-slate-900 animate-pulse-slow">845</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">City Points</div>
        </div>
      </div>

      {/* Invite Friends Card */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2rem] p-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform">
                      <Gift className="w-7 h-7 text-white" />
                  </div>
                  <div>
                      <h3 className="font-bold text-2xl mb-1">Invite friends, earn perks</h3>
                      <p className="text-indigo-100 text-sm max-w-sm leading-relaxed">Get premium access to events for every friend who joins LiveLinköping.</p>
                  </div>
              </div>
              <div className="flex items-center gap-2 bg-black/20 p-2 pl-5 rounded-xl backdrop-blur-md border border-white/10 w-full md:w-auto hover:bg-black/30 transition-colors">
                  <span className="font-mono font-bold tracking-widest text-sm flex-1 text-center md:text-left select-all">ALEX-LKPG-2024</span>
                  <button 
                    onClick={handleCopyCode}
                    className="p-2.5 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 active:scale-95 transition-all shadow-sm"
                    title="Copy Code"
                  >
                      <Copy className="w-4 h-4" />
                  </button>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        {/* City Stats / Chart */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 flex flex-col hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-indigo-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Your Linköping Life</h4>
            </div>
            <div className="h-64 w-full flex-1 -ml-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={PROFILE_DATA}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                        name="Alex"
                        dataKey="A"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fill="#6366f1"
                        fillOpacity={0.4}
                        isAnimationActive={true}
                    />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4 font-medium bg-slate-50 py-3 rounded-xl">
                You're becoming a true local! Try more <span className="text-indigo-600 font-bold">Food</span> spots to level up.
            </p>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                Badges Collection
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {[
                    { name: 'Newcomer', color: 'text-green-600 bg-green-100 border-green-200' },
                    { name: 'Party', color: 'text-purple-600 bg-purple-100 border-purple-200' },
                    { name: 'Nature', color: 'text-emerald-600 bg-emerald-100 border-emerald-200' },
                    { name: 'Pro', color: 'text-slate-400 bg-slate-100 border-slate-200 grayscale' },
                    { name: 'Foodie', color: 'text-orange-600 bg-orange-100 border-orange-200' },
                    { name: 'Culture', color: 'text-pink-600 bg-pink-100 border-pink-200' },
                    { name: 'Tech', color: 'text-blue-600 bg-blue-100 border-blue-200' },
                    { name: 'Locked', color: 'text-slate-300 bg-slate-50 border-slate-100 grayscale opacity-40' },
                ].map((badge, i) => (
                    <div key={i} className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 ${badge.color} border-2 hover:scale-110 hover:-rotate-3 active:scale-95 transition-transform duration-200 cursor-pointer shadow-sm`}>
                        <Award className="w-8 h-8" />
                        <span className="text-[10px] md:text-xs font-bold">{badge.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};