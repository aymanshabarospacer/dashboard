import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-slate-300 border-b border-gray-700">
      <div className='container mx-auto flex justify-between items-center px-8 py-4 shadow-md'>
        {/* Logo and brand name */}
        <div className="text-xl font-semibold">CC - Reports</div>

        {/* Search input */}
        <div className="flex-grow mx-4 text-center">
          <input type="search" placeholder="Search..." className="w-2/6 p-2 border rounded-md bg-gray-900 border-slate-800" />
        </div>

        {/* Notification and profile */}
        <div className="flex items-center">
          <button className="p-2">Back to CloudConnect</button>
        </div>
      </div>
    </header>
  );
};

export default Header;