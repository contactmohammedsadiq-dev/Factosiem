import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function ThreatCampaigns({ onBack }) {
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Threat Actor & Campaign Intelligence</h2>
                <p style={{ color: '#888' }}>Deep-dive into threat groups, TTPs, and active campaigns.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Search Criteria</div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ marginBottom: '8px', display: 'block', fontSize: '12px', color: '#aaa' }}>Threat Group</label>
                        <CustomSelect options={['APT29 (Cozy Bear)', 'APT28 (Fancy Bear)', 'Lazarus Group', 'FIN7', 'Wizard Spider']} value="APT29 (Cozy Bear)" onChange={() => { }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ marginBottom: '8px', display: 'block', fontSize: '12px', color: '#aaa' }}>Malware Family</label>
                        <CustomSelect options={['Cobalt Strike', 'Emotet', 'TrickBot', 'Ryuk']} value="Cobalt Strike" onChange={() => { }} />
                    </div>
                </div>
                <button className="action-btn primary" onClick={() => setShowResult(true)}>View Intelligence</button>
            </div>

            {showResult && (
                <div className="ti-results-section">
                    <div style={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px', padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>APT29 (Cozy Bear)</h3>
                                <div className="match-tag">State-Sponsored</div>
                                <div className="match-tag" style={{ marginLeft: '8px' }}>Espionage</div>
                            </div>
                            <button className="action-btn small">Subscribe to Updates</button>
                        </div>

                        <p style={{ marginTop: '16px', color: '#ccc', lineHeight: '1.5' }}>
                            APT29 is a threat group that has been attributed to the Russian government's Foreign Intelligence Service (SVR). They have been active since at least 2008 and are known for targeting government networks, think tanks, and healthcare organizations for espionage purposes.
                        </p>

                        <div className="ti-section-label" style={{ marginTop: '24px' }}>Known TTPs (MITRE ATT&CK)</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                            <div style={{ background: '#111', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>T1059.001 (PowerShell)</div>
                            <div style={{ background: '#111', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>T1566.001 (Spearphishing Attachment)</div>
                            <div style={{ background: '#111', padding: '8px', borderRadius: '4px', fontSize: '12px' }}>T1003.001 (OS Credential Dumping)</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
