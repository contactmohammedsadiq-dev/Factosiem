import React from 'react';
import CustomSelect from './CustomSelect';

export default function PlaybookTriggerBuilder({ data, onChange }) {
    const addTrigger = () => {
        onChange([...data, { source: 'Alert', condition: '', operator: 'AND' }]);
    };

    const updateTrigger = (index, field, value) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        onChange(newData);
    };

    const removeTrigger = (index) => {
        const newData = data.filter((_, i) => i !== index);
        onChange(newData);
    };

    return (
        <div className="ti-page-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="ti-section-label">Activation Conditions</div>

            {data.map((trigger, idx) => (
                <div key={idx} className="trigger-group">
                    {idx > 0 && <div className="trigger-connector">{trigger.operator}</div>}
                    <div className="trigger-logic-row">
                        <div style={{ width: '180px' }}>
                            <CustomSelect
                                options={['Alert', 'Incident', 'Detection Rule', 'Behavioral Anomaly', 'Threat Intel Match', 'Manual']}
                                value={trigger.source}
                                onChange={(e) => updateTrigger(idx, 'source', e.target.value)}
                            />
                        </div>
                        <input
                            type="text"
                            className="meta-input"
                            style={{ flex: 1 }}
                            value={trigger.condition}
                            onChange={(e) => updateTrigger(idx, 'condition', e.target.value)}
                            placeholder="e.g. Severity == 'High' AND Category == 'Ransomware'"
                        />
                        <button className="action-btn small" onClick={() => removeTrigger(idx)} style={{ color: '#ff6b6b' }}>✕</button>
                    </div>
                </div>
            ))}

            <button className="action-btn small" style={{ marginTop: '12px' }} onClick={addTrigger}>
                + Add Nested Condition
            </button>

            <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(0, 245, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(0, 245, 255, 0.2)' }}>
                <div style={{ color: '#00F5FF', fontWeight: 'bold', fontSize: '13px', marginBottom: '8px' }}>Historical Preview</div>
                <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>
                    Based on your logic, this playbook would have triggered <strong>14 times</strong> in the last 30 days.
                </p>
            </div>
        </div>
    );
}
