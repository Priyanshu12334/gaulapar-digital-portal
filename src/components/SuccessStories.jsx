import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const SuccessStories = () => {
  const stories = [
    {
      id: 'story-1',
      name: 'रमेश कुमार (Ramesh Kumar)',
      role: 'प्रगतिशील किसान (Farmer)',
      avatarText: 'RK',
      avatarBg: 'from-amber-500 to-orange-600',
      rating: 5,
      storyHindi: '“डिजिटल कृषि सेवा से जुड़कर मुझे मौसम और मंडी के सही भावों की जानकारी मिली। मैंने पहली बार बिचौलियों के बिना अपनी फसल सीधे बेची और मेरी आय 40% तक बढ़ गई।”',
      storyEng: '“Connecting with the digital agriculture service gave me weather updates and real mandi rates. I sold my crops directly and increased my income by 40%.”',
      tag: 'कृषि समृद्धि / Farmer Success'
    },
    {
      id: 'story-2',
      name: 'प्रियांशु कुमारी (Priyanshu Kumari)',
      role: 'मेधावी छात्रा (Student)',
      avatarText: 'PK',
      avatarBg: 'from-blue-500 to-indigo-600',
      rating: 5,
      storyHindi: '“हमारे स्कूल में ई-लर्निंग लैब्स और स्मार्ट क्लासेज शुरू होने से विषयों को समझना बहुत आसान हो गया। इसकी मदद से मैंने इस वर्ष राज्य स्कॉलरशिप परीक्षा उत्तीर्ण की है।”',
      storyEng: '“E-learning labs and smart classes made learning complex subjects very simple. With its help, I cleared the state scholarship exam this year.”',
      tag: 'डिजिटल शिक्षा / Smart Schooling'
    },
    {
      id: 'story-3',
      name: 'राजेश सिंह (Rajesh Singh)',
      role: 'सरपंच (Gram Sarpanch)',
      avatarText: 'RS',
      avatarBg: 'from-emerald-500 to-teal-600',
      rating: 5,
      storyHindi: '“पूरे गांव में वाई-फाई और ऑनलाइन पंचायत सेवाओं के आने से कार्यों में पूरी पारदर्शिता आई है। अब प्रमाण पत्र और राशन आवेदन कुछ ही घंटों में ऑनलाइन स्वीकृत हो जाते हैं।”',
      storyEng: '“With village-wide Wi-Fi and online panchayat services, local governance is transparent. Certificates and subsidy requests are approved in hours.”',
      tag: 'डिजिटल पंचायत / Digital Governance'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gov-cream-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gov-green-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gov-saffron-100/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-saffron mb-3">सफलता की कहानियां / Success Stories</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            बदलाव की सच्ची कहानियां (Impact Stories)
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            डिजिटल तकनीकों और बुनियादी ढांचे में सुधार ने कैसे बदला हमारे ग्रामीणों का जीवन।
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="glass-card p-8 bg-white relative flex flex-col justify-between"
            >
              <div>
                {/* Floating Quote Icon */}
                <div className="absolute top-6 right-6 text-slate-100">
                  <FaQuoteLeft className="w-12 h-12" />
                </div>

                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-lg bg-gov-green-50 text-gov-green-800 border border-gov-green-100 uppercase">
                    {story.tag}
                  </span>
                  <div className="flex gap-0.5 text-gov-gold-500">
                    {[...Array(story.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-gov-gold-500" />
                    ))}
                  </div>
                </div>

                {/* Hindi Quote */}
                <p className="text-slate-800 font-bold text-sm md:text-base leading-relaxed mb-4 italic">
                  {story.storyHindi}
                </p>

                {/* English Quote */}
                <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed mb-8">
                  {story.storyEng}
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${story.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-md`}>
                  {story.avatarText}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm md:text-base">
                    {story.name}
                  </h4>
                  <p className="text-xs font-bold text-gov-green-800">
                    {story.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
