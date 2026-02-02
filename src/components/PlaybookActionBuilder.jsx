import React from 'react';
import CustomSelect from './CustomSelect';

export default function PlaybookActionBuilder({ data, onChange }) {
    const addAction = () => {
        onChange([...data, { type: 'Notify SOC', target: 'Tier 1 Analyst', id: Date.now() }]);
    };

    const removeAction = (id) => {
        onChange(data.filter(a => a.id !== id));
    };

    const actionTypes = [
        'Disable User', 'Reset Credentials', 'Isolate Endpoint', 'Kill Process',
        'Block IP', 'Block Domain', 'Sinkhole DNS', 'Notify SOC', 'Notify Slack',
        'Create Incident', 'Add Evidence'
    ];

    return (
        <div className="ti-page-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="ti-section-label">Response Steps (Chained)</div>

            {data.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', background: '#161616', borderRadius: '8px', border: '1px dashed #333', color: '#666' }}>
                    No actions defined yet. Start by adding a response step.
                </div>
            )}

            {data.map((action, idx) => (
                <div key={action.id} className={`action-step-card ${['Isolate Endpoint', 'Block IP', 'Disable User'].includes(action.type) ? 'destructive' : ''}`}>
                    <div className="action-step-header">
                        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Step {idx + 1}: {action.type}</div>
                        <button className="action-btn small" onClick={() => removeAction(action.id)} style={{ color: '#ff6b6b' }}>Remove</button>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#888', marginBottom: '4px' }}>Action Type</label>
                            <CustomSelect
                                options={actionTypes}
                                value={action.type}
                                onChange={(e) => {
                                    const newData = [...data];
                                    newData[idx].type = e.target.value;
                                    onChange(newData);
                                }}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', fontSize: '11px', color: '#888', marginBottom: '4px' }}>Target Entity</label>
                            <input
                                type="text"
                                className="meta-input"
                                placeholder="e.g. {{alert.src_ip}} or 'Domain Admins'"
                                value={action.target || ''}
                                onChange={(e) => {
                                    const newData = [...data];
                                    newData[idx].target = e.target.value;
                                    onChange(newData);
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', marginTop: '16px', fontSize: '11px' }}>
                        <div style={{ color: action.type.includes('Isolate') ? '#ff6b6b' : '#2EB67D' }}>
                            Impact: {action.type.includes('Isolate') ? 'High (Device Offline)' : 'Low (Audit Log)'}
                        </div>
                        <div style={{ color: '#888' }}>
                            Blast Radius: 1 Entity
                        </div>
                        <div style={{ color: '#00F5FF' }}>
                            Reversible: Yes
                        </div>
                    </div>
                </div>
            ))}

            <button className="action-btn small" onClick={addAction} style={{ marginTop: '12px' }}>
                + Add Response Step
            </button>
        </div>
    );
}
