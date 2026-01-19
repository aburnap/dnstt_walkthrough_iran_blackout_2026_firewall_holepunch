
import React, { useState } from 'react';
import { TERMS } from '../constants';
import { Language } from '../types';

interface Props {
  termKey: string;
  lang: Language;
}

export const TermTooltip: React.FC<Props> = ({ termKey, lang }) => {
  const [show, setShow] = useState(false);
  const data = TERMS[termKey];

  if (!data) return <span className="font-medium underline decoration-dotted decoration-slate-400">{termKey}</span>;

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
    >
      <button className="text-blue-600 font-semibold hover:text-blue-800 underline decoration-dotted decoration-blue-300 transition-colors text-sm">
        {data.term[lang]}
      </button>
      {show && (
        <div 
          className={`absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] md:w-64 p-3 bg-white border border-slate-200 rounded-xl shadow-xl text-sm text-slate-700 animate-in fade-in slide-in-from-bottom-1 duration-200 ${lang === 'fa' ? 'text-right' : 'text-left'}`} 
          dir={lang === 'fa' ? 'rtl' : 'ltr'}
          style={{ maxWidth: '85vw' }}
        >
          <div className="font-bold text-slate-900 mb-1 border-b border-slate-100 pb-1">{data.term[lang]}</div>
          {data.definition[lang]}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45"></div>
        </div>
      )}
    </span>
  );
};