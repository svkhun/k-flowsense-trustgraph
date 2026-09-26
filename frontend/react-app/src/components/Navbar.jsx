import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Overview' },
    { to: '/flowsense', label: 'FlowSense' },
    { to: '/trustgraph', label: 'TrustGraph' },
    { to: '/architecture', label: 'AI Architecture' },
    { to: '/personas', label: 'Personas & Impact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#090A0F]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#00A950] flex items-center justify-center text-white border border-emerald-400/30 shadow-sm transition-transform duration-150 group-hover:scale-105">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              FlowSense <span className="text-zinc-500 font-light">&amp;</span> <span className="text-[#00A950]">TrustGraph</span>
            </span>
            <span className="tech-label text-[10px] bg-white/[0.04] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded">
              K PLUS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs font-medium px-3 py-1.5 rounded-md transition-colors duration-150 outline-none ${
                  isActive
                    ? 'text-white bg-white/[0.08] border border-white/15'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <span className="tech-label hidden xl:inline text-[10px] text-zinc-400 px-2 py-1 rounded bg-white/[0.02] border border-white/5">
            SLA: &lt; 80ms
          </span>

          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 bg-[#00A950] hover:bg-[#008F43] text-white px-3.5 py-1.5 rounded-md font-medium text-xs border border-emerald-400/20 shadow-sm transition-colors duration-150"
          >
            <span>Live Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-[#090A0F] border-b border-white/10 space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-white/[0.08] text-white border border-white/15'
                      : 'text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#00A950] text-white px-3 py-2 rounded-md font-medium text-xs mt-2"
            >
              <span>เปิดแอปจำลอง (Simulator)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
