import React from 'react';

export default function AIAssistantPanel({ context, onClose }) {
    return (
        <div className="ai-assist-panel" style={{
            width: '350px',
            background: '#161616',
            borderLeft: '1px solid #222',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative'
        }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>🤖</span>
                    <h3 style={{ margin: 0, fontSize: '16px' }}>SOC Co-Pilot</h3>
                </div>
                <button className="action-btn small" onClick={onClose}>✕</button>
            </div>

            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
                <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', marginBottom: '20px' }}>
                    <p style={{ fontSize: '11px', color: '#666', margin: '0 0 8px 0' }}>CONTEXT</p>
                    <p style={{ fontSize: '13px', margin: 0 }}>Analytics: {context || 'Global Overview'}</p>
                </div>

                <div className="chat-bubble ai" style={{ marginBottom: '24px' }}>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
                        "I've analyzed the recent dashboard spikes. The increase in <strong>Critical Alerts</strong> is driven by a series of
                        SQL injection attempts targeting the public-facing API.
                        <br /><br />
                        Confidence: <strong>High (94%)</strong>
                        <br />
                        Blast Radius: <strong>Medium (Data Access)</strong>"
                    </p>
                </div>

                <div style={{ fontSize: '12px', color: '#888', marginBottom: '12px' }}>QUICK ACTIONS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <button className="action-btn tiny" style={{ textAlign: 'left' }}>Why did alerts spike today?</button>
                    <button className="action-btn tiny" style={{ textAlign: 'left' }}>Predict risk for next 7 days</button>
                    <button className="action-btn tiny" style={{ textAlign: 'left' }}>Summarize for Executives</button>
                    <button className="action-btn tiny" style={{ textAlign: 'left' }}>Draft incident response plan</button>
                </div>
            </div>

            <div style={{ padding: '20px', borderTop: '1px solid #222' }}>
                <div style={{ position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Ask Co-Pilot..."
                        style={{
                            width: '100%',
                            background: '#0a0a0a',
                            border: '1px solid #333',
                            color: '#fff',
                            padding: '12px 40px 12px 12px',
                            borderRadius: '6px',
                            fontSize: '13px'
                        }}
                    />
                    <button style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        color: '#00F5FF',
                        cursor: 'pointer'
                    }}>↵</button>
                </div>
            </div>
        </div >
    );
}
