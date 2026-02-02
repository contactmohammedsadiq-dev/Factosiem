import React, { useState } from 'react';
import './ThreatIntelligence.css';
import IOCIntelligence from './IOCIntelligence';
import MarketExposure from './MarketExposure';
import ThreatCampaigns from './ThreatCampaigns';
import ThreatPredictions from './ThreatPredictions';
import DarkWebMonitor from './DarkWebMonitor';
import CustomFeedConfig from './CustomFeedConfig';

export default function ThreatIntelligence({ selectedFeatureIdx }) {
    const [activePage, setActivePage] = useState(null); // null = dashboard

    const features = [
        { id: 'ioc', title: 'IOC Hyper-Enrichment', desc: 'Enrich IPs, hashes, and domains with multi-source intelligence.', icon: '🔍' },
        { id: 'market', title: 'Market Cap Exposure', desc: 'Analyze financial risk and attack trends based on market capitalization.', icon: '📉' },
        { id: 'actor', title: 'Threat Actor Intel', desc: 'Track threat groups, campaigns, and TTPs.', icon: '🕵️' },
        { id: 'predict', title: 'Predictive Threat AI', desc: 'AI-driven 30/60/90 day attack forecasts.', icon: '🤖' },
        { id: 'darkweb', title: 'Dark Web Monitor', desc: 'Monitor leaks, dumps, and brand mentions.', icon: '🕸️' },
        { id: 'feed', title: 'Custom Feed Builder', desc: 'Configure and export personalized threat feeds.', icon: '📡' }
    ];

    const handleNavigate = (pageId) => {
        setActivePage(pageId);
    };

    const handleBack = () => {
        setActivePage(null);
    };

    const renderContent = () => {
        switch (activePage) {
            case 'ioc': return <IOCIntelligence onBack={handleBack} />;
            case 'market': return <MarketExposure onBack={handleBack} />;
            case 'actor': return <ThreatCampaigns onBack={handleBack} />;
            case 'predict': return <ThreatPredictions onBack={handleBack} />;
            case 'darkweb': return <DarkWebMonitor onBack={handleBack} />;
            case 'feed': return <CustomFeedConfig onBack={handleBack} />;
            default:
                return (
                    <div className="ti-dashboard-grid">
                        {features.map(f => (
                            <div key={f.id} className="ti-card">
                                <div className="ti-card-icon">{f.icon}</div>
                                <div className="ti-card-title">{f.title}</div>
                                <div className="ti-card-desc">{f.desc}</div>
                                <button className="action-btn primary full-width" onClick={() => handleNavigate(f.id)}>
                                    Launch Module
                                </button>
                            </div>
                        ))}
                    </div>
                );
        }
    };

    return (
        <div className="threat-intel-container">
            <div className="ti-header">
                <div className="ti-title">
                    <h2>Threat Intelligence Hub</h2>
                    <div className="ti-subtitle">Advanced Adversary Tracking & Prediction</div>
                </div>
                <div className="ti-actions">
                    {/* Global Actions like "Update Feeds" could go here */}
                </div>
            </div>
            <div className="ti-content">
                {renderContent()}
            </div>
        </div>
    );
}
