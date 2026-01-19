
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';

type ConfigMode = 'none' | 'step-by-step' | 'template';

// Updated export name to Step8 to match step ID 8
export const Step8: React.FC<{ lang: Language }> = ({ lang }) => {
  const [mode, setMode] = useState<ConfigMode>('none');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const isRtl = lang === 'fa';
  const totalSteps = 10;

  // Pattern requested: https://storage.googleapis.com/dnsst/images/step-01.jpg
  const getImgSrc = (idx: number) => `https://storage.googleapis.com/dnsst/images/step-${(idx + 1).toString().padStart(2, '0')}.jpg`;

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === null ? 0 : (prev + 1) % totalSteps));
  }, [totalSteps]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === null ? 0 : (prev - 1 + totalSteps) % totalSteps));
  }, [totalSteps]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      // Fixed typo: removed 'tag' keyword that was breaking the syntax
      if (e.key === 'ArrowRight') isRtl ? handlePrev() : handleNext();
      if (e.key === 'ArrowLeft') isRtl ? handleNext() : handlePrev();
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, isRtl, handleNext, handlePrev, handleClose]);

  const renderTemplate = () => (
    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
      <div className={`bg-slate-900 rounded-2xl p-6 font-sans text-sm text-slate-300 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <h3 className={`text-blue-400 font-bold border-b border-slate-800 pb-2 flex items-center gap-2 ${isRtl ? 'flex-row-reverse font-vazir' : 'flex-row'}`}>
           🚀 {isRtl ? 'راهنمای اتصال DNSTT (فقط مخصوص SSH)' : 'DNSTT Connectivity Guide (SSH only)'}
        </h3>
        
        {isRtl ? (
          <ol className="space-y-4 font-vazir">
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۱.</span>
              <span>اپلیکیشن HTTP Injector برای <a href="https://play.google.com/store/apps/details?id=com.evozi.injector" className="underline text-blue-400 hover:text-blue-300">اندروید</a> یا <a href="https://apps.apple.com/us/app/http-injector/id1659992827" className="underline text-blue-400 hover:text-blue-300">آیفون</a> دانلود کنید</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۲.</span>
              <span>فایل کانفیگ نمونه را از <a href="https://github.com/ErFUN-KH/dnstt-deploy/raw/refs/heads/more-instructions-and-examples/clinet/Android-IOS/example.ehi" className="underline text-emerald-400 hover:text-emerald-300">اینجا (example.ehi)</a> دانلود کنید</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۳.</span>
              <span>فایل کانفیگ رو در اپ ایمپورت کنید</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۴.</span>
              <span>بروید به تنظیمات اپ <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white text-[11px]" dir="ltr">settings &gt; Secure Shell (SSH) &gt; Password</code> و پسوردی که برای یوزر <code className="text-emerald-400">dnstt</code> روی سرور ساختید رو اینجا وارد کنید</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۵.</span>
              <span>در همان بخش تنظیمات SSH، مقدار <span className="text-white font-bold">Local Port</span> را برابر با <code className="text-blue-400">5300</code> قرار دهید.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۶.</span>
              <span>بروید به تنظیمات <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white text-[11px]" dir="ltr">settings &gt; DNSTT (DNS)</code></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۷.</span>
              <span>نام دامنه خود را در این قسمت وارد کنید: <span className="text-white font-bold">DNSTT Nameserver</span></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۸.</span>
              <span>کلید عمومی که بعد از اجرای اسکریپت دریافت کردید را اینجا وارد کنید: <span className="text-emerald-400 font-bold">DNSTT Public Key</span></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">۹.</span>
              <span>یک سرور DNS ایرانی را در قسمت <span className="text-white font-bold">DNS Resolver Address</span> وارد کنید. می‌توانید تمام DNS های ایرانی را <a href="https://dnstt.network/ir_dns_servers.txt" target="_blank" className="underline text-blue-400 hover:text-blue-300">اینجا</a> پیدا کنید.</span>
            </li>
          </ol>
        ) : (
          <ol className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">1.</span>
              <span>Download HTTP Injector for <a href="https://play.google.com/store/apps/details?id=com.evozi.injector" className="underline text-blue-400 hover:text-blue-300">Android</a> or <a href="https://apps.apple.com/us/app/http-injector/id1659992827" className="underline text-blue-400 hover:text-blue-300">iOS</a></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">2.</span>
              <span>Download the example config file <a href="https://github.com/ErFUN-KH/dnstt-deploy/raw/refs/heads/more-instructions-and-examples/clinet/Android-IOS/example.ehi" className="underline text-emerald-400 hover:text-emerald-300">here (example.ehi)</a></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">3.</span>
              <span>Import the config file into the app</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">4.</span>
              <span>Go to <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white text-[11px]">settings &gt; Secure Shell (SSH) &gt; Password</code> and enter your SSH password for the <code className="text-emerald-400">dnstt</code> user</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">5.</span>
              <span>In the SSH configuration connection section, set the <span className="text-white font-bold">Local Port</span> to <code className="text-blue-400">5300</code>.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">6.</span>
              <span>Go to <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white text-[11px]">settings &gt; DNSTT (DNS)</code></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">7.</span>
              <span>Add your domain name to <span className="text-white font-bold">DNSTT Nameserver</span></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">8.</span>
              <span>Add your Public Key to <span className="text-emerald-400 font-bold">DNSTT Public Key</span></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-500 font-bold shrink-0 mt-0.5">9.</span>
              <span>Add a valid Iranian DNS server to <span className="text-white font-bold">DNS Resolver Address</span>. You can find them <a href="https://dnstt.network/ir_dns_servers.txt" target="_blank" className="underline text-blue-400 hover:text-blue-300">here</a>.</span>
            </li>
          </ol>
        )}
      </div>
      <button 
        onClick={() => setMode('none')}
        className="mt-6 text-xs text-slate-400 hover:text-slate-600 font-medium underline block mx-auto py-2"
      >
        {isRtl ? "بازگشت به انتخاب روش" : "Back to selection"}
      </button>
    </div>
  );

  const renderStepByStep = () => (
    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(totalSteps)].map((_, i) => {
          const imgSrc = getImgSrc(i);
          return (
            <div key={i} className="flex flex-col gap-2 group">
              <div 
                onClick={() => setSelectedIdx(i)}
                className="aspect-[9/16] bg-slate-100 border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-blue-500 hover:shadow-md transition-all cursor-zoom-in relative"
              >
                <img 
                  src={imgSrc} 
                  alt={`Step ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'p-4');
                    target.parentElement!.innerHTML = `<span class="text-[10px] text-slate-400 font-bold">Step ${i+1}</span>`;
                  }}
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest group-hover:text-blue-500 transition-colors">
                {isRtl ? `مرحله ${i + 1}` : `Step ${i + 1}`}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300"
          onClick={handleClose}
        >
          <div className="relative max-w-full md:max-w-sm w-full animate-in zoom-in-95 duration-300 flex flex-col items-center">
            {/* Top Toolbar - Ensuring it fits mobile screens */}
            <div className="w-full mb-6 flex items-center justify-between text-white font-bold px-1">
               <span className="bg-slate-900/90 px-4 py-2 rounded-full text-[11px] md:text-xs tracking-widest border border-slate-700 shadow-2xl backdrop-blur-sm">
                  {isRtl ? `تصویر ${selectedIdx + 1} از ${totalSteps}` : `STEP ${selectedIdx + 1} OF ${totalSteps}`}
               </span>
               <button 
                className="w-12 h-12 bg-red-600/90 hover:bg-red-500 rounded-full flex items-center justify-center transition-all border border-red-400 shadow-2xl group active:scale-95"
                onClick={handleClose}
                aria-label="Close"
              >
                <svg className="w-6 h-6 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Navigation Buttons (Desktop Only) */}
            <button 
              className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all text-white border border-white/20 hidden lg:flex active:scale-90"
              onClick={handlePrev}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <button 
              className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all text-white border border-white/20 hidden lg:flex active:scale-90"
              onClick={handleNext}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Main Image Container - Added padding to force space from edges */}
            <div className="relative group/img cursor-default w-full max-h-[60vh] md:max-h-[75vh] flex justify-center bg-black/20 rounded-3xl overflow-hidden border border-slate-800/50" onClick={(e) => e.stopPropagation()}>
              <img 
                key={selectedIdx}
                src={getImgSrc(selectedIdx)} 
                alt={`Expanded Step ${selectedIdx + 1}`} 
                className="max-w-full max-h-[60vh] md:max-h-[75vh] h-auto animate-in fade-in zoom-in-95 duration-500 object-contain"
              />
              
              {/* Mobile Tap Areas for navigation */}
              <div className="lg:hidden absolute inset-y-0 left-0 w-1/3" onClick={handlePrev} />
              <div className="lg:hidden absolute inset-y-0 right-0 w-1/3" onClick={handleNext} />
            </div>

            {/* Bottom Help & Navigation */}
            <div className="mt-8 flex flex-col items-center gap-6 w-full">
               <div className="flex gap-4 md:hidden">
                  <button onClick={handlePrev} className="w-14 h-14 bg-slate-800 rounded-full text-white border border-slate-700 shadow-2xl flex items-center justify-center active:scale-90">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                  <button onClick={handleNext} className="w-14 h-14 bg-slate-800 rounded-full text-white border border-slate-700 shadow-2xl flex items-center justify-center active:scale-90">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                  </button>
               </div>
               <p className="text-slate-400 text-[10px] md:text-xs text-center font-medium bg-slate-900/80 backdrop-blur-sm px-6 py-2.5 rounded-2xl border border-slate-800 shadow-xl">
                  {isRtl ? 'از کلیدهای جهت‌نما ⌨️ برای جابجایی استفاده کنید' : 'Use arrow keys ⌨️ to navigate'}
               </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-6 text-center leading-relaxed">
        {isRtl 
          ? "برای مشاهده بهتر، روی هر تصویر کلیک کنید تا بزرگ‌نمایی شود." 
          : "Click on any image to enlarge and see details."}
      </p>
      
      <button 
        onClick={() => setMode('none')}
        className="mt-8 text-xs text-slate-400 hover:text-slate-600 font-medium underline block mx-auto py-2"
      >
        {isRtl ? "بازگشت به انتخاب روش" : "Back to selection"}
      </button>
    </div>
  );

  return (
    <div className="space-y-8">
      {mode === 'none' && (
        <div className="space-y-6 text-center py-10 animate-in fade-in duration-500">
          <p className="text-slate-600 max-w-md mx-auto px-4">
            {isRtl 
              ? "چگونه می‌خواهید اپلیکیشن HTTP Injector را پیکربندی کنید؟" 
              : "How would you like to configure the HTTP Injector app?"}
          </p>
          <div className={`flex flex-col md:flex-row gap-4 justify-center items-stretch px-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <button 
              onClick={() => setMode('step-by-step')}
              className="flex-1 max-w-xs p-6 bg-white border-2 border-slate-100 hover:border-blue-500 rounded-3xl transition-all group shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h6 className="font-bold text-slate-900 mb-1">{isRtl ? "راهنمای تصویری" : "Visual Guide"}</h6>
              <p className="text-xs text-slate-500">{isRtl ? "مشاهده اسکرین‌شات‌های محیط اپلیکیشن" : "Step-by-step screenshots"}</p>
            </button>

            <button 
              onClick={() => setMode('template')}
              className="flex-1 max-w-xs p-6 bg-white border-2 border-slate-100 hover:border-emerald-500 rounded-3xl transition-all group shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h6 className="font-bold text-slate-900 mb-1">{isRtl ? "چک‌لیست سریع (Template)" : "Quick Template Checklist"}</h6>
              <p className="text-xs text-slate-500">{isRtl ? "مناسب برای کاربران آشنا با اپ" : "For users familiar with the app"}</p>
            </button>
          </div>
        </div>
      )}

      {mode === 'template' && renderTemplate()}
      {mode === 'step-by-step' && renderStepByStep()}
    </div>
  );
};
