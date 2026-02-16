import React, { useState } from 'react';

export default function DarkWebMonitor({ onBack }) {
    const [showFeed, setShowFeed] = useState(false);

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Dark Web & Leak Monitoring</h2>
                <p style={{ color: '#888' }}>Monitor underground forums and marketplaces for brand mentions and leaks.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Monitoring Config</div>
                <div className="form-group">
                    <label>Domain Watchlist</label>
                    <input type="text" className="meta-input" placeholder="e.g. example.com" defaultValue="orlev-siem.com" />
                </div>
                <div className="form-group">
                    <label>Keywords (Executive Names, Projects)</label>
                    <input type="text" className="meta-input" placeholder="Comma separated..." />
                </div>
                <button className="action-btn primary" onClick={() => setShowFeed(true)}>Start Monitoring</button>
            </div>

            {showFeed && (
                <div className="ti-results-section">
                    <div className="ti-section-label">Live Intelligence Feed</div>
                    <div className="dark-web-feed">
                        <div className="feed-item">
                            <span className="feed-ts">[2024-10-24 14:02:11]</span>
                            <span style={{ color: '#dc3545' }}>CRITICAL:</span> Database dump matching 'orlev-siem' found on XSS forum. Seller: 'DarkOverlord'. Price: $500.
                        </div>
                        <div className="feed-item">
                            <span className="feed-ts">[2024-10-24 13:45:22]</span>
                            <span>ALERT:</span> New Pastebin entry containing admin email list associated with tracked domain.
                        </div>
                        <div className="feed-item">
                            <span className="feed-ts">[2024-10-24 12:10:05]</span>
                            <span>INFO:</span> Brand mention in 'RansomHub' negotiation chat logs.
                        </div>
                        <div className="feed-item">
                            <span className="feed-ts">[2024-10-24 11:30:00]</span>
                            <span>SYSTEM:</span> Monitoring active. 42 channels scanning...
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
