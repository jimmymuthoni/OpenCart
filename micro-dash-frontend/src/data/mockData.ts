export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "inactive" | "out_of_stock";
  createdAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: "pending" | "completed" | "failed" | "refunded";
  method: "credit_card" | "paypal" | "bank_transfer";
  customerName: string;
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  status: "healthy" | "warning" | "error";
  endpoint: string;
  responseTime: number;
  uptime: number;
  lastChecked: string;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerId: "CUST-001",
    customerName: "emmanuel Adeyemi",
    status: "processing",
    total: 299.99,
    items: 3,
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "ORD-002",
    customerId: "CUST-002",
    customerName: "joan casilla",
    status: "shipped",
    total: 149.50,
    items: 2,
    createdAt: "2024-01-14T14:20:00Z"
  },
  {
    id: "ORD-003",
    customerId: "CUST-003",
    customerName: "BOB chalton",
    status: "delivered",
    total: 89.99,
    items: 1,
    createdAt: "2024-01-13T09:15:00Z"
  },
  {
    id: "ORD-004",
    customerId: "CUST-004",
    customerName: "Alice Brown",
    status: "pending",
    total: 399.99,
    items: 5,
    createdAt: "2024-01-15T16:45:00Z"
  }
];

export const mockProducts: Product[] = [
  {
    id: "PROD-001",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 45,
    status: "active",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "PROD-002",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 0,
    status: "out_of_stock",
    createdAt: "2024-01-02T00:00:00Z"
  },
  {
    id: "PROD-003",
    name: "Coffee Mug",
    category: "Home",
    price: 15.99,
    stock: 120,
    status: "active",
    createdAt: "2024-01-03T00:00:00Z"
  },
  {
    id: "PROD-004",
    name: "Desk Lamp",
    category: "Home",
    price: 49.99,
    stock: 8,
    status: "active",
    createdAt: "2024-01-04T00:00:00Z"
  }
];

export const mockPayments: Payment[] = [
  {
    id: "PAY-001",
    orderId: "ORD-001",
    amount: 299.99,
    status: "completed",
    method: "credit_card",
    customerName: "emmanuel Adeyemi",
    createdAt: "2024-01-15T10:31:00Z"
  },
  {
    id: "PAY-002",
    orderId: "ORD-002",
    amount: 149.50,
    status: "completed",
    method: "paypal",
    customerName: "joan casilla",
    createdAt: "2024-01-14T14:21:00Z"
  },
  {
    id: "PAY-003",
    orderId: "ORD-004",
    amount: 399.99,
    status: "pending",
    method: "bank_transfer",
    customerName: "Alice Brown",
    createdAt: "2024-01-15T16:46:00Z"
  }
];

export const mockServices: Service[] = [
  {
    id: "SVC-001",
    name: "Order Service",
    status: "healthy",
    endpoint: "https://api.orders.example.com",
    responseTime: 120,
    uptime: 99.9,
    lastChecked: "2024-01-15T17:00:00Z"
  },
  {
    id: "SVC-002",
    name: "Payment Service",
    status: "warning",
    endpoint: "https://api.payments.example.com",
    responseTime: 350,
    uptime: 98.5,
    lastChecked: "2024-01-15T17:00:00Z"
  },
  {
    id: "SVC-003",
    name: "Product Service",
    status: "healthy",
    endpoint: "https://api.products.example.com",
    responseTime: 95,
    uptime: 99.8,
    lastChecked: "2024-01-15T17:00:00Z"
  },
  {
    id: "SVC-004",
    name: "Notification Service",
    status: "error",
    endpoint: "https://api.notifications.example.com",
    responseTime: 0,
    uptime: 85.2,
    lastChecked: "2024-01-15T17:00:00Z"
  }
];