import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Discover } from './components/Discover';
import { Connect } from './components/Connect';
import { Grow } from './components/Grow';
import { Stay } from './components/Stay';
import { Profile } from './components/Profile';
import { Onboarding } from './components/Onboarding';
import { Tab, UserPersona } from './types';
import { getGeminiSuggestion } from './services/geminiService';
import { Sparkles, X } from 'lucide-react';

const App: React.FC = () => {
  const [onboarded, setOnboarded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DISCOVER);
  const [userPersona, setUserPersona] = useState<UserPersona>(UserPersona.STUDENT_INTL);
  const [interests, setInterests] = useState<string[]>([]);
  
  // AI State
  const [aiTip, setAiTip] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);
  const [showAiBanner, setShowAiBanner] = useState(true);

  const handleOnboardingComplete = (p: UserPersona, i: string[]) => {
    setUserPersona(p);
    setInterests(i);
    setOnboarded(true);
  };

  // Fetch AI tip when tab changes or initial load
  useEffect(() => {
    if (!onboarded) return;

    const fetchTip = async () => {
      setLoadingAi(true);
      const tip = await getGeminiSuggestion(userPersona, interests, activeTab);
      setAiTip(tip);
      setLoadingAi(false);
    };

    fetchTip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, onboarded]);

  if (!onboarded) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case Tab.DISCOVER: return <Discover />;
      case Tab.CONNECT: return <Connect />;
      case Tab.GROW: return <Grow />;
      case Tab.STAY: return <Stay />;
      case Tab.PROFILE: return <Profile />;
      default: return <Discover />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <Layout activeTab={activeTab} onTabChange={setActiveTab}>
        
        {/* AI Assistant Banner - Responsive */}
        {showAiBanner && (
            <div className="bg-slate-900 text-white px-4 py-3 md:px-6 md:py-4 flex items-start md:items-center gap-3 sticky top-0 z-20 shadow-md">
                <div className="mt-1 md:mt-0">
                    <Sparkles className={`w-4 h-4 text-yellow-400 ${loadingAi ? 'animate-spin' : ''}`} />
                </div>
                <div className="flex-1 md:flex md:items-center md:gap-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5 md:mb-0 whitespace-nowrap">
                        LiveLinköping AI
                    </p>
                    <p className="text-sm font-medium leading-snug md:leading-normal">
                        {loadingAi ? "Curating local tips..." : aiTip}
                    </p>
                </div>
                <button 
                    onClick={() => setShowAiBanner(false)}
                    className="text-slate-500 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        )}

        <div className="w-full h-full">
            {renderContent()}
        </div>
      </Layout>
    </div>
  );
};

export default App;