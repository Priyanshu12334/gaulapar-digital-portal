import { useState } from 'react';
import { FiCompass, FiImage, FiX, FiMaximize2 } from 'react-icons/fi';
import ScenicArtwork from './ScenicArtwork';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const galleryItems = [
    {
      id: 'gal-landscape',
      title: 'Gaulapar Foothills & Green Valley',
      hindi: 'गौलापार की हरियाली और शिवालिक की पहाड़ियाँ',
      category: 'Landscapes',
      variant: 'hero',
    },
    {
      id: 'gal-river',
      title: 'Gaula River & Connectivity Bridge',
      hindi: 'गौला नदी और गौला पुल',
      category: 'Gaula River',
      variant: 'river',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Gaula_river_from_Haldwani_Bypass.jpg/960px-Gaula_river_from_Haldwani_Bypass.jpg',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.210639%2C79.539093',
    },
    {
      id: 'gal-sports',
      title: 'Indira Gandhi International Sports Stadium',
      hindi: 'इंदिरा गांधी अंतरराष्ट्रीय खेल स्टेडियम',
      category: 'Sports',
      variant: 'stadium',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Indira_Gandhi_stadium_Haldwani_01.jpg/960px-Indira_Gandhi_stadium_Haldwani_01.jpg',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.2194894%2C79.5430168',
    },
    {
      id: 'gal-bridge',
      title: 'Gaula Bridge, Haldwani Bypass',
      hindi: 'गौला पुल, हल्द्वानी बाईपास',
      category: 'Gaula River',
      variant: 'river',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Gaula_Bridge%2C_Haldwani_Bypass.jpg/960px-Gaula_Bridge%2C_Haldwani_Bypass.jpg',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=29.209037%2C79.536985',
    },
    {
      id: 'gal-agri',
      title: 'Seasonal Farming & Orchards',
      hindi: 'कृषि, धान-गेहूँ और बागवानी',
      category: 'Agriculture',
      variant: 'agriculture',
    },
    {
      id: 'gal-edu',
      title: 'Schools & Educational Campuses',
      hindi: 'विद्यालय और शैक्षणिक गतिविधियाँ',
      category: 'Education',
      variant: 'education',
    },
    {
      id: 'gal-culture',
      title: 'Kumaoni Heritage & Local Festivals',
      hindi: 'लोक संस्कृति, ऐपण और स्थानीय पर्व',
      category: 'Culture',
      variant: 'culture',
    },
  ];

  const categories = ['All', 'Landscapes', 'Gaula River', 'Sports', 'Agriculture', 'Education', 'Culture'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gov-cream-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-green mb-3">चित्र दीर्घा / Visual Gallery</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            गौलापार की झलकियाँ (Gaulapar Gallery)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Landscapes, Gaula River, village life, agriculture, education, sports infrastructure, and Kumaoni culture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gov-green-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-gov-green-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(item)}
                aria-label={`Preview ${item.title}`}
                className="relative block h-52 w-full overflow-hidden bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gov-green-600"
              >
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ScenicArtwork
                    variant={item.variant}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-gov-green-900 shadow-sm">
                  {item.category}
                </span>
                <span className="absolute bottom-3 right-3 rounded-xl bg-slate-900/60 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <FiMaximize2 className="h-4 w-4" />
                </span>
              </button>
              <div className="flex min-h-28 flex-col p-5">
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p lang="hi" className="mt-0.5 text-xs font-semibold text-gov-saffron-600">{item.hindi}</p>
                {item.mapUrl && (
                  <a
                    href={item.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-gov-green-800 hover:text-gov-saffron-600"
                  >
                    <FiCompass className="h-4 w-4" />
                    <span>Explore Place</span>
                    <span aria-hidden="true">·</span>
                    <span lang="hi">जगह देखें</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-slate-100">
              {lightboxItem.imageUrl ? (
                <img src={lightboxItem.imageUrl} alt={lightboxItem.title} className="w-full h-full object-cover" />
              ) : (
                <ScenicArtwork variant={lightboxItem.variant} className="w-full h-full object-cover" />
              )}
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 text-slate-800 hover:bg-white shadow"
                aria-label="Close preview"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-gov-green-800 mb-1">
                <FiImage className="w-4 h-4" />
                <span>{lightboxItem.category}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{lightboxItem.title}</h3>
              <p lang="hi" className="mt-0.5 text-xs font-semibold text-gov-saffron-600">{lightboxItem.hindi}</p>
              {lightboxItem.mapUrl && (
                <a
                  href={lightboxItem.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gov-green-800 hover:text-gov-saffron-600"
                >
                  <FiCompass className="h-4 w-4" />
                  <span>Explore Place · जगह देखें</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
