import React from 'react';

export default function IncidentsBoard({ incidents, onIncidentSelect }) {
    const columns = [
        { id: 'New', title: 'New Incidents' },
        { id: 'Investigating', title: 'Investigating' },
        { id: 'Containment', title: 'Containment' },
        { id: 'Resolved', title: 'Resolved' }
    ];

    return (
        <div className="kanban-board">
            {columns.map(col => {
                const colIncidents = incidents.filter(i => i.status === col.id);

                return (
                    <div key={col.id} className="kanban-column">
                        <div className="column-header">
                            <span className="column-title">{col.title}</span>
                            <span className="column-count">{colIncidents.length}</span>
                        </div>
                        <div className="column-content">
                            {colIncidents.map(incident => (
                                <div
                                    key={incident.id}
                                    className="incident-card"
                                    onClick={() => onIncidentSelect(incident)}
                                >
                                    <div className="card-header">
                                        <span className="card-id">{incident.id}</span>
                                        <span className={`status-badge status-${incident.severity.toLowerCase()}`}>
                                            {incident.severity}
                                        </span>
                                    </div>
                                    <div className="card-title">{incident.title}</div>
                                    <div className="card-meta">
                                        <span className="card-assignee">
                                            <div className="avatar-circle">{incident.owner.substring(0, 2).toUpperCase()}</div>
                                            {incident.owner}
                                        </span>
                                        <span style={{ color: '#666' }}>{incident.timeOpen}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
