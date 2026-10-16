import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import FlowSensePage from './pages/FlowSensePage';
import TrustGraphPage from './pages/TrustGraphPage';
import ArchitecturePage from './pages/ArchitecturePage';
import PersonasPage from './pages/PersonasPage';
import DatasetAnalyticsPage from './pages/DatasetAnalyticsPage';
import SimulatorPage from './pages/SimulatorPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return <div className="project-shell">
    <a href="#main-content" className="skip-link">ข้ามไปเนื้อหา</a>
    <ScrollToTop /><Navbar />
    <div className="project-body">
      <header className="project-topbar"><span>FlowSense <span className="muted">×</span> TrustGraph</span><span className="prototype-label">เว็บไซต์นำเสนอ · แอปต้นแบบ</span></header>
      <main id="main-content" className="page-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flowsense" element={<FlowSensePage />} />
          <Route path="/trustgraph" element={<TrustGraphPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/personas" element={<PersonasPage />} />
          <Route path="/dataset" element={<DatasetAnalyticsPage />} />
          <Route path="/app" element={<SimulatorPage />} />
          <Route path="/wealthpilot" element={<Navigate to="/flowsense" replace />} />
          <Route path="/sentinel" element={<Navigate to="/trustgraph" replace />} />
          <Route path="/simulator" element={<Navigate to="/app" replace />} />
          {['/data', '/audit'].map(path => <Route key={path} path={path} element={<Navigate to="/dataset" replace />} />)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main><Footer />
    </div>
  </div>;
}
