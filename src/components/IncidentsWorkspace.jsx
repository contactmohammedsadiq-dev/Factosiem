import React from 'react';
import IncidentsBoard from './IncidentsBoard';
import IncidentDetail from './IncidentDetail';
import './IncidentsWorkspace.css';

export default function IncidentsWorkspace({ selectedIncident, onIncidentSelect }) {
    // Mock Data
    const incidents = [
        {
            id: 'INC-2401',
            title: 'Potential Ransomware Activity',
            status: 'New',
            severity: 'Critical',
            owner: 'Unassigned',
            timeOpen: '10m',
            type: 'Malware'
        },
        {
            id: 'INC-2398',
            title: 'Data Exfiltration via DNS',
            status: 'Investigating',
            severity: 'Critical',
            owner: 'Sarah J.',
            timeOpen: '2h',
            type: 'Data Leak'
        },
        {
            id: 'INC-2399',
            title: 'Suspicious Admin Login',
            status: 'Investigating',
            severity: 'High',
            owner: 'Mike R.',
            timeOpen: '1h 30m',
            type: 'Unauthorized Access'
        },
        {
            id: 'INC-2395',
            title: 'Phishing Campaign Detected',
            status: 'Containment',
            severity: 'Medium',
            owner: 'Auto-Bot',
            timeOpen: '4h',
            type: 'Phishing'
        },
        {
            id: 'INC-2390',
            title: 'Policy Violation - USB',
            status: 'Resolved',
            severity: 'Low',
            owner: 'Sarah J.',
            timeOpen: '1d',
            type: 'Policy'
        }
    ];

    /* If an incident is passed from parent (e.g. state shared with RightPanel), show Detail view */
    /* We actually need to find the full incident object if only ID is passed, but here we assume object or handle lookup */

    // Logic: selectedIncident might be null (show board) or an object (show detail)

    return (
        <div className="incidents-workspace">
            {selectedIncident ? (
                <IncidentDetail
                    incident={selectedIncident}
                    onBack={() => onIncidentSelect(null)}
                />
            ) : (
                <IncidentsBoard
                    incidents={incidents}
                    onIncidentSelect={onIncidentSelect}
                />
            )}
        </div>
    );
}
