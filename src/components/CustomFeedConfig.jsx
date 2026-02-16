import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function CustomFeedConfig({ onBack }) {
    const [feedUrl, setFeedUrl] = useState(null);

    const handleCreate = () => {
        setFeedUrl('https://api.orlev-siem.io/feeds/v1/custom/8f72a-29b1?token=xp92');
    };

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Custom Intelligence Feed Builder</h2>
                <p style={{ color: '#888' }}>Build and export curated threat intelligence feeds for your security controls.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Feed Parameters</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                        <label>Intended Sector</label>
                        <CustomSelect options={['Finance', 'Energy', 'Gov', 'All']} value="All" onChange={() => { }} />
                    </div>
                    <div className="form-group">
                        <label>Format</label>
                        <CustomSelect options={['STIX 2.1', 'TAXII', 'CSV', 'JSON']} value="STIX 2.1" onChange={() => { }} />
                    </div>
                </div>
                <button className="action-btn primary" onClick={handleCreate}>Generat Feed URL</button>
            </div>

            {feedUrl && (
                <div className="ti-results-section">
                    <div style={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px', padding: '16px' }}>
                        <label style={{ color: '#ccc', marginBottom: '8px', display: 'block' }}>Unique Feed URL</label>
                        <div style={{ background: '#000', padding: '12px', fontFamily: 'monospace', color: '#00F5FF', border: '1px solid #333', borderRadius: '4px', wordBreak: 'break-all' }}>
                            {feedUrl}
                        </div>
                        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                            <button className="action-btn small">Copy URL</button>
                            <button className="action-btn small">Download Sample</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
