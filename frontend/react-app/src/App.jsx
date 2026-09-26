import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MicroAuthModal from './components/MicroAuthModal';

// Route Pages
import HomePage from './pages/HomePage';
import FlowSensePage from './pages/FlowSensePage';
import TrustGraphPage from './pages/TrustGraphPage';
import ArchitecturePage from './pages/ArchitecturePage';
import PersonasPage from './pages/PersonasPage';
import SimulatorPage from './pages/SimulatorPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isMicroAuthOpen, setIsMicroAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#050814] relative selection:bg-emerald-500 selection:text-white">
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar onOpenScamModal={() => setIsMicroAuthOpen(true)} />

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

      {/* Global Enterprise Footer */}
      <Footer />
    </div>
  );
}
