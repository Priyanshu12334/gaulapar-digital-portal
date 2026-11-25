const crops = [
  {
    name: 'Tomato',
    hindi: 'टमाटर',
    season: 'Cool season · ठंडा मौसम',
    descriptionHi: 'टमाटर की खेती और इसकी देखभाल के बारे में जानें।',
    descriptionEn: 'Learn about tomato growing seasons and crop care.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Tomato_plants%2C_2021_-_geograph.org.uk_-_6748379.jpg/960px-Tomato_plants%2C_2021_-_geograph.org.uk_-_6748379.jpg',
    imageAlt: 'Tomato plants growing in a garden',
    wikiUrl: 'https://en.wikipedia.org/wiki/Tomato',
  },
  {
    name: 'Wheat',
    hindi: 'गेहूं',
    season: 'Rabi · रबी',
    descriptionHi: 'गेहूं की रबी फसल और बुवाई के मौसम के बारे में जानें।',
    descriptionEn: 'Learn about wheat as a Rabi crop and when it is sown.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Sunset-over-the-wheat-field-featured.jpg/960px-Sunset-over-the-wheat-field-featured.jpg',
    imageAlt: 'A wheat field at sunset',
    wikiUrl: 'https://en.wikipedia.org/wiki/Wheat',
  },
  {
    name: 'Paddy / Rice',
    hindi: 'धान',
    season: 'Monsoon · खरीफ',
    descriptionHi: 'धान की खेती बारिश और सिंचाई पर निर्भर करती है।',
    descriptionEn: 'Paddy growing depends on monsoon rain and irrigation.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Water_reflection_of_a_boy_feeding_hay_to_a_cow_in_a_paddy_field_at_golden_hour_in_Laos.jpg/960px-Water_reflection_of_a_boy_feeding_hay_to_a_cow_in_a_paddy_field_at_golden_hour_in_Laos.jpg',
    imageAlt: 'A paddy field in Laos',
    wikiUrl: 'https://en.wikipedia.org/wiki/Rice',
  },
  {
    name: 'Sugarcane',
    hindi: 'गन्ना',
    season: 'Long season · लंबी अवधि',
    descriptionHi: 'गन्ने की फसल खेत में लंबे समय तक रहती है।',
    descriptionEn: 'Sugarcane stays in the field for a long growing season.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Sugarcane_Field_Srirangapatna_Karnataka_Jul22_R16_06192.jpg/960px-Sugarcane_Field_Srirangapatna_Karnataka_Jul22_R16_06192.jpg',
    imageAlt: 'A sugarcane field in Karnataka',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sugarcane',
  },
  {
    name: 'Mustard',
    hindi: 'सरसों',
    season: 'Rabi · रबी',
    descriptionHi: 'सरसों की बुवाई और इसके उपयोग के बारे में जानें।',
    descriptionEn: 'Learn about mustard sowing and its uses.',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Brassica_rapa_-_April_2023_-_Sarah_Stierch_01.jpg/960px-Brassica_rapa_-_April_2023_-_Sarah_Stierch_01.jpg',
    imageAlt: 'Brassica rapa flowers in California',
    wikiUrl: 'https://en.wikipedia.org/wiki/Mustard',
  },
  {
    name: 'Potato',
    hindi: 'आलू',
    season: 'Cool season · ठंडा मौसम',
    descriptionHi: 'आलू की फसल के मौसम और देखभाल के बारे में जानें।',
    descriptionEn: 'Learn about potato growing seasons and crop care.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Freshly harvested potatoes',
    wikiUrl: 'https://en.wikipedia.org/wiki/Potato',
  },
  {
    name: 'Seasonal vegetables',
    hindi: 'मौसमी सब्जियां',
    season: 'By season · मौसम के अनुसार',
    descriptionHi: 'सब्जियों का चुनाव मौसम और पानी की उपलब्धता पर निर्भर करता है।',
    descriptionEn: 'Vegetable choices depend on the season and available water.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh seasonal vegetables',
    wikiUrl: 'https://en.wikipedia.org/wiki/Vegetable',
  },
];

const Agriculture = () => (
  <section id="agriculture" className="py-16 md:py-24 bg-gov-cream-bg scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="badge-green mb-3">खेती-बाड़ी / Farming</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
          गौलापार क्षेत्र की फसलें और मौसम
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
          Seasons are general guides; crops and sowing dates vary by farm and locality.
        </p>
      </div>

      <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <article
            key={crop.name}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 flex-shrink-0 bg-gov-green-100">
              <img
                src={crop.image}
                alt={crop.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gov-green-900 shadow-sm">
                {crop.season}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-slate-900">{crop.name}</h3>
              <p lang="hi" className="mt-0.5 text-sm font-semibold text-gov-saffron-700">{crop.hindi}</p>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                <p lang="hi">{crop.descriptionHi}</p>
                <p lang="en">{crop.descriptionEn}</p>
              </div>
              <a
                href={crop.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-gov-green-800 transition-colors hover:text-gov-green-600"
              >
                <span>Know More →</span>
                <span aria-hidden="true">/</span>
                <span lang="hi">और जानें →</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Crop cards describe growing seasons and do not claim that every crop is grown in every locality.
        {' '}
        <a
          href="https://agriculture.uk.gov.in/agriculture-statistics-data/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gov-green-800 underline underline-offset-2 hover:text-gov-saffron-600"
        >
          State crop reports
        </a>
      </p>
    </div>
  </section>
);

export default Agriculture;
