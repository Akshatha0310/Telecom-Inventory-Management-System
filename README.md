# Telecom Inventory Management System (TIMS)

## Objective
The Telecom Inventory Management System (TIMS) is designed for seamless management of telecom products and services inventory. It focuses on managing users, products, suppliers, stock levels, and notifications.

## Key Features
- **User Management**: Handle user roles and authentication.
- **Product Management**: Add, edit, delete products with categories and filters.
- **Supplier Management**: Manage supplier details and order history.
- **Stock Transactions**: Track stock movements (in/out) with timestamps.
- **Alerts & Notifications**: Notify users about low stock levels, overdue orders, etc.

---

## Key Components

### 1. **Frontend (User Interface)**

**Features**:
- **User Authentication**: Login, roles (Admin, Manager, Staff)
- **Product Management**: Add/Edit/Delete products
- **Product Categories & Searchable Filters**: Easy search and categorization
- **Stock Transactions**: Log stock in/out transactions
- **Notifications**: Alerts for low stock, overdue orders

---

### 2. **Backend (Server & APIs)**

**Core Features**:
- **API Endpoints**: CRUD operations for users, products, and suppliers
- **Transaction Handling**: Stock in/out with timestamps
- **Role-based Access Control**: Admin, Manager, Staff
- **Notification Triggers**: Low stock, overdue orders
- **Input Validation**: Ensure data integrity (e.g., product codes, stock counts)

---

### 3. **Database (Data Storage & Management)**

**Database Tables**:
- **Users**: User roles and credentials
- **Products**: Details, stock levels, reorder points
- **Suppliers**: Contact info, order history
- **Transactions**: Stock in/out, timestamps

**Features**:
- Normalized Tables
- Secure handling of sensitive data

---

### 4. **Alerts & Notifications**

**Features**:
- Low stock alerts
- Pending or overdue order notifications

---

## Features

### MVP Features (Essential)
- **User Authentication & Role-Based Access**: Admin, Manager, Staff
- **Product Management**: Add/Edit/Delete products, categories, stock levels, reorder points
- **Supplier Management**: Admins can add/edit suppliers and track order history
- **Alerts & Notifications**: Low stock, overdue orders, and notifications
- **Search & Filtering**: Search products by name, category, stock level

### Nice-to-Have Features
- **Demand Forecasting**: Predict demand with ≥ 80% accuracy based on historical data
- **Data Import/Export**: CSV/Excel support for product data import/export
- **Reporting Dashboard**: Display key metrics like stock levels and order statuses

---

## Overview of the Dataset

### Product Sheet:
- **ProductName**: Name of the product (e.g., Cisco ISR 1101, HP 5406zl)
- **Description**: Brief product description
- **Product Category**: Category (Router, Switch, etc.)
- **Model Number & Serial Number**: Unique identifiers
- **StockLevel & ReorderPoint**: Current stock and reorder level
- **Supplier Information**: Name, email, contact details
- **Order Details**: Order date, quantity, and status

### User Sheet:
- **UserId**: Unique ID for each user
- **UserName and Password**: Login credentials
- **Role**: Admin, Manager, or Staff
- **Contact Information**: Phone number and email

