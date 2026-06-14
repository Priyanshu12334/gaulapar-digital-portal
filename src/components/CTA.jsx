import React from 'react';
import { FiCheckSquare, FiArrowRight } from 'react-icons/fi';

const CTA = ({ onOpenModal }) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gov-blue-dark text-white text-center">
      {/* Decorative Orbs */}
      <div className="absolute top-[-150px] left-[-150px] w-96 h-96 bg-gov-green-800/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-gov-saffron-500/20 rounded-full blur-3xl" />
      
      {/* Saffron/Green Gradient divider bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gov-saffron-500 via-gov-gold-500 to-gov-green-600" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <FiCheckSquare className="text-gov-saffron-500 w-4 h-4" />
          <span className="text-xs font-bold text-slate-100 tracking-wider uppercase">
            सहभागी ग्राम विकास / Public Engagement
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-tight tracking-tight">
           आइए गांव के विकास में सहभागी बनें <br />
          <span className="bg-gradient-to-r from-gov-saffron-500 to-gov-gold-500 bg-clip-text text-transparent">
            Join the Suryapura Transformation
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          डिजिटल पंजीकरण करके सरकारी योजनाओं का सीधा लाभ उठाएं और हमारे गांव को भारत का सबसे प्रगतिशील और आत्मनिर्भर डिजिटल ग्राम बनाने में अपना योगदान दें।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gov-saffron-500 to-gov-saffron-600 hover:from-gov-saffron-600 hover:to-gov-saffron-700 text-white font-bold rounded-xl shadow-lg shadow-gov-saffron-500/30 active:scale-95 transition-all duration-150"
          >
            डिजिटल पंजीकरण / Register Now
          </button>
          <a
            href="#development"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            अधिक जानें / Learn More
            <FiArrowRight />
          </a>
        </div>

        {/* Live Registrations Mock Display */}
        <div className="pt-8 border-t border-white/10 max-w-lg mx-auto flex items-center justify-center gap-4 flex-wrap text-xs font-bold text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gov-green-500 animate-ping" />
            LIVE REGISTRATIONS
          </span>
          <span className="text-slate-300">हाल ही में शामिल हुए:</span>
          <span className="px-2 py-1 rounded bg-white/5 text-slate-200">रामनाथ सि. (किसान)</span>
          <span className="px-2 py-1 rounded bg-white/5 text-slate-200">अंजली वि. (छात्रा)</span>
          <span className="px-2 py-1 rounded bg-white/5 text-slate-200">देवेंद्र के. (व्यापारी)</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;
