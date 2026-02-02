import React from 'react';
import './TicketingOrchestration.css';

export default function TicketList({ tickets, onTicketSelect }) {
    const getSLAClass = (sla) => {
        if (sla === 'Within SLA') return 'green';
        if (sla === 'Near Breach') return 'yellow';
        return 'red';
    };

    return (
        <div className="ticket-table-container">
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Ticket ID</th>
                        <th>Title</th>
                        <th>Severity</th>
                        <th>Status</th>
                        <th>Assigned To</th>
                        <th>MTTR</th>
                        <th>SLA Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id} onClick={() => onTicketSelect(ticket)}>
                            <td>
                                <span className="ticket-id">{ticket.id}</span>
                            </td>
                            <td style={{ fontWeight: '500', color: '#1A1A1A' }}>
                                {ticket.title}
                            </td>
                            <td>
                                <span className={`severity-badge ${ticket.severity.toLowerCase()}`}>
                                    {ticket.severity}
                                </span>
                            </td>
                            <td>
                                <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                                    {ticket.status}
                                </span>
                            </td>
                            <td style={{ color: '#495057' }}>{ticket.assignedTo}</td>
                            <td style={{ color: '#495057', fontFamily: 'Monaco, monospace', fontSize: '12px' }}>
                                {ticket.mttr}
                            </td>
                            <td>
                                <div className={`sla-indicator ${getSLAClass(ticket.sla)}`}>
                                    <div className="sla-dot"></div>
                                    <span>{ticket.sla}</span>
                                </div>
                            </td>
                            <td style={{ color: '#6C757D', fontSize: '12px' }}>{ticket.created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
