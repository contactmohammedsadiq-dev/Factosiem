import React from 'react';
import CustomSelect from './CustomSelect';

export default function RuleMetadataForm({ data, onChange }) {
    const severityOptions = ['Low', 'Medium', 'High', 'Critical'];

    const tacticOptions = [
        'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation',
        'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement',
        'Collection', 'Exfiltration', 'Command and Control'
    ];

    const dataSourceOptions = [
        'Windows Event Logs', 'Sysmon', 'AWS CloudTrail',
        'Network Traffic', 'EDR Process Logs'
    ];

    return (
        <div className="rule-metadata-form">
            <div className="form-group">
                <label>Rule Name</label>
                <input
                    type="text"
                    className="meta-input"
                    value={data.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    placeholder="e.g. Suspicious PowerPoint Process"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    className="meta-input"
                    rows={3}
                    value={data.description}
                    onChange={(e) => onChange('description', e.target.value)}
                    placeholder="Describe what this rule detects and why it acts as an indicator of compromise..."
                />
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Severity</label>
                    <CustomSelect
                        value={data.severity}
                        onChange={(e) => onChange('severity', e.target.value)}
                        options={severityOptions}
                        placeholder="Select Severity"
                    />
                </div>
                <div className="form-group half">
                    <label>Confidence Score (%)</label>
                    <input
                        type="number"
                        className="meta-input"
                        value={data.confidence}
                        onChange={(e) => onChange('confidence', e.target.value)}
                    />
                </div>
            </div>

            <div className="form-section-title">MITRE ATT&CK Mapping</div>
            <div className="form-row">
                <div className="form-group half">
                    <label>Tactic</label>
                    <CustomSelect
                        value={data.mitreTactic}
                        onChange={(e) => onChange('mitreTactic', e.target.value)}
                        options={tacticOptions}
                        placeholder="Select Tactic..."
                    />
                </div>
                <div className="form-group half">
                    <label>Technique</label>
                    <input
                        type="text"
                        className="meta-input"
                        value={data.mitreTechnique}
                        onChange={(e) => onChange('mitreTechnique', e.target.value)}
                        placeholder="e.g. T1059.001 (PowerShell)"
                    />
                </div>
            </div>

            <div className="form-section-title">Data Scope</div>
            <div className="form-group">
                <label>Data Source</label>
                <CustomSelect
                    value={data.dataSource}
                    onChange={(e) => onChange('dataSource', e.target.value)}
                    options={dataSourceOptions}
                    placeholder="Select Data Source..."
                />
            </div>

        </div>
    );
}
