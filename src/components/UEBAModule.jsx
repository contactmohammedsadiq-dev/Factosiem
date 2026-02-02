import React, { useState } from 'react';
import './UEBAModule.css';
import UEBAOverview from './UEBAOverview';
import UserDetails from './UserDetails';
import EntityDetails from './EntityDetails';
import AIAssistantPanel from './AIAssistantPanel';

export default function UEBAModule({ selectedFeatureIdx }) {
    const [view, setView] = useState('overview'); // overview, user, entity
    const [selectedId, setSelectedId] = useState(null);
    const [isAIOpen, setIsAIOpen] = useState(false);

    const handleSelectUser = (id) => {
        setSelectedId(id);
        setView('user');
    };

    const handleSelectEntity = (id) => {
        setSelectedId(id);
        setView('entity');
    };

    const renderContent = () => {
        if (view === 'user') return <UserDetails id={selectedId} onBack={() => setView('overview')} />;
        if (view === 'entity') return <EntityDetails id={selectedId} onBack={() => setView('overview')} />;
        return <UEBAOverview onSelectUser={handleSelectUser} onSelectEntity={handleSelectEntity} />;
    };

    return (
        <div className="ueba-container">
            <div className={`ueba-main ${isAIOpen ? 'ai-collapsed' : ''}`}>
                <div className="ueba-header">
                    <div className="ueba-title">
                        <h2>UEBA & Resource Intelligence</h2>
                        <div className="ueba-subtitle">
                            {view === 'overview' && 'Behavioral Baselines & Risk Posture'}
                            {view === 'user' && `User Profile: ${selectedId}`}
                            {view === 'entity' && `Asset Profile: ${selectedId}`}
                        </div>
                    </div>
                    <div className="ueba-actions">
                        <button className={`ai-toggle-btn ${isAIOpen ? 'active' : ''}`} onClick={() => setIsAIOpen(!isAIOpen)}>
                            🤖 AI Analyst
                        </button>
                        <button className="action-btn">Export Report</button>
                    </div>
                </div>
                <div className="ueba-content">
                    {renderContent()}
                </div>
            </div>
            {isAIOpen && (
                <div className="ueba-ai-sidebar">
                    <AIAssistantPanel
                        context={view === 'overview' ? 'UEBA General' : `${view}: ${selectedId}`}
                        onClose={() => setIsAIOpen(false)}
                    />
                </div>
            )}
        </div>
    );
}
