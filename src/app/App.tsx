import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import Header from '../widgets/Header/ui/Header';
import { ReportSettings } from '../pages/ReportSettings';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/report-settings" element={<ReportSettings />} />
        {/* <Route path="/report" element="otchet" /> */}
      </Routes>
    </div>
  );
}

export default App;
