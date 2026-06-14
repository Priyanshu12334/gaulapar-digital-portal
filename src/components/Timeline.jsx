import React from 'react';
import { FiCheckCircle, FiBookOpen, FiMap, FiAward } from 'react-icons/fi';

const Timeline = () => {
  const milestones = [
    {
      year: '2022',
      titleHindi: 'डिजिटल पंजीकरण की शुरुआत (Digital Registration Started)',
      descHindi: 'पोर्टल का शुभारंभ किया गया और पहले चरण में 1,000+ नागरिकों और किसानों का डिजिटल पंजीकरण डेटाबेस तैयार किया गया।',
      descEng: 'Launched the digital portal, onboarding 1,000+ citizens and farmers in the database during phase one.',
      icon: <FiCheckCircle className="w-5 h-5 text-white" />,
      color: 'bg-emerald-600',
      border: 'border-emerald-200'
    },
    {
      year: '2023',
      titleHindi: 'शिक्षा कार्यक्रमों का विस्तार (Education Expansion)',
      descHindi: '45+ ग्रामीण प्राथमिक व माध्यमिक स्कूलों को हाई-स्पीड इंटरनेट और स्मार्ट ई-लर्निंग सामग्री से जोड़ा गया।',
      descEng: 'Connected 45+ schools with high-speed internet, smartboards, and online educational materials.',
      icon: <FiBookOpen className="w-5 h-5 text-white" />,
      color: 'bg-blue-600',
      border: 'border-blue-200'
    },
    {
      year: '2024',
      titleHindi: 'सड़क कनेक्टिविटी में सुधार (Road Infrastructure Boost)',
      descHindi: '150 किमी ग्रामीण सड़कों को पक्का कर मुख्य राजमार्गों से जोड़ा गया, जिससे कृषि उपज मंडी पहुंचाना आसान हुआ।',
      descEng: '150 KM of rural roads were metalled and linked to major highways, simplifying transit of agricultural products.',
      icon: <FiMap className="w-5 h-5 text-white" />,
      color: 'bg-gov-saffron-600',
      border: 'border-gov-saffron-200'
    },
    {
      year: '2025',
      titleHindi: 'डिजिटल ग्राम पहल पूर्ण (Digital Village Achieved)',
      descHindi: 'संपूर्ण ग्राम पंचायत का कंप्यूटरीकरण, सार्वजनिक स्थानों पर वाई-फाई और 100% पेपरलेस प्रमाण पत्र सेवाएं लागू।',
      descEng: 'Completed digitalization of the entire panchayat, providing public Wi-Fi hotspots and 100% paperless services.',
      icon: <FiAward className="w-5 h-5 text-white" />,
      color: 'bg-gov-gold-600',
      border: 'border-yellow-200 animate-pulse-subtle'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gov-green-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gov-saffron-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-green mb-3">विकास यात्रा / Development Timeline</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            हमारी डिजिटल विकास यात्रा (Development Timeline)
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            2022 से शुरू होकर आज तक ग्राम विकास और डिजिटल क्रांति के प्रमुख मील के पत्थर।
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative timeline-line max-w-4xl mx-auto">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={milestone.year} 
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Spacer / Column to align content */}
                <div className="hidden md:block w-1/2 px-8" />

                {/* Timeline Icon Node */}
                <div className={`absolute left-0 md:left-1/2 top-1.5 md:top-auto md:-translate-y-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full ${milestone.color} border-4 ${milestone.border} flex items-center justify-center shadow-md`}>
                  {milestone.icon}
                </div>

                {/* Content Panel */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="p-6 md:p-8 bg-gov-cream-bg border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow hover:border-slate-200">
                    
                    {/* Badge */}
                    <span className="inline-block px-3.5 py-1 text-xs font-extrabold text-white rounded-lg bg-gov-blue-dark mb-4 tracking-wider">
                      {milestone.year}
                    </span>

                    {/* Hindi Title */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                      {milestone.titleHindi}
                    </h3>

                    {/* Description Hindi */}
                    <p className="mt-3 text-slate-700 font-semibold text-sm leading-relaxed">
                      {milestone.descHindi}
                    </p>

                    {/* Description English */}
                    <p className="mt-2 text-slate-500 font-medium text-xs leading-relaxed border-t border-slate-200/50 pt-2">
                      {milestone.descEng}
                    </p>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
