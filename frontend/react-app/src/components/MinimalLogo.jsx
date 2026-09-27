import React from 'react';

/**
 * MinimalLogo Component
 * Ultra-clean, modern geometric emblem for FlowSense & TrustGraph (K PLUS).
 * Integrates:
 * 1. FlowSense (Dynamic fluid liquidity wave)
 * 2. TrustGraph (Precision graph vertex defense)
 * 3. K PLUS (Geometric Monogram)
 */
export default function MinimalLogo({ 
  size = 'md', 
  showText = true, 
  animated = false,
  glow = false,
  className = '',
  onClick
}) {
  // Dimension mappings
  const iconSizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };

  const currentIconSize = iconSizes[size] || iconSizes.md;

  return (
    <div 
      className={`inline-flex items-center gap-2.5 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Minimal Icon Container */}
      <div 
        className={`relative ${currentIconSize} rounded-xl bg-slate-900/90 border border-emerald-500/25 flex items-center justify-center p-1.5 shadow-sm shadow-emerald-950/40 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_18px_rgba(0,169,80,0.3)] transition-all duration-200 shrink-0`}
      >
        {/* Subtle Ambient Glow */}
        <div 
          className={`absolute inset-0 rounded-xl bg-emerald-500/10 blur-sm pointer-events-none transition-opacity duration-300 ${
            glow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} 
        />

        {/* Minimalist SVG Vector */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${animated ? 'animate-pulse' : ''}`}
        >
          <defs>
            <linearGradient id="min-k-emerald" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F59B" />
              <stop offset="0.55" stopColor="#00A950" />
              <stop offset="1" stopColor="#005227" />
            </linearGradient>
            <linearGradient id="min-k-mint" x1="12" y1="6" x2="28" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6EE7B7" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="min-shield-wire" x1="6" y1="3" x2="26" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F59B" stopOpacity="0.45" />
              <stop offset="1" stopColor="#00A950" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* 1. Subtle Minimal Shield Frame (Hairline wireframe for depth) */}
          <path 
            d="M16 3.5 L26 8 V14.5 C26 21 21.6 26.4 16 28.2 C10.4 26.4 6 21 6 14.5 V8 L16 3.5 Z" 
            stroke="url(#min-shield-wire)" 
            strokeWidth="1.2" 
            strokeLinejoin="round" 
            fill="rgba(0, 169, 80, 0.03)"
          />

          {/* 2. Vertical Financial Core Ledger (Stability & Defense) */}
          <rect 
            x="8.5" 
            y="7.5" 
            width="2.8" 
            height="17" 
            rx="1.4" 
            fill="url(#min-k-emerald)" 
          />

          {/* 3. FlowSense Wave Branch (Upper Fluid Liquidity Arc) */}
          <path 
            d="M13.5 16 C15.2 13.8 17.5 10.8 22 7.8 C22.8 7.2 24.1 7.6 24.4 8.7 C24.7 9.8 24 10.9 23 11.6 C19.8 14 17.8 16.2 15.8 17.6" 
            stroke="url(#min-k-mint)" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />

          {/* 4. TrustGraph Defense Vector (Lower Graph Ray) */}
          <path 
            d="M13.8 15.2 L23.5 24.5" 
            stroke="url(#min-k-emerald)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />

          {/* 5. Sub-80ms Real-time AI Nexus Node */}
          <circle cx="13.8" cy="15.8" r="1.6" fill="#FFFFFF" />
          <circle cx="13.8" cy="15.8" r="0.9" fill="#00A950" />
        </svg>
      </div>

      {/* Clean Minimal Typography */}
      {showText && (
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              FlowSense <span className="text-emerald-400 font-normal">·</span> TrustGraph
            </span>
            <span className="text-[9px] font-mono tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-1.5 py-0.5 rounded shadow-xs">
              K+
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
            KBTG Tech Flagship • Autonomous Engine
          </p>
        </div>
      )}
    </div>
  );
}
