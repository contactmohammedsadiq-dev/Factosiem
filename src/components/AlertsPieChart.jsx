import { useState } from 'react';
import './AlertsPieChart.css';

export default function AlertsPieChart({ onDrillDown }) {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [selectedSeverity, setSelectedSeverity] = useState(null);
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Alert data
  const alertData = [
    { label: 'Critical', value: 42, color: '#E53935', percentage: 28 },
    { label: 'High', value: 56, color: '#FB8C00', percentage: 37 },
    { label: 'Medium', value: 35, color: '#FBC02D', percentage: 23 },
    { label: 'Low', value: 18, color: '#42A5F5', percentage: 12 },
  ];

  // Mock alerts for drill-down
  const mockAlerts = {
    'Critical': [
      { id: 'AL-1092', name: 'Log4j RCE Attempt', entity: 'srv-web-01', time: '5m ago', status: 'New', desc: 'Observed ${jndi:ldap...} pattern in HTTP headers.' },
      { id: 'AL-1088', name: 'Ransomware Activity', entity: 'wkstn-88', time: '12m ago', status: 'Investigating', desc: 'Mass file modification detected in user home directory.' },
      { id: 'AL-1075', name: 'Domain Admin Login', entity: 'dc-01', time: '45m ago', status: 'New', desc: 'Admin login from unusual geographic location (RU).' },
    ],
    'High': [
      { id: 'AL-1093', name: 'Brute Force Success', entity: 'user-04', time: '10m ago', status: 'New', desc: '15 failed logins followed by 1 success within 2 minutes.' },
      { id: 'AL-1082', name: 'Data Exfiltration', entity: 'host-stats-02', time: '30m ago', status: 'Closed', desc: 'Unusual outbound traffic to known cloud storage provider.' },
    ],
    'Medium': [
      { id: 'AL-1094', name: 'Anomalous DNS', entity: 'wkstn-12', time: '1h ago', status: 'Awaiting', desc: 'High frequency of DNS queries to non-standard ports.' },
    ],
    'Low': [
      { id: 'AL-1095', name: 'Software Installed', entity: 'user-09', time: '2h ago', status: 'Informational', desc: 'New executable detected in Temp directory.' },
    ]
  };

  const totalAlerts = alertData.reduce((sum, item) => sum + item.value, 0);

  const getSliceAngles = () => {
    let currentAngle = -90;
    return alertData.map((item) => {
      const sliceAngle = (item.value / totalAlerts) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      currentAngle = endAngle;
      return { startAngle, endAngle };
    });
  };

  const sliceAngles = getSliceAngles();

  const getArcPath = (startAngle, endAngle, radius = 100) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = 150 + radius * Math.cos(startRad);
    const y1 = 150 + radius * Math.sin(startRad);
    const x2 = 150 + radius * Math.cos(endRad);
    const y2 = 150 + radius * Math.sin(endRad);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M 150 150 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  const handleSegmentClick = (label) => {
    setSelectedSeverity(label);
    setSelectedAlert(null);
  };

  return (
    <div className="alerts-pie-container">
      {!selectedSeverity ? (
        <div className="pie-chart-wrapper">
          <div className="pie-chart-content">
            <div className="pie-svg-container">
              <svg viewBox="0 0 300 300" className="pie-svg">
                <circle cx="150" cy="150" r="105" fill="none" stroke="rgba(0, 245, 255, 0.1)" strokeWidth="2" />
                {alertData.map((item, idx) => {
                  const { startAngle, endAngle } = sliceAngles[idx];
                  const isHovered = hoveredSegment === idx;
                  const radius = isHovered ? 108 : 100;
                  return (
                    <g key={idx} onClick={() => handleSegmentClick(item.label)} style={{ cursor: 'pointer' }}>
                      <path
                        d={getArcPath(startAngle, endAngle, radius)}
                        fill={item.color}
                        opacity={isHovered ? 1 : 0.85}
                        className={`pie-segment ${isHovered ? 'hovered' : ''}`}
                        style={{ filter: isHovered ? `drop-shadow(0 0 15px ${item.color})` : 'none' }}
                        onMouseEnter={() => setHoveredSegment(idx)}
                        onMouseLeave={() => setHoveredSegment(null)}
                      />
                    </g>
                  );
                })}
                <circle cx="150" cy="150" r="65" fill="#0d1117" />

                {/* Dynamic Center Text */}
                {hoveredSegment !== null ? (
                  <>
                    <text x="150" y="140" textAnchor="middle" fontSize="22" fontWeight="700" fill={alertData[hoveredSegment].color}>
                      {alertData[hoveredSegment].value}
                    </text>
                    <text x="150" y="165" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" textTransform="uppercase">
                      {alertData[hoveredSegment].label}
                    </text>
                  </>
                ) : (
                  <>
                    <text x="150" y="145" textAnchor="middle" className="center-total" fontSize="28" fontWeight="700" fill="#fff">
                      {totalAlerts}
                    </text>
                    <text x="150" y="165" textAnchor="middle" className="center-label" fontSize="12" fill="#8b949e">
                      Total Alerts
                    </text>
                  </>
                )}
              </svg>
            </div>
          </div>

          <div className="pie-legend">
            <div className="legend-title">Select Severity to Drill Down</div>
            <div className="legend-items">
              {alertData.map((item, idx) => (
                <div
                  key={idx}
                  className={`legend-item ${hoveredSegment === idx ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSegment(idx)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onClick={() => handleSegmentClick(item.label)}
                >
                  <div className="legend-color" style={{ backgroundColor: item.color }} />
                  <div className="legend-info">
                    <div className="legend-name">{item.label}</div>
                    <div className="legend-stats">
                      <span className="legend-count">{item.value}</span>
                      <span className="legend-percentage">{item.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="drill-down-content">
          <div className="drill-down-toolbar">
            <button className="back-btn" onClick={() => setSelectedSeverity(null)}>← Back to Overview</button>
            <h3>{selectedSeverity} Alerts</h3>
          </div>

          <div className="alerts-list-container">
            <div className="alerts-table-scroll">
              <table className="mini-alerts-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAlerts[selectedSeverity]?.map(alert => (
                    <tr
                      key={alert.id}
                      className={`alert-row ${selectedAlert?.id === alert.id ? 'selected' : ''}`}
                      onClick={() => setSelectedAlert(alert)}
                    >
                      <td>{alert.id}</td>
                      <td>{alert.name}</td>
                      <td>{alert.entity}</td>
                      <td>{alert.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedAlert && (
              <div className="alert-detail-panel animate-slide-in">
                <div className="detail-header">
                  <h4>{selectedAlert.id}: {selectedAlert.name}</h4>
                  <button className="close-detail" onClick={() => setSelectedAlert(null)}>×</button>
                </div>
                <div className="detail-body">
                  <div className="detail-item">
                    <label>Entity</label>
                    <span>{selectedAlert.entity}</span>
                  </div>
                  <div className="detail-item">
                    <label>Status</label>
                    <span className="status-badge">{selectedAlert.status}</span>
                  </div>
                  <div className="detail-item">
                    <label>Description</label>
                    <p>{selectedAlert.desc}</p>
                  </div>
                  <button
                    className="action-btn primary small"
                    style={{ marginTop: '12px', width: '100%' }}
                    onClick={() => onDrillDown(`alert:${selectedAlert.id}`)}
                  >
                    Full Investigation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
