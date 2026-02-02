import React, { useState } from 'react';

export default function RuleBuilder({ controlled, initialMode, initialData, onChange }) {
    const [internalMode, setInternalMode] = useState('visual');

    // Use props if controlled, otherwise local state
    const mode = controlled && initialMode ? initialMode : internalMode;

    const handleModeChange = (newMode) => {
        if (controlled && onChange) {
            onChange({ mode: newMode });
        } else {
            setInternalMode(newMode);
        }
    };

    return (
        <div className="rule-builder-container">
            <div className="rb-tabs">
                <div
                    className={`rb-tab ${mode === 'visual' ? 'active' : ''}`}
                    onClick={() => handleModeChange('visual')}
                >
                    Visual Builder
                </div>
                <div
                    className={`rb-tab ${mode === 'nl' ? 'active' : ''}`}
                    onClick={() => handleModeChange('nl')}
                >
                    AI Natural Language
                </div>
                <div
                    className={`rb-tab ${mode === 'expert' ? 'active' : ''}`}
                    onClick={() => handleModeChange('expert')}
                >
                    Expert Query (SPL)
                </div>
            </div>

            <div className="rb-workspace">
                {mode === 'visual' && (
                    <div>
                        <div className="visual-canvas">
                            <div className="logic-flow">
                                <div className="logic-block">
                                    <strong>Event Type</strong>
                                    <div style={{ fontSize: '11px', color: '#aaa' }}>Authentication</div>
                                </div>
                                <div className="logic-connector"></div>
                                <div className="logic-block">
                                    <strong>Filter</strong>
                                    <div style={{ fontSize: '11px', color: '#aaa' }}>Result = Fail</div>
                                </div>
                                <div className="logic-connector"></div>
                                <div className="logic-block">
                                    <strong>Threshold</strong>
                                    <div style={{ fontSize: '11px', color: '#aaa' }}>Count {'>'} 5</div>
                                </div>
                                <div className="logic-connector"></div>
                                <div className="logic-block" style={{ borderColor: '#dc3545' }}>
                                    <strong>Action</strong>
                                    <div style={{ fontSize: '11px', color: '#aaa' }}>Trigger Alert (High)</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="action-btn">Use Template</button>
                            <button className="action-btn">Validate Logic</button>
                        </div>
                    </div>
                )}

                {mode === 'nl' && (
                    <div className="nl-input-container">
                        <h3 style={{ marginBottom: '10px', color: '#ccc' }}>Describe your detection logic</h3>
                        <textarea
                            className="ai-textarea"
                            placeholder="e.g., Detect users who failed login more than 5 times and then succeeded within 10 minutes from the same IP..."
                        ></textarea>
                        <button className="action-btn primary" style={{ marginTop: '16px' }}>Generate Rule</button>

                        <div className="generated-preview">
                            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>AI GENERATED PREVIEW</div>
                            <code style={{ color: '#00ff9c', fontSize: '13px' }}>
                                index=auth action=failure | stats count by user, src_ip | where count {'>'} 5 ...
                            </code>
                        </div>
                    </div>
                )}

                {mode === 'expert' && (
                    <div className="expert-editor">
                        <textarea
                            className="ai-textarea"
                            style={{ height: '300px', fontFamily: 'monospace' }}
                            defaultValue="index=main sourcetype=security_logs 
| stats count by src_ip, user
| where count > 100
| eval risk_score = if(count > 500, 'Critical', 'High')"
                        ></textarea>
                    </div>
                )}
            </div>
        </div>
    );
}
