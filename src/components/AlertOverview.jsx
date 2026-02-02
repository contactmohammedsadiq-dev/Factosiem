import './AlertOverview.css';

export default function AlertOverview() {
  const alertStats = [
    { severity: 'critical', count: 12, color: 'var(--severity-critical)', trend: '+3' },
    { severity: 'high', count: 34, color: 'var(--severity-high)', trend: '+8' },
    { severity: 'medium', count: 89, color: 'var(--severity-medium)', trend: '+14' },
    { severity: 'low', count: 214, color: 'var(--severity-low)', trend: '+42' },
  ];

  const recentAlerts = [
    { id: 'INC-001', title: 'Suspicious Login Activity', severity: 'critical', time: '2 min ago' },
    { id: 'INC-002', title: 'Failed Authentication x5', severity: 'high', time: '12 min ago' },
    { id: 'INC-003', title: 'Unusual File Access Pattern', severity: 'high', time: '25 min ago' },
    { id: 'INC-004', title: 'Network Anomaly Detected', severity: 'medium', time: '1 hour ago' },
  ];

  const getSeverityColor = (severity) => {
    const colors = {
      critical: 'var(--severity-critical)',
      high: 'var(--severity-high)',
      medium: 'var(--severity-medium)',
      low: 'var(--severity-low)',
    };
    return colors[severity] || 'var(--text-secondary)';
  };

  return (
    <div className="alert-overview">
      <div className="alert-header">
        <h3>Security Alerts</h3>
        <span className="refresh-btn">🔄</span>
      </div>

      <div className="severity-breakdown">
        {alertStats.map((stat) => (
          <div key={stat.severity} className="severity-card">
            <div className="severity-dot" style={{ background: stat.color }}></div>
            <div className="severity-info">
              <div className="severity-name">{stat.severity.toUpperCase()}</div>
              <div className="severity-count">{stat.count}</div>
              <div className="severity-trend" style={{ color: stat.color }}>
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-alerts">
        <div className="alerts-header">Recent Alerts</div>
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="alert-item">
            <div 
              className="alert-marker" 
              style={{ background: getSeverityColor(alert.severity) }}
            ></div>
            <div className="alert-details">
              <div className="alert-title">{alert.title}</div>
              <div className="alert-meta">{alert.id} • {alert.time}</div>
            </div>
            <div className="alert-severity" style={{ color: getSeverityColor(alert.severity) }}>
              {alert.severity.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
