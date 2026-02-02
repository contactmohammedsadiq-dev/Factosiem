import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

export default function CreateDashboardWizard({ onCancel, onSave }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        audience: 'SOC Ops',
        refreshMode: 'Real-time',
        sources: ['Alerts'],
        widgets: []
    });

    const steps = [
        { id: 1, name: 'Basic Info' },
        { id: 2, name: 'Data Sources' },
        { id: 3, name: 'Widgets' },
        { id: 4, name: 'Filters' },
        { id: 5, name: 'Interactivity' },
        { id: 6, name: 'Preview' }
    ];

    const toggleSource = (source) => {
        const current = [...formData.sources];
        if (current.includes(source)) {
            setFormData({ ...formData, sources: current.filter(s => s !== source) });
        } else {
            setFormData({ ...formData, sources: [...current, source] });
        }
    };

    return (
        <div className="analytics-container" style={{ background: '#0a0a0a' }}>
            <div style={{ width: '800px', margin: '60px auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className="wizard-header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '24px' }}>Create New Analytics Dashboard</h1>
                        <p style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>Build a custom launchpad for your security metrics.</p>
                    </div>
                    <button className="action-btn" onClick={onCancel}>✕ Close</button>
                </div>

                <div className="wizard-stepper" style={{ display: 'flex', gap: '12px' }}>
                    {steps.map(s => (
                        <div key={s.id} style={{
                            flex: 1,
                            height: '4px',
                            background: step >= s.id ? '#00F5FF' : '#222',
                            borderRadius: '2px',
                            transition: 'all 0.3s'
                        }}></div>
                    ))}
                </div>

                <div className="wizard-body" style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '40px', minHeight: '400px' }}>
                    {step === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', color: '#888', marginBottom: '8px', fontSize: '13px' }}>Dashboard Name</label>
                                <input
                                    className="meta-input"
                                    placeholder="e.g., Cloud Sentinel Overview"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    style={{ background: '#0a0a0a', border: '1px solid #333', color: '#fff', padding: '12px', borderRadius: '6px', width: '100%' }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', color: '#888', marginBottom: '8px', fontSize: '13px' }}>Audit Target Audience</label>
                                <CustomSelect
                                    options={['SOC Operations', 'Incident Response', 'Executive / CISO', 'Compliance & Legal']}
                                    value={formData.audience}
                                    onChange={val => setFormData({ ...formData, audience: val })}
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {['Alerts', 'Incidents', 'Logs', 'UEBA', 'Threat Intel', 'Cloud Audit'].map(src => (
                                <div
                                    key={src}
                                    onClick={() => toggleSource(src)}
                                    style={{
                                        padding: '20px',
                                        background: formData.sources.includes(src) ? 'rgba(0, 245, 255, 0.1)' : '#1a1a1a',
                                        border: `1px solid ${formData.sources.includes(src) ? '#00F5FF' : '#333'}`,
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <span>{src}</span>
                                    <span>{formData.sources.includes(src) ? '✓' : ''}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {step > 2 && (
                        <div style={{ textAlign: 'center', paddingTop: '60px' }}>
                            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚡</div>
                            <h3>Logic Provisioning in Progress</h3>
                            <p style={{ color: '#666' }}>The widget selector and filter engine are being optimized for Step {step}.</p>
                        </div>
                    )}
                </div>

                <div className="wizard-footer-nav" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        className="action-btn"
                        onClick={() => setStep(Math.max(1, step - 1))}
                        disabled={step === 1}
                    >
                        Back
                    </button>
                    <button
                        className="action-btn primary"
                        onClick={() => step === 6 ? onSave() : setStep(step + 1)}
                    >
                        {step === 6 ? 'Create Dashboard' : 'Next Step'}
                    </button>
                </div>
            </div>
        </div>
    );
}
