import React, { useState } from 'react';
import './ComplianceAuditing.css';

// --- MOCK DATA ---
const COMPLIANCE_FRAMEWORKS = [
  { id: 'iso27001', name: 'ISO 27001', score: 88, status: 'Compliant', controls: 114, passed: 100 },
  { id: 'soc2', name: 'SOC 2 Type II', score: 92, status: 'Compliant', controls: 64, passed: 59 },
  { id: 'nist', name: 'NIST CSF', score: 75, status: 'Warning', controls: 108, passed: 81 },
  { id: 'pci', name: 'PCI-DSS v4.0', score: 98, status: 'Compliant', controls: 240, passed: 235 },
  { id: 'gdpr', name: 'GDPR', score: 85, status: 'Compliant', controls: 90, passed: 76 },
  { id: 'hipaa', name: 'HIPAA', score: 60, status: 'Critical', controls: 50, passed: 30 },
];

const CONTINUOUS_MONITORING_LOG = [
  { id: 1, control: 'Access Control (AC-2)', check: 'MFA Enabled for Admins', status: 'PASS', time: '10:42:05', source: 'Identity Provider' },
  { id: 2, control: 'Encryption (SC-13)', check: 'S3 Bucket Encryption', status: 'PASS', time: '10:41:58', source: 'Cloud API' },
  { id: 3, control: 'Logging (AU-3)', check: 'Audit Log Retention', status: 'FAIL', time: '10:41:45', source: 'Log Management' },
  { id: 4, control: 'Vuln Mgmt (RA-5)', check: 'Critical Patch Status', status: 'WARNING', time: '10:40:12', source: 'Endpoint Telemetry' },
  { id: 5, control: 'Network Sec (SC-7)', check: 'Firewall Rule Validation', status: 'PASS', time: '10:39:55', source: 'Network Logs' },
];

const EVIDENCE_LOG = [
  { id: 101, title: 'Unauthorized Admin Access Attempt', type: 'Alert', source: 'Alerts Module', time: 'Today, 09:15 AM' },
  { id: 102, title: 'Weekly Vulnerability Scan Report', type: 'Report', source: 'Detection Engine', time: 'Yesterday, 11:00 PM' },
  { id: 103, title: 'User Behavior Drift - Finance', type: 'Inference', source: 'UEBA Module', time: 'Yesterday, 04:30 PM' },
  { id: 104, title: 'Firewall Config Change', type: 'Log', source: 'Network Device', time: 'Feb 14, 02:12 PM' },
];

const REPORTS_LIST = [
  { id: 'r1', name: 'Executive Compliance Summary', date: 'Feb 15, 2026', format: 'PDF' },
  { id: 'r2', name: 'ISO 27001 Audit Evidence Package', date: 'Feb 14, 2026', format: 'ZIP' },
  { id: 'r3', name: 'SOC 2 Control Gap Analysis', date: 'Feb 10, 2026', format: 'CSV' },
  { id: 'r4', name: 'PCI-DSS Quarterly Scan', date: 'Feb 01, 2026', format: 'PDF' },
];

