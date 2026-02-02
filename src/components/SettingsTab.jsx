import { useState } from 'react';
import './SettingsTab.css';

export default function SettingsTab() {
  const [expandedType, setExpandedType] = useState(null);
  const [activeGlobalSettings, setActiveGlobalSettings] = useState(0);

  const ingestionTypes = [
    {
      id: 'files',
      number: '1️⃣',
      title: 'Files & Directories',
      description: 'Upload or monitor files from local or remote systems.',
      uploadOptions: [
        'Upload log file (CSV, JSON, XML, TXT)',
        'Monitor local directory',
        'Monitor remote directory (SFTP/SMB)',
        'Log rotation handling'
      ],
      useCases: [
        'Application logs',
        'Server logs',
        'Backup forensic files'
      ],
      settings: null
    },
    {
      id: 'http',
      number: '2️⃣',
      title: 'HTTP Event Collector (API / Webhook)',
      description: 'Receive events over HTTP/HTTPS from applications, EDR, or cloud services.',
      uploadOptions: null,
      settings: [
        { label: 'Token Name', type: 'text' },
        { label: 'Authentication Token (Auto-generated)', type: 'text', readonly: true },
        { label: 'Allowed IPs', type: 'text' },
        { label: 'Source Name Override', type: 'text' },
        { label: 'Enable Acknowledgement', type: 'checkbox' },
        { label: 'Payload Format', type: 'select', options: ['JSON', 'Raw'] }
      ],
      useCases: [
        'EDR (Trend Micro, SentinelOne)',
        'Cloud security tools',
        'Custom scripts & microservices'
      ]
    },
    {
      id: 'tcpudp',
      number: '3️⃣',
      title: 'TCP / UDP Listener',
      description: 'Ingest real-time logs over network ports.',
      uploadOptions: null,
      settings: [
        { label: 'Protocol', type: 'select', options: ['TCP', 'UDP'] },
        { label: 'Listening Port', type: 'number' },
        { label: 'Enable SSL/TLS', type: 'checkbox' },
        { label: 'Message Framing', type: 'select', options: ['Line-based', 'Length-prefixed'] },
        { label: 'Charset Encoding', type: 'select', options: ['UTF-8', 'ASCII', 'ISO-8859-1'] }
      ],
      useCases: [
        'Firewalls',
        'Routers',
        'Network devices',
        'Syslog streams'
      ]
    },
    {
      id: 'syslog',
      number: '4️⃣',
      title: 'Syslog',
      description: 'Collect standardized system and security logs.',
      uploadOptions: null,
      settings: [
        { label: 'RFC Format', type: 'select', options: ['RFC 3164', 'RFC 5424'] },
        { label: 'Port Configuration', type: 'number' },
        { label: 'Facility & Severity Mapping', type: 'select', options: ['Standard', 'Custom'] },
        { label: 'Timezone Handling', type: 'select', options: ['UTC', 'Local', 'Custom'] }
      ],
      useCases: [
        'Linux servers',
        'Network appliances',
        'IDS/IPS systems'
      ]
    },
    {
      id: 'scripts',
      number: '5️⃣',
      title: 'Scripts & Connectors',
      description: 'Pull data from APIs, databases, or custom collectors.',
      uploadOptions: null,
      settings: [
        { label: 'Script Type', type: 'select', options: ['Python', 'Bash', 'PowerShell'] },
        { label: 'Execution Interval', type: 'text', placeholder: 'e.g., every 15m' },
        { label: 'Credential Vault', type: 'select', options: ['None', 'AWS Secrets', 'HashiCorp Vault'] },
        { label: 'Error Handling', type: 'select', options: ['Skip', 'Retry', 'Fail'] },
        { label: 'Retry Logic', type: 'text', placeholder: 'e.g., 3 retries with 60s delay' }
      ],
      useCases: [
        'Cloud APIs (AWS, Azure, GCP)',
        'Threat Intel feeds',
        'Database logs'
      ]
    },
    {
      id: 'agent',
      number: '6️⃣',
      title: 'Agent-Based Collection',
      description: 'Lightweight agent installed on endpoints or servers.',
      uploadOptions: null,
      settings: [
        { label: 'OS Type', type: 'select', options: ['Windows', 'Linux', 'macOS'] },
        { label: 'Log Sources', type: 'multiselect', options: ['Event Logs', 'Syslog', 'Application Logs'] },
        { label: 'Resource Limits', type: 'text', placeholder: 'e.g., CPU: 10%, RAM: 256MB' },
        { label: 'Enable Secure Channel', type: 'checkbox' },
        { label: 'Heartbeat Interval', type: 'text', placeholder: 'e.g., 30s' }
      ],
      useCases: [
        'Endpoint telemetry',
        'Process monitoring',
        'File integrity monitoring'
      ]
    },
    {
      id: 'cloud',
      number: '7️⃣',
      title: 'Cloud & SaaS Logs',
      description: 'Ingest logs from cloud platforms and SaaS services.',
      uploadOptions: [
        'AWS CloudTrail',
        'Azure Monitor',
        'Google Cloud Logs',
        'Microsoft 365',
        'Okta, Google Workspace'
      ],
      settings: null,
      useCases: []
    }
  ];

  const globalSettings = [
    {
      title: 'Index / Dataset Selection',
      description: 'Choose the target index or dataset for ingested data'
    },
    {
      title: 'Source Type',
      description: 'Define the source type classification for data categorization'
    },
    {
      title: 'Timestamp Extraction',
      description: 'Configure automatic timestamp parsing from log events'
    },
    {
      title: 'Field Normalization',
      description: 'Apply standardized field naming conventions (CIM, ECS, etc.)'
    },
    {
      title: 'Data Retention Policy',
      description: 'Set retention periods and archival rules'
    },
    {
      title: 'Parsing Rules',
      description: 'Define custom parsing patterns and transformations'
    },
    {
      title: 'Enrichment (GeoIP, MITRE ATT&CK)',
      description: 'Enable automatic threat intelligence and geolocation enrichment'
    }
  ];

  return (
    <div className="settings-container">
      {/* Header */}
      <div className="settings-header">
        <h2>📥 Select Ingestion Type</h2>
        <p className="settings-subtitle">Configure data collection from various sources</p>
      </div>

      {/* Ingestion Types Grid */}
      <div className="ingestion-types-section">
        <div className="ingestion-grid">
          {ingestionTypes.map((type) => (
            <div
              key={type.id}
              className={`ingestion-card ${expandedType === type.id ? 'expanded' : ''}`}
              onClick={() => setExpandedType(expandedType === type.id ? null : type.id)}
            >
              <div className="card-header">
                <span className="card-number">{type.number}</span>
                <h3>{type.title}</h3>
              </div>
              <p className="card-description">{type.description}</p>

              {expandedType === type.id && (
                <div className="card-expanded-content">
                  {/* Upload Options */}
                  {type.uploadOptions && (
                    <div className="settings-section">
                      <h4>Supported Options</h4>
                      <ul className="options-list">
                        {type.uploadOptions.map((option, idx) => (
                          <li key={idx}>
                            <input type="checkbox" id={`${type.id}-opt-${idx}`} />
                            <label htmlFor={`${type.id}-opt-${idx}`}>{option}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Settings Form */}
                  {type.settings && (
                    <div className="settings-section">
                      <h4>Settings</h4>
                      <form className="settings-form">
                        {type.settings.map((setting, idx) => (
                          <div key={idx} className="form-group">
                            <label htmlFor={`${type.id}-${setting.label}`}>
                              {setting.label}
                            </label>
                            {setting.type === 'text' && (
                              <input
                                id={`${type.id}-${setting.label}`}
                                type="text"
                                placeholder={setting.placeholder || ''}
                                readOnly={setting.readonly || false}
                              />
                            )}
                            {setting.type === 'number' && (
                              <input
                                id={`${type.id}-${setting.label}`}
                                type="number"
                                placeholder={setting.placeholder || ''}
                              />
                            )}
                            {setting.type === 'checkbox' && (
                              <input
                                id={`${type.id}-${setting.label}`}
                                type="checkbox"
                              />
                            )}
                            {setting.type === 'select' && (
                              <select id={`${type.id}-${setting.label}`}>
                                <option value="">-- Select --</option>
                                {setting.options?.map((opt, optIdx) => (
                                  <option key={optIdx} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            )}
                            {setting.type === 'multiselect' && (
                              <select id={`${type.id}-${setting.label}`} multiple>
                                {setting.options?.map((opt, optIdx) => (
                                  <option key={optIdx} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        ))}
                      </form>
                    </div>
                  )}

                  {/* Use Cases */}
                  <div className="settings-section">
                    <h4>Common Use Cases</h4>
                    <ul className="use-cases-list">
                      {type.useCases.map((useCase, idx) => (
                        <li key={idx}>✓ {useCase}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="card-actions">
                    <button className="btn-primary">Create & Configure</button>
                    <button className="btn-secondary">View Documentation</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Global Settings Section */}
      <div className="global-settings-section">
        <h3>⚙️ Global Input Settings (Applies to All)</h3>
        <p className="global-subtitle">Settings that apply across all ingestion types</p>

        <div className="global-settings-grid">
          {globalSettings.map((setting, idx) => (
            <div
              key={idx}
              className={`global-setting-card ${activeGlobalSettings === idx ? 'active' : ''}`}
              onClick={() => setActiveGlobalSettings(activeGlobalSettings === idx ? -1 : idx)}
            >
              <h4>{setting.title}</h4>
              <p>{setting.description}</p>
              {activeGlobalSettings === idx && (
                <div className="global-setting-controls">
                  <input type="text" placeholder="Configure this setting..." />
                  <button className="btn-small">Apply</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
