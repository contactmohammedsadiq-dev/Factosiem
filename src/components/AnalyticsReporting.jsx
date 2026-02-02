import React, { useState } from 'react';
import './AnalyticsReporting.css';
import SOCDashboard from './dashboards/SOCDashboard';
import ExecutiveDashboard from './dashboards/ExecutiveDashboard';
import CreateDashboardWizard from './CreateDashboardWizard';
import DrillDownExplorer from './DrillDownExplorer';
import AIAssistantPanel from './AIAssistantPanel';

export default function AnalyticsReporting() {
    const [activeTab, setActiveTab] = useState('soc-ops');
    const [isCreating, setIsCreating] = useState(false);
    const [drillDownFilter, setDrillDownFilter] = useState(null);
    const [isAIOpen, setIsAIOpen] = useState(false);

    const tabs = [
        { id: 'soc-ops', name: 'SOC Operations', icon: '⚡' },
        { id: 'executive', name: 'Executive Risk', icon: '🦁' },
        { id: 'detection', name: 'Detections', icon: '🎯' },
        { id: 'cloud', name: 'Cloud Security', icon: '☁️' }
    ];

    const handleDrillDown = (filter) => {
        setDrillDownFilter(filter);
    };

    if (isCreating) {
        return <CreateDashboardWizard onCancel={() => setIsCreating(false)} onSave={() => setIsCreating(false)} />;
    }

    return (
        <div className="analytics-container">
            <div className="analytics-sidebar">
                <div className="sidebar-group">
                    <div className="group-label">Standard Viewsets</div>
                    {tabs.map(tab => (
                        <div
                            key={tab.id}
                            className={`sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setDrillDownFilter(null);
                            }}
                        >
                            <span className="item-icon">{tab.icon}</span>
                            {tab.name}
                        </div>
                    ))}
                </div>

                <div className="sidebar-group">
                    <div className="group-label">AI Capabilities</div>
                    <div
                        className={`sidebar-item ${isAIOpen ? 'active' : ''}`}
                        onClick={() => setIsAIOpen(!isAIOpen)}
                    >
                        <span className="item-icon">🤖</span>
                        Smart Co-Pilot
                    </div>
                </div>

                <div className="sidebar-group">
                    <div className="group-label">Custom Dashboards</div>
                    <div className="sidebar-item empty">None Created</div>
                    <button className="create-dash-btn" onClick={() => setIsCreating(true)}>
                        <span style={{ fontSize: '16px' }}>+</span> New Dashboard
                    </button>
                </div>
            </div>

            <div className="analytics-main">
                {drillDownFilter ? (
                    <div className="dash-scroll-area">
                        <DrillDownExplorer
                            filter={drillDownFilter}
                            onBack={() => setDrillDownFilter(null)}
                        />
                    </div>
                ) : (
                    <>
                        <div className="dash-header">
                            <div className="dash-info">
                                <h2>{tabs.find(t => t.id === activeTab)?.name}</h2>
                                <p>Real-time security posture and operational efficiency.</p>
                            </div>
                            <div className="dash-controls">
                                <div className="time-select">Last 24 Hours</div>
                                <button className="action-btn">Export</button>
                                <button className="action-btn primary">Share</button>
                            </div>
                        </div>

                        <div className="dash-scroll-area">
                            {activeTab === 'soc-ops' && <SOCDashboard onDrillDown={handleDrillDown} />}
                            {activeTab === 'executive' && <ExecutiveDashboard onDrillDown={handleDrillDown} />}
                            {['detection', 'cloud'].includes(activeTab) && (
                                <div className="placeholder-view">
                                    <h3>{tabs.find(t => t.id === activeTab)?.name} View Under Construction</h3>
                                    <p>Advanced metrics for this persona are being provisioned.</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {isAIOpen && (
                <AIAssistantPanel
                    context={drillDownFilter ? 'Drill-Down Inspection' : tabs.find(t => t.id === activeTab)?.name}
                    onClose={() => setIsAIOpen(false)}
                />
            )}
        </div>
    );
}
