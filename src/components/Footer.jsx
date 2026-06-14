import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin,
  FiInstagram,
  FiArrowUp,
  FiGlobe
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative">
      {/* Saffron and Green top borders */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-gov-saffron-500" />
        <div className="w-1/2 bg-gov-green-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Portal */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌱</span>
              <span className="text-xl font-black text-white tracking-tight">Suryapura</span>
            </div>
            <p className="text-xs font-semibold text-slate-400 leading-relaxed">
              सूर्यपुरा ग्राम विकास पोर्टल का उद्देश्य ग्राम पंचायत में शिक्षा, कृषि, स्वास्थ्य और बुनियादी ढांचे को डिजिटल सशक्तिकरण के माध्यम से समृद्ध और पारदर्शी बनाना है।
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Pioneering rural digitalization and self-reliance under the Smart Village Campaign.
            </p>
          </div>

          {/* Development Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-green-600 pl-3">
              विकास कार्यक्रम (Programs)
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#development" className="hover:text-gov-saffron-500 transition-colors">🌾 उन्नत कृषि सहायता (Agriculture)</a>
              </li>
              <li>
                <a href="#education" className="hover:text-gov-saffron-500 transition-colors">🎓 डिजिटल स्कूलिंग (Smart Education)</a>
              </li>
              <li>
                <a href="#development" className="hover:text-gov-saffron-500 transition-colors">🛣️ पक्की सड़क कनेक्टिविटी (Roads)</a>
              </li>
              <li>
                <a href="#development" className="hover:text-gov-saffron-500 transition-colors">💧 स्वच्छ जल एवं स्वच्छता (Water & Sanitation)</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-saffron-500 pl-3">
              त्वरित लिंक (Quick Links)
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a href="#home" className="hover:text-gov-green-500 transition-colors">मुख्य पृष्ठ (Home Page)</a>
              </li>
              <li>
                <a href="#statistics" className="hover:text-gov-green-500 transition-colors">प्रभाव और आंकड़े (Impact Statistics)</a>
              </li>
              <li>
                <a href="#panchayat" className="hover:text-gov-green-500 transition-colors">ग्राम पंचायत सूचनाएं (Panchayat Board)</a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-gov-green-500 transition-colors">नागरिक अधिकार घोषणा पत्र</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gov-gold-600 pl-3">
              संपर्क विवरण (Contact Us)
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold text-slate-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gov-saffron-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>पंचायत भवन, ग्राम-सूर्यपुरा, वार्ड नं.-04, पिन: 802101, भारत।</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <span className="text-gov-gold-500 font-bold flex-shrink-0">संपर्क व्यक्ति / Contact:</span>
                <span>Priyanshu Suyal</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gov-green-500 w-4 h-4 flex-shrink-0" />
                <a href="tel:+918006084643" className="hover:text-gov-saffron-500 transition-colors" aria-label="Call Priyanshu Suyal at +918006084643">
                  +91 8006084643
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-gov-gold-500 w-4 h-4 flex-shrink-0" />
                <a href="mailto:suyalpriyanshu2@gmail.com" className="hover:text-gov-saffron-500 transition-colors" aria-label="Email Priyanshu Suyal at suyalpriyanshu2@gmail.com">
                  suyalpriyanshu2@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle divider */}
        <div className="my-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/priyanshu-suyal-5732b224a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 hover:bg-gov-blue-700 hover:text-white rounded-xl transition-all hover:-translate-y-1 shadow animate-pulse-subtle" 
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://www.instagram.com/priyanshu_suyal_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 bg-slate-800 hover:bg-gov-saffron-600 hover:text-white rounded-xl transition-all hover:-translate-y-1 shadow" 
              title="Instagram"
              aria-label="Instagram Profile"
            >
              <FiInstagram className="w-4.5 h-4.5" />
            </a>
            <a 
              href="mailto:suyalpriyanshu2@gmail.com" 
              className="p-2.5 bg-slate-800 hover:bg-gov-green-700 hover:text-white rounded-xl transition-all hover:-translate-y-1 shadow" 
              title="Email Developer"
              aria-label="Email Developer"
            >
              <FiMail className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Go To Top button */}
          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl border border-slate-700 hover:border-slate-600 flex items-center gap-2 shadow active:scale-95 transition-all"
          >
            <span>Scroll To Top</span>
            <FiArrowUp />
          </button>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-slate-800/60 pt-6 text-center text-[10px] font-bold text-slate-500 space-y-2">
          <p>© 2026 सूर्यपुरा ग्राम विकास पोर्टल</p>
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span className="flex items-center gap-0.5"><FiGlobe /> NATIONAL INFORMATICS CENTRE</span>
            <span>•</span>
            <span>DIGITAL INDIA INITIATIVE</span>
            <span>•</span>
            <span>DEPLOYED ON VERCEL</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
