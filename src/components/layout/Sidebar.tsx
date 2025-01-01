import React from 'react';
import { Home, BookOpen, Users, FileText, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home },
  { name: 'Knowledge Base', icon: BookOpen },
  { name: 'Mentorship', icon: Users },
  { name: 'Documents', icon: FileText },
  { name: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-5 px-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href="#"
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Icon className="mr-4 h-6 w-6" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}