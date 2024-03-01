import React from 'react';
import Header from './components/Header';
import Sidebar from './components/MeasurementsSidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-950">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;