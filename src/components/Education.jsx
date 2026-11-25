import { useState } from 'react';
import { FiBookOpen, FiMapPin, FiPhone, FiMail, FiExternalLink } from 'react-icons/fi';

const Education = () => {
  const [filter, setFilter] = useState('all');

  const institutions = [
    {
      id: 'heera-kunwar',
      name: 'Heera Kunwar Senior Secondary School',
      category: 'cbse',
      type: 'CBSE Affiliated • Co-Educational (Up to Class 12)',
      established: 'Est. 1996',
      location: 'Kunwarpur, P.O. Kunwarpur (Gaulapar), Haldwani, Nainital – 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.1917393%2C79.5656772',
      phone: null,
      email: null,
      website: 'https://heerakunwarpublicschool.com',
      notes: 'English-medium senior secondary school administered by the Heera Kunwar Educational Society.',
    },
    {
      id: 'vendy-public',
      name: 'Vendy Public School (Vendy Sr. Sec. School)',
      category: 'cbse',
      type: 'CBSE Affiliated • Co-Educational (Pre-Nursery to Class 12)',
      established: 'Est. 2007',
      location: 'Daulatpur, Gaulapar, Haldwani, Nainital – 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.1644303%2C79.5920936',
      phone: '+91-9927780800, +91-7247271212',
      email: 'vendypublicschool2007@gmail.com',
      website: 'https://vendypublicschool.com',
      notes: 'Offers Science (PCM/PCB), Commerce, and Arts streams at the senior secondary level.',
    },
    {
      id: 'parwat-public',
      name: 'Parwat Public School',
      category: 'cbse',
      type: 'CBSE Affiliated (No. 3530563) • Co-Educational (Nursery to Class 12)',
      established: 'Est. 2004',
      location: 'Village Devla Malla, P.O. Kunwarpur (Gaulapar), Haldwani – 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.2193611%2C79.5627497',
      phone: null,
      email: null,
      website: 'https://www.parwatpublicschool.com',
      notes: 'Managed by Parwat Public School Society, serving students across Greater Haldwani and Gaulapar.',
    },
    {
      id: 'elite-public',
      name: 'Elite Public School',
      category: 'private',
      type: 'Private Co-Educational School (Pre-Primary & Upper Levels)',
      established: 'Gaulapar',
      location: 'Tanakpur Road, Madanpur, Kishanpur, Gaulapar, Haldwani – 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.1465948%2C79.5822771',
      phone: '+91-6396530919, +91-7351236789',
      email: 'elitepublicschoolgaulapar@gmail.com',
      website: 'https://elitepublicschoolgaulapar.com',
      notes: 'Local co-educational school serving families in Kishanpur and surrounding Gaulapar settlements.',
    },
    {
      id: 'gic-daulatpur',
      name: 'Government Inter College (GIC), Daulatpur',
      category: 'government',
      type: 'Government Co-Educational School (Class 6 to 12)',
      established: 'Dept. of Education, Uttarakhand',
      location: '5H7V+6HC, Bhagwatpur Rekuni, Uttarakhand 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.1630576%2C79.5938844',
      phone: null,
      email: null,
      website: null,
      notes: 'Mapped serving the Daulatpur area of Gaulapar.',
    },
    {
      id: 'government-primary-bagjala',
      name: 'Government Primary School, Bagjala',
      category: 'government',
      type: 'Government Primary School',
      established: 'Government School',
      location: '6H64+6VQ, Gola Range, Uttarakhand 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.2105751%2C79.5572289',
      phone: null,
      email: null,
      website: null,
      notes: 'Mapped primary school serving the Bagjala area of Gaulapar.',
    },
    {
      id: 'psms-inter-college',
      name: 'P.S.M.S. Inter College, Kunwarpur',
      category: 'government',
      type: 'Government Inter College / राजकीय इंटर कॉलेज',
      location: 'Kunwarpur, Gaulapar, Haldwani, Uttarakhand 263139',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=P.S.M.S.+Inter+College+Kunwarpur+Gaulapar+Haldwani',
      phone: null,
      email: null,
      website: null,
      notes: 'Mapped inter college serving the Kunwarpur area of Gaulapar.',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Institutions' },
    { id: 'cbse', label: 'CBSE Schools' },
    { id: 'government', label: 'Government & Higher Ed' },
  ];

  const visibleInstitutions =
    filter === 'all'
      ? institutions
      : institutions.filter((item) => item.category === filter);

  return (
    <section id="education" className="py-16 md:py-20 bg-gov-cream-bg border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-green mb-3">शिक्षा निर्देशिका / Education Directory</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight md:whitespace-nowrap">
            <span className="block whitespace-nowrap text-[clamp(0.75rem,4.3vw,1rem)] md:inline-block md:text-2xl xl:text-3xl">
              गौलापार क्षेत्र के प्रमुख शिक्षण संस्थान
            </span>
            <span className="mt-1 block text-[clamp(0.75rem,3.5vw,0.875rem)] font-medium text-slate-500 md:mt-0 md:ml-2 md:inline-block md:text-sm xl:text-base md:whitespace-nowrap">
              / Key Educational Institutions in Gaulapar
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Verified schools and higher education institutions serving Gaulapar and neighbouring Haldwani block villages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-gov-green-700 text-white shadow-sm'
                  : 'bg-gov-cream-bg text-slate-700 border border-slate-200 hover:border-gov-green-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleInstitutions.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gov-green-100 text-gov-green-800">
                    <FiBookOpen className="w-5 h-5" />
                  </div>
                  {inst.established && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      {inst.established}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {inst.name}
                </h3>
                <p className="text-xs font-semibold text-gov-green-800 mt-1">
                  {inst.type}
                </p>
                {inst.notes && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {inst.notes}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <FiMapPin className="w-4 h-4 text-gov-saffron-600 flex-shrink-0 mt-0.5" />
                  {inst.mapUrl ? (
                    <a
                      href={inst.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-slate-300 underline-offset-2 hover:text-gov-green-800"
                    >
                      {inst.location}
                    </a>
                  ) : (
                    <span>{inst.location}</span>
                  )}
                </div>
                {inst.mapUrl && (
                  <a
                    href={inst.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-bold text-gov-green-800 hover:text-gov-saffron-600 transition-colors"
                  >
                    View on Map →
                  </a>
                )}
                {inst.phone && (
                  <div className="flex items-center gap-2">
                    <FiPhone className="w-3.5 h-3.5 text-gov-green-700 flex-shrink-0" />
                    <span>{inst.phone}</span>
                  </div>
                )}
                {inst.email && (
                  <div className="flex items-center gap-2">
                    <FiMail className="w-3.5 h-3.5 text-gov-green-700 flex-shrink-0" />
                    <a href={`mailto:${inst.email}`} className="hover:text-gov-green-800 underline break-all">
                      {inst.email}
                    </a>
                  </div>
                )}
                {inst.website && (
                  <div className="pt-1">
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-gov-green-800 hover:text-gov-saffron-600 transition-colors"
                    >
                      <span>Official Website</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
