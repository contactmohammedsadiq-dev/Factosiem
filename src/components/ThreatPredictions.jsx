import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function ThreatPredictions({ onBack }) {
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Predictive Threat AI</h2>
                <p style={{ color: '#888' }}>AI-driven attack forecasts based on global organizational signaling.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Organization Profile</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                        <label>Org Size</label>
                        <CustomSelect options={['1-100 Employees', '100-1000 Employees', '1000+ Employees']} value="1000+ Employees" onChange={() => { }} />
                    </div>
                    <div className="form-group">
                        <label>Primary Region</label>
                        <CustomSelect options={['North America', 'Europe', 'APAC', 'LATAM']} value="North America" onChange={() => { }} />
                    </div>
                </div>
                <button className="action-btn primary" onClick={() => setShowResult(true)}>Run Prediction Model</button>
            </div>

            {showResult && (
                <div className="ti-results-section">
                    <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                        {[30, 60, 90].map(days => (
                            <div key={days} className="ti-card" style={{ flex: 1, padding: '16px', borderColor: days === 30 ? '#dc3545' : '#333' }}>
                                <div className="ti-card-title">{days}-Day Threat Forecast</div>
                                <div style={{ fontSize: '24px', fontWeight: 'bold', color: days === 30 ? '#ff6b6b' : '#fff', marginBottom: '8px' }}>
                                    {days === 30 ? 'Critical' : days === 60 ? 'High' : 'Medium'}
                                </div>
                                <p style={{ fontSize: '12px', color: '#aaa' }}>
                                    {days === 30 ? 'Immediate risk of ransomware targeting unpatched edge devices.' : 'Elevated risk of supply chain compromise.'}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="ti-section-label">Likely Attack Vectors (Confidence Score)</div>
                    <div style={{ background: '#1e1e1e', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                                <span>Ransomware (Phishing Vector)</span>
                                <span>88%</span>
                            </div>
                            <div style={{ height: '6px', background: '#333', borderRadius: '3px' }}>
                                <div style={{ width: '88%', height: '100%', background: '#ff6b6b', borderRadius: '3px' }}></div>
                            </div>
                        </div>
                        <div style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                                <span>Cloud Credential Theft</span>
                                <span>72%</span>
                            </div>
                            <div style={{ height: '6px', background: '#333', borderRadius: '3px' }}>
                                <div style={{ width: '72%', height: '100%', background: '#ffc107', borderRadius: '3px' }}></div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                                <span>Insider Threat</span>
                                <span>45%</span>
                            </div>
                            <div style={{ height: '6px', background: '#333', borderRadius: '3px' }}>
                                <div style={{ width: '45%', height: '100%', background: '#28a745', borderRadius: '3px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
