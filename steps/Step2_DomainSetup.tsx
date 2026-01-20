
import React from 'react';
import { Language } from '../types';

export const Step2: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  
  const exampleConfig = {
    domain: "example.com",
    ipv4: "203.0.113.2",
    ipv6: "2001:db8::2",
    tunnelSub: "k.example.com",
    serverHost: "srv.example.com"
  };

  return (
    <div className="space-y-6 w-full min-w-0 overflow-hidden">
      <div className={`space-y-3 ${isRtl ? 'text-right' : 'text-left'}`}>
        <p className="text-slate-700 leading-relaxed">
          {isRtl 
            ? "ابتدا وارد پنل مدیریت دامنه خود شوید. در این آموزش، ما از مقادیر زیر به عنوان مثال استفاده می‌کنیم:" 
            : "First, log in to your domain management panel. In this guide, we use the following values as examples:"}
        </p>
      </div>

      {/* Example Configuration Table */}
      <div className="bg-slate-900 rounded-3xl p-5 md:p-6 shadow-xl border border-slate-800">
        <h5 className={`text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
          {isRtl ? "مثال تنظیمات" : "Example Configuration"}
        </h5>
        <div className="space-y-3 text-xs md:text-sm">
          <div className={`flex justify-between items-center border-b border-slate-800 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="text-slate-400">{isRtl ? "نام دامنه:" : "Domain name:"}</span>
            <span className="text-white font-mono">{exampleConfig.domain}</span>
          </div>
          <div className={`flex justify-between items-center border-b border-slate-800 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="text-slate-400">{isRtl ? "آی‌پی نسخه ۴ سرور:" : "Server IPv4 address:"}</span>
            <span className="text-blue-400 font-mono">{exampleConfig.ipv4}</span>
          </div>
          <div className={`flex justify-between items-center border-b border-slate-800 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">{isRtl ? "آی‌پی نسخه ۶ سرور:" : "Server IPv6 address:"}</span>
              <span className="text-[9px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded uppercase">{isRtl ? "اختیاری" : "Optional"}</span>
            </div>
            <span className="text-slate-500 font-mono">{exampleConfig.ipv6}</span>
          </div>
          <div className={`flex justify-between items-center border-b border-slate-800 pb-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="text-slate-400">{isRtl ? "زیردامنه تونل:" : "Tunnel subdomain:"}</span>
            <span className="text-emerald-400 font-mono">{exampleConfig.tunnelSub}</span>
          </div>
          <div className={`flex justify-between items-center ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="text-slate-400">{isRtl ? "نام میزبان سرور:" : "Server hostname:"}</span>
            <span className="text-white font-mono">{exampleConfig.serverHost}</span>
          </div>
        </div>
      </div>

      {/* Where to look section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
          <h5 className={`font-bold text-slate-900 mb-3 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            {isRtl ? "کجا را بگردیم؟" : "Where to find settings?"}
          </h5>
          <ul className={`text-xs text-slate-600 space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
            <li>• <strong>Namecheap:</strong> Domain List &gt; Manage &gt; Advanced DNS</li>
            <li>• <strong>Cloudflare:</strong> DNS &gt; Records</li>
            <li>• <strong>GoDaddy:</strong> DNS &gt; Manage Zones</li>
            <li>• <strong>General:</strong> {isRtl ? "جستجو برای DNS Settings یا Manage DNS" : "Search for 'DNS Settings' or 'Advanced DNS'"}</li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl shadow-sm">
          <h5 className={`font-bold text-amber-900 mb-3 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            Cloudflare
          </h5>
          <p className={`text-xs text-amber-800 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
            {isRtl 
              ? "اگر از کلودفلر استفاده می‌کنید، حتماً گزینه Proxy را خاموش کنید (ابر باید خاکستری باشد). DNSTT با پروکسی روشن کار نمی‌کند." 
              : "If using Cloudflare, ensure 'Proxy' is OFF (Grey Cloud). DNSTT will not function with the Cloudflare proxy enabled."}
          </p>
        </div>
      </div>
      
      <div className="space-y-4 bg-slate-50 p-4 md:p-6 rounded-3xl border border-slate-200">
        <div className={isRtl ? "text-right" : "text-left"}>
          <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm md:text-base">
            {isRtl ? "۱. رکورد A (زیردامنه سرور)" : "1. A Record (Server Subdomain)"}
          </h4>
          <p className="text-xs md:text-sm text-slate-600 mb-2">
            {isRtl 
              ? `این رکورد به آی‌پی سرور شما (${exampleConfig.ipv4}) اشاره می‌کند. شما باید آی‌پی ثابت سرور خود را وارد کنید.` 
              : `This record points to your server's static IP (${exampleConfig.ipv4}).`}
          </p>
          <code className="block bg-slate-900 text-white p-3 rounded-lg text-[10px] md:text-xs break-all shadow-inner" dir="ltr">
            Name: srv | Type: A | Value: {exampleConfig.ipv4}
          </code>
        </div>

        <div className={isRtl ? "text-right" : "text-left"}>
          <h4 className="font-bold text-slate-400 border-b border-slate-200 pb-2 mb-3 text-sm md:text-base flex items-center gap-2">
            {isRtl ? "۱.۱. رکورد AAAA (اختیاری)" : "1.1. AAAA Record (Optional)"}
            <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase font-normal">{isRtl ? "اختیاری" : "Optional"}</span>
          </h4>
          <p className="text-xs md:text-sm text-slate-500 mb-2">
            {isRtl 
              ? `اگر سرور شما آی‌پی نسخه ۶ دارد (${exampleConfig.ipv6})، این رکورد را اضافه کنید.` 
              : `If your server has an IPv6 address (${exampleConfig.ipv6}), add this record.`}
          </p>
          <code className="block bg-slate-800 text-slate-400 p-3 rounded-lg text-[10px] md:text-xs break-all shadow-inner" dir="ltr">
            Name: srv | Type: AAAA | Value: {exampleConfig.ipv6}
          </code>
        </div>

        <div className={isRtl ? "text-right" : "text-left"}>
          <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm md:text-base">
            {isRtl ? "۲. رکورد NS (زیردامنه تونل)" : "2. NS Record (Tunnel Subdomain)"}
          </h4>
          <p className="text-xs md:text-sm text-slate-600 mb-2">
            {isRtl 
              ? `این رکورد ترافیک تونل را به زیردامنه قبلی (${exampleConfig.serverHost}) هدایت می‌کند.` 
              : `This record delegates tunnel traffic to the server subdomain (${exampleConfig.serverHost}).`}
          </p>
          
          <div className={`mb-3 p-3 rounded-xl text-[11px] flex items-start gap-2 bg-slate-200/50 text-slate-700`}>
            <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="leading-relaxed">
              <strong>{isRtl ? "نکته:" : "Tip:"}</strong> {isRtl 
                ? `نام زیردامنه NS حتماً باید کوتاه و یک کاراکتری باشد (مثلاً k.${exampleConfig.domain}).` 
                : `The NS subdomain MUST be a single character only (e.g., k.${exampleConfig.domain}).`}
            </p>
          </div>

          <code className="block bg-slate-900 text-white p-3 rounded-lg text-[10px] md:text-xs break-all shadow-inner" dir="ltr">
            Name: k | Type: NS | Value: {exampleConfig.serverHost}
          </code>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-xs text-blue-800 leading-relaxed">
          {isRtl 
            ? "نکته: اعمال تغییرات DNS ممکن است تا ۴۸ ساعت زمان ببرد، اما معمولاً در عرض چند دقیقه انجام می‌شود." 
            : "Note: DNS changes can take up to 48 hours to propagate, but they are usually active within minutes."}
        </p>
      </div>
    </div>
  );
};
