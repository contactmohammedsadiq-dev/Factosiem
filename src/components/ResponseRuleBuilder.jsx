import React, { useState } from 'react';

export default function ResponseRuleBuilder() {
    const [mode, setMode] = useState('visual');

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="rb-tabs">
                <div className={`rb-tab ${mode === 'visual' ? 'active' : ''}`} onClick={() => setMode('visual')}>Visual Builder</div>
                <div className={`rb-tab ${mode === 'nl' ? 'active' : ''}`} onClick={() => setMode('nl')}>AI Natural Language</div>
                <div className={`rb-tab ${mode === 'expert' ? 'active' : ''}`} onClick={() => setMode('expert')}>Advanced Logic</div>
            </div>

            <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                {mode === 'visual' && (
                    <div className="visual-canvas" style={{ height: '500px' }}>
                        <div className="logic-flow">
                            <div className="logic-block">
                                <strong>If Alert</strong>
                                <div style={{ fontSize: '11px', color: '#aaa' }}>Type = DDoS</div>
                            </div>
                            <div className="logic-connector"></div>
                            <div className="logic-block">
                                <strong>Condition</strong>
                                <div style={{ fontSize: '11px', color: '#aaa' }}>Same IP &gt; 2min</div>
                            </div>
                            <div className="logic-connector"></div>
                            <div className="logic-block" style={{ borderColor: '#dc3545', background: 'rgba(220, 53, 69, 0.1)' }}>
                                <strong>THEN Action</strong>
                                <div style={{ fontSize: '11px', color: '#aaa' }}>Block IP (Firewall)</div>
                            </div>
                            <div className="logic-connector"></div>
                            <div className="logic-block" style={{ borderColor: '#28a745' }}>
                                <strong>Notify</strong>
                                <div style={{ fontSize: '11px', color: '#aaa' }}>SOC Tier 1</div>
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'nl' && (
                    <div className="nl-input-container">
                        <h3 style={{ color: '#ccc', marginBottom: '12px' }}>Describe your response policy</h3>
                        <textarea className="ai-textarea" placeholder="e.g. If a user logs in from a sanctioned country, immediately disable the account and alert the CISO..." rows={4}></textarea>
                        <div style={{ marginTop: '16px' }}>
                            <button className="action-btn primary">Generate Logic</button>
                        </div>
                        <div className="generated-preview" style={{ marginTop: '24px' }}>
                            <div style={{ fontSize: '11px', color: '#666' }}>AI INTERPRETATION</div>
                            <p style={{ color: '#00F5FF', marginTop: '8px' }}>Policy: Geo-Blocking Sanctioned</p>
                            <ul style={{ fontSize: '13px', color: '#ccc', paddingLeft: '20px', lineHeight: '1.6' }}>
                                <li><strong>Trigger:</strong> Login Success AND Country IN [Sanctioned_List]</li>
                                <li><strong>Action 1:</strong> Active Directory -&gt; Disable User</li>
                                <li><strong>Action 2:</strong> Email -&gt; ciso@company.com</li>
                                <li><strong>Risk:</strong> Medium (User Impact)</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
