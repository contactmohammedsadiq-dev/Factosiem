import './RightPanel.css';

export default function RightPanel({ module, selectedLog, selectedAlert, selectedIncident }) {
  return (
    <div className="panel-right">
      <div className="ai-section">
        <div className="ai-header">
          <span>🤖 AI Assistant</span>
          <div className="ai-status"></div>
        </div>
        <div className="ai-message">
          <strong>Ready to help.</strong> I can assist with searches, alert tuning, incident analysis, and workflow optimization for this module.
        </div>
        <button className="ai-action">Ask a Question</button>
        <button className="ai-action">Suggest Optimizations</button>
        <button className="ai-action">View Insights</button>
      </div>

      <div className="ai-section">
        {module.id === 'search' ? (
          <div className="ai-insights">
            {selectedLog ? (
              <>
                <div className="insights-title">Log Analysis</div>
                <div className="insight-item">👤 <strong>User:</strong> {selectedLog.user}</div>
                <div className="insight-item">📊 <strong>Risk:</strong> <span className={`risk-badge risk-${selectedLog.risk.toLowerCase()}`}>{selectedLog.risk}</span></div>
                <div className="insight-item">🔍 <strong>Analysis:</strong>
                  {selectedLog.result === 'Fail'
                    ? ' Multiple failed authentication attempts detected from same source.'
                    : ' Successful access following suspicious pattern.'}
                </div>
                <div className="insight-item">🛡️ <strong>Recommendation:</strong>
                  <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '11px', color: '#aaa' }}>
                    {selectedLog.result === 'Fail' ? (
                      <>
                        <li>Check account lockout status</li>
                        <li>Verify source IP reputation</li>
                      </>
                    ) : (
                      <>
                        <li>Review session activity</li>
                        <li>Check for data exfiltration</li>
                      </>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="insights-title">AI Investigation Summary</div>
                <div className="insight-item">⚠️ <strong>Risk Detected:</strong> High volume of failed logins from single IP.</div>
                <div className="insight-item">🔍 <strong>Analysis:</strong> Pattern suggests potential brute force attempt.</div>
                <div className="insight-item">🛡️ <strong>Next Steps:</strong>
                  <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '11px', color: '#aaa' }}>
                    <li>Reset password for target user</li>
                    <li>Block source IP address</li>
                    <li>Review authentication logs</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        ) : module.id === 'alerts' ? (
          <div className="ai-insights">
            {selectedAlert ? (
              <>
                <div className="insights-title">AI Alert Summary</div>
                <div className="insight-item">
                  <strong>What happened:</strong> A {selectedAlert.technique} was detected on asset {selectedAlert.asset}.
                </div>
                <div className="insight-item">
                  <strong>Why this is suspicious:</strong> This behavior deviates from the baseline for user {selectedAlert.user} (Role: {selectedAlert.role}).
                </div>
                <div className="insight-item">
                  <strong>Risk Assessment:</strong> <span style={{ color: selectedAlert.confidence > 80 ? '#ff3b3b' : '#ffc107' }}>
                    {selectedAlert.confidence > 80 ? 'High Confidence Attack' : 'Suspicious Anomaly'}
                  </span>
                </div>
                <div className="insight-item">
                  <strong>Recommended Actions:</strong>
                  <div className="action-grid" style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
                    <button className="ai-action small">Investigate User</button>
                    <button className="ai-action small">Isolate Device</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="insights-title">Active Threat Landscape</div>
                <div className="insight-item">🚨 <strong>Critical alerts:</strong> 2 requiring immediate attention.</div>
                <div className="insight-item">📈 <strong>Trend:</strong> 15% increase in PowerShell related alerts today.</div>
                <div className="insight-item">💡 <strong>Tip:</strong> Select an alert to view detailed AI analysis and correlation.</div>
              </>
            )}
          </div>
        ) : module.id === 'incidents' ? (
          <div className="ai-insights">
            {selectedIncident ? (
              <>
                <div className="insights-title">Incident Command AI</div>
                <div className="insight-item">
                  <strong>Situation Rep:</strong> {selectedIncident.type} incident detected. Severity is {selectedIncident.severity}.
                </div>
                <div className="insight-item">
                  <strong>Tactical Advice:</strong>
                  <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '11px', color: '#aaa' }}>
                    <li>Prioritize containment of {selectedIncident.type} vectors.</li>
                    <li>Assign task 'Interview User' to team member.</li>
                  </ul>
                </div>
                <div className="insight-item">
                  <strong>Actions:</strong>
                  <div className="action-grid" style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
                    <button className="ai-action small">Draft Situation Report</button>
                    <button className="ai-action small">Suggest Mitigation</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="insights-title">Response Overview</div>
                <div className="insight-item">📊 <strong>Status:</strong> 2 Active, 1 Containment.</div>
                <div className="insight-item">⏱️ <strong>MTTR:</strong> Average resolution time is 4.5 hours this week.</div>
                <div className="insight-item">💡 <strong>Tip:</strong> Open an incident to enter the War Room view.</div>
              </>
            )}
          </div>
        ) : (
          <div className="ai-insights">
            <div className="insights-title">Module Insights</div>
            <div className="insight-item">📊 Peak activity at 14:00 UTC</div>
            <div className="insight-item">⚠️ 2 rules need tuning</div>
            <div className="insight-item">✅ System health excellent</div>
            <div className="insight-item">📈 30% more alerts this week</div>
          </div>
        )}
      </div>
    </div>
  );
}
