import React from 'react';

export default function UserDetails({ id, onBack }) {
    const user = {
        name: id,
        role: 'Senior Developer',
        dept: 'Engineering',
        privilege: 'High',
        location: 'New York, US (Corporate VPN)',
        riskScore: 88,
        status: 'Suspended (Auto-Response)',
    };

    const resources = [
        { label: 'CPU Usage', val: '84%', baseline: '12%', anomaly: true },
        { label: 'GPU Usage', val: '98%', baseline: '2%', anomaly: true },
        { label: 'Memory', val: '16GB', baseline: '4GB', anomaly: true },
        { label: 'Network Out', val: '450MB/s', baseline: '12MB/s', anomaly: true },
    ];

    return (
        <div className="user-details-view">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '20px' }}>← Back to Overview</button>

            <div className="ueba-grid">
                {/* User Identity Profile */}
                <div className="ueba-card" style={{ gridColumn: 'span 4' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#222', border: '2px solid #00F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👤</div>
                        <div>
                            <h3 style={{ margin: 0 }}>{user.name}</h3>
                            <div style={{ fontSize: '12px', color: '#666' }}>{user.role} • {user.dept}</div>
                        </div>
                    </div>
                    <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Privilege</span> <span>{user.privilege}</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Current Loc</span> <span>{user.location}</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Risk Level</span> <span style={{ color: '#ff4d4d' }}>{user.riskScore} (Extreme)</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Status</span> <span style={{ color: '#ff4d4d' }}>{user.status}</span></div>
                    </div>
                </div>

                {/* Resource Anomaly Baseline */}
                <div className="ueba-card" style={{ gridColumn: 'span 8' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px' }}>System Resource Anomaly (Last 1 Hour)</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        {resources.map((res, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                                    <span>{res.label}</span>
                                    <span style={{ color: res.anomaly ? '#ff4d4d' : '#2eb67d' }}>{res.val} <span style={{ color: '#444', marginLeft: '4px' }}>(Baseline: {res.baseline})</span></span>
                                </div>
                                <div className="resource-bar-bg">
                                    <div className={`resource-bar-fill ${res.anomaly ? 'anomaly' : ''}`} style={{ width: res.val }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Behavioral Timeline */}
                <div className="ueba-card" style={{ gridColumn: 'span 12' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px' }}>Detection Timeline & Context</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { time: '14:22:01', event: 'Sustained GPU usage (>90%) detected', source: 'Endpoint Monitor' },
                            { time: '14:21:45', event: 'Suspicious process "minerd.exe" executed', source: 'Process Guard' },
                            { time: '14:18:12', event: 'Massive outbound network connection to "pool.mine.xmr"', source: 'Network Sentinel' },
                            { time: '09:04:33', event: 'Regular login from NY VPN', source: 'Identity Hub' },
                        ].map((evt, i) => (
                            <div key={i} style={{ display: 'flex', gap: '20px', fontSize: '13px', borderLeft: `2px solid ${i < 3 ? '#ff4d4d' : '#222'}`, paddingLeft: '16px', paddingBottom: '16px' }}>
                                <div style={{ color: '#444', width: '80px' }}>{evt.time}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ color: i < 3 ? '#fff' : '#888' }}>{evt.event}</div>
                                    <div style={{ fontSize: '11px', color: '#444' }}>Source: {evt.source}</div>
                                </div>
                                {i < 3 && <button className="action-btn tiny">Investigate</button>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions Integration */}
                <div className="ueba-card" style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'center', gap: '16px', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <button className="action-btn">Investigate Logs</button>
                    <button className="action-btn">View Related Alerts</button>
                    <button className="action-btn">Open Incident</button>
                    <button className="action-btn primary">Reset Baseline</button>
                </div>
            </div>
        </div>
    );
}
