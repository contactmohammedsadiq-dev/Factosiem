import React from 'react';

export default function AIDetectionStudio() {
    const suggestions = [
        {
            title: 'Gap Found: Valid Accounts',
            desc: 'Based on recent T1078 activity in your sector, you lack coverage for Cloud Vendor account abuse.',
            mitre: 'T1078.004',
            reason: 'Threat Intel Match'
        },
        {
            title: 'Tuning: Reduce Noise',
            desc: 'Rule "High Network Outbound" has 92% False Positive rate. Suggest increasing threshold to >500MB.',
            mitre: 'T1048',
            reason: 'High FP Rate'
        },
        {
            title: 'New: Ransomware Precursor',
            desc: 'Detected repeated vssadmin delete shadows commands in unmonitored logs.',
            mitre: 'T1490',
            reason: 'Log Anomaly'
        }
    ];

    return (
        <div>
            <div className="ai-studio-grid">
                {suggestions.map((item, i) => (
                    <div key={i} className="suggestion-card">
                        <div className="suggestion-header">
                            <span className="suggestion-badge">{item.reason}</span>
                            <span style={{ fontSize: '11px', color: '#666' }}>{item.mitre}</span>
                        </div>
                        <div className="suggestion-title">{item.title}</div>
                        <div className="suggestion-desc">{item.desc}</div>
                        <div className="suggestion-actions">
                            <button className="action-btn small primary">Apply Fix</button>
                            <button className="action-btn small">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
