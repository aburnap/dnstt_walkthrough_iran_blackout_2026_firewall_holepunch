
import React from 'react';
import { Language } from '../types';

export const Step2: React.FC<{ lang: Language }> = ({ lang }) => {
  const isRtl = lang === 'fa';
  return (
    <div className="space-y-4 w-full min-w-0 overflow-hidden">
      <p className="text-slate-700">
        {isRtl 
          ? "شما باید در پنل مدیریت دامنه خود دو رکورد زیر را اضافه کنید:" 
          : "You need to add two records in your domain's DNS management panel:"}
      </p>
      
      <div className="space-y-4 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-200">
        <div className={isRtl ? "text-right" : "text-left"}>
          <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm md:text-base">
            {isRtl ? "۱. رکورد A (زیردامنه سرور)" : "1. A Record (Server Subdomain)"}
          </h4>
          <p className="text-xs md:text-sm text-slate-600 mb-2">
            {isRtl ? "این رکورد به آی‌پی سرور شما اشاره می‌کند." : "This record points to your server's IPv4 address."}
          </p>
          <code className="block bg-slate-900 text-white p-3 rounded-lg text-[10px] md:text-xs break-all" dir="ltr">
            Name: tns | Type: A | Value: [SERVER_IP]
          </code>
        </div>

        <div className={isRtl ? "text-right" : "text-left"}>
          <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm md:text-base">
            {isRtl ? "۲. رکورد NS (زیردامنه تونل)" : "2. NS Record (Tunnel Subdomain)"}
          </h4>
          <p className="text-xs md:text-sm text-slate-600 mb-2">
            {isRtl ? "این رکورد برای هدایت ترافیک تونل به زیردامنه قبلی استفاده می‌شود." : "This record delegates tunnel traffic to the server subdomain."}
          </p>
          
          <div className={`mb-3 p-3 rounded-xl text-xs flex items-start gap-2 ${isRtl ? 'bg-amber-50 text-amber-800' : 'bg-amber-50 text-amber-800'}`}>
            <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="leading-relaxed">
              <strong>{isRtl ? "نکته مهم:" : "Important:"}</strong> {isRtl 
                ? "نام زیردامنه NS حتماً باید یک کاراکتری باشد (مثلاً t.example.com)." 
                : "The NS subdomain MUST be a single character only (e.g., t.example.com)."}
            </p>
          </div>

          <code className="block bg-slate-900 text-white p-3 rounded-lg text-[10px] md:text-xs break-all" dir="ltr">
            Name: t | Type: NS | Value: tns.example.com
          </code>
        </div>
      </div>
    </div>
  );
};
