
import React from 'react';
import { Language } from '../types';

export const Step4: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  const command = "bash <(curl -Ls https://raw.githubusercontent.com/bugfloyd/dnstt-deploy/main/dnstt-deploy.sh)";

  return (
    <div className="space-y-6 w-full min-w-0 overflow-hidden">
      <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
        <p className="text-slate-700 leading-relaxed">
          {isRtl 
            ? "حالا که به سرور متصل هستید، فقط کافیست دستور زیر را کپی کرده و در همان پنجره ترمینال اجرا کنید." 
            : "Now that you are connected to your server, simply copy the command below and run it in that same terminal window."}
        </p>
      </div>

      {/* Execution Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">1</div>
          <span className="text-xs font-bold text-slate-600">{isRtl ? "کپی کردن دستور" : "Copy Command"}</span>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">2</div>
          <span className="text-xs font-bold text-slate-600">{isRtl ? "چسباندن در ترمینال" : "Paste in Terminal"}</span>
        </div>
        <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">3</div>
          <span className="text-xs font-bold text-slate-600">{isRtl ? "زدن کلید اینتر (Enter)" : "Press Enter"}</span>
        </div>
      </div>

      {/* Command Block */}
      <div className="group relative w-full">
        <div className={`absolute -top-3 ${isRtl ? 'right-4' : 'left-4'} px-2 bg-white text-[10px] font-bold text-slate-400 uppercase tracking-widest z-10 border border-slate-100 rounded`}>
          {isRtl ? "دستور نهایی" : "Installation Command"}
        </div>
        <div className="bg-slate-900 rounded-3xl p-5 md:p-8 pt-10 font-mono text-xs md:text-sm text-blue-400 overflow-x-auto shadow-2xl relative group border border-slate-800" dir="ltr">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(command);
              // Simple feedback would be nice but keeping it minimal as requested
            }}
            className="absolute top-4 right-6 bg-slate-800 hover:bg-blue-600 text-white transition-all p-2 rounded-xl border border-slate-700 active:scale-90"
            title="Copy to clipboard"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
            </svg>
          </button>
          <code className="whitespace-pre-wrap break-all pr-10 block leading-relaxed selection:bg-blue-500/30">
            {command}
          </code>
        </div>
      </div>

      <div className={`bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
        <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-xs text-blue-800 leading-relaxed">
          {isRtl 
            ? "این دستور به طور خودکار تمام ابزارهای لازم را دانلود و آماده نصب می‌کند. هیچ کار فنی پیچیده‌ای نیاز نیست انجام دهید." 
            : "This command automatically downloads all necessary tools and prepares the installation. You don't need to perform any complex manual tasks."}
        </p>
      </div>
    </div>
  );
};
