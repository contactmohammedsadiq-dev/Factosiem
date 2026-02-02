import React from 'react';

export default function ResponsePlaybooks() {
    const playbooks = [
        {
            id: 1,
            name: 'DDoS IP Mitigation',
            trigger: 'Same IP > 1k req/min',
            action: 'Block IP (Firewall)',
            risk: 'low',
            success: '99.8%',
            lastRun: '12m ago'
        },
        {
            id: 2,
            name: 'Ransomware Containment',
            trigger: 'Malicious process + Encryption',
            action: 'Isolate Device (EDR)',
            risk: 'high',
            success: '94.2%',
            lastRun: '2 days ago'
        },
        {
            id: 3,
            name: 'Credential Compromise',
            trigger: 'Failed logins -> Success (Same IP)',
            action: 'Disable User (AD)',
            risk: 'medium',
            success: '97.5%',
            lastRun: '4h ago'
        },
        {
            id: 4,
            name: 'Lateral Movement Stop',
            trigger: 'Admin Share + SMB Scan',
            action: 'Network Isolate',
            risk: 'high',
            success: '100%',
            lastRun: '1 week ago'
        },
        {
            id: 5,
            name: 'Malware Beaconing',
            trigger: 'Known C2 Traffic (DNS)',
            action: 'Sinkhole Domain',
            risk: 'low',
            success: '99.9%',
            lastRun: '1h ago'
        }
    ];

    return (
        <div className="playbooks-grid">
            {playbooks.map(pb => (
                <div key={pb.id} className="playbook-card">
                    <div className="pb-header">
                        <div className="pb-title">{pb.name}</div>
                        <div className={`pb-risk ${pb.risk}`}>{pb.risk} Risk</div>
                    </div>

                    <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>TRIGGER LOGIC</div>
                    <div className="pb-trigger">
                        <span style={{ color: '#00F5FF' }}>⚡</span>
                        {pb.trigger}
                    </div>

                    <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>PRIMARY ACTION</div>
                    <div className="pb-trigger" style={{ borderColor: '#444', color: '#fff' }}>
                        <span style={{ color: '#dc3545' }}>🛡️</span>
                        {pb.action}
                    </div>

                    <div className="pb-stats">
                        <div>✅ {pb.success} Success</div>
                        <div>🕒 {pb.lastRun}</div>
                    </div>

                    <button className="action-btn small full-width" style={{ marginTop: '16px' }}>Details / Edit</button>
                </div>
            ))}
        </div>
    );
}
