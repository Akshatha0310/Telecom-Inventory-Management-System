export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  stockLevel: number;
  reorderPoint: number;
  supplier: string;
  price: number;
  sku: string;
}

export interface StockActivity {
  id: string;
  type: 'in' | 'out';
  productId: string;
  quantity: number;
  timestamp: string;
  description: string;
}