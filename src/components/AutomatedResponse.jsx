import React, { useState } from 'react';
import './AutomatedResponse.css';
import ResponsePlaybooks from './ResponsePlaybooks';
import ResponseRuleBuilder from './ResponseRuleBuilder';
import ResponseSimulation from './ResponseSimulation';
import ResponseAnalytics from './ResponseAnalytics';
import CreatePlaybookWizard from './CreatePlaybookWizard';

export default function AutomatedResponse({ selectedFeatureIdx }) {
    const [isCreating, setIsCreating] = useState(false);

    const handleSavePlaybook = () => {
        setIsCreating(false);
        // In a real app, this would refresh the list
    };

    if (isCreating) {
        return <CreatePlaybookWizard onCancel={() => setIsCreating(false)} onSave={handleSavePlaybook} />;
    }

    // Use local state for internal navigation if feature index is not enough
    // or mapped from feature index.
    const renderContent = () => {
        switch (selectedFeatureIdx) {
            case 0: // Playbooks
                return <ResponsePlaybooks />;
            case 1: // Rule Builder
                return <ResponseRuleBuilder />;
            case 3: // Simulation
                return <ResponseSimulation />;
            case 5: // Analytics
                return <ResponseAnalytics />;
            default:
                // Default to Playbooks if index doesn't match specific component
                // or show generic placeholder
                if ([2, 4, 6].includes(selectedFeatureIdx)) {
                    // 2=Conditional, 4=Approval, 6=Feedback
                    return (
                        <div className="placeholder-view" style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                            <h3>Feature Under Development</h3>
                            <p>Advanced automation feature is coming soon.</p>
                        </div>
                    );
                }
                return <ResponsePlaybooks />;
        }
    };

    const titles = [
        'Response Playbooks',
        'Response Rule Builder',
        'Conditional Automation',
        'Response Simulation',
        'Approval & Guardrails',
        'Response Analytics',
        'Feedback Loop'
    ];

    return (
        <div className="response-container">
            <div className="ar-header">
                <div className="ar-title">
                    <h2>{titles[selectedFeatureIdx] || 'Automated Response'}</h2>
                    <div className="ar-subtitle">Intelligent SOAR & Containment</div>
                </div>
                <div className="ar-actions">
                    {selectedFeatureIdx === 0 && <button className="action-btn primary" onClick={() => setIsCreating(true)}>+ Create Playbook</button>}
                    {selectedFeatureIdx === 1 && <button className="action-btn primary">Save Logic</button>}
                </div>
            </div>
            <div className="ar-content">
                {renderContent()}
            </div>
        </div>
    );
}
