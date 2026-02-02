import React from 'react';
import CustomSelect from './CustomSelect';

export default function PlaybookMetadataForm({ data, onChange }) {
    return (
        <div className="ti-page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="ti-section-label">Playbook Details</div>

            <div className="form-group">
                <label>Playbook Name</label>
                <input
                    type="text"
                    className="meta-input"
                    value={data.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    placeholder="e.g. Ransomware Containment Protocol Alpha"
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    className="meta-input"
                    rows={3}
                    value={data.description}
                    onChange={(e) => onChange('description', e.target.value)}
                    placeholder="Describe what threat this playbook handles..."
                />
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Threat Category</label>
                    <CustomSelect
                        options={['Credential Abuse', 'Malware', 'Ransomware', 'DDoS', 'Insider Threat', 'Cloud Abuse']}
                        value={data.category}
                        onChange={(e) => onChange('category', e.target.value)}
                    />
                </div>
                <div className="form-group half">
                    <label>Risk Level</label>
                    <CustomSelect
                        options={['Low', 'Medium', 'High', 'Critical']}
                        value={data.riskLevel}
                        onChange={(e) => onChange('riskLevel', e.target.value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Automation Mode</label>
                    <CustomSelect
                        options={['Manual (Recommend Only)', 'Semi-automatic (Approval)', 'Fully Automatic']}
                        value={data.automationMode}
                        onChange={(e) => onChange('automationMode', e.target.value)}
                    />
                </div>
                <div className="form-group half">
                    <label>Environment Scope</label>
                    <CustomSelect
                        options={['Endpoint', 'Identity', 'Network', 'Cloud', 'SaaS']}
                        value={data.environment}
                        onChange={(e) => onChange('environment', e.target.value)}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Owner / Team</label>
                    <input
                        type="text"
                        className="meta-input"
                        value={data.owner}
                        onChange={(e) => onChange('owner', e.target.value)}
                    />
                </div>
                <div className="form-group half">
                    <label>Status</label>
                    <div style={{ padding: '10px', background: '#1e1e1e', color: '#888', borderRadius: '4px', border: '1px solid #333', fontSize: '13px' }}>
                        Draft (Initial Version)
                    </div>
                </div>
            </div>
        </div>
    );
}
