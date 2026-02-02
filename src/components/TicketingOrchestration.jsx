import React, { useState } from 'react';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import './TicketingOrchestration.css';

export default function TicketingOrchestration() {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [filterSeverity, setFilterSeverity] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');

    // Mock ticket data - automatically generated from alerts
    const tickets = [
        {
            id: 'TKT-2025001',
            title: 'Suspicious PowerShell Execution',
            severity: 'Critical',
            status: 'Investigating',
            assignedTo: 'Sarah Johnson',
            mttr: '18 min',
            sla: 'Within SLA',
            created: '2 min ago',
            alertId: 'ALERT-2025001',
            sourceSystem: 'Windows Event Logs',
            confidence: 94,
            mitre: 'T1059.001 (PowerShell)',
            user: 'john.smith',
            asset: 'LAPTOP-23',
            assetCriticality: 'Production',
            timestamp: '2026-01-30 11:23:45',
            currentStage: 'evidence_collected'
        },
        {
            id: 'TKT-2025002',
            title: 'Unusual Data Exfiltration',
            severity: 'Critical',
            status: 'New',
            assignedTo: 'Unassigned',
            mttr: '5 min',
            sla: 'Within SLA',
            created: '5 min ago',
            alertId: 'ALERT-2025002',
            sourceSystem: 'Network Traffic Analysis',
            confidence: 88,
            mitre: 'T1048 (Exfiltration)',
            user: 'service_backup',
            asset: 'DB-PROD-01',
            assetCriticality: 'Crown Jewel',
            timestamp: '2026-01-30 11:20:12',
            currentStage: 'ticket_generated'
        },
        {
            id: 'TKT-2025003',
            title: 'Repeated Authentication Failure',
            severity: 'High',
            status: 'Assigned',
            assignedTo: 'Mike Rodriguez',
            mttr: '12 min',
            sla: 'Within SLA',
            created: '12 min ago',
            alertId: 'ALERT-2025003',
            sourceSystem: 'Active Directory',
            confidence: 82,
            mitre: 'T1110 (Brute Force)',
            user: 'admin',
            asset: 'AUTH-SRV-01',
            assetCriticality: 'IAM Infrastructure',
            timestamp: '2026-01-30 11:13:30',
            currentStage: 'analyst_assigned'
        },
        {
            id: 'TKT-2025004',
            title: 'Brute Force Opportunity',
            severity: 'Medium',
            status: 'Investigating',
            assignedTo: 'Auto-Bot',
            mttr: '45 min',
            sla: 'Near Breach',
            created: '45 min ago',
            alertId: 'ALERT-2025004',
            sourceSystem: 'Web Application Firewall',
            confidence: 65,
            mitre: 'T1110 (Brute Force)',
            user: 'external_user',
            asset: 'WEB-GATEWAY',
            assetCriticality: 'Dev-Test',
            timestamp: '2026-01-30 10:40:15',
            currentStage: 'correlation_performed'
        },
        {
            id: 'TKT-2025005',
            title: 'Policy Violation - USB Device',
            severity: 'Low',
            status: 'Resolved',
            assignedTo: 'Sarah Johnson',
            mttr: '2h 15min',
            sla: 'Within SLA',
            created: '3 hours ago',
            alertId: 'ALERT-2025005',
            sourceSystem: 'Endpoint Protection',
            confidence: 95,
            mitre: 'T1091 (Removable Media)',
            user: 'jane.doe',
            asset: 'LAPTOP-45',
            assetCriticality: 'Standard',
            timestamp: '2026-01-30 08:25:00',
            currentStage: 'closure'
        },
        {
            id: 'TKT-2025006',
            title: 'Lateral Movement Detected',
            severity: 'Critical',
            status: 'Investigating',
            assignedTo: 'Mike Rodriguez',
            mttr: '32 min',
            sla: 'Near Breach',
            created: '32 min ago',
            alertId: 'ALERT-2025006',
            sourceSystem: 'UEBA System',
            confidence: 91,
            mitre: 'T1021 (Remote Services)',
            user: 'admin_service',
            asset: 'DC-01',
            assetCriticality: 'Crown Jewel',
            timestamp: '2026-01-30 10:53:20',
            currentStage: 'response_action'
        },
        {
            id: 'TKT-2025007',
            title: 'Phishing Email Detected',
            severity: 'High',
            status: 'Assigned',
            assignedTo: 'Emily Chen',
            mttr: '8 min',
            sla: 'Within SLA',
            created: '8 min ago',
            alertId: 'ALERT-2025007',
            sourceSystem: 'Email Security Gateway',
            confidence: 87,
            mitre: 'T1566 (Phishing)',
            user: 'multiple_users',
            asset: 'MAIL-SERVER-01',
            assetCriticality: 'Production',
            timestamp: '2026-01-30 11:17:45',
            currentStage: 'investigation_started'
        },
        {
            id: 'TKT-2025008',
            title: 'Malware Download Attempt',
            severity: 'High',
            status: 'Investigating',
            assignedTo: 'Auto-Bot',
            mttr: '22 min',
            sla: 'Within SLA',
            created: '22 min ago',
            alertId: 'ALERT-2025008',
            sourceSystem: 'Web Proxy',
            confidence: 93,
            mitre: 'T1204 (User Execution)',
            user: 'contractor_01',
            asset: 'LAPTOP-67',
            assetCriticality: 'Standard',
            timestamp: '2026-01-30 11:03:10',
            currentStage: 'containment'
        }
    ];

    // Filter tickets
    const filteredTickets = tickets.filter(ticket => {
        const severityMatch = filterSeverity === 'All' || ticket.severity === filterSeverity;
        const statusMatch = filterStatus === 'All' || ticket.status === filterStatus;
        return severityMatch && statusMatch;
    });

    // Calculate metrics
    const openTickets = tickets.filter(t => t.status !== 'Resolved' && t.status !== 'Closed').length;
    const avgMTTR = '18 min';
    const slaCompliance = '96.8%';
    const autoActions = '78%';
    const criticalTickets = tickets.filter(t => t.severity === 'Critical').length;
    const slaBreach = tickets.filter(t => t.sla === 'Breached').length;

    return (
        <div className="ticketing-orchestration">
            {selectedTicket ? (
                <TicketDetail
                    ticket={selectedTicket}
                    onBack={() => setSelectedTicket(null)}
                />
            ) : (
                <>
                    {/* Header */}
                    <div className="ticketing-header">
                        <div>
                            <div className="ticketing-title">🎫 Ticketing & Case Orchestration</div>
                            <div className="ticketing-subtitle">
                                Automated alert-to-ticket lifecycle management
                            </div>
                        </div>
                        <div className="ticketing-actions">
                            <button className="action-btn">
                                📊 View Analytics
                            </button>
                            <button className="action-btn primary">
                                ➕ Create Manual Ticket
                            </button>
                        </div>
                    </div>

                    {/* Metrics Dashboard */}
                    <div className="ticketing-metrics">
                        <div className="metric-card">
                            <div className="metric-label">Open Tickets</div>
                            <div className="metric-value">{openTickets}</div>
                            <div className="metric-trend">↓ 5 from yesterday</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-label">Avg MTTR</div>
                            <div className="metric-value">{avgMTTR}</div>
                            <div className="metric-trend">↓ 3 min improvement</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-label">SLA Compliance</div>
                            <div className="metric-value">{slaCompliance}</div>
                            <div className="metric-trend">↑ 1.2% improvement</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-label">Automation Rate</div>
                            <div className="metric-value">{autoActions}</div>
                            <div className="metric-trend">↑ 4% increase</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-label">Critical Tickets</div>
                            <div className="metric-value" style={{ color: '#DC3545' }}>{criticalTickets}</div>
                            <div className="metric-trend negative">↑ 2 new</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-label">SLA Breaches</div>
                            <div className="metric-value" style={{ color: slaBreach > 0 ? '#DC3545' : '#28A745' }}>
                                {slaBreach}
                            </div>
                            <div className="metric-trend">→ No change</div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="filter-bar">
                        <div className="filter-group">
                            <span className="filter-label">Severity:</span>
                            {['All', 'Critical', 'High', 'Medium', 'Low'].map(severity => (
                                <button
                                    key={severity}
                                    className={`filter-button ${filterSeverity === severity ? 'active' : ''}`}
                                    onClick={() => setFilterSeverity(severity)}
                                >
                                    {severity}
                                </button>
                            ))}
                        </div>
                        <div className="filter-group">
                            <span className="filter-label">Status:</span>
                            {['All', 'New', 'Assigned', 'Investigating', 'Resolved'].map(status => (
                                <button
                                    key={status}
                                    className={`filter-button ${filterStatus === status ? 'active' : ''}`}
                                    onClick={() => setFilterStatus(status)}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Ticket List */}
                    <TicketList
                        tickets={filteredTickets}
                        onTicketSelect={setSelectedTicket}
                    />
                </>
            )}
        </div>
    );
}
