import React from 'react';
import { ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';
import type { StockActivity } from '../types';

const activities: StockActivity[] = [
  {
    id: '1',
    type: 'in',
    productId: 'Product A',
    quantity: 250,
    timestamp: '2 hours ago',
    description: 'Stock received: 250 units of Product A'
  },
  {
    id: '2',
    type: 'out',
    productId: 'Product B',
    quantity: 50,
    timestamp: '4 hours ago',
    description: 'Stock out: 50 units of Product B'
  }
];

export default function ActivityLog() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              activity.type === 'in' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {activity.type === 'in' ? <ArrowUpRight /> : <ArrowDownRight />}
            </div>
            
            <div>
              <p className="font-medium">{activity.description}</p>
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
        
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
            <AlertTriangle />
          </div>
          <div>
            <p className="font-medium">Low stock alert: Product C (5 units remaining)</p>
            <p className="text-sm text-gray-500">6 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}