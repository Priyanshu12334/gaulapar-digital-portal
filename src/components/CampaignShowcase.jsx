import React, { useState } from 'react';
import { FiShare2, FiHeart, FiMessageCircle, FiDownload, FiCheckCircle } from 'react-icons/fi';

const CampaignShowcase = () => {
  const [likes, setLikes] = useState({ post1: 142, post2: 238 });
  const [liked, setLiked] = useState({ post1: false, post2: false });

  const handleLike = (post) => {
    setLiked(prev => {
      const isLiked = !prev[post];
      setLikes(prevLikes => ({
        ...prevLikes,
        [post]: isLiked ? prevLikes[post] + 1 : prevLikes[post] - 1
      }));
      return { ...prev, [post]: isLiked };
    });
  };

  const handleAction = (action, postTitle) => {
    alert(`${action} triggered for: "${postTitle}" Campaign Post.`);
  };

  return (
    <section className="py-16 md:py-24 bg-gov-cream-bg relative overflow-hidden">
      {/* Absolute Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gov-green-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gov-saffron-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-saffron mb-3">जागरूकता अभियान / Awareness Campaigns</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            सोशल मीडिया प्रचार अभियान (Social Campaigns)
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            नागरिकों में जागरूकता फैलाने के लिए डिज़ाइन किए गए विशेष डिजिटल पोस्टर और सोशल मीडिया संदेश।
          </p>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Post 1: Farmer Identity */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
            
            {/* Header info */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gov-green-700 text-white flex items-center justify-center font-bold text-sm">
                  🌱
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1">
                    Suryapura Portal
                    <FiCheckCircle className="text-gov-green-600 fill-gov-green-100 w-4 h-4" />
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold">@suryapura_village • Sponsored</p>
                </div>
              </div>
              <span className="badge-green text-[10px]">Campaign 1</span>
            </div>

            {/* Visual Design */}
            <div className="relative bg-gradient-to-br from-gov-green-900 to-gov-green-dark p-8 text-white aspect-[4/3] flex flex-col justify-between overflow-hidden">
              
              {/* Saffron/Green diagonal gradient slice */}
              <div className="absolute top-[-50px] right-[-100px] w-64 h-96 bg-gradient-to-b from-gov-saffron-500/80 to-gov-saffron-600/20 transform rotate-12 -z-0 opacity-40 blur-xl" />
              
              {/* Subtle background icons */}
              <div className="absolute top-4 right-4 text-white/5 text-8xl font-bold -z-0">🌾</div>

              <div className="z-10 flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest font-extrabold text-gov-saffron-500 uppercase">
                    कृषि और डिजिटलीकरण
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    Smart Village Campaign 2026
                  </span>
                </div>
                <span className="text-3xl filter drop-shadow">🌱</span>
              </div>

              {/* Main Campaign Message */}
              <div className="z-10 my-auto text-center space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                  1000+ किसानों को <br />
                  <span className="text-gov-saffron-500">डिजिटल पहचान</span>
                </h3>
                <p className="text-sm font-semibold text-slate-200 max-w-sm mx-auto">
                  अब हर किसान सरकारी योजनाओं और सेवाओं से सीधे जुड़ सकता है।
                </p>
              </div>

              {/* Graphic Footer details */}
              <div className="z-10 border-t border-white/20 pt-4 flex items-center justify-between text-[10px] font-bold text-slate-300">
                <span className="flex items-center gap-1">
                  🛡️ भारत सरकार द्वारा स्वीकृत
                </span>
                <span>suryapura.gov.in</span>
              </div>
            </div>

            {/* Social Engagement Actions */}
            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-4 text-slate-600 font-bold text-sm">
                <button 
                  onClick={() => handleLike('post1')}
                  className={`flex items-center gap-1.5 transition-colors ${liked.post1 ? 'text-red-500' : 'hover:text-red-500'}`}
                >
                  <FiHeart className={`w-5 h-5 ${liked.post1 ? 'fill-red-500' : ''}`} />
                  <span>{likes.post1}</span>
                </button>
                <button 
                  onClick={() => handleAction('Comment', '1000+ किसानों को डिजिटल पहचान')} 
                  className="flex items-center gap-1.5 hover:text-gov-green-700"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  <span>18</span>
                </button>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAction('Download', '1000+ किसानों को डिजिटल पहचान')}
                  className="p-2 bg-white text-slate-600 hover:text-gov-green-700 rounded-xl border border-slate-200 hover:border-gov-green-300 active:scale-95 transition-all shadow-sm"
                  title="Download Campaign Poster"
                >
                  <FiDownload className="w-4.5 h-4.5" />
                </button>
                <button 
                  onClick={() => handleAction('Share', '1000+ किसानों को डिजिटल पहचान')}
                  className="p-2 bg-white text-slate-600 hover:text-gov-saffron-600 rounded-xl border border-slate-200 hover:border-gov-saffron-300 active:scale-95 transition-all shadow-sm"
                  title="Share Post"
                >
                  <FiShare2 className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Post 2: Education Campaign */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
            
            {/* Header info */}
            <div className="p-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gov-blue-900 text-white flex items-center justify-center font-bold text-sm">
                  🎓
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-1">
                    Suryapura Education
                    <FiCheckCircle className="text-gov-green-600 fill-gov-green-100 w-4 h-4" />
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold">@suryapura_literacy • Sponsored</p>
                </div>
              </div>
              <span className="badge-saffron text-[10px]">Campaign 2</span>
            </div>

            {/* Visual Design */}
            <div className="relative bg-gradient-to-br from-gov-blue-dark to-slate-900 p-8 text-white aspect-[4/3] flex flex-col justify-between overflow-hidden">
              
              {/* Gold/Blue diagonal gradient slice */}
              <div className="absolute bottom-[-100px] left-[-50px] w-80 h-80 bg-gradient-to-t from-gov-gold-600/30 to-transparent transform rotate-45 -z-0 opacity-45 blur-2xl" />
              
              {/* Subtle background icons */}
              <div className="absolute top-4 right-4 text-white/5 text-8xl font-bold -z-0">🎓</div>

              <div className="z-10 flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest font-extrabold text-gov-gold-500 uppercase">
                    स्मार्ट पाठशाला अभियान
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    E-Learning Revolution
                  </span>
                </div>
                <span className="text-3xl filter drop-shadow">🎓</span>
              </div>

              {/* Main Campaign Message */}
              <div className="z-10 my-auto text-center space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                  नया स्कूल, <br />
                  <span className="text-gov-gold-500">नया भविष्य</span>
                </h3>
                <p className="text-sm font-semibold text-slate-300 max-w-sm mx-auto">
                  ग्रामीण शिक्षा में डिजिटल परिवर्तन की दिशा में एक महत्वपूर्ण कदम।
                </p>
              </div>

              {/* Graphic Footer details */}
              <div className="z-10 border-t border-white/20 pt-4 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span className="flex items-center gap-1">
                  📚 100% स्मार्ट क्लास कनेक्टिविटी
                </span>
                <span>suryapura.gov.in</span>
              </div>
            </div>

            {/* Social Engagement Actions */}
            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-4 text-slate-600 font-bold text-sm">
                <button 
                  onClick={() => handleLike('post2')}
                  className={`flex items-center gap-1.5 transition-colors ${liked.post2 ? 'text-red-500' : 'hover:text-red-500'}`}
                >
                  <FiHeart className={`w-5 h-5 ${liked.post2 ? 'fill-red-500' : ''}`} />
                  <span>{likes.post2}</span>
                </button>
                <button 
                  onClick={() => handleAction('Comment', 'नया स्कूल, नया भविष्य')} 
                  className="flex items-center gap-1.5 hover:text-gov-green-700"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  <span>34</span>
                </button>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAction('Download', 'नया स्कूल, नया भविष्य')}
                  className="p-2 bg-white text-slate-600 hover:text-gov-green-700 rounded-xl border border-slate-200 hover:border-gov-green-300 active:scale-95 transition-all shadow-sm"
                  title="Download Campaign Poster"
                >
                  <FiDownload className="w-4.5 h-4.5" />
                </button>
                <button 
                  onClick={() => handleAction('Share', 'नया स्कूल, नया भविष्य')}
                  className="p-2 bg-white text-slate-600 hover:text-gov-saffron-600 rounded-xl border border-slate-200 hover:border-gov-saffron-300 active:scale-95 transition-all shadow-sm"
                  title="Share Post"
                >
                  <FiShare2 className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CampaignShowcase;
