/**
 * Bespoke lightweight SVG artwork tailored to Gaulapar, Haldwani (Uttarakhand foothills).
 * Avoids generic stock photos and ensures crisp, fast-loading visuals across all viewports.
 */
const ScenicArtwork = ({ variant = 'hero', className = 'w-full h-full' }) => {
  switch (variant) {
    case 'hero':
      return (
        <svg viewBox="0 0 800 560" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Gaulapar Uttarakhand Foothills Landscape">
          <defs>
            <linearGradient id="skyHero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="55%" stopColor="#f0fdf4" />
              <stop offset="100%" stopColor="#dcfce7" />
            </linearGradient>
            <linearGradient id="sunGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="riverHero" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="800" height="560" fill="url(#skyHero)" />
          {/* Warm Himalayan Sun */}
          <circle cx="620" cy="120" r="52" fill="url(#sunGlow)" opacity="0.9" />
          <circle cx="620" cy="120" r="76" fill="#fed7aa" opacity="0.35" />
          {/* Distant Nainital / Shivalik Foothills */}
          <path d="M0 300 L140 190 L280 255 L430 165 L590 245 L720 185 L800 230 L800 380 L0 380 Z" fill="#166534" opacity="0.28" />
          <path d="M0 325 L190 230 L340 285 L510 210 L680 275 L800 240 L800 400 L0 400 Z" fill="#15803d" opacity="0.45" />
          {/* Lush Bhabar/Terai Green Valley */}
          <path d="M0 355 Q220 320 440 355 T800 340 L800 560 L0 560 Z" fill="#16a34a" opacity="0.85" />
          <path d="M0 405 Q260 375 520 410 T800 395 L800 560 L0 560 Z" fill="#15803d" />
          {/* Gaula River Winding Through */}
          <path d="M460 355 C420 390 500 430 390 485 C310 525 230 545 170 560 L320 560 C385 535 470 495 530 450 C585 405 535 375 510 355 Z" fill="url(#riverHero)" opacity="0.88" />
          {/* Agricultural Terraces / Fields */}
          <path d="M20 435 L250 420 L215 475 L15 490 Z" fill="#22c55e" opacity="0.7" />
          <path d="M35 495 L220 482 L185 535 L20 545 Z" fill="#4ade80" opacity="0.55" />
          {/* Stylized Village Homes */}
          <g transform="translate(555, 365)">
            <rect x="0" y="18" width="44" height="28" rx="3" fill="#ffffff" />
            <polygon points="-5,20 22,0 49,20" fill="#ea580c" />
            <rect x="16" y="28" width="12" height="18" rx="1" fill="#14532d" />
          </g>
          <g transform="translate(625, 380)">
            <rect x="0" y="16" width="38" height="24" rx="3" fill="#fefce8" />
            <polygon points="-4,18 19,0 42,18" fill="#c2410c" />
            <rect x="14" y="24" width="10" height="16" rx="1" fill="#14532d" />
          </g>
          {/* Trees */}
          <circle cx="110" cy="365" r="24" fill="#14532d" />
          <circle cx="135" cy="372" r="18" fill="#166534" />
          <circle cx="715" cy="375" r="26" fill="#14532d" />
          <circle cx="745" cy="382" r="20" fill="#166534" />
        </svg>
      );

    case 'stadium':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Indira Gandhi International Sports Stadium Gaulapar">
          <defs>
            <linearGradient id="stadiumSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#ecfdf5" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#stadiumSky)" />
          {/* Foothills behind stadium */}
          <path d="M0 190 L130 110 L270 165 L420 95 L600 170 L600 260 L0 260 Z" fill="#15803d" opacity="0.35" />
          <rect x="0" y="240" width="600" height="140" fill="#166534" />
          {/* Stadium Bowl */}
          <ellipse cx="300" cy="255" rx="220" ry="72" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="4" />
          <ellipse cx="300" cy="245" rx="195" ry="56" fill="#f8fafc" />
          {/* Green Turf */}
          <ellipse cx="300" cy="252" rx="145" ry="38" fill="#22c55e" stroke="#ffffff" strokeWidth="2.5" />
          <line x1="300" y1="214" x2="300" y2="290" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Floodlight Towers */}
          <g stroke="#334155" strokeWidth="4">
            <line x1="120" y1="225" x2="105" y2="120" />
            <line x1="480" y1="225" x2="495" y2="120" />
          </g>
          <rect x="85" y="110" width="40" height="14" rx="3" fill="#fef08a" stroke="#475569" strokeWidth="2" />
          <rect x="475" y="110" width="40" height="14" rx="3" fill="#fef08a" stroke="#475569" strokeWidth="2" />
          {/* Canopy */}
          <path d="M110 215 Q300 155 490 215" fill="none" stroke="#ea580c" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    case 'river':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Gaula River and Bridge">
          <defs>
            <linearGradient id="riverSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
            <linearGradient id="waterFlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          <rect width="600" height="380" fill="url(#riverSky)" />
          <path d="M0 190 L140 120 L290 175 L460 105 L600 165 L600 250 L0 250 Z" fill="#15803d" opacity="0.45" />
          {/* Riverbanks */}
          <rect x="0" y="230" width="600" height="150" fill="#d6d3d1" />
          <path d="M0 245 Q300 230 600 245 L600 365 Q300 345 0 365 Z" fill="url(#waterFlow)" opacity="0.9" />
          {/* Bridge Structure */}
          <rect x="0" y="198" width="600" height="18" fill="#475569" />
          <rect x="0" y="192" width="600" height="6" fill="#f97316" />
          {/* Bridge Pillars */}
          <rect x="115" y="216" width="18" height="65" fill="#64748b" />
          <rect x="291" y="216" width="18" height="65" fill="#64748b" />
          <rect x="467" y="216" width="18" height="65" fill="#64748b" />
          {/* Water ripples */}
          <path d="M60 295 Q110 288 160 295" stroke="#e0f2fe" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M240 315 Q300 308 360 315" stroke="#e0f2fe" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M410 290 Q465 283 520 290" stroke="#e0f2fe" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'temple':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Local Temple in Gaulapar">
          <rect width="600" height="380" fill="#fff7ed" />
          <path d="M0 220 L180 140 L370 195 L530 130 L600 170 L600 380 L0 380 Z" fill="#dcfce7" />
          <rect x="0" y="280" width="600" height="100" fill="#15803d" opacity="0.85" />
          {/* Temple Platform */}
          <rect x="170" y="270" width="260" height="24" rx="4" fill="#e7e5e4" />
          {/* Sanctum */}
          <rect x="215" y="185" width="170" height="85" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="280" y="215" width="40" height="55" rx="20" fill="#9a3412" />
          {/* Shikhara */}
          <path d="M205 185 L300 85 L395 185 Z" fill="#f97316" />
          <path d="M235 185 L300 110 L365 185 Z" fill="#fb923c" />
          {/* Kalash & Flag */}
          <line x1="300" y1="85" x2="300" y2="55" stroke="#b45309" strokeWidth="3" />
          <polygon points="300,57 335,66 300,75" fill="#dc2626" />
          {/* Trees */}
          <circle cx="115" cy="240" r="38" fill="#166534" />
          <circle cx="490" cy="238" r="40" fill="#14532d" />
        </svg>
      );

    case 'barrage':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Gaula Barrage Haldwani Kathgodam">
          <rect width="600" height="380" fill="#ecfeff" />
          <path d="M0 175 L150 95 L320 155 L490 85 L600 140 L600 240 L0 240 Z" fill="#166534" opacity="0.55" />
          <rect x="0" y="235" width="600" height="145" fill="#0284c7" opacity="0.85" />
          {/* Barrage Gates */}
          <rect x="40" y="200" width="520" height="38" fill="#334155" />
          {[90, 170, 250, 330, 410, 490].map((x) => (
            <g key={x}>
              <rect x={x} y="185" width="24" height="56" rx="2" fill="#94a3b8" />
              <path d={`M${x + 2} 241 Q${x + 12} 265 ${x + 22} 241`} fill="#e0f2fe" />
            </g>
          ))}
        </svg>
      );

    case 'agriculture':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Gaulapar Agriculture and Farming">
          <rect width="600" height="380" fill="#f0fdf4" />
          <circle cx="490" cy="80" r="38" fill="#f97316" opacity="0.8" />
          <path d="M0 190 L180 120 L360 175 L600 110 L600 240 L0 240 Z" fill="#166534" opacity="0.3" />
          {/* Terraced Green Fields */}
          <path d="M0 220 Q200 190 600 225 L600 380 L0 380 Z" fill="#22c55e" />
          <path d="M0 265 Q250 240 600 270 L600 380 L0 380 Z" fill="#16a34a" />
          <path d="M0 315 Q300 295 600 320 L600 380 L0 380 Z" fill="#15803d" />
          {/* Crop Rows */}
          {[70, 140, 210, 280, 350, 420, 490].map((x) => (
            <line key={x} x1={x} y1="255" x2={x - 30} y2="375" stroke="#bbf7d0" strokeWidth="2" opacity="0.5" />
          ))}
        </svg>
      );

    case 'education':
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Schools and Education in Gaulapar">
          <rect width="600" height="380" fill="#eff6ff" />
          <rect x="0" y="275" width="600" height="105" fill="#16a34a" opacity="0.8" />
          {/* School Building */}
          <rect x="120" y="155" width="360" height="125" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="120" y="145" width="360" height="16" rx="4" fill="#15803d" />
          <polygon points="240,145 300,105 360,145" fill="#ea580c" />
          <rect x="275" y="210" width="50" height="70" rx="4" fill="#1e3a8a" />
          {[155, 205, 360, 410].map((x) => (
            <rect key={x} x={x} y="180" width="32" height="36" rx="3" fill="#bae6fd" stroke="#64748b" strokeWidth="1.5" />
          ))}
        </svg>
      );

    case 'culture':
    default:
      return (
        <svg viewBox="0 0 600 380" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kumaoni Culture and Festivals in Gaulapar">
          <rect width="600" height="380" fill="#fff7ed" />
          <path d="M0 210 L170 130 L340 190 L510 120 L600 175 L600 380 L0 380 Z" fill="#15803d" opacity="0.25" />
          {/* Traditional Aipan-inspired geometric border & diyas */}
          <rect x="60" y="70" width="480" height="240" rx="20" fill="#9a3412" opacity="0.9" />
          <rect x="78" y="88" width="444" height="204" rx="14" fill="none" stroke="#ffffff" strokeWidth="3" strokeDasharray="10 6" />
          <circle cx="300" cy="190" r="64" fill="none" stroke="#ffffff" strokeWidth="3" />
          <polygon points="300,136 346,216 254,216" fill="none" stroke="#fed7aa" strokeWidth="3" />
          <polygon points="300,244 346,164 254,164" fill="none" stroke="#fed7aa" strokeWidth="3" />
          <circle cx="300" cy="190" r="14" fill="#f97316" />
        </svg>
      );
  }
};

export default ScenicArtwork;
