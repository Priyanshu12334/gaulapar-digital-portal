import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  AreaChart, 
  Area,
  Cell
} from 'recharts';
import { FiTrendingUp, FiActivity } from 'react-icons/fi';

const progressData = [
  { name: 'कृषि (Agriculture)', value: 90, color: '#16a34a' },
  { name: 'शिक्षा (Education)', value: 85, color: '#2563eb' },
  { name: 'जल योजना (Water Projects)', value: 80, color: '#0d9488' },
  { name: 'डिजिटल सेवा (Digital Services)', value: 75, color: '#ea580c' },
  { name: 'सड़कें (Roads)', value: 70, color: '#475569' }
];

const engagementData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 650 },
  { name: 'Mar', users: 800 },
  { name: 'Apr', users: 1200 },
  { name: 'May', users: 1500 },
  { name: 'Jun', users: 1800 }
];

// Custom Tooltip component for premium style
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 backdrop-blur text-white p-3 rounded-xl border border-slate-700 shadow-xl text-xs font-semibold">
        <p className="mb-1">{label}</p>
        {payload.map((item, idx) => (
          <p key={idx} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color || item.fill }} />
            <span>{item.name}: {item.value}% {item.unit || ''}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomTooltipLine = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/90 backdrop-blur text-white p-3 rounded-xl border border-slate-700 shadow-xl text-xs font-semibold">
        <p className="mb-1">{label} (Monthly)</p>
        {payload.map((item, idx) => (
          <p key={idx} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff6600' }} />
            <span>सक्रिय नागरिक (Active Citizens): {item.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gov-saffron-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gov-green-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-blue mb-3">विकास विश्लेषिकी / Development Analytics</span>
          <h2 className="text-[28px] lg:text-[36px] font-extrabold text-gov-blue-dark leading-tight">
            डिजिटल प्रगति डैशबोर्ड (Development Dashboard)
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            गांव के विभिन्न क्षेत्रों में हुए विकास और पोर्टल पर नागरिकों की सक्रिय सहभागिता का वास्तविक विश्लेषण।
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Chart 1: Village Development Progress */}
          <div className="p-6 md:p-8 bg-gov-cream-bg rounded-3xl border border-slate-100/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    ग्राम विकास प्रगति (Development Progress)
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    क्षेत्र-वार लक्ष्य प्राप्ति का प्रतिशत (Target vs Achievement)
                  </p>
                </div>
                <div className="p-2.5 bg-gov-green-100 text-gov-green-800 rounded-xl">
                  <FiActivity className="w-5 h-5" />
                </div>
              </div>

              {/* Chart */}
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={progressData}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                    <XAxis type="number" domain={[0, 100]} stroke="#64748b" fontSize={11} fontWeight={600} />
                    <YAxis dataKey="name" type="category" stroke="#64748b" width={110} fontSize={11} fontWeight={600} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={16}>
                      {progressData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Insight footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>अंतिम अद्यतन: आज सुबह 9:00 बजे</span>
              <span className="text-gov-green-700">लक्ष्य: 100% डिजिटल विलेज</span>
            </div>
          </div>

          {/* Chart 2: Monthly Citizen Engagement */}
          <div className="p-6 md:p-8 bg-gov-cream-bg rounded-3xl border border-slate-100/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    नागरिक जुड़ाव दर (Citizen Engagement)
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    मासिक सक्रिय उपयोगकर्ता और सेवा लाभार्थी संख्या (Active Users)
                  </p>
                </div>
                <div className="p-2.5 bg-gov-saffron-100 text-gov-saffron-600 rounded-xl">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Chart */}
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={engagementData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ea580c" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#ea580c" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={11} fontWeight={600} />
                    <YAxis stroke="#64748b" fontSize={11} fontWeight={600} />
                    <Tooltip content={<CustomTooltipLine />} />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#ea580c" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorUsers)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Insight footer */}
            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>कुल पंजीकृत लाभार्थी: 12,000+</span>
              <span className="text-gov-saffron-600">वृद्धि दर: +40% Q2</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Analytics;
