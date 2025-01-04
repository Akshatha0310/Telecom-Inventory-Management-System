import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Users, Truck, Settings } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const SidebarItem = ({ icon, label, to }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="flex items-center space-x-2 px-4 mb-8">
        <Package className="w-8 h-8 text-indigo-600" />
        <span className="text-xl font-bold">StockFlow</span>
      </div>
      
      <nav className="space-y-1">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" to="/" />
        <SidebarItem icon={<Package />} label="Products" to="/products" />
        <SidebarItem icon={<Truck />} label="Suppliers" to="/suppliers" />
        <SidebarItem icon={<Users />} label="Users" to="/users" />
        <SidebarItem icon={<Settings />} label="Settings" to="/settings" />
      </nav>
    </div>
  );
}