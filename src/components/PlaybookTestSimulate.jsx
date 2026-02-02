import React, { useState } from 'react';

export default function PlaybookTestSimulate({ data }) {
    const [simulating, setSimulating] = useState(false);
    const [completed, setCompleted] = useState(false);

    const runSimulation = () => {
        setSimulating(true);
        setTimeout(() => {
            setSimulating(false);
            setCompleted(true);
            // In a real app we'd update parent state too
        }, 1500);
    };

    return (
        <div className="ti-page-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="ti-section-label">Pre-Activation Simulation</div>

            <div className="sim-header-box" style={{ background: '#161616' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{data.meta.name || 'Untitled Playbook'}</div>
                    <p style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                        {data.actions.length} Actions • {data.meta.riskLevel} Risk • {data.meta.environment}
                    </p>
                </div>
                <button
                    className={`action-btn primary ${simulating ? 'loading' : ''}`}
                    onClick={runSimulation}
                    disabled={simulating}
                >
                    {simulating ? 'Simulating...' : 'Run Simulation'}
                </button>
            </div>

            {completed && (
                <div className="ti-results-section">
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                        <div className="ar-stat-card" style={{ flex: 1 }}>
                            <div className="rc-label">Blast Radius</div>
                            <div className="rc-value">1 Device</div>
                            <div style={{ fontSize: '11px', color: '#28a745' }}>Isolated to target</div>
                        </div>
                        <div className="ar-stat-card" style={{ flex: 1 }}>
                            <div className="rc-label">Est. Response Time</div>
                            <div className="rc-value">2.4s</div>
                            <div style={{ fontSize: '11px', color: '#28a745' }}>Manual: 15m+</div>
                        </div>
                        <div className="ar-stat-card" style={{ flex: 1 }}>
                            <div className="rc-label">Success Prob.</div>
                            <div className="rc-value">98.5%</div>
                            <div style={{ fontSize: '11px', color: '#28a745' }}>History-based</div>
                        </div>
                    </div>

                    <div className="ti-section-label">Execution Graph Preview</div>
                    <div style={{ background: '#0a0a0a', padding: '24px', borderRadius: '8px', border: '1px solid #333' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2EB67D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>1</div>
                                <div style={{ flex: 1, padding: '12px', background: '#1e1e1e', borderRadius: '4px', border: '1px solid #333' }}>
                                    Trigger Match: {data.triggers[0]?.source} - {data.triggers[0]?.condition}
                                </div>
                            </div>
                            <div style={{ marginLeft: '11px', borderLeft: '2px dashed #333', height: '12px' }}></div>
                            {data.actions.map((action, idx) => (
                                <React.Fragment key={idx}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#00F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#000' }}>{idx + 2}</div>
                                        <div style={{ flex: 1, padding: '12px', background: '#1e1e1e', borderRadius: '4px', border: '1px solid #333' }}>
                                            EXECUTE: {action.type} -&gt; {action.target}
                                        </div>
                                    </div>
                                    {idx < data.actions.length - 1 && (
                                        <div style={{ marginLeft: '11px', borderLeft: '2px dashed #333', height: '12px' }}></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
