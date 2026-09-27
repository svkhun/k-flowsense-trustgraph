import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Cpu, Smartphone, Menu, X, Zap, Sparkles } from 'lucide-react';
import MinimalLogo from './MinimalLogo';

export default function Navbar({ onOpenScamModal, onReplayIntro }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'FlowSense (CASA)', path: '/flowsense' },
    { name: 'TrustGraph (Fraud)', path: '/trustgraph' },
    { name: 'AI Architecture', path: '/architecture' },
    { name: 'Impact & Personas', path: '/personas' },
    { name: 'Dataset & Evaluation', path: '/dataset' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#050814]/85 backdrop-blur-2xl border-b border-white/10 transition-all duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Minimal Logo & Title */}
          <Link to="/" className="group focus:outline-none">
            <MinimalLogo size="md" showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                    active
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: SLA Monitor & Launch App */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Replay Intro Animation Trigger */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                title="เล่นอนิเมชั่นเปิดตัวเว็บอีกครั้ง (Replay Intro Animation)"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden xl:inline">เปิดตัวเว็บ</span>
              </button>
            )}

            {/* Real-time SLA telemetry badge */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>P99: 11.6ms &lt; 80ms SLA</span>
            </div>

            <Link
              to="/app"
              className="btn-kplus px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <Smartphone className="w-4 h-4" />
              <span>Launch Simulator</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/app"
              className="btn-kplus p-2 rounded-lg text-xs flex items-center justify-center"
              title="Launch Simulator"
            >
              <Smartphone className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B18] border-b border-white/10 px-4 pt-3 pb-5 space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Triton Engine Active • SLA &lt; 80ms</span>
          </div>

          {onReplayIntro && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors mb-2"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>เล่นอนิเมชั่นเปิดตัวเว็บ (Intro)</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Replay</span>
            </button>
          )}

          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  active
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
