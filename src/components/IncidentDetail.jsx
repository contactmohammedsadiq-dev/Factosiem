import React from 'react';

export default function IncidentDetail({ incident, onBack }) {
    if (!incident) return null;

    return (
        <div className="war-room-container">
            {/* War Room Header */}
            <div className="war-room-header">
                <div className="wr-title-section">
                    <div style={{ marginBottom: '10px', cursor: 'pointer', color: '#666', fontSize: '12px' }} onClick={onBack}>
                        ← Back to Board
                    </div>
                    <h2>{incident.title}</h2>
                    <div className="wr-meta-row">
                        <span className="wr-status-pill">{incident.status}</span>
                        <span className={`status-badge status-${incident.severity.toLowerCase()}`}>{incident.severity}</span>
                        <span>ID: {incident.id}</span>
                        <span>Started: {incident.timeOpen}</span>
                    </div>
                </div>
                <div className="wr-commander">
                    <div className="commander-label">INCIDENT COMMANDER</div>
                    <div className="commander-name">{incident.owner}</div>
                </div>
            </div>

            <div className="war-room-content">
                {/* Left Column: Playbook & Tasks */}
                <div className="wr-column" style={{ flex: '1.2' }}>
                    <div className="wr-section-title">
                        <span>Response Playbook ({incident.type})</span>
                        <span style={{ color: '#00ff9c' }}>3/8 Done</span>
                    </div>

                    <div className="playbook-item done">
                        <input type="checkbox" className="playbook-checkbox" checked readOnly />
                        <span className="playbook-text">Isolate affected host (Manual)</span>
                    </div>
                    <div className="playbook-item done">
                        <input type="checkbox" className="playbook-checkbox" checked readOnly />
                        <span className="playbook-text">Capture memory dump</span>
                    </div>
                    <div className="playbook-item done">
                        <input type="checkbox" className="playbook-checkbox" checked readOnly />
                        <span className="playbook-text">Reset user credentials</span>
                    </div>
                    <div className="playbook-item">
                        <input type="checkbox" className="playbook-checkbox" />
                        <span className="playbook-text">Analyze browser history</span>
                    </div>
                    <div className="playbook-item">
                        <input type="checkbox" className="playbook-checkbox" />
                        <span className="playbook-text">Scan for persistence mechanisms</span>
                    </div>
                    <div className="playbook-item">
                        <input type="checkbox" className="playbook-checkbox" />
                        <span className="playbook-text">Interview user</span>
                    </div>
                </div>

                {/* Middle Column: Evidence & Artifacts */}
                <div className="wr-column">
                    <div className="wr-section-title">Evidence Locker</div>

                    <div style={{ background: '#1e1e1e', padding: '10px', borderRadius: '4px', marginBottom: '8px' }}>
                        <div style={{ fontSize: '11px', color: '#888' }}>Primary Alert</div>
                        <div style={{ color: '#fff', fontSize: '13px' }}>{incident.title}</div>
                    </div>

                    <div style={{ background: '#1e1e1e', padding: '10px', borderRadius: '4px', marginBottom: '8px' }}>
                        <div style={{ fontSize: '11px', color: '#888' }}>Affected Host</div>
                        <div style={{ color: '#00F5FF', fontSize: '13px' }}>LAPTOP-23</div>
                    </div>

                    <div style={{ background: '#1e1e1e', padding: '10px', borderRadius: '4px' }}>
                        <div style={{ fontSize: '11px', color: '#888' }}>Malicious IP</div>
                        <div style={{ color: '#ff3b3b', fontSize: '13px' }}>45.33.22.11</div>
                        <div style={{ fontSize: '10px', color: '#666', marginTop: '4px' }}>Threat Intel: Known C2 Server</div>
                    </div>
                </div>

                {/* Right Column: Timeline */}
                <div className="wr-column">
                    <div className="wr-section-title">Live Updates</div>

                    <div className="wr-timeline-item">
                        <div className="wr-timeline-dot"></div>
                        <div className="wr-timeline-time">14:35 - System</div>
                        <div className="wr-timeline-desc">User account 'john.smith' password reset initiated.</div>
                    </div>

                    <div className="wr-timeline-item">
                        <div className="wr-timeline-dot"></div>
                        <div className="wr-timeline-time">14:30 - Analyst (You)</div>
                        <div className="wr-timeline-desc">Confirmed C2 traffic pattern matching APT-29.</div>
                    </div>

                    <div className="wr-timeline-item">
                        <div className="wr-timeline-dot"></div>
                        <div className="wr-timeline-time">14:15 - Auto-Response</div>
                        <div className="wr-timeline-desc">Host isolation successful via EDR integration.</div>
                    </div>

                    <div className="wr-timeline-item">
                        <div className="wr-timeline-dot"></div>
                        <div className="wr-timeline-time">14:10 - Alert System</div>
                        <div className="wr-timeline-desc">Incident created from Alert #10234.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
