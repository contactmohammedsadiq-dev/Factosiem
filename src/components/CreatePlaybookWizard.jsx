import React, { useState } from 'react';
import './AutomatedResponse.css';
import PlaybookMetadataForm from './PlaybookMetadataForm';
import PlaybookTriggerBuilder from './PlaybookTriggerBuilder';
import PlaybookActionBuilder from './PlaybookActionBuilder';
import PlaybookGuardrails from './PlaybookGuardrails';
import PlaybookTestSimulate from './PlaybookTestSimulate';

export default function CreatePlaybookWizard({ onCancel, onSave }) {
    const [step, setStep] = useState(1);
    const [playbookData, setPlaybookData] = useState({
        meta: {
            name: '',
            description: '',
            category: 'Malware',
            riskLevel: 'Medium',
            automationMode: 'Semi-automatic',
            environment: 'Endpoint',
            owner: 'SOC Team',
            status: 'Draft'
        },
        triggers: [
            { source: 'Alert', condition: 'Severity == High', operator: 'AND' }
        ],
        actions: [],
        guardrails: {
            requireApproval: true,
            approverRole: 'SOC Manager',
            timeout: '4h',
            excludeCritical: true
        },
        simulation: {
            tested: false,
            blastRadius: 0
        }
    });

    const updateData = (section, field, value) => {
        setPlaybookData(prev => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    };

    const updateSection = (section, data) => {
        setPlaybookData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    const steps = [
        { id: 1, label: '1. Metadata' },
        { id: 2, label: '2. Triggers' },
        { id: 3, label: '3. Actions' },
        { id: 4, label: '4. Guardrails' },
        { id: 5, label: '5. Simulate' }
    ];

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <PlaybookMetadataForm data={playbookData.meta} onChange={(f, v) => updateData('meta', f, v)} />;
            case 2:
                // Placeholder for now, will implement next
                return <PlaybookTriggerBuilder data={playbookData.triggers} onChange={(d) => updateSection('triggers', d)} />;
            case 3:
                return <PlaybookActionBuilder data={playbookData.actions} onChange={(d) => updateSection('actions', d)} />;
            case 4:
                return <PlaybookGuardrails data={playbookData.guardrails} onChange={(f, v) => updateData('guardrails', f, v)} />;
            case 5:
                return <PlaybookTestSimulate data={playbookData} />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    return (
        <div className="response-wizard-container">
            {/* Wizard Header */}
            <div className="wizard-header">
                <div className="wizard-title">
                    <h3>Create Automated Response Playbook</h3>
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

            {/* Wizard Footer */}
            <div className="wizard-footer">
                <div className="footer-left">
                    {step > 1 && (
                        <button className="action-btn" onClick={() => setStep(step - 1)}>Back</button>
                    )}
                </div>
                <div className="footer-right">
                    {step < 5 ? (
                        <button className="action-btn primary" onClick={() => setStep(step + 1)}>Next Step</button>
                    ) : (
                        <button className="action-btn primary" onClick={onSave} disabled={!playbookData.simulation.tested}>Create Playbook</button>
                    )}
                </div>
            </div>
        </div>
    );
}
