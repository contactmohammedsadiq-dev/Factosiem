import React from 'react';

export default function UEBAOverview({ onSelectUser, onSelectEntity }) {
    const riskyUsers = [
        { id: 'j.doe', score: 88, dept: 'Engineering', anomaly: 'GPU Spike (Crypto?)', color: '#ff4d4d' },
        { id: 'a.smith', score: 72, dept: 'Finance', anomaly: 'Impossible Travel', color: '#fd7e14' },
        { id: 'b.jones', score: 64, dept: 'IT Admin', anomaly: 'Privilege Drift', color: '#fd7e14' },
    ];

    const riskyHosts = [
        { id: 'srv-db-prod-01', score: 92, type: 'Database Server', issue: 'High Disk I/O (Exfil?)' },
        { id: 'wkstn-dev-42', score: 76, type: 'Workstation', issue: 'Unusual Port Scans' },
    ];

    return (
        <div className="ueba-grid">
            {/* Main Risk Widget */}
            <div className="ueba-card" style={{ gridColumn: 'span 4' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px' }}>ORGANIZATIONAL RISK SCORE</p>
                    <div className="risk-circle high">
                        <div className="risk-score">64</div>
                        <div className="risk-label">Medium-High</div>
                    </div>
                    <p style={{ fontSize: '11px', color: '#444', marginTop: '16px' }}>Based on 1.2K daily behavior patterns</p>
                </div>
            </div>

            {/* Anomaly Trend */}
            <div className="ueba-card" style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500' }}>Behavior Anomaly Trend</div>
                    <div style={{ fontSize: '12px', color: '#2eb67d' }}>-12% from last week</div>
                </div>
                <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                    {[20, 45, 30, 80, 50, 40, 90, 60, 30, 40, 50, 70].map((h, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                height: `${h}%`,
                                background: h > 75 ? '#ff4d4d' : '#222',
                                borderRadius: '2px',
                                opacity: i === 6 ? 1 : 0.6
                            }}
                        ></div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#444', marginTop: '10px' }}>
                    <span>00:00</span>
                    <span>08:00</span>
                    <span>16:00</span>
                    <span>23:59</span>
                </div>
            </div>

            {/* Risky Users Table */}
            <div className="ueba-card" style={{ gridColumn: 'span 6' }}>
                <div style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500' }}>Highest Risk Users</div>
                <table className="ueba-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Risk Score</th>
                            <th>Primary Anomaly</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riskyUsers.map(user => (
                            <tr key={user.id} className="clickable-row" onClick={() => onSelectUser(user.id)}>
                                <td>
                                    <div style={{ fontWeight: '500' }}>{user.id}</div>
                                    <div style={{ fontSize: '11px', color: '#666' }}>{user.dept}</div>
                                </td>
                                <td>
                                    <span style={{ color: user.color }}>{user.score}</span>
                                </td>
                                <td style={{ fontSize: '12px', color: user.score > 80 ? '#ff4d4d' : '#aaa' }}>{user.anomaly}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Risky Entities Table */}
            <div className="ueba-card" style={{ gridColumn: 'span 6' }}>
                <div style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500' }}>Highest Risk Entities</div>
                <table className="ueba-table">
                    <thead>
                        <tr>
                            <th>Entity / Host</th>
                            <th>Risk Score</th>
                            <th>Critical Asset</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riskyHosts.map(host => (
                            <tr key={host.id} className="clickable-row" onClick={() => onSelectEntity(host.id)}>
                                <td>
                                    <div style={{ fontWeight: '500' }}>{host.id}</div>
                                    <div style={{ fontSize: '11px', color: '#666' }}>{host.type}</div>
                                </td>
                                <td>
                                    <span style={{ color: host.score > 80 ? '#ff4d4d' : '#fd7e14' }}>{host.score}</span>
                                </td>
                                <td>
                                    <span style={{
                                        fontSize: '10px',
                                        padding: '2px 6px',
                                        background: host.id.includes('prod') ? 'rgba(255, 77, 77, 0.1)' : '#222',
                                        color: host.id.includes('prod') ? '#ff4d4d' : '#666',
                                        borderRadius: '10px'
                                    }}>
                                        {host.id.includes('prod') ? 'YES' : 'NO'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Resource Anomaly Pulse */}
            <div className="ueba-card" style={{ gridColumn: 'span 12', background: 'rgba(255, 77, 77, 0.02)' }}>
                <div style={{ display: 'flex', gap: '32px' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>CPU ANOMALIES (Global)</div>
                        <div className="resource-bar-bg"><div className="resource-bar-fill" style={{ width: '45%' }}></div></div>
                        <div style={{ fontSize: '10px', color: '#444', marginTop: '4px' }}>4 hosts currently showing spikes</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>GPU ANOMALIES (Crypto Detect)</div>
                        <div className="resource-bar-bg"><div className="resource-bar-fill anomaly" style={{ width: '12%' }}></div></div>
                        <div style={{ fontSize: '10px', color: '#ff4d4d', marginTop: '4px' }}>1 workstation showing 98% sustained GPU</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>DISK I/O ANOMALIES (Exfil?)</div>
                        <div className="resource-bar-bg"><div className="resource-bar-fill" style={{ width: '28%' }}></div></div>
                        <div style={{ fontSize: '10px', color: '#444', marginTop: '4px' }}>Server 'srv-db-prod' reading large datasets</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
