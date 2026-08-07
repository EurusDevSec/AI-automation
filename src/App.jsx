import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentPortal from './pages/StudentPortal';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app/*" element={<StudentPortal />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
