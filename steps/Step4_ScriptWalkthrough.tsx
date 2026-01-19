
import React from 'react';
import { Language } from '../types';

// Updated export name to Step5 to match step ID 5
export const Step5: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  return (
    <div className="space-y-6 w-full min-w-0 overflow-hidden">
      <p className="text-slate-700">
        {isRtl 
          ? "پس از اجرای اسکریپت، مراحل تعاملی زیر را با دقت دنبال کنید:" 
          : "After executing the script, carefully follow these interactive setup prompts:"}
      </p>

      <div className="space-y-4">
        {/* Subdomain */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-blue-200 transition-colors">
          <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">1</span>
            <div>
              <h5 className="font-bold text-slate-900 text-sm md:text-base">{isRtl ? "نام دامنه (Nameserver Subdomain)" : "Nameserver Subdomain"}</h5>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                {isRtl ? "زیردامنه‌ای که در مرحله ۲ برای NS تنظیم کردید را وارد کنید (مثلاً t.example.com)." : "Enter the specific subdomain you configured for your NS record in Step 2."}
              </p>
            </div>
          </div>
        </div>

        {/* MTU */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-blue-200 transition-colors">
          <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">2</span>
            <div className="min-w-0 flex-1">
              <h5 className="font-bold text-slate-900 text-sm md:text-base">{isRtl ? "تنظیم مقدار MTU" : "MTU Configuration"}</h5>
              <p className="text-xs md:text-sm text-slate-600 mt-1 mb-3">
                {isRtl ? "مقدار MTU را بر اساس کیفیت شبکه خود انتخاب کنید:" : "Select the MTU value based on your network stability:"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-2 md:p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] md:text-xs">
                  <span className="font-bold block text-emerald-800">1400: {isRtl ? "پایدار/سریع" : "Stable/Fast"}</span>
                  <span className="text-emerald-600 opacity-80 truncate block">{isRtl ? "فیبر نوری و پهنای باند بالا" : "Fiber / High-speed networks"}</span>
                </div>
                <div className="p-2 md:p-3 bg-blue-50 border border-blue-100 rounded-xl text-[10px] md:text-xs">
                  <span className="font-bold block text-blue-800">1232: {isRtl ? "پیش‌فرض" : "Default"}</span>
                  <span className="text-blue-600 opacity-80 truncate block">{isRtl ? "مقدار استاندارد پیشنهادی" : "Standard balanced value"}</span>
                </div>
                <div className="p-2 md:p-3 bg-amber-50 border border-amber-100 rounded-xl text-[10px] md:text-xs">
                  <span className="font-bold block text-amber-800">1200: {isRtl ? "ناپایدار" : "Unstable"}</span>
                  <span className="text-amber-600 opacity-80 truncate block">{isRtl ? "شبکه‌های ADSL یا ضعیف" : "Standard ADSL / Flaky lines"}</span>
                </div>
                <div className="p-2 md:p-3 bg-red-50 border border-red-100 rounded-xl text-[10px] md:text-xs">
                  <span className="font-bold block text-red-800">512: {isRtl ? "محدود شده" : "Restricted"}</span>
                  <span className="text-red-600 opacity-80 truncate block">{isRtl ? "اینترنت موبایل با فیلترینگ شدید" : "Highly restricted mobile data"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mode */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-blue-200 transition-colors">
          <div className={`flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">3</span>
            <div>
              <h5 className="font-bold text-slate-900 text-sm md:text-base">{isRtl ? "حالت تونل (Tunnel Mode)" : "Tunnel Mode"}</h5>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                {isRtl ? "در لیست گزینه‌ها، حالت SSH را انتخاب کنید تا تونل استاندار برقرار شود." : "Choose the SSH option from the list to establish a standard secure tunnel."}
              </p>
            </div>
          </div>
        </div>

        {/* Completion Info */}
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 md:p-5 mt-6 w-full">
          <div className={`flex items-center gap-2 mb-3 text-slate-800 font-bold ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-xs md:text-sm">{isRtl ? "مرحله نهایی و دریافت خروجی" : "Completion & Key Generation"}</span>
          </div>
          <p className="text-[11px] md:text-xs text-slate-600 leading-relaxed mb-4">
            {isRtl 
              ? "پس از تایید موارد بالا، اسکریپت به صورت خودکار سرویس‌ها را پیکربندی کرده و در انتها خلاصه‌ای از تنظیمات را به همراه یک کلید عمومی (Public Key) چاپ می‌کند." 
              : "Once confirmed, the script auto-configures the services. It ends by printing a configuration summary and a unique Public Key."}
          </p>
          
          <div className="bg-slate-900 rounded-xl p-3 md:p-4 font-mono text-[9px] md:text-[11px] text-slate-400 overflow-x-auto border border-slate-800 scrollbar-hide" dir="ltr">
            <div className="text-blue-400 opacity-70 border-b border-slate-800 pb-2 mb-2 uppercase tracking-tighter">Sample Setup Finish</div>
            <div className="space-y-1">
              <div className="pl-3 truncate">Nameserver: <span className="text-slate-200">t.example.com</span></div>
              <div className="pl-3">MTU: <span className="text-slate-200">1232</span></div>
              <div className="pl-3">Mode: <span className="text-slate-200">ssh</span></div>
              <div className="mt-3 text-blue-400">Public Key:</div>
              <div className="pl-1 text-emerald-400 break-all bg-emerald-950/30 p-2 rounded mt-1 border border-emerald-900/50">65406c2f794cb5996f019f2a24c586119565011933c2761858c49929255761</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
