import React from 'react';
import { Book, FileText, HelpCircle } from 'lucide-react';

const resources = [
  {
    title: 'Regulatory Guidelines',
    icon: FileText,
    description: 'Essential compliance and regulatory information for AYUSH startups',
  },
  {
    title: 'Best Practices',
    icon: Book,
    description: 'Industry standards and recommended practices for success',
  },
  {
    title: 'FAQs',
    icon: HelpCircle,
    description: 'Common questions and detailed answers about the registration process',
  },
];

export default function KnowledgeBase() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Knowledge Center</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <div
              key={resource.title}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <Icon className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-500">{resource.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}