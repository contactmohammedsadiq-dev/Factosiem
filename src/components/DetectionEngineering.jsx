import React, { useState } from 'react';
import './DetectionEngineering.css';
import RuleBuilder from './RuleBuilder';
import AIDetectionStudio from './AIDetectionStudio';
import MitreCoverage from './MitreCoverage';
import CreateRuleWizard from './CreateRuleWizard';

export default function DetectionEngineering({ selectedFeatureIdx }) {
    const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard' | 'create_rule'

    const handleCreateRule = () => {
        setViewMode('create_rule');
    };

    const cancelCreateRule = () => {
        setViewMode('dashboard');
    };

    // Map feature index to component
    const renderContent = () => {
        switch (selectedFeatureIdx) {
            case 0: // Rule Builder
                // In dashboard mode, show readonly or summary view? 
                // For now, let's keep the standalone builder as the "Playground", 
                // but the "Create New" action triggers the Wizard.
                return <RuleBuilder />;
            case 2: // AI Detection Studio
                return <AIDetectionStudio />;
            case 4: // Detection Coverage
                return <MitreCoverage />;
            default:
                return (
                    <div className="placeholder-view" style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                        <h3>Feature Under Construction</h3>
                        <p>This module is currently being built.</p>
                    </div>
                );
        }
    };

    const titles = [
        'Rule Builder', 'Detection Library', 'AI Detection Studio', 'Testing & Simulation',
        'Detection Coverage', 'Performance & Quality', 'False Positive Lab',
        'Deployment', 'Version Control', 'Feedback Loop'
    ];

    if (viewMode === 'create_rule') {
        return <CreateRuleWizard onCancel={cancelCreateRule} onSave={cancelCreateRule} />;
    }

    return (
        <div className="detection-engineering-container">
            <div className="de-header">
                <div className="de-title">
                    <h2>{titles[selectedFeatureIdx]}</h2>
                    <div className="de-subtitle">Detection Engineering Workspace</div>
                </div>
                <div className="de-actions">
                    <button className="action-btn primary" onClick={handleCreateRule}>
                        + Create New Rule
                    </button>
                </div>
            </div>
            <div className="de-content">
                {renderContent()}
            </div>
        </div>
    );
}
