import React from 'react';
import { Package, ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import ActivityLog from '../components/ActivityLog';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <StatsCard
          title="Total Stock Items"
          value="2,451"
          icon={Package}
          className="bg-blue-50 text-blue-600"
        />
        <StatsCard
          title="Low Stock Items"
          value="15"
          icon={ArrowDownRight}
          className="bg-red-50 text-red-600"
        />
        <StatsCard
          title="Incoming Orders"
          value="126"
          icon={ArrowUpRight}
          className="bg-green-50 text-green-600"
        />
        <StatsCard
          title="Pending Orders"
          value="8"
          icon={AlertTriangle}
          className="bg-yellow-50 text-yellow-600"
        />
      </div>
      
      <ActivityLog />
    </div>
  );
}