import React from 'react';
import { FiArrowRight, FiShield, FiTrendingUp } from 'react-icons/fi';

const Hero = ({ onOpenModal }) => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-mesh">
      {/* Absolute Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gov-green-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gov-saffron-100/20 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side Content - 55% Width on Desktop */}
          <div className="w-full lg:w-[55%] space-y-6 text-center lg:text-left animate-fade-in-up">
            
            {/* Live Update Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gov-green-200 shadow-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gov-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gov-green-600"></span>
              </span>
              <span className="text-xs font-bold text-gov-green-800 tracking-wide uppercase">
                डिजिटल ग्राम पहल 2026 / Digital Village Initiative
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-extrabold tracking-tight text-gov-blue-dark leading-[1.1] md:leading-[1.15] lg:leading-[1.1]">
              स्मार्ट गांव, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-gov-saffron-500 via-gov-saffron-600 to-gov-green-700 bg-clip-text text-transparent">
                सशक्त भविष्य
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              शिक्षा, कृषि, सड़क और डिजिटल सेवाओं के माध्यम से ग्रामीण भारत को डिजिटल और आत्मनिर्भर बनाना। 
              Empowering rural communities through smart governance, advanced agriculture, digital education, and modern infrastructure.
            </p>

            {/* Actions Area */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
              <a 
                href="#development" 
                className="w-full sm:w-auto btn-green text-center inline-flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg transition-all duration-150"
              >
                Explore Schemes / योजनाएं देखें
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onOpenModal}
                className="w-auto px-4.5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-gov-green-700 border border-slate-200 hover:border-gov-green-300 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md active:scale-95 transition-all duration-150"
              >
                <FiShield className="text-gov-saffron-500 w-4 h-4" />
                <span>Digital Identity / डिजिटल पहचान</span>
              </button>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0 border-t border-slate-200/80">
              <div>
                <p className="text-2xl font-extrabold text-gov-green-800">100%</p>
                <p className="text-xs text-slate-500 font-semibold">Digital Literacy</p>
              </div>
              <div className="border-x border-slate-200">
                <p className="text-2xl font-extrabold text-gov-saffron-600">24/7</p>
                <p className="text-xs text-slate-500 font-semibold">Farmer Support</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gov-blue-700">150 KM</p>
                <p className="text-xs text-slate-500 font-semibold">Road Network</p>
              </div>
            </div>

          </div>

          {/* Right Side Visuals - 45% Width on Desktop */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end">
            
            {/* Main Visual Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[384px] h-[340px] sm:h-[440px] md:h-[480px]">
              
              {/* Village Landscape Background Ring with premium shadow and border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gov-green-200/50 to-gov-saffron-100/50 rounded-[40px] transform rotate-3 shadow-xl border border-white/20 -z-10" />
              
              {/* Village Landscape Background Image */}
              <div className="absolute inset-2 bg-white rounded-[32px] overflow-hidden shadow-inner flex items-center justify-center border border-slate-100">
                <img 
                  src="/village_landscape.png" 
                  alt="Modern Indian Village Landscape" 
                  className="w-full h-full object-cover opacity-95 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gov-blue-dark/80 via-transparent to-transparent" />
              </div>

              {/* Leader Character Image (Premium 3D Vector Style Illustration) */}
              <div className="absolute bottom-0 right-[-15px] w-[85%] sm:w-72 h-[85%] sm:h-96 flex items-end justify-center">
                <img 
                  src="/rural_leader_3d.png" 
                  alt="Rural Leader Ambassador 3D" 
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] animate-float"
                />
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute top-10 left-[-20px] sm:left-[-50px] p-3 bg-white/95 backdrop-blur shadow-xl border border-slate-100 rounded-2xl hidden sm:flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="p-2.5 bg-gov-green-50 text-gov-green-700 rounded-xl">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Agriculture</p>
                  <p className="text-xs font-bold text-slate-800">🌾 +90% Production</p>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute bottom-20 left-[-20px] p-3 bg-white/95 backdrop-blur shadow-xl border border-slate-100 rounded-2xl hidden sm:flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-2.5 bg-gov-saffron-50 text-gov-saffron-600 rounded-xl">
                  <span className="text-lg">🏫</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Education</p>
                  <p className="text-xs font-bold text-slate-800">45+ Smart Schools</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4 bg-gov-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-gov-green-500">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                GOVT APPROVED
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Hint */}
      <div className="flex justify-center mt-8">
        <a 
          href="#statistics" 
          className="p-2 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:border-gov-green-300 transition-all animate-bounce"
        >
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
