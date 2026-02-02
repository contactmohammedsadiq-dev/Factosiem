import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlertsDetection.css';

export default function AlertsDetection({ selectedAlertId, onAlertSelect }) {
    const navigate = useNavigate();

    // Mock Alert Data
    const alerts = [
        {
            id: 1,
            name: 'Suspicious PowerShell Execution',
            severity: 'Critical',
            confidence: 94,
            triggered: '2 min ago',
            status: 'New',
            user: 'john.smith',
            asset: 'LAPTOP-23',
            assetCriticality: 'Production',
            technique: 'T1059.001 (Command & Scripting)',
            geo: 'US-East (Virginia)',
            role: 'Standard User'
        },
        {
            id: 2,
            name: 'Unusual Data Exfiltration',
            severity: 'Critical',
            confidence: 88,
            triggered: '15 min ago',
            status: 'Investigating',
            user: 'service_backup',
            asset: 'DB-PROD-01',
            assetCriticality: 'Crown Jewel',
            technique: 'T1048 (Exfiltration Over Alt Protocol)',
            geo: 'Unknown IP',
            role: 'Service Account'
        },
        {
            id: 3,
            name: 'Repeated Authentication Failure',
            severity: 'High',
            confidence: 82,
            triggered: '25 min ago',
            status: 'Active',
            user: 'john.smith',
            asset: 'AUTH-SRV-01',
            assetCriticality: 'IAM Infrastructure',
            technique: 'T1110 (Brute Force)',
            geo: 'Internal Network',
            role: 'Standard User'
        },
        {
            id: 4,
            name: 'Brute Force Opportunity',
            severity: 'Medium',
            confidence: 65,
            triggered: '1 hour ago',
            status: 'Triaged',
            user: 'admin',
            asset: 'WEB-GATEWAY',
            assetCriticality: 'Dev-Test',
            technique: 'T1110 (Brute Force)',
            geo: 'CN (China)',
            role: 'Administrator'
        }
    ];

    const selectedAlert = alerts.find(a => a.id === selectedAlertId);

    const getConfidenceColor = (score) => {
        if (score >= 90) return '#00ff9c'; // High green
        if (score >= 70) return '#ffc107'; // Med yellow
        return '#dc3545'; // Low red
    };

    const handleInvestigateLogs = () => {
        if (selectedAlert) {
            // Navigate to search module with the user as the query
            navigate('/module/search', { state: { query: selectedAlert.user } });
        }
    };

    if (selectedAlert) {
        return (
            <div className="alert-detail-view">

                {/* Header Section */}
                <div className="detail-header">
                    <span className="back-link" onClick={() => onAlertSelect(null)}>← Back to Alerts</span>
                    <div className="alert-title-row">
                        <div>
                            <div className="alert-main-title">{selectedAlert.name}</div>
                            <div className="alert-meta">
                                <span className={`status-badge status-${selectedAlert.severity.toLowerCase()}`}>
                                    {selectedAlert.severity}
                                </span>
                                <span>• Triggered {selectedAlert.triggered}</span>
                                <span>• ID: ALERT-{2025000 + selectedAlert.id}</span>
                            </div>
                        </div>
                        <div className="confidence-score-large">
                            <div className="cs-value" style={{ color: getConfidenceColor(selectedAlert.confidence) }}>
                                {selectedAlert.confidence}%
                            </div>
                            <div className="cs-label">Confidence Score</div>
                        </div>
                    </div>
                </div>

                {/* Enrichment Context Panel */}
                <div className="context-panel">
                    <div className="context-item">
                        <span className="context-label">User / Context</span>
                        <span className="context-value">{selectedAlert.user}</span>
                        <span style={{ fontSize: '11px', color: '#888' }}>{selectedAlert.role}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Asset</span>
                        <span className="context-value">{selectedAlert.asset}</span>
                        <span className="context-value asset-critical" style={{ fontSize: '11px' }}>
                            {selectedAlert.assetCriticality}
                        </span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">MITRE Technique</span>
                        <span className="context-value" style={{ fontSize: '11px' }}>{selectedAlert.technique}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Location / Geo</span>
                        <span className="context-value">{selectedAlert.geo}</span>
                    </div>
                </div>

                {/* Correlation Preview */}
                <div className="context-panel" style={{ borderLeft: '3px solid #00F5FF' }}>
                    <div className="context-item" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px' }}>🔗</span>
                        <div>
                            <span className="context-value">Correlation Insight</span>
                            <div style={{ fontSize: '12px', color: '#aaa', marginTop: '2px' }}>
                                This alert is related to <strong>2 other alerts</strong> in the last 20 minutes from the same user.
                            </div>
                        </div>
                        <button className="action-btn" style={{ marginLeft: 'auto' }}>View Related</button>
                    </div>
                </div>

                {/* State Machine Timeline */}
                <div className="timeline-section">
                    <div className="section-label">Alert Lifecycle</div>
                    <div className="timeline-track">
                        <div className="timeline-line"></div>
                        {['New', 'Triaged', 'Investigating', 'Resolution'].map((step, idx) => {
                            // Simple logic to determine active state visualization
                            let stateClass = '';
                            // Map alert status to steps
                            const currentStepMap = { 'New': 0, 'Triaged': 1, 'Investigating': 2, 'Closed': 3 };
                            const currentIdx = currentStepMap[selectedAlert.status] || 0;

                            if (idx < currentIdx) stateClass = 'step-completed';
                            if (idx === currentIdx) stateClass = 'step-active';

                            return (
                                <div key={step} className={`timeline-step ${stateClass}`}>
                                    <div className="step-dot">{idx + 1}</div>
                                    <div className="step-label">{step}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Action Dock */}
                <div className="investigation-dock">
                    <button className="action-btn" onClick={handleInvestigateLogs}>
                        🔍 Investigate Logs
                    </button>
                    <button className="action-btn primary" onClick={() => navigate('/module/ticketing')}>
                        🎫 Create Ticket
                    </button>
                    <button className="action-btn">
                        🚨 Convert to Incident
                    </button>
                </div>

            </div>
        );
    }

    // --- List View ---
    return (
        <div className="alerts-detection">
            <div className="alerts-header">
                <div className="section-title">Active Alerts</div>
                <div className="alert-stats">
                    <span className="stat-badge">Total: {alerts.length}</span>
                    <span className="stat-badge">Critical: {alerts.filter(a => a.severity === 'Critical').length}</span>
                </div>
            </div>

            <div className="results-table-container">
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Alert Name</th>
                            <th>Severity</th>
                            <th>Confidence</th>
                            <th>Triggered</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.map((alert) => (
                            <tr
                                key={alert.id}
                                className="alert-row"
                                onClick={() => onAlertSelect(alert)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td style={{ fontWeight: '500', color: '#fff' }}>{alert.name}</td>
                                <td>
                                    <span className={`status-badge status-${alert.severity.toLowerCase()}`}>
                                        {alert.severity}
                                    </span>
                                </td>
                                <td>
                                    <div className="confidence-cell">
                                        <div className="confidence-bar-bg">
                                            <div
                                                className="confidence-bar-fill"
                                                style={{
                                                    width: `${alert.confidence}%`,
                                                    backgroundColor: getConfidenceColor(alert.confidence)
                                                }}
                                            ></div>
                                        </div>
                                        <span style={{ fontSize: '11px', color: '#888' }}>{alert.confidence}%</span>
                                    </div>
                                </td>
                                <td style={{ color: '#888' }}>{alert.triggered}</td>
                                <td>
                                    <span className="status-badge status-active">{alert.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
