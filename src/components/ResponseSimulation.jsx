import React, { useState } from 'react';

export default function ResponseSimulation() {
    const [simulated, setSimulated] = useState(false);

    return (
        <div className="sim-container">
            <div className="ti-page-header">
                <h2 className="ti-page-title">Response Safety Simulation</h2>
                <p style={{ color: '#888' }}>Dry-run automation to verify blast radius and side effects before approval.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Scenario Configuration</div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: 1, background: '#1e1e1e', padding: '12px', border: '1px solid #333', borderRadius: '4px' }}>
                        <strong>Target Playbook:</strong> Ransomware Containment
                    </div>
                    <div style={{ flex: 1, background: '#1e1e1e', padding: '12px', border: '1px solid #333', borderRadius: '4px' }}>
                        <strong>Test Entity:</strong> workstation-04.corp (10.0.4.55)
                    </div>
                </div>
                <button className="action-btn primary" onClick={() => setSimulated(true)}>Run Safe Simulation</button>
            </div>

            {simulated && (
                <div className="ti-results-section">
                    <div className="sim-header-box">
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase' }}>Est. Blast Radius</div>
                            <div style={{ fontSize: '24px', fontWeight: '600', color: '#fff' }}>Single Device</div>
                            <div className="sim-blast-radius">
                                <div className="sim-blast-fill" style={{ width: '5%', background: '#28a745' }}></div>
                            </div>
                            <div style={{ fontSize: '11px', color: '#28a745', marginTop: '4px' }}>Low Impact (0.01% of fleet)</div>
                        </div>
                        <div style={{ borderLeft: '1px solid #333', margin: '0 24px' }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase' }}>Confidence Score</div>
                            <div style={{ fontSize: '24px', fontWeight: '600', color: '#00F5FF' }}>94.2%</div>
                            <div style={{ fontSize: '11px', color: '#ccc', marginTop: '4px' }}>Based on 45 previous runs</div>
                        </div>
                        <div style={{ borderLeft: '1px solid #333', margin: '0 24px' }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase' }}>Rollback Available?</div>
                            <div style={{ fontSize: '24px', fontWeight: '600', color: '#28a745' }}>YES</div>
                            <div style={{ fontSize: '11px', color: '#ccc', marginTop: '4px' }}>Instant undo via EDR API</div>
                        </div>
                    </div>

                    <div className="ti-section-label">Affected Entities (What Will Happen)</div>
                    <div className="entity-list">
                        <div className="entity-item">
                            <span>📱 <strong>workstation-04.corp</strong></span>
                            <span style={{ color: '#dc3545' }}>NETWORK ISOLATION</span>
                        </div>
                        <div className="entity-item">
                            <span>👤 <strong>Active User (bob.jones)</strong></span>
                            <span style={{ color: '#dc3545' }}>SESSION TERMINATION</span>
                        </div>
                        <div className="entity-item">
                            <span>📂 <strong>Local Shares</strong></span>
                            <span style={{ color: '#ffc107' }}>ACCESS REVOKED</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                        <button className="action-btn" onClick={() => setSimulated(false)}>Cancel</button>
                        <button className="action-btn" style={{ borderColor: '#ffc107', color: '#ffc107' }}>Delay (1h)</button>
                        <button className="action-btn primary">Verify & Approve</button>
                    </div>
                </div>
            )}
        </div>
    );
}
