import React from 'react';
import { 
  FiChevronRight, 
  FiFileText, 
  FiBookOpen, 
  FiUserCheck, 
  FiMap, 
  FiGrid, 
  FiDroplet,
  FiArrowUpRight
} from 'react-icons/fi';

const Services = ({ onOpenModal }) => {
  const services = [
    {
      id: 'farmers',
      title: 'कृषि सहायता (Farmer Support)',
      desc: 'किसानों के लिए फसल मार्गदर्शन, बाजार दर और सरकारी सब्सिडी की नवीनतम जानकारी।',
      icon: <span className="text-3xl">🌾</span>,
      badge: 'farmers',
      features: [
        'फसल मार्गदर्शन (Crop Guidance)',
        'मंडी भाव (Market Prices)',
        'सब्सिडी जानकारी (Subsidy Information)'
      ],
      color: 'border-amber-200 hover:border-amber-400 bg-amber-50/20',
      iconBg: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'education',
      title: 'शिक्षा और शिक्षण (Education)',
      desc: 'स्मार्ट कक्षाओं, ई-लर्निंग सामग्री और छात्रवृत्ति योजनाओं के माध्यम से डिजिटल शिक्षा का प्रसार।',
      icon: <span className="text-3xl">🎓</span>,
      badge: 'education',
      features: [
        'डिजिटल लर्निंग (Digital Learning)',
        'स्कूल विकास योजना (School Development)',
        'छात्रवृत्ति (Scholarships)'
      ],
      color: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/20',
      iconBg: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'identity',
      title: 'डिजिटल पहचान (Digital Identity)',
      desc: 'हर ग्रामीण के लिए एकीकृत डिजिटल नागरिक कार्ड जिससे सरकारी सेवाओं का लाभ उठाना हो आसान।',
      icon: <span className="text-3xl">🪪</span>,
      badge: 'identity',
      features: [
        'नागरिक पंजीकरण (Citizen Registration)',
        'दस्तावेज़ सत्यापन (Document Verification)',
        'ऑनलाइन सेवा पहुँच (Online Services)'
      ],
      color: 'border-blue-200 hover:border-blue-400 bg-blue-50/20',
      iconBg: 'bg-blue-100 text-blue-800',
      action: true
    },
    {
      id: 'roads',
      title: 'सड़क व बुनियादी ढांचा (Road Infrastructure)',
      desc: 'सभी संपर्क मार्गों और मुख्य सड़कों के विकास कार्यों का रियल-टाइम ट्रैकिंग।',
      icon: <span className="text-3xl">🛣️</span>,
      badge: 'infrastructure',
      features: [
        'सड़क निर्माण प्रगति (Road Progress Tracking)',
        'ग्रामीण कनेक्टिविटी (Village Connectivity)'
      ],
      color: 'border-slate-200 hover:border-slate-400 bg-slate-50/20',
      iconBg: 'bg-slate-100 text-slate-800'
    },
    {
      id: 'panchayat',
      title: 'पंचायत सेवाएं (Panchayat Services)',
      desc: 'पारदर्शी स्थानीय शासन, डिजिटल ग्राम सभाएं और सार्वजनिक सूचनाओं का त्वरित प्रकाशन।',
      icon: <span className="text-3xl">🏛️</span>,
      badge: 'panchayat',
      features: [
        'सार्वजनिक सूचनाएं (Public Notices)',
        'स्थानीय स्वशासन (Local Governance)',
        'नागरिक सहभागिता (Citizen Participation)'
      ],
      color: 'border-orange-200 hover:border-orange-400 bg-orange-50/20',
      iconBg: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'water',
      title: 'जल और स्वच्छता (Water & Sanitation)',
      desc: 'स्वच्छ पेय जल आपूर्ति और ग्राम स्वच्छता निगरानी के लिए स्वचालित प्रणालियां।',
      icon: <span className="text-3xl">💧</span>,
      badge: 'sanitation',
      features: [
        'स्वच्छ जल कार्यक्रम (Clean Water Programs)',
        'स्वच्छता निगरानी (Sanitation Monitoring)'
      ],
      color: 'border-teal-200 hover:border-teal-400 bg-teal-50/20',
      iconBg: 'bg-teal-100 text-teal-800'
    }
  ];

  return (
    <section id="development" className="py-16 md:py-24 bg-gov-cream-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-saffron mb-3">विकास योजनाएं / Programs & Services</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            हमारी डिजिटल विकास सेवाएं (Development Services)
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium">
            सूर्यपुरा को आत्मनिर्भर बनाने के लिए तैयार की गई प्रमुख विकास योजनाएं और डिजिटल सेवाएं।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 p-8 rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between bg-white ${service.color}`}
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${service.iconBg} shadow-sm font-semibold flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 bg-gov-green-600 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                {service.action ? (
                  <button
                    onClick={onOpenModal}
                    className="w-full py-3 px-4 bg-gradient-to-r from-gov-green-700 to-gov-green-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:shadow-md hover:from-gov-green-800 active:scale-95 transition-all"
                  >
                    डिजिटल पंजीकरण करें / Register Now
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="w-full py-3 px-4 bg-slate-50 hover:bg-gov-green-50 text-slate-700 hover:text-gov-green-800 border border-slate-200 hover:border-gov-green-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    विवरण देखें / View Details
                    <FiChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
