import React, { useState, useEffect } from 'react';
import { FiUsers, FiBookOpen, FiAward, FiShield, FiTrendingUp } from 'react-icons/fi';

const Counter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;
    
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const ImpactStats = () => {
  const stats = [
    {
      id: 'citizens',
      label: 'लाभान्वित नागरिक (Citizens Benefited)',
      target: '10000',
      suffix: '+',
      icon: <FiUsers className="w-8 h-8 text-gov-green-700" />,
      bg: 'bg-gov-green-50/50',
      border: 'border-gov-green-100',
    },
    {
      id: 'farmers',
      label: 'पंजीकृत किसान (Farmers Registered)',
      target: '1200',
      suffix: '+',
      icon: <FiAward className="w-8 h-8 text-gov-saffron-600" />,
      bg: 'bg-gov-saffron-50/50',
      border: 'border-gov-saffron-100',
    },
    {
      id: 'roads',
      label: 'सड़क निर्माण (Road Development)',
      target: '150',
      suffix: ' KM',
      icon: <FiTrendingUp className="w-8 h-8 text-gov-blue-700" />,
      bg: 'bg-gov-blue-50/50',
      border: 'border-gov-blue-100',
    },
    {
      id: 'schools',
      label: 'स्मार्ट स्कूल (Schools Connected)',
      target: '45',
      suffix: '+',
      icon: <FiBookOpen className="w-8 h-8 text-emerald-600" />,
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-100',
    },
    {
      id: 'panchayats',
      label: 'डिजिटल पंचायतें (Digitized Panchayats)',
      target: '20',
      suffix: '+',
      icon: <FiShield className="w-8 h-8 text-gov-gold-600" />,
      bg: 'bg-yellow-50/50',
      border: 'border-yellow-200',
    },
  ];

  return (
    <section id="statistics" className="py-12 md:py-16 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gov-green-50/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="badge-green mb-3">प्रभाव आकलन / Real-time Impact</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            हमारी प्रगति के आंकड़े (Key Progress Metrics)
          </h2>
          <p className="mt-3 text-base text-slate-500 font-medium">
            डिजिटल और सतत विकास के माध्यम से ग्रामीण जीवन स्तर को सुधारने के हमारे प्रयास।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-4 sm:p-6 rounded-2xl border ${stat.border} ${stat.bg} shadow-sm backdrop-blur-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="mb-4 p-2 sm:p-3 bg-white rounded-xl w-fit shadow-sm border border-slate-100/60">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </h3>
                <p className="mt-2 text-xs md:text-sm font-semibold text-slate-500 leading-tight">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
