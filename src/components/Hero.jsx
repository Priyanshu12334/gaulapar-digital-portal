import { FiArrowRight, FiCompass, FiMapPin } from 'react-icons/fi';
import heroRiverImage from '../assets/gaula-river-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-mesh">
      {/* Subtle Ambient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gov-green-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gov-saffron-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-[58%] space-y-6 pr-0 lg:pr-2 text-center lg:text-left animate-fade-in-up">

            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gov-green-200 shadow-sm">
              <FiMapPin className="w-3.5 h-3.5 text-gov-saffron-600" />
              <span className="text-xs font-semibold text-gov-green-800 tracking-wide">
                Haldwani, District Nainital, Uttarakhand
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-center text-[clamp(1.125rem,5.2vw,1.375rem)] sm:text-left sm:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              <span className="block whitespace-nowrap">
                गौलापार – <span className="text-gov-green-700">हमारी पहचान,</span>{' '}
                <span className="text-gov-saffron-600">हमारा भविष्य</span>
              </span>
              <span className="mt-2 hidden whitespace-nowrap text-[clamp(0.8125rem,3.6vw,0.9375rem)] sm:block sm:text-base lg:text-lg xl:text-xl font-medium text-slate-500">
                Gaulapar – Our Identity, Our Future
              </span>
            </h1>

            {/* English Subtitle */}
            <p className="text-sm font-medium text-gov-green-900 text-center sm:text-lg sm:text-left sm:font-bold lg:text-xl">
              Discover Gaulapar – Culture, Community &amp; Development
            </p>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              नैनीताल जनपद के हल्द्वानी क्षेत्र में गौला नदी के तट पर बसा गौलापार अपनी प्राकृतिक सुंदरता,
              कृषि परंपरा, शैक्षणिक संस्थानों और अंतरराष्ट्रीय खेल परिसर के लिए जाना जाता है।
              A digital community portal connecting residents, visitors, and local institutions across Gaulapar.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#about"
                className="w-full sm:w-auto btn-green text-center inline-flex items-center justify-center gap-2 group"
              >
                <span>Explore Gaulapar</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#places"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gov-green-50 text-slate-800 hover:text-gov-green-800 border border-slate-200 hover:border-gov-green-300 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all"
              >
                <FiCompass className="text-gov-saffron-600 w-4 h-4" />
                <span>Discover Local Places</span>
              </a>
            </div>

            {/* Authentic Quick Facts Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 border-t border-slate-200/80">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">River</p>
                <p className="text-sm font-bold text-gov-green-900 mt-0.5">Gaula</p>
              </div>
              <div className="border-x border-slate-200 px-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Area</p>
                <p className="text-sm font-bold text-gov-green-900 mt-0.5">Haldwani</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">District</p>
                <p className="text-sm font-bold text-gov-saffron-600 mt-0.5">Nainital</p>
              </div>
            </div>

          </div>

          {/* Right Visual */}
          <div className="relative z-0 w-full lg:w-[38%] flex justify-center lg:justify-end">
            <div className="relative z-0 w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-white bg-white p-2.5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-gov-green-100">
                <img
                  src={heroRiverImage}
                  alt="Gaula River flowing through a forested mountain valley"
                  className="w-full h-full object-cover object-center"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent p-5 text-white">
                  <p className="text-xs font-semibold text-gov-saffron-100 uppercase tracking-wider">
                    Uttarakhand Foothills • Gaula River Valley
                  </p>
                  <p className="text-base font-bold mt-0.5">
                    गौलापार डिजिटल ग्राम पोर्टल (Gaulapar, Haldwani)
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
