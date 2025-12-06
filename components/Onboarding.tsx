import React, { useState } from 'react';
import { UserPersona } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface OnboardingProps {
  onComplete: (persona: UserPersona, interests: string[]) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState<UserPersona | null>(null);
  const [interests, setInterests] = useState<string[]>([]);

  const handleInterestToggle = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const finish = () => {
    if (persona) onComplete(persona, interests);
  };

  return (
    <div className="h-screen bg-white flex flex-col p-8 max-w-md mx-auto">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1 rounded-full mb-8">
        <div 
            className="bg-indigo-600 h-1 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${(step / 3) * 100}%` }}
        ></div>
      </div>

      {step === 1 && (
        <div className="flex-1 flex flex-col justify-center animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Hej! 👋</h1>
          <p className="text-xl text-slate-500 mb-8">Welcome to Linköping. Let's make this city yours.</p>
          
          <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">I am a...</h3>
          <div className="space-y-3">
            {Object.values(UserPersona).map((p) => (
              <button
                key={p}
                onClick={() => { setPersona(p); setStep(2); }}
                className="w-full p-4 rounded-xl border-2 border-slate-100 text-left font-bold text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:shadow-md active:scale-[0.98] transition-all duration-200 flex justify-between items-center group"
              >
                {p} <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 flex flex-col justify-center animate-fadeIn">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">What's your vibe?</h2>
          <p className="text-slate-500 mb-8">Select 3 things you care about.</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['Nightlife', 'Tech', 'Nature', 'Startups', 'Sustainability', 'Gaming', 'Music', 'Food', 'Sports'].map(tag => (
              <button
                key={tag}
                onClick={() => handleInterestToggle(tag)}
                className={`px-4 py-3 rounded-full font-bold text-sm border-2 transition-all duration-200 active:scale-95 ${
                  interests.includes(tag) 
                  ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg scale-105' 
                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-slate-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(3)}
            disabled={interests.length === 0}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg disabled:opacity-50 hover:bg-slate-800 hover:shadow-xl active:scale-[0.98] transition-all duration-200"
          >
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">You're all set!</h2>
          <p className="text-slate-500 mb-8">We've customized your city guide based on your profile.</p>
          
          <button
            onClick={finish}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Start Exploring
          </button>
        </div>
      )}
    </div>
  );
};