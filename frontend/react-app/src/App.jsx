import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MicroAuthModal from './components/MicroAuthModal';
import LaunchScreen from './components/LaunchScreen';

// Route Pages
import HomePage from './pages/HomePage';
import FlowSensePage from './pages/FlowSensePage';
import TrustGraphPage from './pages/TrustGraphPage';
import ArchitecturePage from './pages/ArchitecturePage';
import PersonasPage from './pages/PersonasPage';
import DatasetAnalyticsPage from './pages/DatasetAnalyticsPage';
import SimulatorPage from './pages/SimulatorPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isMicroAuthOpen, setIsMicroAuthOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const isSimulatorRoute = location.pathname === '/app' || location.pathname === '/simulator';

  // Frame Buster: If the main SPA is loaded inside any iframe, breakout to the top window immediately
  useEffect(() => {
    try {
      if (window.top && window.top !== window.self) {
        window.top.location.href = window.location.href;
      }
    } catch (e) {
      console.warn("Frame breakout error:", e);
    }
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans text-slate-100 bg-[#050814] relative selection:bg-emerald-500 selection:text-white ${isSimulatorRoute ? 'h-screen overflow-hidden' : ''}`}>
      {/* Opening Intro Launch Loading Animation */}
      {showIntro && (
        <LaunchScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar 
        onOpenScamModal={() => setIsMicroAuthOpen(true)} 
        onReplayIntro={() => setShowIntro(true)} 
      />

      {/* Dynamic Viewport Container via React Router */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenScamModal={() => setIsMicroAuthOpen(true)} />}
          />
          <Route
            path="/flowsense"
            element={<FlowSensePage />}
          />
          <Route
            path="/wealthpilot"
            element={<Navigate to="/flowsense" replace />}
          />
          <Route
            path="/trustgraph"
            element={<TrustGraphPage onOpenScamModal={() => setIsMicroAuthOpen(true)} />}
          />
          <Route
            path="/sentinel"
            element={<Navigate to="/trustgraph" replace />}
          />
          <Route
            path="/architecture"
            element={<ArchitecturePage />}
          />
          <Route
            path="/personas"
            element={<PersonasPage />}
          />
          <Route
            path="/dataset"
            element={<DatasetAnalyticsPage />}
          />
          <Route
            path="/data"
            element={<Navigate to="/dataset" replace />}
          />
          <Route
            path="/audit"
            element={<Navigate to="/dataset" replace />}
          />
          <Route
            path="/app"
            element={<SimulatorPage />}
          />
          <Route
            path="/simulator"
            element={<Navigate to="/app" replace />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>

      {/* Global Interactive Micro-Auth Modal */}
      <MicroAuthModal
        isOpen={isMicroAuthOpen}
        onClose={() => setIsMicroAuthOpen(false)}
      />

      {/* Global Enterprise Footer (Omitted on Simulator Studio route for clean full-frame experience) */}
      {!isSimulatorRoute && <Footer />}
    </div>
  );
}
