import React, { useState } from 'react';
import './DetectionEngineering.css';
import RuleMetadataForm from './RuleMetadataForm';
import RuleBuilder from './RuleBuilder';
import RuleTestingPanel from './RuleTestingPanel';
import CustomSelect from './CustomSelect';

export default function CreateRuleWizard({ onCancel, onSave }) {
    const [step, setStep] = useState(1);
    const [ruleData, setRuleData] = useState({
        meta: {
            name: '',
            description: '',
            severity: 'Medium',
            confidence: 50,
            mitreTactic: '',
            mitreTechnique: '',
            dataSource: '',
            status: 'Draft'
        },
        logic: {
            mode: 'visual',
            query: '',
            visualBlocks: []
        },
        testing: {
            dryRunResult: null,
            fpRate: 0
        }
    });

    const updateMeta = (field, value) => {
        setRuleData(prev => ({
            ...prev,
            meta: { ...prev.meta, [field]: value }
        }));
    };

    const updateLogic = (newLogicState) => {
        setRuleData(prev => ({
            ...prev,
            logic: { ...prev.logic, ...newLogicState }
        }));
    };

    const steps = [
        { id: 1, label: '1. Define Scope' },
        { id: 2, label: '2. Build Logic' },
        { id: 3, label: '3. Test & Validate' },
        { id: 4, label: '4. Governance' }
    ];

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <RuleMetadataForm data={ruleData.meta} onChange={updateMeta} />;
            case 2:
                return (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '16px', color: '#ccc' }}>
                            Define the detection logic using one of the available modes.
                        </div>
                        <RuleBuilder
                            controlled={true}
                            initialMode={ruleData.logic.mode}
                            initialData={ruleData.logic}
                            onChange={updateLogic}
                        />
                    </div>
                );
            case 3:
                return <RuleTestingPanel ruleData={ruleData} />;
            case 4:
                return (
                    <div className="governance-review">
                        <h3>Governance Review</h3>
                        <div className="review-section">
                            <div className="review-item">
                                <label>Rule Owner</label>
                                <div className="val">Analyst (You)</div>
                            </div>
                            <div className="review-item">
                                <label>Change Justification</label>
                                <textarea className="ai-textarea" placeholder="Why is this rule being created?" rows={3}></textarea>
                            </div>
                            <div className="review-item">
                                <label>Response Action</label>
                                <CustomSelect
                                    options={['Create Alert (Default)', 'Create Incident', 'Trigger SOAR Playbook']}
                                    value="Create Alert (Default)"
                                    onChange={() => { }}
                                    placeholder="Select Response..."
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(46, 182, 125, 0.1)', border: '1px solid #2EB67D', borderRadius: '4px' }}>
                            <strong style={{ color: '#2EB67D' }}>Ready to Deploy</strong>
                            <p style={{ fontSize: '12px', color: '#ccc', margin: '4px 0 0' }}>
                                This rule will be created in <strong>Draft</strong> state. It requires peer review before enabling in Production.
                            </p>
                        </div>
                    </div>
                );
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <div className="rule-wizard-container">
            {/* Wizard Header */}
            <div className="wizard-header">
                <div className="wizard-title">
                    <h3>Create New Detection Rule</h3>
                    <div className="wizard-steps-indicator">
                        {steps.map(s => (
                            <div key={s.id} className={`step-badge ${step === s.id ? 'active' : ''} ${step > s.id ? 'completed' : ''}`}>
                                {s.label}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wizard-actions">
                    <button className="action-btn" onClick={onCancel}>Cancel</button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="wizard-content">
                {renderStepContent()}
            </div>

            {/* Wizard Footer (Navigation) */}
            <div className="wizard-footer">
                <div className="footer-left">
                    {step > 1 && (
                        <button className="action-btn" onClick={() => setStep(step - 1)}>Back</button>
                    )}
                </div>
                <div className="footer-right">
                    {step < 4 ? (
                        <button className="action-btn primary" onClick={() => setStep(step + 1)}>Next Step</button>
                    ) : (
                        <button className="action-btn primary" onClick={onSave}>Create Rule</button>
                    )}
                </div>
            </div>
        </div>
    );
}
