// Mock data for the application
export const products = [
  {
    id: 'PRD001',
    name: 'Cisco ISR 1101',
    description: 'Integrated Services Router with advanced security features',
    category: 'Router',
    modelNumber: 'ISR1101-K9',
    serialNumber: 'FTX2139A0BY',
    stockLevel: 15,
    reorderPoint: 10,
    supplier: 'Cisco Systems Inc.',
    orderDetails: {
      date: '2024-03-15',
      quantity: 5,
      status: 'Pending'
    }
  },
  {
    id: 'PRD002',
    name: 'HP 5406zl Switch',
    description: 'Enterprise-grade network switch',
    category: 'Switch',
    modelNumber: '5406zl-48G',
    serialNumber: 'SG1234567',
    stockLevel: 8,
    reorderPoint: 5,
    supplier: 'HP Enterprise',
    orderDetails: {
      date: '2024-03-10',
      quantity: 3,
      status: 'Delivered'
    }
  },
  {
    id: 'PRD003',
    name: 'Palo Alto PA-220',
    description: 'Next-generation firewall for branch offices',
    category: 'Firewall',
    modelNumber: 'PA-220',
    serialNumber: 'PA12345',
    stockLevel: 12,
    reorderPoint: 8,
    supplier: 'Palo Alto Networks',
    orderDetails: {
      date: '2024-03-12',
      quantity: 4,
      status: 'Processing'
    }
  }
];

export const suppliers = [
  {
    id: 'SUP001',
    name: 'Cisco Systems Inc.',
    email: 'sales@cisco.com',
    phone: '+1 (408) 526-4000',
    address: 'San Jose, CA',
    status: 'Active'
  },
  {
    id: 'SUP002',
    name: 'HP Enterprise',
    email: 'sales@hpe.com',
    phone: '+1 (650) 857-1501',
    address: 'Palo Alto, CA',
    status: 'Active'
  },
  {
    id: 'SUP003',
    name: 'Palo Alto Networks',
    email: 'sales@paloaltonetworks.com',
    phone: '+1 (408) 753-4000',
    address: 'Santa Clara, CA',
    status: 'Active'
  }
];

export const users = [
  {
    id: 'USR001',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    phone: '+1 (555) 123-4567',
    status: 'Active'
  },
  {
    id: 'USR002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Manager',
    phone: '+1 (555) 234-5678',
    status: 'Active'
  },
  {
    id: 'USR003',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    role: 'Staff',
    phone: '+1 (555) 345-6789',
    status: 'Active'
  }
];