import React from 'react';

export default function RuleTestingPanel({ ruleData }) {
    return (
        <div className="rule-testing-panel">
            <div className="test-header">
                <div className="test-info">
                    <strong>Active Logic:</strong> {ruleData.logic.mode === 'visual' ? 'Visual Builder Graph' : ruleData.logic.mode === 'nl' ? 'AI Generated Logic' : 'Custom SPL Query'}
                </div>
                <button className="action-btn primary small">▶ Run Simulation</button>
            </div>

            <div className="test-results-grid">
                <div className="result-card">
                    <div className="rc-label">Estimated Alert Volume</div>
                    <div className="rc-value">12 <span className="unit">/ day</span></div>
                    <div className="rc-trend good">Within Defaults</div>
                </div>
                <div className="result-card">
                    <div className="rc-label">False Positive Rate</div>
                    <div className="rc-value">1.4%</div>
                    <div className="rc-trend warning">Tune Threshold?</div>
                </div>
                <div className="result-card">
                    <div className="rc-label">Performance Cost</div>
                    <div className="rc-value">Low</div>
                    <div className="rc-trend good">24ms execution</div>
                </div>
            </div>

            <div className="dry-run-preview">
                <h4>Dry Run: Last 24 Hours</h4>
                <table className="preview-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Entity</th>
                            <th>Outcome</th>
                            <th>Match Reasons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14:22:01</td>
                            <td>john.smith</td>
                            <td><span className="match-tag">MATCH</span></td>
                            <td>Failed Login (Count: 8)</td>
                        </tr>
                        <tr>
                            <td>11:45:12</td>
                            <td>admin_svc</td>
                            <td><span className="match-tag">MATCH</span></td>
                            <td>Failed Login (Count: 15)</td>
                        </tr>
                        <tr>
                            <td>09:12:44</td>
                            <td>guest</td>
                            <td><span className="match-tag">MATCH</span></td>
                            <td>Failed Login (Count: 6)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="ai-tune-suggestions">
                <div className="ai-tune-header">🤖 AI Quality Check</div>
                <div className="ai-tune-content">
                    <p><strong>Note:</strong> The false positive rate (1.4%) is slightly above the recommended baseline for "Medium" severity rules.</p>
                    <p><strong>Suggestion:</strong> Increase the failure count threshold from 5 to 10 to reduce noise from <code>admin_svc</code>.</p>
                    <button className="action-btn small">Apply Suggestion</button>
                </div>
            </div>
        </div>
    );
}
