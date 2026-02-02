import React from 'react';
import './TicketingOrchestration.css';

export default function TicketLifecycleTimeline({ currentStage, stages }) {
    const defaultStages = [
        { id: 1, name: 'Alert Created', key: 'alert_created' },
        { id: 2, name: 'Ticket Generated', key: 'ticket_generated' },
        { id: 3, name: 'Analyst Assigned', key: 'analyst_assigned' },
        { id: 4, name: 'Investigation Started', key: 'investigation_started' },
        { id: 5, name: 'Evidence Collected', key: 'evidence_collected' },
        { id: 6, name: 'Correlation Performed', key: 'correlation_performed' },
        { id: 7, name: 'Response Action Taken', key: 'response_action' },
        { id: 8, name: 'Containment/Mitigation', key: 'containment' },
        { id: 9, name: 'Validation', key: 'validation' },
        { id: 10, name: 'Closure & Post-Incident', key: 'closure' }
    ];

    const stageData = stages || defaultStages;
    const currentStageIndex = stageData.findIndex(s => s.key === currentStage) || 1;

    return (
        <div className="lifecycle-timeline">
            <div className="timeline-title">🔄 Alert Lifecycle Progress</div>
            <div className="timeline-track">
                <div className="timeline-line"></div>
                {stageData.map((stage, index) => {
                    let stageClass = '';
                    if (index < currentStageIndex) {
                        stageClass = 'completed';
                    } else if (index === currentStageIndex) {
                        stageClass = 'active';
                    }

                    return (
                        <div key={stage.id} className={`timeline-stage ${stageClass}`}>
                            <div className="stage-dot">
                                {stageClass === 'completed' ? '✓' : stage.id}
                            </div>
                            <div className="stage-label">{stage.name}</div>
                            {stage.time && <div className="stage-time">{stage.time}</div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
