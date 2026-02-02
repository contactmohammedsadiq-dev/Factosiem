import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function IOCIntelligence({ onBack }) {
    const [iocType, setIocType] = useState('IP Address');
    const [iocValue, setIocValue] = useState('');
    const [result, setResult] = useState(null);

    const handleEnrich = () => {
        // Mock enrichment
        setResult({
            riskScore: 88,
            geo: 'Pyongyang, KP',
            asn: 'AS131279',
            campaigns: ['Lazarus Group', 'Hidden Cobra'],
            tags: ['C2 Server', 'Malware Distribution']
        });
    };

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">IOC Hyper-Enrichment</h2>
                <p style={{ color: '#888' }}>Real-time enrichment across 40+ intelligence sources.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Target Indicator</div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ width: '200px' }}>
                        <CustomSelect
                            options={['IP Address', 'Domain', 'File Hash (SHA256)', 'URL']}
                            value={iocType}
                            onChange={(e) => setIocType(e.target.value)}
                        />
                    </div>
                    <input
                        type="text"
                        className="meta-input"
                        placeholder={`Enter ${iocType}...`}
                        value={iocValue}
                        onChange={(e) => setIocValue(e.target.value)}
                        style={{ flex: 1 }}
                    />
                </div>
                <button className="action-btn primary" onClick={handleEnrich}>Enrich IOC</button>
            </div>

            {result && (
                <div className="ti-results-section">
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <div style={{ width: '200px', textAlign: 'center' }}>
                            <div className="risk-score-circle" style={{ borderColor: result.riskScore > 75 ? '#dc3545' : '#28a745' }}>
                                {result.riskScore}
                            </div>
                            <div className="risk-label">Risk Score</div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ marginTop: 0 }}>Enrichment Summary</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                                <div className="review-item">
                                    <label>Geolocation</label>
                                    <div className="val">{result.geo}</div>
                                </div>
                                <div className="review-item">
                                    <label>ASN</label>
                                    <div className="val">{result.asn}</div>
                                </div>
                            </div>
                            <div className="review-item">
                                <label>Associated Campaigns</label>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {result.campaigns.map(c => (
                                        <span key={c} className="match-tag" style={{ background: 'rgba(255, 193, 7, 0.15)', color: '#ffc107' }}>{c}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
