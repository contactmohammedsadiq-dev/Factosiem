import React from 'react';

export default function EntityDetails({ id, onBack }) {
    const entity = {
        name: id,
        type: 'Production Database Server (Critical)',
        os: 'Ubuntu 22.04 LTS',
        criticality: 'High',
        baselineStatus: 'Abnormal',
        primaryAnomalies: ['Massive Disk Read', 'Unexpected SaaS Access'],
    };

    return (
        <div className="entity-details-view">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '20px' }}>← Back to Overview</button>

            <div className="ueba-grid">
                {/* Entity Identity Profile */}
                <div className="ueba-card" style={{ gridColumn: 'span 5' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '4px', background: '#222', border: '2px solid #ffc107', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🖥️</div>
                        <div>
                            <h3 style={{ margin: 0 }}>{entity.name}</h3>
                            <div style={{ fontSize: '12px', color: '#666' }}>{entity.type}</div>
                        </div>
                    </div>
                    <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Operating System</span> <span>{entity.os}</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Criticality</span> <span style={{ color: '#ff4d4d' }}>{entity.criticality}</span></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#444' }}>Status</span> <span style={{ color: '#fd7e14' }}>{entity.baselineStatus}</span></div>
                        <div style={{ borderTop: '1px solid #222', paddingTop: '12px' }}>
                            <div style={{ fontSize: '11px', color: '#444', marginBottom: '8px' }}>PRIMARY ANOMALIES</div>
                            {entity.primaryAnomalies.map((a, i) => (
                                <div key={i} style={{ fontSize: '12px', color: '#ff4d4d', marginBottom: '4px' }}>• {a}</div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Workload Comparison */}
                <div className="ueba-card" style={{ gridColumn: 'span 7' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px' }}>Workload Peer Group Comparison</div>
                    <div style={{ height: '180px', position: 'relative', background: '#0a0a0a', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ fontSize: '11px', color: '#444', marginBottom: '16px' }}>CPU Load: Entity vs Peer Baseline</div>
                        <div style={{ position: 'relative', height: '100px' }}>
                            {/* Peer Baseline Chart (Light) */}
                            <svg width="100%" height="100%" preserveAspectRatio="none">
                                <polyline
                                    fill="none"
                                    stroke="rgba(0, 245, 255, 0.2)"
                                    strokeWidth="2"
                                    points="0,80 50,75 100,85 150,70 200,80 250,75 300,85 350,70 500,80"
                                />
                                {/* Current Entity Chart (Anomalous) */}
                                <polyline
                                    fill="none"
                                    stroke="#ff4d4d"
                                    strokeWidth="2"
                                    points="0,80 50,78 100,70 150,20 200,10 250,15 300,5 350,2 500,0"
                                />
                            </svg>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '10px', marginTop: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#ff4d4d' }}></div> Current Entity
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '8px', height: '8px', background: 'rgba(0, 245, 255, 0.2)' }}></div> Peer Avg
                            </div>
                        </div>
                    </div>
                </div>

                {/* Heavy Processes Table */}
                <div className="ueba-card" style={{ gridColumn: 'span 12' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px' }}>Top Resource-Consuming Processes</div>
                    <table className="ueba-table">
                        <thead>
                            <tr>
                                <th>Process Name</th>
                                <th>CPU Load (%)</th>
                                <th>Memory (RSS)</th>
                                <th>Network I/O</th>
                                <th>Reputation</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ color: '#ff4d4d' }}>
                                <td>db_dump_worker.py</td>
                                <td>78.4%</td>
                                <td>2.4 GB</td>
                                <td>145 MB/s</td>
                                <td>Suspicious (Rarely seen)</td>
                                <td><button className="action-btn tiny destructive">Kill Process</button></td>
                            </tr>
                            <tr>
                                <td>postgres_master</td>
                                <td>12.2%</td>
                                <td>4.8 GB</td>
                                <td style={{ color: '#2eb67d' }}>1.2 MB/s</td>
                                <td>Trusted</td>
                                <td><button className="action-btn tiny" disabled>Protected</button></td>
                            </tr>
                            <tr>
                                <td>syslog-ng</td>
                                <td>1.4%</td>
                                <td>45 MB</td>
                                <td>24 KB/s</td>
                                <td>Trusted</td>
                                <td><button className="action-btn tiny" disabled>Protected</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* AI Explanation Panel */}
                <div className="ueba-card" style={{ gridColumn: 'span 12', background: 'rgba(0, 245, 255, 0.05)', borderColor: 'rgba(0, 245, 255, 0.2)' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <div style={{ fontSize: '24px' }}>🤖</div>
                        <div>
                            <h4 style={{ margin: '0 0 4px 0', color: '#00F5FF' }}>Entity Behavior Insight</h4>
                            <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#ccc' }}>
                                Server <strong>{entity.name}</strong> is currently behaving like it is undergoing a <strong>data exfiltration event</strong>.
                                The process <strong>db_dump_worker.py</strong> is reading large amounts of data and transmitting it to an external IP
                                that has not been seen in the last 90 days.
                                <br />
                                <strong>Risk Recommendation:</strong> Kill the process and enable MFA for the associated database service account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
