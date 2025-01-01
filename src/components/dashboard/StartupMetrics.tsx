import React from 'react';
import { TrendingUp, Users, Calendar, Target } from 'lucide-react';

const metrics = [
  { name: 'Growth Stage', value: 'Early Traction', icon: TrendingUp },
  { name: 'Team Size', value: '12 members', icon: Users },
  { name: 'Founded', value: 'Jan 2024', icon: Calendar },
  { name: 'Next Milestone', value: 'Series A', icon: Target },
];

export default function StartupMetrics() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {metric.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {metric.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}