import React from 'react';

export default function ResponseAnalytics() {
    return (
        <div style={{ padding: '24px' }}>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Response Performance Analytics</h2>
                <p style={{ color: '#888' }}>Tracking the efficiency, safety, and quality of automated actions.</p>
            </div>

            <div className="ar-analytics-grid">
                <div className="ar-stat-card">
                    <div className="rc-label">Mean Response Time</div>
                    <div className="rc-value">45s</div>
                    <div className="rc-trend good">↓ 12s from last week</div>
                </div>
                <div className="ar-stat-card">
                    <div className="rc-label">Auto-Containment</div>
                    <div className="rc-value">84%</div>
                    <div className="rc-trend good">↑ 5% coverage</div>
                </div>
                <div className="ar-stat-card">
                    <div className="rc-label">False Positive Actions</div>
                    <div className="rc-value">1.2%</div>
                    <div className="rc-trend good">Within SLA (&lt;2%)</div>
                </div>
                <div className="ar-stat-card">
                    <div className="rc-label">Cost Savings (Est)</div>
                    <div className="rc-value">$124k</div>
                    <div className="rc-trend good">Analyst time saved</div>
                </div>
            </div>

            <div style={{ marginTop: '24px' }}>
                <div className="ti-section-label">Playbook Effectiveness Trend</div>
                <div style={{ background: '#1e1e1e', height: '300px', border: '1px solid #333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                    {/* Charts would go here in a real app */}
                    Chart Visualization Placeholder (Success Rate vs Time)
                </div>
            </div>
        </div>
    );
}
