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
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#064E3B] flex items-center justify-center text-white border border-emerald-800/40 shadow-sm transition-transform duration-150 group-hover:scale-105">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base sm:text-lg tracking-tight text-slate-900">
              FlowSense <span className="text-slate-400 font-light">&amp;</span> <span className="text-[#064E3B]">TrustGraph</span>
            </span>
            <span className="tech-label text-[10px] bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded tracking-wider">
              K PLUS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs px-3 py-1.5 rounded-lg transition-all duration-150 outline-none ${
                  isActive
                    ? 'text-slate-900 bg-slate-100/90 font-medium border border-slate-200/90 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-normal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <span className="tech-label hidden xl:inline text-[10px] text-slate-500 px-2 py-1 rounded bg-slate-100 border border-slate-200/80 tracking-wider">
            SLA: &lt; 80ms
          </span>

          <Link
            to="/app"
            className="inline-flex items-center gap-1.5 bg-[#064E3B] hover:bg-[#022C22] text-white px-3.5 py-1.5 rounded-lg font-medium text-xs shadow-sm transition-colors duration-150"
          >
            <span>Live Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 bg-white border-b border-slate-200 shadow-md space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-medium border border-slate-200'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-normal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#064E3B] text-white px-3 py-2 rounded-lg font-medium text-xs mt-2"
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
