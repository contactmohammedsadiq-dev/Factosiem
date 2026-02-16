export const MODULES = [
  {
    id: 'search',
    name: 'Search & Investigate',
    icon: '🔍',
    description: 'AI-powered natural language search across all logs and events',
    badge: 'Core',
    features: [
      'AI Log Search',
      'Intent-Based Search',
      'Advanced Filtering',
      'Saved Searches',
      'Search History'
    ],
    metrics: [
      { label: 'Queries/Hour', value: '1,247', trend: '↑ 12%' },
      { label: 'Avg Response', value: '240ms', trend: '↓ 8%' },
      { label: 'Success Rate', value: '99.8%', trend: '↑ 2%' },
      { label: 'Users Active', value: '24', trend: '→ 0%' }
    ]
  },
  {
    id: 'telemetry',
    name: 'Telemetry & Collection',
    icon: '📊',
    description: 'Configure data collection sources, monitor ingestion pipelines, and manage collection settings',
    badge: 'Infrastructure',
    features: [
      'Files & Directories',
      'HTTP Event Collector',
      'TCP / UDP Listener',
      'Syslog Collection',
      'Scripts & Connectors',
      'Agent-Based Collection',
      'Cloud & SaaS Logs',
      'Global Ingestion Settings',
      'Collection Status',
      'Data Quality Monitoring',
      'Retention Policies'
    ],
    metrics: [
      { label: 'Active Sources', value: '127', trend: '↑ 8' },
      { label: 'Events/Second', value: '45.2K', trend: '↑ 5%' },
      { label: 'Data Ingestion', value: '2.4TB/day', trend: '↑ 12%' },
      { label: 'Collection Rate', value: '99.8%', trend: '↑ 0.2%' }
    ]
  },
  {
    id: 'alerts',
    name: 'Alerts & Detection',
    icon: '⚠️',
    description: 'Real-time alert generation and detection rule management',
    badge: 'Detection',
    features: [
      'Active Alerts',
      'Detection Rules',
      'Rule Tuning',
      'Alert Correlation',
      'False Positive Tuning'
    ],
    metrics: [
      { label: 'Active Alerts', value: '42', trend: '↑ 3' },
      { label: 'Rules Enabled', value: '324', trend: '→ 0' },
      { label: 'MTTR', value: '12 min', trend: '↓ 2 min' },
      { label: 'Precision', value: '94.3%', trend: '↑ 1.2%' }
    ]
  },
  {
    id: 'incidents',
    name: 'Incidents & Cases',
    icon: '🚨',
    description: 'Incident management, investigation tracking, and case handling',
    badge: 'Response',
    features: [
      'Open Incidents',
      'Investigation Timeline',
      'Case Management',
      'Response Workflows',
      'Collaboration'
    ],
    metrics: [
      { label: 'Open Cases', value: '8', trend: '↓ 2' },
      { label: 'In Investigation', value: '12', trend: '→ 0' },
      { label: 'Avg Resolution', value: '4.5 hr', trend: '↓ 1.2 hr' },
      { label: 'Team Capacity', value: '78%', trend: '→ 0%' }
    ]
  },
  {
    id: 'detection',
    name: 'Detection Engineering',
    icon: '🔬',
    description: 'Design, test, and deploy custom detection rules',
    badge: 'Advanced',
    features: [
      'Rule Builder',
      'Detection Library',
      'AI Detection Studio',
      'Testing & Simulation',
      'Detection Coverage',
      'Performance & Quality',
      'False Positive Lab',
      'Deployment & Rollout',
      'Version Control',
      'Feedback Loop'
    ],
    metrics: [
      { label: 'Detection Score', value: '72/100', trend: '↑ 5' },
      { label: 'MITRE Coverage', value: '43%', trend: '↑ 2%' },
      { label: 'False Positives', value: '12%', trend: '↓ 4%' },
      { label: 'Active Rules', value: '342', trend: '↑ 8' }
    ]
  },
  {
    id: 'threats',
    name: 'Threat Intelligence',
    icon: '🌐',
    description: 'Threat data enrichment, indicators of compromise, and intelligence feeds',
    badge: 'Intelligence',
    features: [
      'IOC Hyper-Enrichment',
      'Market Cap Exposure',
      'Threat Actor Intel',
      'Predictive AI Forecast',
      'Dark Web Monitoring',
      'Custom Feed Builder'
    ],
    metrics: [
      { label: 'Risk Score', value: 'High', trend: '↑' },
      { label: 'Active Campaigns', value: '12', trend: '↑ 2' },
      { label: 'Dark Web Hits', value: '143', trend: '↑ 15%' },
      { label: 'Forecast', value: 'Severe', trend: '→' }
    ]
  },
  {
    id: 'response',
    name: 'Automated Response',
    icon: '⚡',
    description: 'Playbooks, automation, and orchestrated response actions',
    badge: 'Automation',
    features: [
      'Response Playbooks',
      'Response Rule Builder',
      'Conditional Automation',
      'Response Simulation',
      'Approval & Guardrails',
      'Response Analytics',
      'Feedback Loop'
    ],
    metrics: [
      { label: 'Avg Respons Time', value: '45s', trend: '↓ 12s' },
      { label: 'Auto-Containment', value: '84%', trend: '↑ 5%' },
      { label: 'Blast Radius', value: 'Low', trend: '→' },
      { label: 'Rollback Rate', value: '1.2%', trend: '↓ 0.5%' }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    icon: '📊',
    description: 'Drill-down dashboards, AI-assisted insights, and executive reports',
    badge: 'Insights',
    features: [
      'SOC Operations Dashboard',
      'Executive Risk View',
      'Detection Effectiveness',
      'Incident SLA Tracking',
      'Predictive Risk AI',
      'Custom Dashboard Builder',
      'Scheduled Reporting'
    ],
    metrics: [
      { label: 'Posture Score', value: '82/100', trend: '↑ 4' },
      { label: 'MTTR (Avg)', value: '4.2h', trend: '↓ 15%' },
      { label: 'Auto-Resolved', value: '64%', trend: '↑ 2%' }
    ]
  },
  {
    id: 'behavior',
    name: 'User & Entity Behavior',
    icon: '👥',
    description: 'Deep behavioral analytics, resource tracking, and anomaly detection',
    badge: 'Analytics',
    features: [
      'Insider Threat Dashboard',
      'User Risk Profiling',
      'Resource Usage (CPU/GPU)',
      'Lateral Movement Detection',
      'Impossible Travel Analysis',
      'Privilege Drift Explorer',
      'Predictive Intent AI'
    ],
    metrics: [
      { label: 'High Risk Users', value: '12', trend: '↑ 2' },
      { label: 'Asset Anomalies', value: '8', trend: '↓ 1' },
      { label: 'Compute Abuse', value: '3 Alerts', trend: '↑' }
    ]
  },
  {
    id: 'ticketing',
    name: 'Ticketing & Case Orchestration',
    icon: '🎫',
    description: 'Automated alert-to-ticket lifecycle management',
    badge: 'Orchestration',
    features: [
      'Automatic Ticket Creation',
      'End-to-End Lifecycle Tracking',
      'Analyst Activity Timeline',
      'AI Case Intelligence',
      'Cross-Module Integration',
      'SLA & Metrics Tracking',
      'Compliance Audit Ready'
    ],
    metrics: [
      { label: 'Open Tickets', value: '23', trend: '↓ 5' },
      { label: 'Avg MTTR', value: '18 min', trend: '↓ 3 min' },
      { label: 'SLA Compliance', value: '96.8%', trend: '↑ 1.2%' },
      { label: 'Auto Actions', value: '78%', trend: '↑ 4%' }
    ]  },
  {
    id: 'compliance',
    name: 'Compliance & Auditing',
    icon: '📜',
    description: 'Next-gen compliance monitoring, automated evidence collection, and AI-driven audit readiness',
    badge: 'Governance',
    features: [
      'Core Compliance Frameworks',
      'Continuous Compliance Engine',
      'Automated Evidence Collection',
      'AI Compliance Analyst',
      'Real-time Drift Detection',
      'Audit Reports & Exports'
    ],
    metrics: [
      { label: 'Overall Score', value: '85%', trend: '↑ 2%' },
      { label: 'Control Failures', value: '12', trend: '↓ 4' },
      { label: 'Evidence/Month', value: '14.2K', trend: '↑ 8%' },
      { label: 'Audit Readiness', value: 'READY', trend: '✔' }
    ]  }
];
