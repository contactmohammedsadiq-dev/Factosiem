import React from 'react';
import AlertsPieChart from '../AlertsPieChart';

export default function SOCDashboard({ onDrillDown }) {
    const metrics = [
        { label: 'Total Alerts', value: '1,247', trend: '+12%', color: 'up', span: 3, filter: 'all' },
        { label: 'Critical Alerts', value: '18', trend: '-2', color: 'down', span: 3, filter: 'severity:critical' },
        { label: 'Avg MTTR', value: '4.2h', trend: '↓ 0.5h', color: 'down', span: 3, filter: 'incidents:resolved' },
        { label: 'Automation Rate', value: '64%', trend: '↑ 5%', color: 'down', span: 3, filter: 'automation:active' }
    ];

    return (
        <div className="dash-grid">
            {metrics.map((m, idx) => (
                <div
                    key={idx}
                    className={`widget-card`}
                    style={{ gridColumn: `span ${m.span}`, cursor: 'pointer' }}
                    onClick={() => onDrillDown(m.filter)}
                >
                    <div className="widget-header">
                        <div className="widget-title">{m.label}</div>
                        <div className="widget-icon">⚡</div>
                    </div>
                    <div className="widget-content">
                        <div className="metric-value">{m.value}</div>
                        <div className={`metric-trend trend-${m.color}`}>{m.trend} from last period</div>
                    </div>
                </div>
            ))}

            <div className="widget-card" style={{ gridColumn: 'span 8', gridRow: 'span 3' }}>
                <div className="widget-header">
                    <div className="widget-title">Alert Distribution by Severity</div>
                </div>
                <div className="widget-content" style={{ height: 'calc(100% - 40px)' }}>
                    <AlertsPieChart onDrillDown={onDrillDown} />
                </div>
            </div>

            {/* AI Insights Widget */}
            <div className="widget-card" style={{ gridColumn: 'span 4', gridRow: 'span 3', background: 'rgba(0, 245, 255, 0.05)', borderColor: 'rgba(0, 245, 255, 0.2)' }}>
                <div className="widget-header">
                    <div className="widget-title" style={{ color: '#00F5FF' }}>AI Posture Insight</div>
                </div>
                <div className="widget-content">
                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#ccc' }}>
                        Alerts from <strong>Internal Server Farm</strong> have increased by 40% in the last 4 hours. This correlates with a known
                        <strong> Log4j scanning campaign</strong> seen across your sector.
                    </p>
                    <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px' }}>
                        <strong style={{ fontSize: '12px', color: '#fff' }}>Recommended Action:</strong>
                        <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>Deploy "Log4j Mitigation" playbook to the affected VLANs.</p>
                    </div>
                    <button className="action-btn primary small" style={{ width: '100%', marginTop: '20px' }}>Investigate Correlation</button>
                </div>
            </div>

            {/* Top Attacked Entities Table */}
            <div className="widget-card" style={{ gridColumn: 'span 12' }}>
                <div className="widget-header">
                    <div className="widget-title">Top Targeted Entities</div>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', fontSize: '12px', color: '#555', borderBottom: '1px solid #222' }}>
                            <th style={{ padding: '12px' }}>Entity</th>
                            <th style={{ padding: '12px' }}>Type</th>
                            <th style={{ padding: '12px' }}>Alerts</th>
                            <th style={{ padding: '12px' }}>Risk Score</th>
                            <th style={{ padding: '12px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '13px' }}>
                        <tr style={{ borderBottom: '1px solid #222' }}>
                            <td style={{ padding: '12px' }}>user-04-dev</td>
                            <td style={{ padding: '12px' }}>User</td>
                            <td style={{ padding: '12px' }}>45</td>
                            <td style={{ padding: '12px', color: '#dc3545' }}>88</td>
                            <td style={{ padding: '12px' }}><button className="action-btn small">View Profile</button></td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #222' }}>
                            <td style={{ padding: '12px' }}>srv-sql-01</td>
                            <td style={{ padding: '12px' }}>Host</td>
                            <td style={{ padding: '12px' }}>32</td>
                            <td style={{ padding: '12px', color: '#fd7e14' }}>64</td>
                            <td style={{ padding: '12px' }}><button className="action-btn small">View Stats</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
