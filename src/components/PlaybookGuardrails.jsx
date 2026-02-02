import React from 'react';
import CustomSelect from './CustomSelect';

export default function PlaybookGuardrails({ data, onChange }) {
    return (
        <div className="ti-page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="ti-section-label">Safety & Approvals</div>

            <div className="guardrail-item">
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Mandatory Human Approval</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>Requires a senior analyst to confirm before execution begins.</div>
                </div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={data.requireApproval}
                        onChange={(e) => onChange('requireApproval', e.target.checked)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            {data.requireApproval && (
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '11px', color: '#888', marginBottom: '8px' }}>Required Approver Role</label>
                        <CustomSelect
                            options={['SOC Tier 2', 'SOC Manager', 'IT Admin', 'CISO']}
                            value={data.approverRole}
                            onChange={(e) => onChange('approverRole', e.target.value)}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '11px', color: '#888', marginBottom: '8px' }}>Approval Timeout</label>
                        <CustomSelect
                            options={['15m', '1h', '4h', '24h', 'None']}
                            value={data.timeout}
                            onChange={(e) => onChange('timeout', e.target.value)}
                        />
                    </div>
                </div>
            )}

            <div className="guardrail-item">
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Exclude Critical Assets</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>Never execute on Domain Controllers or core infrastructure.</div>
                </div>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={data.excludeCritical}
                        onChange={(e) => onChange('excludeCritical', e.target.checked)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            <div className="guardrail-item">
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Business Hours Only</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>Pause automation between 18:00 and 08:00 local time.</div>
                </div>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>

            <div style={{ marginTop: '32px', padding: '16px', background: 'rgba(220, 53, 69, 0.05)', borderRadius: '8px', border: '1px solid rgba(220, 53, 69, 0.2)' }}>
                <div style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: '13px', marginBottom: '8px' }}>Safety Warning</div>
                <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>
                    Playbooks targeting <strong>Endpoint Isolation</strong> or <strong>User Disabling</strong> are high-risk. Ensure approvals are managed correctly.
                </p>
            </div>
        </div>
    );
}
