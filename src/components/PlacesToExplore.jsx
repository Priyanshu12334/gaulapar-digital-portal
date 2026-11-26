import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import gaulaRiverImage from '../assets/gaula-river-card.jpg';
import stadiumCardImage from '../assets/ig-stadium-card.jpg';

const localities = [
  { name: 'Kunwarpur', group: 'Gaulapar side · Haldwani', status: 'Mapped village', query: 'Kunwarpur, Haldwani, Nainital, Uttarakhand' },
  { name: 'Kishanpur', group: 'Gaulapar area', status: 'Community locality name', query: 'Kishanpur, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Kishan Nagari', group: 'Gaulapar area', status: 'Community locality name', query: 'Kishan Nagari, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'East Khera', group: 'Gaulapar area', status: 'Community locality name', query: 'East Khera, Haldwani, Uttarakhand' },
  { name: 'West Khera', group: 'Gaulapar area', status: 'Community locality name', query: 'West Khera, Haldwani, Uttarakhand' },
  { name: 'Daulatpur', group: 'Southern nearby belt · Lalkuan', status: 'Mapped service point nearby', query: 'Daulatpur, Haldwani, Nainital, Uttarakhand' },
  { name: 'Lachhampur', group: 'Gaulapar area', status: 'Community locality name', query: 'Lachhampur, Haldwani, Uttarakhand' },
  { name: 'Jitpur', group: 'Gaulapar area', status: 'Community locality name', query: 'Jitpur, Haldwani, Uttarakhand' },
  { name: 'Lakhanpur', group: 'Southern nearby belt · Lalkuan', status: 'Mapped village', query: 'Lakhanpur, Lalkuan, Nainital, Uttarakhand' },
  { name: 'Chorgaliya', group: 'Southern nearby belt · Lalkuan', status: 'Mapped village', query: 'Chorgalia, Lalkuan, Nainital, Uttarakhand' },
  { name: 'Devla Malla', group: 'Gaulapar side · Haldwani', status: 'School address locality', query: 'Devla Malla, Haldwani, Nainital, Uttarakhand' },
  { name: 'Devla Talla', group: 'Gaulapar area', status: 'Community locality name', query: 'Devla Talla, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Bagjala (बागजाला)', group: 'Devla Talla · Gaulapar', status: 'Mapped locality', query: 'Bagjala, Devla Talla, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Nawar Khera', group: 'Gaulapar area', status: 'Community locality name', query: 'Nawar Khera, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Jagatpur', group: 'Gaulapar area', status: 'Community locality name', query: 'Jagatpur, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Rambagh', group: 'Gaulapar area', status: 'Community locality name', query: 'Rambagh, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Dani Bangar', group: 'Gaulapar area', status: 'Community locality name', query: 'Dani Bangar, Gaulapar, Haldwani, Uttarakhand' },
  { name: 'Sultan Nagari', group: 'Gaulapar area', status: 'Community locality name', query: 'Sultan Nagari, Gaulapar, Haldwani, Uttarakhand' },
];

const landmarks = [
  {
    name: 'Gaula Bridge & River',
    hindi: 'गौला पुल और नदी',
    category: 'River crossing',
    description: 'The Haldwani bypass bridge crosses the Gaula River and connects Haldwani with the settlements to its east.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Gaula_Bridge%2C_Haldwani_Bypass.jpg/960px-Gaula_Bridge%2C_Haldwani_Bypass.jpg',
    imageAlt: 'Gaula Bridge on the Haldwani bypass',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.209037%2C79.536985',
  },
  {
    name: 'Gaula River',
    hindi: 'गौला नदी',
    category: 'Natural landmark',
    description: 'The river corridor is a defining geographic feature between Haldwani and Gaulapar. Follow local safety guidance near the riverbed.',
    image: gaulaRiverImage,
    imageAlt: 'Gaula River with a rocky riverbed and green pools',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.210639%2C79.539093',
  },
  {
    name: 'Indira Gandhi International Sports Stadium',
    hindi: 'इंदिरा गांधी अंतरराष्ट्रीय खेल स्टेडियम',
    category: 'Sports & public venue',
    description: 'A major public sports complex located at Kunwarpur on the Haldwani bypass, in the Gaulapar area.',
    image: stadiumCardImage,
    imageAlt: 'Indira Gandhi stadium in Haldwani',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.2194894%2C79.5430168',
  },
];

const publicPlaces = [
  {
    name: 'Kali Chaur Temple',
    category: 'Temple',
    description: 'A locally known shrine in the Gaulapar area. Confirm the exact map pin, access, and opening information before travelling.',
    query: 'Kali Chaur Temple, Gaulapar, Haldwani',
  },
  {
    name: 'Gaulapar local markets',
    category: 'Market',
    description: 'Find current shops, weekly markets, and produce sellers using a live map search rather than a static business listing.',
    query: 'Market, Gaulapar, Haldwani',
  },
  {
    name: 'Schools & colleges',
    category: 'Education',
    description: 'Open the education directory for institutions and location details serving Kunwarpur, Daulatpur, and nearby settlements.',
    query: 'School, Gaulapar, Haldwani',
    section: '#education',
  },
  {
    name: 'Gaulapar public facilities',
    category: 'Public places',
    description: 'Search for community facilities and public services in the wider Gaulapar area; map listings may change.',
    query: 'Public places, Gaulapar, Haldwani',
  },
];

const mapSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const PlacesToExplore = () => (
  <section id="places" className="py-16 md:py-20 bg-gov-cream-bg scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="badge-saffron mb-3">दर्शनीय एवं प्रमुख स्थल / Places to Explore</span>
        <h2 className="text-center font-extrabold text-slate-900 leading-tight md:whitespace-nowrap">
          <span className="block whitespace-nowrap text-[clamp(0.75rem,4.3vw,1rem)] md:inline-block md:text-2xl xl:text-3xl">
            गौलापार और आसपास की जगहें
          </span>
          <span className="mt-1 block text-[clamp(0.75rem,3.5vw,0.875rem)] font-medium text-slate-500 md:mt-0 md:ml-2 md:inline-block md:text-sm xl:text-base md:whitespace-nowrap">
            / Places in and Around Gaulapar
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
          Browse mapped settlements, the Gaula river crossing, sports facilities, temples, markets, and schools across the wider region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {landmarks.map((place) => (
          <article key={place.name} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
            <img src={place.image} alt={place.imageAlt} loading="lazy" className="h-52 w-full object-cover" />
            <div className="p-5">
              <span className="badge-green text-[11px]">{place.category}</span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{place.name}</h3>
              <p className="mt-1 text-xs font-bold text-gov-saffron-600">{place.hindi}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{place.description}</p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gov-green-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gov-green-800">
                  <FiMapPin className="h-4 w-4" />
                  <span>View Location</span>
                  <span aria-hidden="true">·</span>
                  <span lang="hi">स्थान देखें</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full text-center sm:w-auto sm:text-left">
            <span className="badge-green mb-2">स्थानीय क्षेत्र / Localities</span>
            <h3 className="text-center font-extrabold text-slate-900 leading-tight sm:whitespace-nowrap sm:text-left">
              <span className="inline text-[clamp(0.75rem,4.3vw,1rem)] md:inline-block md:text-2xl xl:text-3xl sm:whitespace-nowrap">
                गौलापार के गाँव एवं क्षेत्र
              </span>
              {' '}
              <span className="inline text-[clamp(0.75rem,3.5vw,0.875rem)] font-medium text-slate-500 md:ml-2 md:inline-block md:text-sm xl:text-base sm:whitespace-nowrap">
                / Villages &amp; Localities of Gaulapar
              </span>
            </h3>
          </div>

        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {localities.map((locality) => (
            <a
              key={locality.name}
              href={mapSearch(locality.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-gov-cream-bg p-4 transition-colors hover:border-gov-green-300 hover:bg-gov-green-50"
            >
              <span>
                <strong className="block text-sm text-slate-900">{locality.name}</strong>
                <span className="mt-0.5 block text-xs text-slate-600">{locality.group}</span>
                <span className="mt-1 block text-[10px] font-semibold text-slate-500">{locality.status}</span>
                <span className="mt-2 block text-[11px] font-semibold text-gov-green-800">
                  View on Map · <span lang="hi">नक्शे पर देखें</span>
                </span>
              </span>
              <FiExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-gov-green-700 group-hover:text-gov-saffron-600" />
            </a>
          ))}
        </div>

      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {publicPlaces.map((place) => (
          <article key={place.name} className="rounded-2xl border border-slate-200/80 bg-white p-5">
            <span className="text-[11px] font-bold uppercase tracking-wide text-gov-saffron-700">{place.category}</span>
            <h3 className="mt-2 font-bold text-slate-900">{place.name}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{place.description}</p>
            <a
              href={place.section || mapSearch(place.query)}
              target={place.section ? undefined : '_blank'}
              rel={place.section ? undefined : 'noopener noreferrer'}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gov-green-800 hover:text-gov-saffron-600"
            >
              {place.section ? 'View education directory' : 'View on Map · नक्शे पर देखें'}
              {!place.section && <FiExternalLink className="h-3.5 w-3.5" />}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PlacesToExplore;
