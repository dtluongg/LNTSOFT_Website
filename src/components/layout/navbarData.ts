import React from 'react'
import {
  Users,
  Truck,
  Factory,
  Coins,
  BarChart3,
  Scissors,
  Landmark,
  HelpCircle,
  FileCheck,
  GraduationCap,
  Cloud,
  Sparkles,
  FileText,
  FolderArchive,
  Video,
  LineChart,
} from 'lucide-react'

export interface NavSubItem {
  id: string
  name: string
  desc?: string
  badge?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  targetPage?: 'home' | 'product' | 'industry'
  targetId?: string
}

export interface NavMenuCategory {
  id: string
  title: string
  subtitle?: string
  badge?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  description?: string
  targetPage?: 'home' | 'product' | 'industry'
  targetId?: string
  items?: NavSubItem[]
}

// -----------------------------------------------------------------------
// 1. PRODUCTS DATA (2 Tiers: Core ERP + Add-on Platforms)
// -----------------------------------------------------------------------
export const productCategories: NavMenuCategory[] = [
  {
    id: 'lntboost-erp',
    title: 'LNTBOOST Cloud ERP',
    subtitle: 'Core Enterprise Resource Planning Suite',
    badge: '5 Modules',
    icon: Cloud,
    description: 'Comprehensive end-to-end ERP suite connecting sales, warehouse supply chain, manufacturing shop-floor, finance and executive BI.',
    targetPage: 'product',
    targetId: 'product',
    items: [
      {
        id: 'commercial',
        name: 'Commercial & Sales',
        desc: 'CRM, pricing agreements, sales orders & delivery pipelines',
        icon: Users,
      },
      {
        id: 'supply-chain',
        name: 'Supply Chain & Warehouse',
        desc: 'Procurement, automated reorder thresholds & barcode IWM',
        icon: Truck,
      },
      {
        id: 'manufacturing-operations',
        name: 'Manufacturing Operations',
        desc: 'MRP planning, shop-floor execution & inline QC inspection',
        icon: Factory,
      },
      {
        id: 'financial-management',
        name: 'Financial Management',
        desc: 'Product costing, variance analysis, GL & automated tax',
        icon: Coins,
      },
      {
        id: 'enterprise-management',
        name: 'Enterprise Management',
        desc: 'Executive analytics, predictive KPI drill-downs & control',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'featured-addons',
    title: 'Featured Add-On Solutions',
    subtitle: 'Specialized Productivity & Extension Tools',
    badge: '4 Modules',
    icon: Sparkles,
    description: 'Plug-and-play extension platforms engineered to streamline automated document workflows, customer support and advanced analytics.',
    targetPage: 'product',
    targetId: 'featured-addons',
    items: [
      {
        id: 'doc-automation',
        name: 'Document Automation & PDF Generation',
        desc: 'Automated invoice, contract & high-throughput template rendering engine',
        icon: FileText,
      },
      {
        id: 'edoc-management',
        name: 'eDoc Digital Document Management',
        desc: 'Centralized document repository with role-based access & versioning',
        icon: FolderArchive,
      },
      {
        id: 'remote-assistance',
        name: 'Remote Visual Assistance & Support',
        desc: 'Live interactive video support & on-site technical troubleshooting',
        icon: Video,
      },
      {
        id: 'data-analytics',
        name: 'Data Analytics Toolkit',
        desc: 'Advanced business intelligence, ETL data pipelines & custom KPI metrics',
        icon: LineChart,
      },
    ],
  },
]

// -----------------------------------------------------------------------
// 2. SERVICES DATA
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
// 3. INDUSTRIES DATA
// -----------------------------------------------------------------------
export const industryCategoriesData: NavMenuCategory[] = [
  {
    id: 'manufacturing-erp',
    title: 'Manufacturing ERP',
    subtitle: 'Full Factory Visibility',
    icon: Factory,
    description: 'Integrated system designed for high-mix manufacturing companies to control operations from raw materials to shipment.',
    targetPage: 'industry',
  },
  {
    id: 'apparel',
    title: 'Apparel ERP & MES Solution',
    subtitle: 'Textile & Garment Production',
    icon: Scissors,
    description: 'The proven FX PRO Suite: real-time sewing line balancing, style sampling, cut-plans, and defect heatmaps.',
    targetPage: 'industry',
  },
  {
    id: 'fintech',
    title: 'FinTech Solutions',
    subtitle: 'Open Banking & Treasury Engine',
    icon: Landmark,
    description: 'Enterprise open banking APIs, real-time multi-bank automated reconciliation, and predictive cashflow microservices.',
    targetPage: 'industry',
  },
]
