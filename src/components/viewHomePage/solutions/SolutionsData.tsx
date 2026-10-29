import {
  BrainCircuit,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  ChartPie,
  Factory,
  FileText,
  FolderArchive,
  Headphones,
  Landmark,
  Network,
  Shirt,
  ShoppingCart,
  Smartphone,
  Warehouse,
  Workflow,
} from 'lucide-react'

interface SolutionItem {
  id: string
  title: string
  desc: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  tags: string[]
  metrics?: string
}

interface SolutionPillar {
  id: string
  tabName: string
  badge: string
  headline: string
  description: string
  items: SolutionItem[]
}

export const solutionPillars: SolutionPillar[] = [
  {
    id: 'core',
    tabName: 'Core ERP & Modules',
    badge: '10 Enterprise Modules',
    headline: 'Unified Digital Backbone for Operations & Finance',
    description:
      'LNTBOOST integrates every core operational department into a single, cohesive source of truth with real-time analytics, automated approval chains, and multi-entity consolidation.',
    items: [
      {
        id: 'erp',
        title: 'Enterprise Resource Planning (ERP)',
        desc: 'Centralized financial accounting, fixed assets, budgeting, and general ledger operations.',
        icon: Building2,
        tags: ['General Ledger', 'Multi-Currency', 'Budgeting'],
        metrics: '100% Real-time sync',
      },
      {
        id: 'mes',
        title: 'Manufacturing Execution (MES)',
        desc: 'Shop-floor machine integration, production scheduling, bill of materials, and quality inspection.',
        icon: Factory,
        tags: ['Machine OEE', 'BOM Management', 'Quality Control'],
        metrics: '99.5% Line accuracy',
      },
      {
        id: 'scm',
        title: 'Supply Chain & Warehouse',
        desc: 'Multi-site warehouse barcoding, automated replenishment, logistics, and vendor management.',
        icon: Warehouse,
        tags: ['Lot Tracking', 'Inventory Valuation', 'FIFO / LIFO'],
        metrics: '-30% Holding costs',
      },
      {
        id: 'sales',
        title: 'Sales & Distribution',
        desc: 'Omnichannel B2B order routing, tiered pricing policy, sales territory, and receivables management.',
        icon: ShoppingCart,
        tags: ['Order Tracking', 'Price Matrix', 'Credit Limit'],
        metrics: 'Fast fulfillment',
      },
      {
        id: 'accounting',
        title: 'Management Accounting',
        desc: 'Cost accounting, managerial variance analytics, cost centers, and executive consolidated reporting.',
        icon: Calculator,
        tags: ['Cost Centers', 'Variance Analysis', 'Tax Compliance'],
        metrics: 'Fast monthly close',
      },
      {
        id: 'bi',
        title: 'Business Intelligence & BI',
        desc: 'Executive performance dashboards, drill-down operational metrics, and self-service BI reporting.',
        icon: ChartNoAxesCombined,
        tags: ['KPI Dashboards', 'Drill-Down', 'Trend Forecasts'],
        metrics: 'Instant insight',
      },
      {
        id: 'ai',
        title: 'AI & Machine Learning',
        desc: 'Demand prediction algorithms, automated inventory forecasting, and smart workflow anomalies.',
        icon: BrainCircuit,
        tags: ['Demand Prediction', 'Anomaly Detection', 'Smart Automation'],
        metrics: 'Self-optimizing',
      },
      {
        id: 'workflow',
        title: 'Workflow & Document Approvals',
        desc: 'Role-based digital approval paths, e-signatures, audit logs, and compliance traceability.',
        icon: Workflow,
        tags: ['Multi-Level Approval', 'Audit Trail', 'SLA Triggers'],
        metrics: 'Zero paper waste',
      },
      {
        id: 'mobile',
        title: 'Mobile & Digital Applications',
        desc: 'Cross-platform native mobile apps for shop-floor supervisors, field staff, and mobile executives.',
        icon: Smartphone,
        tags: ['iOS & Android', 'Offline Mode', 'Instant Push'],
        metrics: 'On-the-go access',
      },
      {
        id: 'integration',
        title: 'Platform Services & API Hub',
        desc: 'Secure enterprise API hub connecting legacy software, banking gateways, and IoT sensors.',
        icon: Network,
        tags: ['REST & GraphQL', 'Webhook Hub', 'Legacy Connectors'],
        metrics: 'High throughput',
      },
    ],
  },
  {
    id: 'industry',
    tabName: 'Industry Solutions',
    badge: 'Specialized Verticals',
    headline: 'Deep Industry-Tailored Architectures',
    description:
      'Generic software fails where specialized industry workflows begin. LNTSoft provides battle-tested platforms designed specifically for garment manufacturing and high-security FinTech.',
    items: [
      {
        id: 'apparel',
        title: 'Apparel ERP & MES Solution',
        desc: 'Specialized for textile, garment, and footwear manufacturers. Handles color-size matrix, cut-order planning, fabric roll barcoding, line balancing, and export compliance.',
        icon: Shirt,
        tags: ['Cut Order Planning', 'Line Balancing', 'Fabric Roll Tracking', 'Style Matrix'],
        metrics: '+28% Sewing efficiency',
      },
      {
        id: 'fintech',
        title: 'FinTech Solutions & Core Integration',
        desc: 'Designed for financial institutions, leasing companies, and payment service providers. Multi-currency settlement, automated regulatory reporting, and banking-grade encryption.',
        icon: Landmark,
        tags: ['Core Banking Settlement', 'Audit Trail', 'ISO 20022', 'Fraud Prevention'],
        metrics: 'Bank-grade compliance',
      },
    ],
  },
  {
    id: 'addon',
    tabName: 'Add-On Ecosystem',
    badge: 'Productivity Engines',
    headline: 'High-Speed Intelligent Extensions',
    description:
      'Plug-and-play digital accelerators designed to eliminate manual data entry, streamline customer support, and automate high-volume document rendering.',
    items: [
      {
        id: 'doc-auto',
        title: 'Document Automation & PDF Engine',
        desc: 'High-speed automated generation of multi-page invoices, custom certificates, packing lists, and barcode labels at 10,000+ docs/minute.',
        icon: FileText,
        tags: ['Template Engine', 'Bulk PDF Rendering', 'Dynamic Watermarking'],
        metrics: '10,000+ docs/min',
      },
      {
        id: 'edoc',
        title: 'eDoc Digital Document Management',
        desc: 'Centralized enterprise document archive with semantic search, access rights segregation, version tracking, and digital signature verification.',
        icon: FolderArchive,
        tags: ['Full-Text Search', 'Version Control', 'Digital Signatures'],
        metrics: 'Zero paper storage',
      },
      {
        id: 'remote-assist',
        title: 'Remote Visual Assistance Platform',
        desc: 'Real-time collaborative AR video platform connecting field service technicians and on-site customers with centralized technical specialists.',
        icon: Headphones,
        tags: ['AR Annotation', 'HD Video', 'Ticket Integration'],
        metrics: '-45% Travel cost',
      },
      {
        id: 'analytics-kit',
        title: 'Data Analytics Toolkit',
        desc: 'Pre-packaged business data models, executive financial formulas, and interactive dashboard widgets ready for instant deployment.',
        icon: ChartPie,
        tags: ['Pre-built Models', 'Excel & PowerBI Export', 'Custom Metrics'],
        metrics: 'Day-1 Reporting',
      },
    ],
  },
]
