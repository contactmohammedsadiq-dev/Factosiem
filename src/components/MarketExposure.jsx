import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function MarketExposure({ onBack }) {
    const [showResult, setShowResult] = useState(false);

    return (
        <div className="ti-page-container">
            <button className="action-btn small" onClick={onBack} style={{ marginBottom: '16px' }}>← Back to Hub</button>
            <div className="ti-page-header">
                <h2 className="ti-page-title">Market Cap Exposure Analysis</h2>
                <p style={{ color: '#888' }}>Financial risk assessment based on market capitalization and industry trends.</p>
            </div>

            <div className="ti-input-section">
                <div className="ti-section-label">Company Profile</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                        <label>Industry Sector</label>
                        <CustomSelect options={['Finance', 'Healthcare', 'Technology', 'Energy', 'Retail']} value="Finance" onChange={() => { }} placeholder="Select Sector" />
                    </div>
                    <div className="form-group">
                        <label>Market Cap Category</label>
                        <CustomSelect options={['Startup (<$50M)', 'Mid-Cap ($2B-$10B)', 'Large-Cap ($10B-200B)', 'Mega-Cap (>$200B)']} value="Large-Cap ($10B-200B)" onChange={() => { }} placeholder="Select Category" />
                    </div>
                    <div className="form-group">
                        <label>Stock Ticker (Optional)</label>
                        <input type="text" className="meta-input" placeholder="e.g. JPM" />
                    </div>
                </div>
                <button className="action-btn primary" onClick={() => setShowResult(true)}>Analyze Exposure</button>
            </div>

            {showResult && (
                <div className="ti-results-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <div className="result-card" style={{ width: '32%' }}>
                            <div className="rc-label">Financial Impact Est.</div>
                            <div className="rc-value">$4.2M</div>
                            <div className="rc-trend warning">Avg Breach Cost</div>
                        </div>
                        <div className="result-card" style={{ width: '32%' }}>
                            <div className="rc-label">Attack Surface Score</div>
                            <div className="rc-value">High</div>
                            <div className="rc-trend bad">Top 10% Target</div>
                        </div>
                        <div className="result-card" style={{ width: '32%' }}>
                            <div className="rc-label">Ransomware Likelihood</div>
                            <div className="rc-value">Very High</div>
                            <div className="rc-trend bad">Sector Trending</div>
                        </div>
                    </div>

                    <div className="ti-section-label">Sector Attack Trend (Last 12 Months)</div>
                    <div className="market-trend-chart">
                        {[40, 60, 45, 70, 85, 90, 65, 55, 75, 80, 95, 88].map((h, i) => (
                            <div key={i} className="trend-bar" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
