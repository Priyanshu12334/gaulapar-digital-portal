import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative scroll-mt-20">
      {/* Saffron and Green top border */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-gov-saffron-500" />
        <div className="w-1/2 bg-gov-green-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Portal Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gov-green-700 text-white flex items-center justify-center font-extrabold text-base">
                गौ
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight block leading-none">
                  Gaulapar • गौलापार
                </span>
                <span className="text-[11px] font-semibold text-gov-saffron-500">
                  Digital Village Portal
                </span>
              </div>
            </div>
            <p className="text-xs font-medium text-slate-400 leading-relaxed">
              गौलापार डिजिटल ग्राम पोर्टल — हल्द्वानी, जिला नैनीताल, उत्तराखंड के गौलापार क्षेत्र की संस्कृति, प्रमुख स्थलों, शिक्षा और खेती-बाड़ी की जानकारी का साझा मंच।
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-green-600 pl-3">
              प्रमुख अनुभाग (Explore)
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#home" className="hover:text-gov-saffron-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gov-saffron-500 transition-colors">About Gaulapar</a></li>
              <li><a href="#places" className="hover:text-gov-saffron-500 transition-colors">Places to Explore</a></li>
              <li><a href="#development" className="hover:text-gov-saffron-500 transition-colors">Development</a></li>
              <li><a href="#education" className="hover:text-gov-saffron-500 transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-saffron-500 pl-3">
              समुदाय व सेवाएं (Community)
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#agriculture" className="hover:text-gov-green-500 transition-colors">Farming</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-gold-600 pl-3">
              संपर्क विवरण (Contact)
            </h4>
            <ul className="space-y-3 text-xs font-medium text-slate-400">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-gov-saffron-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Gaulapar region, Haldwani, District Nainital, Uttarakhand, India.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                
                <span>Built by Priyanshu Suyal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-gov-green-500 w-4 h-4 flex-shrink-0" />
                <a href="tel:+918006084643" className="hover:text-gov-saffron-500 transition-colors">
                  +91 8006084643
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-gov-gold-500 w-4 h-4 flex-shrink-0" />
                <a href="mailto:suyalpriyanshu2@gmail.com" className="hover:text-gov-saffron-500 transition-colors break-all">
                  suyalpriyanshu2@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Social & Scroll Top */}
        <div className="my-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-gov-blue-700 hover:text-white rounded-xl transition-all"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/priyanshu_suyal_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-800 hover:bg-gov-saffron-600 hover:text-white rounded-xl transition-all"
              aria-label="Instagram Profile"
            >
              <FiInstagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:suyalpriyanshu2@gmail.com"
              className="p-2.5 bg-slate-800 hover:bg-gov-green-700 hover:text-white rounded-xl transition-all"
              aria-label="Email Portal Maintainer"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-2 transition-all"
          >
            <span>Scroll To Top</span>
            <FiArrowUp />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/60 pt-6 text-center text-xs font-medium text-slate-500 space-y-1">
          <p>© 2026 गौलापार डिजिटल ग्राम पोर्टल | Gaulapar Digital Village Portal</p>
          <p>Gaulapar, Haldwani, District Nainital, Uttarakhand – 263139</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