export default function ComplianceAuditing({ selectedFeatureIdx }) {
  const [activeTab, setActiveTab] = React.useState('overview');

  // Map sidebar selection to internal tab
  React.useEffect(() => {
    switch(selectedFeatureIdx) {
      case 0: setActiveTab('overview'); break; // Core Frameworks
      case 1: setActiveTab('monitoring'); break; // Continuous Engine
      case 2: setActiveTab('evidence'); break; // Evidence Collection
      case 3: setActiveTab('overview'); break; // AI Analyst (in overview)
      case 4: setActiveTab('monitoring'); break; // Drift Detection
      case 5: setActiveTab('reports'); break; // Reports
      default: setActiveTab('overview');
    }
  }, [selectedFeatureIdx]);

  const renderOverview = () => (
    <div className="compliance-overview fade-in">
      <div className="compliance-metrics-grid">
        <div className="compliance-metric-card">
          <span className="label">Overall Compliance Score</span>
          <span className="value" style={{ color: 'var(--neon-cyan)' }}>85%</span>
          <span className="trend positive">↑ 2% from last week</span>
        </div>
        <div className="compliance-metric-card">
          <span className="label">Control Failures</span>
          <span className="value" style={{ color: 'var(--severity-critical)' }}>12</span>
          <span className="trend negative">Requires Attention</span>
        </div>
        <div className="compliance-metric-card">
          <span className="label">Evidence Collected</span>
          <span className="value">14.2K</span>
          <span className="trend neutral">Items this month</span>
        </div>
        <div className="compliance-metric-card">
          <span className="label">Audit Readiness</span>
          <span className="value" style={{ color: 'var(--severity-success)' }}>READY</span>
          <span className="trend positive">For ISO & SOC 2</span>
        </div>
      </div>

      <h3 className="section-title" style={{ marginTop: '30px' }}>Active Frameworks</h3>
      <div className="frameworks-grid">
        {COMPLIANCE_FRAMEWORKS.map(fw => (
          <div key={fw.id} className="framework-card">
            <div className="framework-header">
              <span className="framework-title">{fw.name}</span>
              <span className={`framework-score ${fw.status === 'Critical' ? 'status-fail' : ''}`}>{fw.score}%</span>
            </div>
            <div className="framework-details">
              <span>Status: <span style={{ color: fw.status === 'Compliant' ? 'var(--severity-success)' : fw.status === 'Warning' ? 'var(--severity-medium)' : 'var(--severity-critical)' }}>{fw.status}</span></span>
              <span>Controls: {fw.passed} / {fw.controls} Passing</span>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${fw.score}%`, backgroundColor: fw.status === 'Critical' ? 'var(--severity-critical)' : 'var(--neon-cyan)' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title" style={{ marginTop: '30px' }}>AI Compliance Assistant</h3>
      <div className="ai-compliance-box">
        <div className="ai-header">
          <span>🤖 AI Insight</span>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 'normal' }}>Analysis generated 2 mins ago</span>
        </div>
        <p className="ai-text" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          Based on recent telemetry, your <strong>HIPAA compliance score dropped by 5%</strong> due to unauthorized access attempts detected on patient data segmentation VLANs.
          I recommend reviewing the 3 new alerts in the <span style={{ color: 'var(--neon-cyan)', cursor: 'pointer', textDecoration: 'underline' }}>Alerts Module</span> tagged "PHI Access".
        </p>
        <div className="ai-suggestion">
          <strong>Recommended Action:</strong> Run Playbook <em>"Enforce_PHI_Access_Policy_v2"</em> to automatically revoke session tokens for flagged users.
        </div>
      </div>
    </div>
  );

  const renderMonitoring = () => (
    <div className="compliance-monitoring fade-in">
      <h3 className="section-title">Real-Time Control Validation Stream</h3>
      <table className="monitoring-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Control ID</th>
            <th>Check Description</th>
            <th>Source</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {CONTINUOUS_MONITORING_LOG.map(log => (
            <tr key={log.id}>
              <td>{log.time}</td>
              <td style={{ fontFamily: 'monospace' }}>{log.control}</td>
              <td>{log.check}</td>
              <td>{log.source}</td>
              <td>
                <span className={`status-badge ${log.status === 'PASS' ? 'status-pass' : log.status === 'WARNING' ? 'status-warning' : 'status-fail'}`}>
                  {log.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderEvidence = () => (
    <div className="compliance-evidence fade-in">
      <h3 className="section-title">Automated Evidence Collection</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
        Evidence is automatically tagged and linked from other modules (Alerts, UEBA, incidents).
      </p>
      <div className="evidence-list">
        {EVIDENCE_LOG.map(item => (
          <div key={item.id} className="evidence-item">
            <div className="evidence-info">
              <span className="evidence-source">{item.type} • {item.source}</span>
              <span className="evidence-desc">{item.title}</span>
              <span className="evidence-time">{item.time}</span>
            </div>
            <button className="download-btn">View Source</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="compliance-reports fade-in">
      <h3 className="section-title">Audit Reports & Exports</h3>
      <div className="reports-list">
        {REPORTS_LIST.map(report => (
          <div key={report.id} className="report-card">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="report-icon">📄</span>
              <div className="report-meta">
                <h4>{report.name}</h4>
                <span>{report.date} • {report.format}</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="compliance-container">
      <div className="compliance-tabs">
        <button 
          className={`compliance-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >Overview</button>
        <button 
          className={`compliance-tab ${activeTab === 'monitoring' ? 'active' : ''}`}
          onClick={() => setActiveTab('monitoring')}
        >Continuous Monitoring</button>
        <button 
          className={`compliance-tab ${activeTab === 'evidence' ? 'active' : ''}`}
          onClick={() => setActiveTab('evidence')}
        >Evidence Locker</button>
        <button 
          className={`compliance-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >Audit Reports</button>
      </div>

      <div className="compliance-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'monitoring' && renderMonitoring()}
        {activeTab === 'evidence' && renderEvidence()}
        {activeTab === 'reports' && renderReports()}
      </div>
    </div>
  );
}
