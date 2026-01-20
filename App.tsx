
import React, { useState } from 'react';
import { STEP_METADATA } from './constants';
import { TermTooltip } from './components/TermTooltip';
import { Language } from './types';

// Step components
import { Step1 } from './steps/Step1_Prerequisites';
import { Step2 } from './steps/Step2_DomainSetup';
import { Step3 } from './steps/Step3_SSHConnection';
import { Step4 } from './steps/Step3_Deployment';
import { Step5 } from './steps/Step4_ScriptWalkthrough';
import { Step6 } from './steps/Step5_Summary';
import { Step7 } from './steps/Step6_ClientApps';
import { Step8 } from './steps/Step7_HttpInjectorConfig';
import { Step9 } from './steps/Step8_Support';

const App: React.FC = () => {
  // Default language set to FA (Persian)
  const [lang, setLang] = useState<Language>('fa');
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const metadata = STEP_METADATA[currentStepIdx];
  const isRtl = lang === 'fa';

  const renderStepContent = () => {
    switch(metadata.id) {
      case 1: return <Step1 lang={lang} />;
      case 2: return <Step2 lang={lang} />;
      case 3: return <Step3 lang={lang} />;
      case 4: return <Step4 lang={lang} />;
      case 5: return <Step5 lang={lang} />;
      case 6: return <Step6 lang={lang} />;
      case 7: return <Step7 lang={lang} />;
      case 8: return <Step8 lang={lang} />;
      case 9: return <Step9 lang={lang} />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 transition-all duration-300 flex flex-col w-full overflow-x-hidden ${isRtl ? 'font-vazir' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">D</div>
            <h1 className="font-bold text-slate-800 tracking-tight text-sm md:text-base whitespace-nowrap">DNSTT <span className="text-blue-600">{isRtl ? 'راهنما' : 'Guide'}</span></h1>
          </div>
          
          <div className={`flex items-center gap-2 md:gap-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* GitHub Star Button */}
            <a 
              href="https://github.com/its-pixelion/dnstt_walkthrough" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[10px] md:text-xs font-bold hover:bg-slate-800 transition-all shadow-sm active:scale-95 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">{isRtl ? 'ستاره در گیت‌هاب' : 'Star on GitHub'}</span>
              <span className="sm:hidden">{isRtl ? 'گیت‌هاب' : 'Star'}</span>
            </a>

            <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200" dir="ltr">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-md text-[10px] md:text-xs font-bold transition-all flex items-center gap-1.5 ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('fa')}
                className={`px-3 py-1 rounded-md text-[10px] md:text-xs font-bold transition-all flex items-center gap-1.5 ${lang === 'fa' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                FA
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 md:py-16 flex-grow w-full">
        {/* Progress Bar Container */}
        <div className="w-full mb-8 relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-hide w-full no-scrollbar">
            {STEP_METADATA.map((s, i) => (
              <button 
                key={s.id}
                onClick={() => setCurrentStepIdx(i)}
                className={`flex-shrink-0 min-w-[50px] md:flex-1 h-1.5 rounded-full transition-all duration-300 ${i === currentStepIdx ? 'bg-blue-600' : i < currentStepIdx ? 'bg-blue-300' : 'bg-slate-200'}`}
                title={s.title[lang]}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 w-full min-w-0">
          <div className="bg-white rounded-3xl p-5 md:p-10 shadow-sm border border-slate-100 min-h-[400px] md:min-h-[500px] flex flex-col w-full">
            <div className="mb-6 md:mb-8">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[9px] md:text-[10px] font-bold rounded-full mb-3 md:mb-4 uppercase tracking-widest">
                {isRtl ? `مرحله ${metadata.id} از ${STEP_METADATA.length}` : `STEP ${metadata.id} OF ${STEP_METADATA.length}`}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">{metadata.title[lang]}</h2>
              <h3 className="text-slate-500 text-base md:text-lg">{metadata.description[lang]}</h3>
            </div>

            <div className="flex-grow min-w-0 overflow-hidden">
              {renderStepContent()}
            </div>

            {metadata.terms.length > 0 && (
              <div className="mt-8 md:mt-10 border-t border-slate-100 pt-6">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block w-full mb-2">
                    {isRtl ? 'اصطلاحات فنی:' : 'Technical Terms:'}
                  </span>
                  {metadata.terms.map(term => (
                    <TermTooltip key={term} termKey={term} lang={lang} />
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className={`mt-10 md:mt-12 flex items-center justify-between border-t border-slate-100 pt-6 md:pt-8 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
              <button 
                onClick={() => setCurrentStepIdx(prev => Math.max(0, prev - 1))}
                disabled={currentStepIdx === 0}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-0 transition-all flex items-center gap-2 text-sm md:text-base ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                {isRtl ? 'قبلی' : 'Previous'}
              </button>
              <button 
                onClick={() => setCurrentStepIdx(prev => Math.min(STEP_METADATA.length - 1, prev + 1))}
                className={`px-5 md:px-8 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all flex items-center gap-2 text-sm md:text-base ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {currentStepIdx === STEP_METADATA.length - 1 ? (isRtl ? 'پایان' : 'Finish') : (isRtl ? 'مرحله بعدی' : 'Next Step')}
                <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-10 px-4 mt-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 text-slate-500 text-sm">
            {/* Disclaimer & Info */}
            <div className={`flex flex-col gap-3 ${isRtl ? 'text-right' : 'text-left'}`}>
              <p className="font-bold text-slate-900 text-base">DNSTT Installation Walkthrough</p>
              <p className="text-xs italic text-slate-400 max-w-sm leading-relaxed">
                {isRtl ? 'این یک راهنمای غیررسمی است. مسئولیت استفاده از ابزارها و اسکریپت‌های معرفی شده بر عهده کاربر می‌باشد.' : 'This is an unofficial guide. Use community-provided scripts and tools at your own risk.'}
              </p>
            </div>

            {/* Creators Credits */}
            <div className={`flex flex-col gap-3 ${isRtl ? 'text-right' : 'text-left'}`}>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isRtl ? 'سازندگان' : 'Creators'}</p>
              <div className="space-y-4">
                <a href="https://x.com/bugfloyd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                  <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-[11px] group-hover:bg-blue-50 shrink-0 font-bold border border-slate-200">BF</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 group-hover:text-blue-600">bugfloyd</span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {isRtl ? 'توسعه‌دهنده اسکریپت اصلی' : 'Core Script Developer'}
                    </span>
                  </div>
                </a>
                <a href="https://x.com/its_pixel_lion" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-600 transition-colors group">
                  <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-[11px] group-hover:bg-blue-50 shrink-0 font-bold border border-slate-200">PL</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 group-hover:text-blue-600">pixeLion</span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {isRtl ? 'طراحی راهنمای تعاملی' : 'Interactive Guide Design'}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3" dir="ltr">
              <a 
                href="https://github.com/bugfloyd/dnstt-deploy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg border border-slate-200 text-xs font-bold transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Installation Script
              </a>
              <a 
                href="https://www.bamsoftware.com/software/dnstt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg border border-slate-200 text-xs font-bold transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                DNSTT Official
              </a>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tighter uppercase italic">
              Empowering Connectivity for a Free Internet
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
