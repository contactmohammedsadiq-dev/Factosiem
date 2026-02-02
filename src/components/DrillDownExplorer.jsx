import React from 'react';

export default function DrillDownExplorer({ filter, onBack }) {
    // Mock data for filtered alerts based on drill-down
    const alerts = [
        { id: 'AL-1092', name: 'Potential Log4j Exploitation', severity: 'Critical', entity: 'srv-web-01', confidence: '94%', time: '12m ago' },
        { id: 'AL-1093', name: 'Brute Force Attempt', severity: 'High', entity: 'user-04-dev', confidence: '88%', time: '24m ago' },
        { id: 'AL-1094', name: 'Anomalous DNS Query', severity: 'Medium', entity: 'wkstn-12', confidence: '72%', time: '1h ago' },
    ];

    return (
        <div className="drill-down-view">
            <div className="drill-down-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <button className="action-btn small" onClick={onBack}>← Back to Dashboard</button>
                <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0 }}>Drill-Down: 18 <span style={{ color: '#ff4d4d' }}>Critical Alerts</span></h3>
                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>Filter: severity == 'Critical' • Last 24 Hours</p>
                </div>
                <button className="action-btn primary">Open in Alerts Module</button>
            </div>

            <div className="entity-list" style={{ background: '#111', border: '1px solid #222', borderRadius: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', fontSize: '11px', color: '#444', borderBottom: '1px solid #222' }}>
                            <th style={{ padding: '16px' }}>ID</th>
                            <th style={{ padding: '16px' }}>Alert Name</th>
                            <th style={{ padding: '16px' }}>Severity</th>
                            <th style={{ padding: '16px' }}>Entity</th>
                            <th style={{ padding: '16px' }}>Confidence</th>
                            <th style={{ padding: '16px' }}>Time</th>
                            <th style={{ padding: '16px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map(alert => (
                            <tr key={alert.id} style={{ fontSize: '13px', borderBottom: '1px solid #1a1a1a' }}>
                                <td style={{ padding: '16px', color: '#00F5FF' }}>{alert.id}</td>
                                <td style={{ padding: '16px', fontWeight: '500' }}>{alert.name}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        color: alert.severity === 'Critical' ? '#ff4d4d' : '#fd7e14',
                                        padding: '2px 8px',
                                        background: alert.severity === 'Critical' ? 'rgba(255, 77, 77, 0.1)' : 'rgba(253, 126, 20, 0.1)',
                                        borderRadius: '12px',
                                        fontSize: '11px'
                                    }}>{alert.severity}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{alert.entity}</td>
                                <td style={{ padding: '16px' }}>{alert.confidence}</td>
                                <td style={{ padding: '16px', color: '#666' }}>{alert.time}</td>
                                <td style={{ padding: '16px' }}>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button className="action-btn small">Investigate</button>
                                        <button className="action-btn small">Playbook</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(0, 245, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(0, 245, 255, 0.1)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ fontSize: '24px' }}>🤖</div>
                    <div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#00F5FF' }}>AI Investigation Summary</h4>
                        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#ccc' }}>
                            These 18 critical alerts show a cluster around <strong>srv-web-01</strong> and <strong>srv-web-02</strong>.
                            The exploitation pattern suggests an attempt to abuse vulnerable web headers to achieve remote code execution.
                            Recommended action: Isolate these servers immediately and rotate service account credentials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
