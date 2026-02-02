import React from 'react';

export default function ExecutiveDashboard({ onDrillDown }) {
    const kpis = [
        { label: 'Enterprise Risk Score', value: '42', subtitle: 'Low Risk', color: '#2eb67d' },
        { label: 'Compliance Index', value: '98%', subtitle: 'SOC2 / GDPR', color: '#00F5FF' },
        { label: 'Security ROI', value: '$1.2M', subtitle: 'Cost Avoided', color: '#fd7e14' },
        { label: 'Board Confidence', value: 'High', subtitle: 'Trending Up', color: '#00F5FF' }
    ];

    return (
        <div className="dash-grid">
            {kpis.map((kpi, idx) => (
                <div key={idx} className="widget-card" style={{ gridColumn: 'span 3', textAlign: 'center' }}>
                    <div className="widget-title" style={{ fontSize: '12px' }}>{kpi.label}</div>
                    <div className="metric-value" style={{ color: kpi.color, fontSize: '40px' }}>{kpi.value}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>{kpi.subtitle}</div>
                </div>
            ))}

            <div className="widget-card" style={{ gridColumn: 'span 6', gridRow: 'span 4' }}>
                <div className="widget-header">
                    <div className="widget-title">Risk Exposure by Business Unit</div>
                </div>
                <div style={{ padding: '20px' }}>
                    {['Finance', 'R&D', 'Sales', 'Infrastructure'].map((unit, i) => (
                        <div key={i} style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                                <span>{unit}</span>
                                <span style={{ color: i === 1 ? '#ff4d4d' : '#2eb67d' }}>{i === 1 ? 'High' : 'Protected'}</span>
                            </div>
                            <div style={{ height: '8px', background: '#222', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: i === 1 ? '85%' : '20%', background: i === 1 ? '#ff4d4d' : '#2eb67d' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="widget-card" style={{ gridColumn: 'span 6', gridRow: 'span 4' }}>
                <div className="widget-header">
                    <div className="widget-title">Strategic Roadmap Progress</div>
                </div>
                <div style={{ padding: '20px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ color: '#2eb67d' }}>✓</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: '500' }}>Cloud Isolation Protocol</div>
                                <div style={{ fontSize: '11px', color: '#555' }}>Completed Q4 2025</div>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ color: '#00F5FF' }}>○</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#fff' }}>Identity-First Security (ZTNA)</div>
                                <div style={{ fontSize: '11px', color: '#555' }}>In Progress (70%)</div>
                            </div>
                        </li>
                        <li style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ color: '#666' }}>□</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: '500', color: '#aaa' }}>Next-Gen SOC Automation</div>
                                <div style={{ fontSize: '11px', color: '#555' }}>Scheduled for Q2 2026</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
