import React from 'react'
import {
  Users,
  Truck,
  Factory,
  Coins,
  BarChart3,
  Scissors,
  Boxes,
  Landmark,
  HelpCircle,
  FileCheck,
  GraduationCap,
} from 'lucide-react'

export interface NavMenuCategory {
  id: string
  title: string
  subtitle?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  description?: string
  targetPage?: 'home' | 'product'
  targetId?: string
  // NẾU SAU NÀY MUỐN CÓ MỤC CON: Thêm mảng `items: [...]` vào đây
  items?: {
    id: string
    name: string
    desc?: string
    badge?: string
    targetPage?: 'home' | 'product'
    targetId?: string
  }[]
}

// -----------------------------------------------------------------------
// 1. DỮ LIỆU PRODUCTS
// -----------------------------------------------------------------------
export const productCategories: NavMenuCategory[] = [
  {
    id: 'commercial',
    title: 'Commercial & Sales',
    subtitle: 'CRM & Omnichannel Orders',
    icon: Users,
    description: 'Streamline customer relationships, pricing agreements, sales orders, and delivery pipelines with automated billing.',
    targetPage: 'product',
    targetId: 'commercial',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain & Warehouse',
    subtitle: 'Procurement & IWM',
    icon: Truck,
    description: 'Centralized vendor management, automated reorder thresholds, smart bin-allocation, and barcode inventory sync.',
    targetPage: 'product',
    targetId: 'supply-chain',
  },
  {
    id: 'manufacturing-operations',
    title: 'Manufacturing Operations',
    subtitle: 'MRP & MES Execution',
    icon: Factory,
    description: 'Material requirements planning, real-time shop-floor data collection, machine downtime logs, and automated QC.',
    targetPage: 'product',
    targetId: 'manufacturing-operations',
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    subtitle: 'Costing & Accounting',
    icon: Coins,
    description: 'Standard product lifecycle costing, variance analysis, GL, multi-entity settlement, and automated tax compliance.',
    targetPage: 'product',
    targetId: 'financial-management',
  },
  {
    id: 'enterprise-management',
    title: 'Enterprise Management',
    subtitle: 'BI & Executive Insights',
    icon: BarChart3,
    description: 'Executive dashboards, predictive forecasting, KPI drill-downs, and centralized role-based access control.',
    targetPage: 'product',
    targetId: 'enterprise-management',
  },
]

// -----------------------------------------------------------------------
// 2. DỮ LIỆU SERVICES
// -----------------------------------------------------------------------
export const serviceCategories: NavMenuCategory[] = [
  {
    id: 'consultancy',
    title: 'Consultancy & Audits',
    subtitle: 'Strategic ERP Roadmap',
    icon: HelpCircle,
    description: 'On-site workflow assessments to eliminate data silos, identify operational bottlenecks, and design a custom tech roadmap.',
    targetPage: 'home',
    targetId: 'contact',
  },
  {
    id: 'implementation',
    title: 'System Implementation & SLA',
    subtitle: 'Zero-Downtime Deployment',
    icon: FileCheck,
    description: 'Seamless legacy data extraction, pilot runs, parallel testing, and 24/7 technical maintenance SLA.',
    targetPage: 'home',
    targetId: 'contact',
  },
  {
    id: 'training',
    title: 'Training & Enablement',
    subtitle: 'Role-Based Readiness',
    icon: GraduationCap,
    description: 'Digital transformation programs, hands-on user training, and certification for factory floor and executive staff.',
    targetPage: 'home',
    targetId: 'contact',
  },
]

// -----------------------------------------------------------------------
// 3. DỮ LIỆU INDUSTRIES
// -----------------------------------------------------------------------
export const industryCategoriesData: NavMenuCategory[] = [
  {
    id: 'manufacturing-erp',
    title: 'Manufacturing ERP',
    subtitle: 'Full Factory Visibility',
    icon: Factory,
    description: 'Integrated system designed for high-mix manufacturing companies to control operations from raw materials to shipment.',
    targetPage: 'home',
    targetId: 'industries',
  },
  {
    id: 'apparel',
    title: 'Apparel ERP & MES Solution',
    subtitle: 'Textile & Garment Production',
    icon: Scissors,
    description: 'The proven FX PRO Suite: real-time sewing line balancing, style sampling, cut-plans, and defect heatmaps.',
    targetPage: 'home',
    targetId: 'industries',
  },
  {
    id: 'fintech',
    title: 'FinTech Solutions',
    subtitle: 'Open Banking & Treasury Engine',
    icon: Landmark,
    description: 'Enterprise open banking APIs, real-time multi-bank automated reconciliation, and predictive cashflow microservices.',
    targetPage: 'home',
    targetId: 'industries',
  },
]

