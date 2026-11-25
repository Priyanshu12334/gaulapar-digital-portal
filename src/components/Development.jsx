import { FiLayers } from 'react-icons/fi';

const developmentPillars = [
  {
    title: 'Road & River Connectivity',
    hindi: 'सड़क एवं नदी संपर्क',
    desc: 'The Gaula bridge and Haldwani bypass provide road links between Haldwani and settlements on the Gaulapar side of the river.',
  },
  {
    title: 'Sports & Youth Facilities',
    hindi: 'खेल और युवा सुविधाएं',
    desc: 'Indira Gandhi International Sports Stadium is a major public sports venue in the Kunwarpur–Gaulapar area.',
  },
  {
    title: 'Education',
    hindi: 'शिक्षा',
    desc: 'Schools and higher-education campuses in the region serve families across Gaulapar and nearby Haldwani settlements.',
  },
  {
    title: 'Public Services & Access',
    hindi: 'जन सुविधाएं और पहुंच',
    desc: 'Residents use services and markets in Gaulapar, Haldwani, and adjacent settlements. Check the local directory for map links and current details.',
  },
];

const Development = () => (
  <section id="development" className="py-16 md:py-16 bg-gov-cream-bg border-y border-slate-100 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="badge-saffron mb-3">विकास एवं बुनियादी ढांचा / Development</span>
        <h2 className="text-center font-extrabold text-slate-900 leading-tight md:whitespace-nowrap">
          <span className="block whitespace-nowrap text-[clamp(0.75rem,4.3vw,1rem)] md:inline-block md:text-2xl xl:text-3xl">
            गौलापार क्षेत्र की सुविधाएं और संपर्क
          </span>
          <span className="mt-1 block text-[clamp(0.75rem,3.5vw,0.875rem)] font-medium text-slate-500 md:mt-0 md:ml-2 md:inline-block md:text-sm xl:text-base md:whitespace-nowrap">
            / Gaulapar Facilities &amp; Connectivity
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
          A practical overview of regional connectivity, sports, education, and public-service access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developmentPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-gov-green-300 transition-all shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gov-green-100 text-gov-green-800">
                <FiLayers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs font-bold text-gov-saffron-600">{pillar.hindi}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Development;
