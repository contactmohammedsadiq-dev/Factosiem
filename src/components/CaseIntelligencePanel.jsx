import React from 'react';
import './TicketingOrchestration.css';

export default function CaseIntelligencePanel({ ticket }) {
    return (
        <div className="ai-intelligence-panel">
            <div className="ai-panel-title">
                <span>🤖</span>
                <span>AI Case Intelligence</span>
            </div>

            <div className="ai-summary">
                <div className="ai-summary-section">
                    <div className="ai-section-label">What Happened</div>
                    <div className="ai-section-content">
                        Suspicious PowerShell execution detected on LAPTOP-23 by user john.smith.
                        The script attempted to download and execute a remote payload, triggering
                        multiple detection rules.
                    </div>
                </div>

                <div className="ai-summary-section">
                    <div className="ai-section-label">Why It Matters</div>
                    <div className="ai-section-content">
                        This matches MITRE ATT&CK T1059.001 (PowerShell). The asset is classified
                        as Production-critical. User has no history of PowerShell usage. High
                        confidence (94%) of malicious intent.
                    </div>
                </div>

                <div className="ai-summary-section">
                    <div className="ai-section-label">What Was Done</div>
                    <div className="ai-section-content">
                        Analyst investigated logs, collected evidence, and identified 3 related
                        alerts from the same user. Containment playbook triggered to isolate
                        the affected system.
                    </div>
                </div>

                <div className="ai-summary-section">
                    <div className="ai-section-label">What Remains</div>
                    <div className="ai-section-content">
                        Validation pending: Verify system isolation, confirm malware removal,
                        conduct user interview, update threat intelligence feeds.
                    </div>
                </div>
            </div>

            <div className="ai-next-action">
                <span>💡</span>
                <span><strong>Next Best Action:</strong> Trigger forensic analysis playbook and escalate to Incident Response team</span>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button className="action-btn" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    fontSize: '12px',
                    padding: '6px 12px'
                }}>
                    📄 Generate Incident Report
                </button>
                <button className="action-btn" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    fontSize: '12px',
                    padding: '6px 12px'
                }}>
                    📊 Generate Executive Summary
                </button>
                <button className="action-btn" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#ffffff',
                    fontSize: '12px',
                    padding: '6px 12px'
                }}>
                    ✅ Generate Compliance Evidence
                </button>
            </div>
        </div>
    );
}
