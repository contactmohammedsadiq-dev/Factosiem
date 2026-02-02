export default function FactosiemLogo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Main gradient for 3D effect */}
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Dark gradient for shading */}
        <linearGradient id="darkGradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#15803d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#166534', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Light gradient for highlights */}
        <linearGradient id="lightGradient" x1="0%" y1="0%" x2="50%" y2="50%">
          <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 0.2 }} />
        </linearGradient>

        {/* Filter for depth shadow */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.4"/>
        </filter>
      </defs>
      
      <g transform="translate(50, 50)">
        {/* Back facet (dark) - bottom right */}
        <path 
          d="M 0 -30 L 26 -15 L 26 15 L 0 30 Z" 
          fill="url(#darkGradient)"
        />
        
        {/* Right facet (medium) - right side */}
        <path 
          d="M 0 -30 L 26 -15 L 26 15 L 0 30 Z" 
          fill="url(#darkGradient)"
          transform="rotate(120)"
        />
        
        {/* Left facet (medium) - left side */}
        <path 
          d="M 0 -30 L 26 -15 L 26 15 L 0 30 Z" 
          fill="url(#darkGradient)"
          transform="rotate(240)"
        />
        
        {/* Main diamond - front facing */}
        <path 
          d="M 0 -40 L 30 -10 L 0 20 L -30 -10 Z" 
          fill="url(#mainGradient)"
          filter="url(#shadow)"
          style={{ strokeLinejoin: 'round' }}
        />
        
        {/* Top facet highlight */}
        <path 
          d="M 0 -40 L 15 -25 L 0 -10 L -15 -25 Z" 
          fill="url(#lightGradient)"
          opacity="0.6"
        />
        
        {/* Inner white diamond center */}
        <path 
          d="M 0 -8 L 10 0 L 0 8 L -10 0 Z" 
          fill="#ffffff"
        />
        
        {/* White center inner circle for depth */}
        <circle cx="0" cy="0" r="3" fill="#ffffff" opacity="0.8"/>
      </g>
    </svg>
  );
}
