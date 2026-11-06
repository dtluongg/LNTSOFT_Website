export interface CapabilityFeature {
  title: string
  description?: string
}

export interface ApparelCapability {
  id: string
  number: string
  title: string
  shortTagline: string
  tagline: string
  descriptions: string[]
  features: CapabilityFeature[]
  image?: string // Sếp hoặc bạn chỉ cần dán URL hình ảnh vào đây bất cứ lúc nào!
  mockupBadge?: string
  mockupStats?: { label: string; value: string }[]
}

export const apparelCapabilities: ApparelCapability[] = [
  // =========================================================================
  // NỘI DUNG 01: Product Item & Attribute Management (Đã điền đầy đủ mẫu 1)
  // =========================================================================
  {
    id: 'product-item-attribute',
    number: '01',
    title: 'Product Item & Attribute Management',
    shortTagline: 'Centralized Product Info & Accurate Item Control',
    tagline: 'Centralized Product Information. Flexible Attribute Management. Accurate Item Control.',
    descriptions: [
      'Manage and organize comprehensive product and finished goods information through a centralized item management platform to define, maintain, and manage product specifications and attributes, including Style, Fabric, Color, Size, Wash, and Embellishments.',
      'With flexible attribute configuration, Operational process help to meet their unique operational requirements, ensuring standardized product data, accurate item identification, and seamless information management throughout the manufacturing lifecycle.',
    ],
    features: [
      {
        title: 'Product & Style Master Management',
        description: 'Centralize and maintain product, style, and finished goods master data.',
      },
      {
        title: 'Comprehensive Attribute Management',
        description: 'Manage key product attributes, including fabric, color, size, wash, and embellishments.',
      },
      {
        title: 'Flexible Attribute Configuration',
        description: 'Customize attribute lists and specifications according to business requirements.',
      },
      {
        title: 'Standardized Product Information',
        description: 'Ensure consistency and accuracy across product records and related business processes.',
      },
      {
        title: 'Improved Item Identification & Traceability',
        description:
          'Enhance product visibility and information transparency throughout manufacturing and inventory operations.',
      },
    ],
    // Khi có link ảnh từ sếp, bạn chỉ cần điền vào trường image bên dưới:
    image: '',
    mockupBadge: 'MASTER DATA MATRIX',
    mockupStats: [
      { label: 'Active Styles', value: '1,420+' },
      { label: 'Attribute Matrix', value: '6-Tier SKU' },
      { label: 'Data Accuracy', value: '99.98%' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 02: MES & FG Management (Đã điền đầy đủ mẫu 2 của bạn)
  // =========================================================================
  {
    id: 'multi-level-order-management',
    number: '02',
    title: 'Multi-level Order Management & Lifecycle Control',
    shortTagline: 'End-to-End Order Visibility & Reliable Fulfillment',
    tagline: 'End-to-End Order Visibility. Streamlined Approvals. Reliable Order Fulfillment.',
    descriptions: [
      'Centralized order management platform, providing clear visibility and control from Block Orders and Forecasted Orders to Confirmed Sales Orders with order approval workflows.',
      'With centralized order information and real-time status visibility, businesses can improve order accuracy, coordinate order fulfillment efficiently, and ensure timely customer delivery.',
    ],
    features: [
      {
        title: 'Multi-Level Order Management',
        description:
          'Manage Block Orders, Forecasted Orders, and Confirmed Sales Orders within one integrated platform.',
      },
      {
        title: 'Order Approval Workflow',
        description: 'Configure approval processes and monitor approval status at each stage of the order lifecycle.',
      },
      {
        title: 'End-to-End Order Visibility',
        description:
          'Track order progress, status, and fulfillment activities from initial order planning to final delivery.',
      },
      {
        title: 'Centralized Order Information',
        description:
          'Consolidate customer orders, product specifications, quantities, delivery schedules, and related requirements.',
      },
      {
        title: 'Order Fulfillment Management',
        description:
          'Improve coordination between sales, merchandising, planning, procurement, and production teams to support accurate and timely order fulfillment.',
      },
    ],
    image: '',
    mockupBadge: 'SMART SHOP-FLOOR & FG',
    mockupStats: [
      { label: 'Line Efficiency', value: '89.4%' },
      { label: 'Live WIP Tracking', value: '18 Lines' },
      { label: 'QAI First-Pass', value: '98.6%' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 03:
  // =========================================================================
  {
    id: 'capacity-planning-order-scheduling',
    number: '03',
    title: 'Capacity Planning & Order Scheduling',
    shortTagline: 'Intelligent Capacity Planning & Optimized Production Resources',
    tagline: 'Intelligent Capacity Planning. Automated Order Scheduling. Optimized Production Resources.',
    descriptions: [
      'The system provides comprehensive capacity planning and order scheduling capabilities, utilizing predefined capacity master data and planning parameters to evaluate production demand against available manufacturing capacity at a high level, before detailed production scheduling begins.',
      'The system automatically generates achievable production completion plans across multiple manufacturing stages, based on predefined planning parameters, manufacturing lead times, and configured order routes scheduling. This enables manufacturers to establish realistic production timelines, coordinate manufacturing stages, and optimize resource utilization.',
      'Furthermore, FXPRO features a dedicated Macro-Level Sewing Team Planning Board, specifically designed for the apparel industry to support production line capacity optimization and sewing team workload balancing. It provides planners with consolidated visibility into production loading, available capacity, and resource allocation, enabling more effective planning decisions and improved manufacturing performance.',
    ],
    features: [
      {
        title: 'Capacity Planning Master Data',
        description:
          'Configure and maintain foundational capacity parameters, production resources, working calendars, and manufacturing lead times.',
      },
      {
        title: 'Demand vs. Capacity Evaluation',
        description:
          'Assess production demand against available manufacturing capacity at an aggregated planning level.',
      },
      {
        title: 'Automated Production Completion Planning',
        description: 'Generate achievable production completion timelines across multiple manufacturing stages.',
      },
      {
        title: 'Manufacturing Order (MO) Route Integration',
        description:
          'Generate production schedules based on predefined manufacturing routes, process sequences, and stage-specific lead times.',
      },
      {
        title: 'Macro-Level Sewing Team Planning Board',
        description:
          'Visualize sewing team workloads, production loading, and available capacity through a centralized planning interface.',
      },
      {
        title: 'Production Line Capacity Optimization',
        description: 'Optimize production line allocation and balance workloads across available sewing teams.',
      },
      {
        title: 'Production Workload Balancing',
        description:
          'Distribute production workloads more effectively to improve resource utilization and meet order delivery commitments.',
      },
    ],
    image: '',
    mockupBadge: 'BOM & SAMPLE LAB',
    mockupStats: [
      { label: 'Costing Accuracy', value: '99.5%' },
      { label: 'Sample Turnaround', value: '-30% Time' },
      { label: 'T&A On-Schedule', value: '96.8%' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 04: Intelligen
  // =========================================================================
  {
    id: 'material-planning-procurement-management',
    number: '04',
    title: 'Material Planning & Procurement Management',
    shortTagline: 'Intelligent Material Planning & Optimized Procurement',
    tagline: 'Intelligent Material Planning. Optimized Procurement. Reliable Material Availability.',
    descriptions: [
      'FXPRO provides an integrated material planning and procurement management solution designed to streamline material requirements planning, optimize purchasing activities, and ensure timely material availability throughout the apparel manufacturing lifecycle.',
      'By integrating customer orders, production plans, Bill of Materials (BOM), inventory levels, and procurement activities, FXPRO enables manufacturers to accurately forecast material demand, identify potential shortages, plan purchasing requirements, and manage supplier deliveries more effectively.',
      'With comprehensive visibility and control over material demand, inventory availability, and procurement operations, FXPRO empowers businesses to reduce material shortages, minimize excess inventory, control purchasing costs, and ensure uninterrupted production.',
    ],
    features: [
      {
        title: 'Material Demand Forecasting',
        description:
          'Forecast future material requirements based on customer orders, production plans, historical consumption, and predefined planning parameters.',
      },
      {
        title: 'Material Requirements Planning (MRP)',
        description:
          'Automatically calculate raw material, fabric, trims, accessories, and component requirements based on BOM specifications and production quantities.',
      },
      {
        title: 'Multi-Order Material Consolidation',
        description:
          'Consolidate material requirements across multiple orders, styles, and production schedules to optimize purchasing and inventory planning.',
      },
      {
        title: 'Material Availability & Shortage Analysis',
        description:
          'Evaluate available stock, allocated quantities, reserved inventory, and incoming purchase orders to identify potential material shortages and excess inventory.',
      },
      {
        title: 'Procurement Planning & Purchase Requisitions',
        description:
          'Generate material purchasing requirements based on projected demand, inventory availability, supplier lead times, and production schedules.',
      },
      {
        title: 'Purchase Order Management',
        description:
          'Manage purchase orders, supplier commitments, purchasing quantities, prices, and expected delivery schedules.',
      },
      {
        title: 'Supplier & Delivery Management',
        description:
          'Monitor supplier performance, material delivery schedules, and procurement progress to support timely material replenishment.',
      },
      {
        title: 'Material Consumption & Cost Analysis',
        description:
          'Monitor planned versus actual material consumption, analyze material cost variations, and improve inventory and purchasing cost control.',
      },
      {
        title: 'Material Readiness Monitoring',
        description:
          'Provide centralized visibility into material availability, procurement status, and material readiness to support production schedules.',
      },
    ],
    image: '',
    mockupBadge: 'FABRIC IWM HUB',
    mockupStats: [
      { label: 'Fabric Wastage', value: '-3.8%' },
      { label: 'Roll Traceability', value: '100% QR' },
      { label: 'Inspection Speed', value: '2x Faster' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 05: Cut
  // =========================================================================
  {
    id: 'cost-planning-financial-control',
    number: '05',
    title: 'Cost Planning & Financial Control',
    shortTagline: 'Intelligent Cost Planning & Improved Profitability',
    tagline: 'Intelligent Cost Planning. Proactive Budgeting. Improved Profitability.',
    descriptions: [
      'FXPRO provides integrated cost planning and financial control capabilities designed to help apparel manufacturers establish cost targets, plan operational budgets, monitor expenditures, and improve overall financial performance throughout the manufacturing lifecycle.',
      'By integrating order costing, material requirements, production plans, resource utilization, and operational expenses, FXPRO enables businesses to estimate manufacturing costs, establish order-level cost targets, forecast financial requirements, and allocate budgets more effectively. This provides management with greater visibility into expected costs, planned expenditures, and financial commitments before operational activities take place.',
      'With comprehensive cost monitoring and budget control, FXPRO helps manufacturers compare target costs against actual production costs, monitor budget utilization, identify cost variances, and take timely corrective actions. This empowers businesses to control operational expenses, protect order profitability, optimize resource utilization, and make more informed financial decisions.',
    ],
    features: [
      {
        title: 'Order Target Costing',
        description:
          'Establish target manufacturing costs for individual customer orders based on product specifications, BOM, material requirements, labor costs, production processes, and overhead expenses.',
      },
      {
        title: 'Order Cost Estimation',
        description:
          'Calculate estimated manufacturing costs by analyzing material consumption, production requirements, labor resources, and other associated costs.',
      },
      {
        title: 'Order Profitability Analysis',
        description:
          'Evaluate expected order profitability by comparing estimated manufacturing costs against customer selling prices and target profit margins.',
      },
      {
        title: 'Proactive Budget Planning',
        description:
          'Develop operational budgets in advance based on production plans, business forecasts, resource requirements, and expected expenditures.',
      },
      {
        title: 'Budget Allocation & Management',
        description:
          'Allocate and manage budgets across departments, factories, projects, cost centers, and operational activities.',
      },
      {
        title: 'Budget vs. Actual Cost Monitoring',
        description:
          'Compare planned budgets and target costs against actual expenditures and production costs to monitor financial performance.',
      },
      {
        title: 'Cost Variance Analysis',
        description:
          'Identify, analyze, and track differences between estimated, budgeted, and actual costs to support timely corrective actions.',
      },
      {
        title: 'Operational Expense Control',
        description:
          'Monitor key operational expenses, including raw materials, direct labor, factory overhead, and other manufacturing-related costs.',
      },
      {
        title: 'Financial Performance Visibility',
        description:
          'Provide consolidated cost and budget information to support management reporting, financial oversight, and data-driven decision-making.',
      },
    ],
    image: '',
    mockupBadge: 'SMART CUTTING SUITE',
    mockupStats: [
      { label: 'Marker Yield', value: '+2.4%' },
      { label: 'Ply Accuracy', value: '99.9%' },
      { label: 'Bundle Errors', value: 'Zero' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 06: Quali
  // =========================================================================
  {
    id: 'integrated-warehouse-management',
    number: '06',
    title: 'Integrated Warehouse Management',
    shortTagline: 'Real-Time Inventory Visibility & Optimized Warehouse Control',
    tagline: 'Streamlined Warehouse Operations. Real-Time Inventory Visibility. Optimized Warehouse Control.',
    descriptions: [
      'FXPRO provides integrated warehouse management capabilities designed to streamline and control warehouse operations across the entire apparel manufacturing supply chain. The solution enables businesses to efficiently manage inbound, outbound, and internal warehouse transactions through a centralized platform, ensuring accurate inventory records and seamless coordination across warehouse activities.',
      'From receiving raw materials and storing inventory to material issuing, stock transfers, finished goods handling, packing, and shipping, FXPRO provides end-to-end visibility and control over warehouse movements. With real-time inventory information, structured warehouse workflows, and intelligent storage validation, businesses can improve inventory accuracy, optimize storage utilization, enhance operational productivity, and ensure materials and finished goods are available where and when they are needed.',
    ],
    features: [
      {
        title: 'Inbound Warehouse Management',
        description: 'Manage material and goods receiving, inspection, quantity verification, and put-away activities.',
      },
      {
        title: 'Outbound Warehouse Management',
        description: 'Control material issuing, finished goods dispatch, picking, packing, and shipping processes.',
      },
      {
        title: 'Internal Warehouse Transactions',
        description:
          'Manage stock transfers, bin-to-bin movements, inventory adjustments, and warehouse replenishment.',
      },
      {
        title: 'Real-Time Inventory Visibility',
        description:
          'Monitor inventory balances, stock movements, and material availability across warehouses and storage locations.',
      },
      {
        title: 'Bin & Location Management',
        description:
          'Organize warehouse storage structures and manage inventory at warehouse, zone, rack, and bin levels.',
      },
      {
        title: 'Intelligent Storage Validation',
        description:
          'Validate storage locations and guide warehouse operators to suitable storage bins based on available capacity and predefined storage rules.',
      },
      {
        title: 'Inventory Traceability',
        description:
          'Track inventory movements and transaction history to improve stock accuracy and operational transparency.',
      },
      {
        title: 'Mobile Warehouse Operations',
        description:
          'Support warehouse activities through mobile applications, enabling operators to execute and validate transactions directly on the warehouse floor.',
      },
      {
        title: 'Warehouse Performance & Control',
        description:
          'Improve warehouse productivity through standardized workflows, centralized monitoring, and operational reporting.',
      },
    ],
    image: '',
    mockupBadge: 'ZERO-DEFECT QA',
    mockupStats: [
      { label: 'Defect Rate', value: '-42%' },
      { label: 'Rework Hours', value: '-35%' },
      { label: 'AQL Compliance', value: '99.7%' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 07: Sub-Co
  // =========================================================================
  {
    id: 'critical-path-activity-management',
    number: '07',
    title: 'Critical Path Activity Management',
    shortTagline: 'End-to-End Lifecycle Visibility & Proactive Delivery Control',
    tagline: 'End-to-End Lifecycle Visibility. Visual Milestone Tracking. Proactive Delivery Control.',
    descriptions: [
      'FXPRO provides integrated, highly visual critical path management capabilities to help apparel manufacturers plan, coordinate, and monitor key activities throughout the entire product and order lifecycle. By connecting critical milestones, operational activities, responsible teams, and planned timelines within one centralized platform, FXPRO enables businesses to maintain clear visibility into project progress and ensure activities are completed according to established schedules.',
      'From initial order confirmation and product development to material procurement, sampling, production planning, manufacturing, quality assurance, packing, and final shipment, FXPRO enables users to define and monitor critical activities, track milestone completion, identify schedule deviations, and evaluate potential delays. Its visual timeline and progress monitoring capabilities help management quickly identify bottlenecks, understand activity dependencies, and coordinate cross-functional teams more effectively.',
      'With proactive monitoring and comprehensive lifecycle visibility, FXPRO empowers apparel manufacturers to anticipate potential delays, take timely corrective actions, streamline cross-departmental coordination, improve schedule adherence, and achieve more reliable on-time order delivery.',
    ],
    features: [
      {
        title: 'End-to-End Critical Path Planning',
        description:
          'Define and manage key activities and milestones across the entire product development and order fulfillment lifecycle.',
      },
      {
        title: 'Visual Critical Path Dashboard',
        description:
          'Present critical activities, milestones, planned timelines, and completion status through intuitive visual planning and monitoring interfaces.',
      },
      {
        title: 'Milestone & Activity Management',
        description:
          'Define activities, target dates, responsibilities, priorities, and completion criteria for each stage of the product lifecycle.',
      },
      {
        title: 'Cross-Functional Activity Coordination',
        description:
          'Coordinate tasks and dependencies across merchandising, product development, sourcing, procurement, planning, production, quality, and logistics teams.',
      },
      {
        title: 'Activity Dependency Management',
        description:
          'Establish relationships and dependencies between activities to maintain proper workflow sequences and identify schedule impacts.',
      },
      {
        title: 'Progress & Status Monitoring',
        description:
          'Track planned versus actual progress, milestone completion, outstanding activities, and overdue tasks in real time.',
      },
      {
        title: 'Critical Delay Identification',
        description:
          'Highlight delayed activities, potential bottlenecks, and critical milestones that may affect overall order completion and shipment schedules.',
      },
      {
        title: 'Proactive Alerts & Notifications',
        description:
          'Notify relevant users of upcoming deadlines, overdue activities, and critical schedule deviations to support timely intervention.',
      },
      {
        title: 'Delivery Schedule Monitoring',
        description:
          'Monitor key lifecycle milestones against customer delivery commitments to improve schedule adherence and on-time shipment performance.',
      },
    ],
    image: '',
    mockupBadge: 'OUTWORK NETWORK',
    mockupStats: [
      { label: 'Loss Prevention', value: '100%' },
      { label: 'Return On-Time', value: '94.2%' },
      { label: 'Audit Speed', value: 'Real-Time' },
    ],
  },

  // =========================================================================
  // NỘI DUNG 08: Execu
  // =========================================================================
  {
    id: 'mes-fg-management',
    number: '08',
    title: 'MES & FG Management',
    shortTagline: 'Real-Time Production Monitoring & End-to-End Finished Goods Control',
    tagline: 'Real-Time Production Monitoring. Quality-Driven Manufacturing. End-to-End Finished Goods Control.',
    descriptions: [
      'FXPRO integrates Manufacturing Execution System (MES) and Finished Goods (FG) management capabilities to provide comprehensive visibility and control over factory-floor operations, from production execution to FG inventory and shipment. The solution enables apparel manufacturers to monitor production activities, track work-in-progress (WIP), manage manufacturing performance, and coordinate production operations through a centralized platform.',
      'From Manufacturing Order(MO) release and line-level execution to quality assurance (QA) inspection, FG receiving, packing, warehousing, and shipping, FXPRO connects every critical stage of the manufacturing and fulfillment process. With real-time production information, integrated quality control, and accurate FG inventory tracking, businesses can identify production bottlenecks, monitor operational performance, maintain product quality, and ensure production targets and delivery commitments are achieved.',
      'By connecting factory-floor execution with FG and warehouse operations, FXPRO empowers manufacturers to improve production efficiency, enhance quality compliance, optimize resource utilization, strengthen inventory accuracy, and achieve greater control over the entire manufacturing lifecycle.',
    ],
    features: [
      {
        title: 'Manufacturing Order Execution',
        description:
          'Manage and monitor manufacturing orders throughout the production lifecycle, ensuring alignment between production plans and factory-floor execution.',
      },
      {
        title: 'Real-Time Production Monitoring',
        description:
          'Track production progress, output quantities, operational status, and production performance across manufacturing lines and processes.',
      },
      {
        title: 'Work-in-Progress (WIP) Management',
        description:
          'Monitor work-in-progress quantities and movements across production stages to improve visibility and workflow control.',
      },
      {
        title: 'Production Line & Sewing Team Management',
        description:
          'Monitor production line performance, sewing team output, workload distribution, and resource utilization.',
      },
      {
        title: 'Production Performance Analysis',
        description:
          'Monitor planned versus actual production output, productivity, efficiency, and target achievement.',
      },
      {
        title: 'Quality Assurance Inspection (QAI)',
        description:
          'Manage in-process and finished product quality inspections, record inspection results, identify defects, and monitor corrective actions.',
      },
      {
        title: 'Finished Goods Receiving & Management',
        description:
          'Manage finished goods receiving, quantity verification, product identification, and inventory updates upon production completion.',
      },
      {
        title: 'Finished Goods Inventory & Warehouse Management',
        description:
          'Control finished goods inventory across warehouses and storage locations, providing accurate stock visibility and traceability.',
      },
      {
        title: 'Packing & Shipment Management',
        description:
          'Manage packing operations, carton details, packing lists, shipment preparation, and finished goods dispatch.',
      },
      {
        title: 'Production & Quality Traceability',
        description:
          'Maintain visibility into production records, inspection results, and finished goods movements to support operational accountability and quality management.',
      },
    ],
    image: '',
    mockupBadge: 'EXECUTIVE INTELLIGENCE',
    mockupStats: [
      { label: 'OTIF Delivery', value: '98.9%' },
      { label: 'Multi-Plant Sync', value: 'Global' },
      { label: 'Margin Variance', value: '< 1.2%' },
    ],
  },
]
