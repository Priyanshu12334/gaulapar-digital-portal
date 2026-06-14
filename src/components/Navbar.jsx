import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiInfo, FiLayers, FiBookOpen, FiAward, FiShield, FiPhone, FiHome } from 'react-icons/fi';

const Navbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FiHome className="mr-2" /> },
    { name: 'Development', href: '#development', icon: <FiLayers className="mr-2" /> },
    { name: 'Education', href: '#education', icon: <FiBookOpen className="mr-2" /> },
    { name: 'Farmers', href: '#farmers', icon: <FiAward className="mr-2" /> },
    { name: 'Panchayat', href: '#panchayat', icon: <FiShield className="mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <FiPhone className="mr-2" /> },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/80 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#home" className="flex items-center gap-2 group">
                <span className="text-3xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110">🌱</span>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-gov-green-800 to-gov-green-600 bg-clip-text text-transparent group-hover:from-gov-green-700 group-hover:to-gov-saffron-600 transition-colors">
                    Suryapura
                  </span>
                  <span className="text-[10px] font-bold text-gov-saffron-600 tracking-wider -mt-1 uppercase">
                    सूर्यपुरा ग्राम विकास पोर्टल
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-gov-green-700 hover:bg-gov-green-50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={onOpenModal}
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-gov-green-700 to-gov-green-800 text-white rounded-xl text-sm font-bold shadow-sm hover:shadow-md hover:from-gov-green-800 hover:to-gov-green-950 active:scale-95 transition-all duration-150"
              >
                Digital Identity / नागरिक लॉगिन
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-gov-green-700 hover:bg-gov-green-50 focus:outline-none transition-all duration-200"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 max-w-xs w-72 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-gov-cream-bg">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-lg font-bold bg-gradient-to-r from-gov-green-800 to-gov-green-600 bg-clip-text text-transparent">
              Suryapura
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-gov-green-700 hover:bg-gov-green-50 transition-all duration-200"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenModal();
            }}
            className="w-full px-4 py-3 bg-gradient-to-r from-gov-green-700 to-gov-green-800 text-white rounded-xl text-sm font-bold text-center shadow-md hover:from-gov-green-800 active:scale-95 transition-all duration-150"
          >
            Digital Identity / नागरिक लॉगिन
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
