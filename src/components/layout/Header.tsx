import React from 'react';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AYUSH Startup Portal</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Knowledge Base</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Profile</a>
          </nav>
        </div>
      </div>
    </header>
  );
}