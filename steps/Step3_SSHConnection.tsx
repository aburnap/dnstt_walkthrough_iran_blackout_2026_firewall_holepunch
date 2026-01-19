
import React from 'react';
import { Language } from '../types';

export const Step3: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed">
        {isRtl 
          ? "برای نصب اسکریپت، ابتدا باید وارد محیط فرمان (Terminal) سرور خود شوید. این کار از طریق پروتکل SSH انجام می‌شود." 
          : "To install the script, you first need to access your server's command-line interface (Terminal). This is done using the SSH protocol."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tools Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <h5 className={`font-bold text-slate-900 mb-3 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            {isRtl ? "ابزارهای پیشنهادی" : "Recommended Tools"}
          </h5>
          <ul className={`text-sm text-slate-600 space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
            <li>• <strong>Windows:</strong> {isRtl ? "استفاده از CMD یا PowerShell" : "Use CMD or PowerShell"}</li>
            <li>• <strong>Mobile (Android/iOS):</strong> <span className="text-blue-600 font-medium">Termius</span> {isRtl ? "یا" : "or"} <span className="text-blue-600 font-medium">JuiceSSH</span></li>
            <li>• <strong>Mac/Linux:</strong> {isRtl ? "استفاده از Terminal خود سیستم" : "Use built-in Terminal"}</li>
          </ul>
        </div>

        {/* Login Info */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h5 className={`font-bold text-blue-900 mb-3 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
            {isRtl ? "اطلاعات ورود" : "Login Credentials"}
          </h5>
          <p className="text-xs text-blue-800 leading-relaxed">
            {isRtl 
              ? "هنگام خرید VPS، دیتاسنتر اطلاعات زیر را برای شما ایمیل می‌کند:" 
              : "When you buy a VPS, the provider emails you these details:"}
          </p>
          <ul className="text-xs font-mono mt-3 space-y-1 text-blue-700">
            <li className="flex justify-between"><span>IP:</span> <span>1.2.3.4</span></li>
            <li className="flex justify-between"><span>Username:</span> <span>root</span></li>
            <li className="flex justify-between"><span>Password:</span> <span>********</span></li>
          </ul>
        </div>
      </div>

      {/* The Command */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden shadow-lg relative">
        <div className="flex items-center gap-2 mb-4 text-slate-400 text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
          </div>
          <span className="ml-2">{isRtl ? "نحوه تایپ دستور" : "How to type the command"}</span>
        </div>
        
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          {isRtl 
            ? "در ترمینال خود، دستور زیر را تایپ کرده و اینتر بزنید. سپس پسورد را وارد کنید (هنگام تایپ پسورد، چیزی نمایش داده نمی‌شود):" 
            : "In your terminal, type this command and press Enter. Then enter your password (note: characters won't appear while typing):"}
        </p>

        <div className="bg-black/50 p-4 rounded-xl border border-slate-700 group relative">
          <code className="text-emerald-400 font-mono text-sm md:text-base break-all" dir="ltr">
            ssh root@<span className="text-white underline decoration-emerald-500/50 underline-offset-4">[SERVER_IP]</span>
          </code>
          <div className="absolute top-2 right-2 text-[9px] font-bold text-slate-600 tracking-tighter uppercase italic">Example</div>
        </div>

        <div className={`mt-6 p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 flex items-start gap-3 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
           <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           <p className="text-[11px] md:text-xs text-amber-200/80 leading-relaxed">
             <strong>{isRtl ? "نکته امنیتی:" : "Security Note:"}</strong> {isRtl 
               ? "اگر بار اول است که وصل می‌شوید، پیامی حاوی کلمه 'yes/no' می‌بینید. کلمه 'yes' را تایپ کرده و اینتر بزنید." 
               : "If it's your first time connecting, you might see a 'yes/no' fingerprint message. Type 'yes' and press Enter."}
           </p>
        </div>
      </div>
    </div>
  );
};
