// ============================================
// FILE: lib/data/excuse-parts.ts
// ============================================

export const techStack = {
  frontend: ['React context', 'CSS grid', 'state manager', 'DOM tree', 'bundle size', 'webpack config', 'hydration', 'render cycle', 'z-index stack'],
  backend: ['database migration', 'ORM layer', 'API gateway', 'cron job', 'microservice', 'websocket', 'cache layer', 'query optimizer'],
  devops: ['Kubernetes pod', 'Docker container', 'CI/CD pipeline', 'terraform state', 'AWS region', 'load balancer', 'SSL certificate'],
  legacy: ['legacy codebase', 'spaghetti code', 'monolith', 'undocumented module', 'deprecated library', 'soap API']
};

export const problems = [
  'race condition', 'memory leak', 'dependency conflict', 'timeout issue',
  'deadlock', 'parsing error', 'version mismatch', 'cors error',
  'latency spike', 'null pointer', 'segmentation fault'
];

export const excuses_corporate = [
  'Q3 objectives', 'stakeholder alignment', 'cross-functional bandwidth',
  'strategic pivot', 'paradigm shift', 'resource allocation',
  'ROI analysis', 'market-fit validation', 'user-centric methodology'
];

export const excuses_honest = [
  'I spent 4 hours centering a div',
  'I forgot to save the file',
  'I was reading Hacker News',
  'stack overflow was down',
  'I broke the build and went to lunch',
  'I fell asleep during the meeting',
  'I have no idea how this code works'
];

export const blamables = [
  'the previous intern', 'legacy code', 'the 3rd party API',
  'a windows update', 'the VPN', 'solar flares',
  'timezone differences', 'poor documentation'
];

export const verbs = [
  'refactoring', 'debugging', 'migrating', 'investigating',
  'deprecating', 'hotfixing', 'mitigating', 're-indexing'
];
