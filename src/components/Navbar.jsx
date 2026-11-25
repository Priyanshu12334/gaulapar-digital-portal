import { useEffect, useState } from 'react';
import {
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiCompass,
  FiHome,
  FiInfo,
  FiLayers,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiX,
} from 'react-icons/fi';
import { GiWheat } from 'react-icons/gi';

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About Gaulapar', href: '#about', icon: FiInfo },
  { name: 'Places to Explore', href: '#places', icon: FiCompass },
  { name: 'Development', href: '#development', icon: FiLayers },
  { name: 'Education', href: '#education', icon: FiBookOpen },
  { name: 'Farming', href: '#agriculture', icon: GiWheat },
  { name: 'Contact', href: '#contact', icon: FiPhone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      isCollapsed ? '5.25rem' : '17rem',
    );
    return () => document.documentElement.style.removeProperty('--sidebar-width');
  }, [isCollapsed]);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const renderLinks = (mobile = false) => navLinks.map(({ name, href, icon: Icon }) => {
    const isActive = activeSection === href.slice(1);
    return (
      <a
        key={href}
        href={href}
        aria-current={isActive ? 'location' : undefined}
        title={isCollapsed && !mobile ? name : undefined}
        onClick={() => {
          setActiveSection(href.slice(1));
          if (mobile) setIsOpen(false);
        }}
        className={`nav-link ${isActive ? 'nav-link-active' : ''} ${
          isCollapsed && !mobile ? 'nav-link-collapsed' : ''
        }`}
      >
        <Icon className="nav-link-icon" aria-hidden="true" />
        <span className={isCollapsed && !mobile ? 'lg:hidden' : ''}>{name}</span>
      </a>
    );
  });

  return (
    <>
      <header className="mobile-header">
        <a href="#home" className="brand-lockup" aria-label="Gaulapar Digital Village home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span className="brand-name">
            <strong>Gaulapar <span>गौलापार</span></strong>
            <small>Digital Village Portal</small>
          </span>
        </a>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsOpen(true)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </header>

      <aside className={`desktop-sidebar ${isCollapsed ? 'desktop-sidebar-collapsed' : ''}`}>
        <a href="#home" className="brand-lockup sidebar-brand" aria-label="Gaulapar Digital Village home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span className={`brand-name ${isCollapsed ? 'lg:hidden' : ''}`}>
            <strong>Gaulapar <span>गौलापार</span></strong>
            <small>Digital Village Portal</small>
          </span>
        </a>

        <nav className="sidebar-links" aria-label="Main navigation">
          {renderLinks()}
        </nav>

        <div className={`sidebar-location ${isCollapsed ? 'lg:justify-center' : ''}`}>
          <FiMapPin className="h-4 w-4 flex-shrink-0 text-gov-saffron-600" aria-hidden="true" />
          <span className={isCollapsed ? 'lg:hidden' : ''}>
            Haldwani, Nainital, Uttarakhand
          </span>
        </div>

        <button
          type="button"
          className="sidebar-collapse-button"
          onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!isCollapsed}
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          <span className={isCollapsed ? 'lg:hidden' : ''}>
            {isCollapsed ? 'Expand' : 'Collapse'}
          </span>
        </button>
      </aside>

      <div
        className={`mobile-drawer-overlay ${isOpen ? 'mobile-drawer-overlay-open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`mobile-drawer ${isOpen ? 'mobile-drawer-open' : ''}`}
      >
        <div className="mobile-drawer-heading">
          <a href="#home" className="brand-lockup" onClick={() => setIsOpen(false)}>
            <span className="brand-mark" aria-hidden="true">G</span>
            <span className="brand-name">
              <strong>Gaulapar <span>गौलापार</span></strong>
              <small>Digital Village Portal</small>
            </span>
          </a>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <nav className="mobile-drawer-links" aria-label="Mobile navigation links">
          {renderLinks(true)}
        </nav>
        <p className="mobile-drawer-location">
          Gaulapar region, Haldwani, District Nainital
        </p>
      </aside>
    </>
  );
};

export default Navbar;
