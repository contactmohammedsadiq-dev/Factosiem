import React from 'react';
import './TicketingOrchestration.css';

export default function AnalystActivityLog({ activities }) {
    const defaultActivities = [
        {
            id: 1,
            icon: '🎫',
            action: 'Ticket Created',
            details: 'Automatically generated from Alert #2025001',
            analyst: 'System',
            timestamp: '2 min ago',
            automated: true
        },
        {
            id: 2,
            icon: '👤',
            action: 'Analyst Assigned',
            details: 'Ticket assigned to Sarah Johnson',
            analyst: 'Auto-Assignment Engine',
            timestamp: '1 min ago',
            automated: true
        },
        {
            id: 3,
            icon: '🔍',
            action: 'Investigation Started',
            details: 'Searched logs for user: john.smith',
            analyst: 'Sarah Johnson',
            timestamp: '45 sec ago',
            automated: false
        },
        {
            id: 4,
            icon: '📊',
            action: 'Query Executed',
            details: 'SPL: index=windows sourcetype=WinEventLog user=john.smith | stats count by host',
            analyst: 'Sarah Johnson',
            timestamp: '30 sec ago',
            automated: false
        },
        {
            id: 5,
            icon: '📎',
            action: 'Evidence Collected',
            details: 'Added 3 log entries as evidence',
            analyst: 'Sarah Johnson',
            timestamp: '15 sec ago',
            automated: false
        }
    ];

    const activityData = activities || defaultActivities;

    return (
        <div className="activity-log">
            <div className="activity-log-title">📋 Analyst Activity Timeline</div>
            <div className="activity-timeline">
                {activityData.map((activity) => (
                    <div key={activity.id} className="activity-item">
                        <div className="activity-icon">{activity.icon}</div>
                        <div className="activity-content">
                            <div className="activity-header">
                                <div className="activity-action">
                                    {activity.action}
                                    {activity.automated && (
                                        <span style={{
                                            marginLeft: '8px',
                                            fontSize: '10px',
                                            background: 'rgba(46, 182, 125, 0.15)',
                                            color: '#2EB67D',
                                            padding: '2px 6px',
                                            borderRadius: '3px',
                                            fontWeight: '600'
                                        }}>
                                            AUTO
                                        </span>
                                    )}
                                </div>
                                <div className="activity-timestamp">{activity.timestamp}</div>
                            </div>
                            <div className="activity-details">{activity.details}</div>
                            <div className="activity-analyst">By: {activity.analyst}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
