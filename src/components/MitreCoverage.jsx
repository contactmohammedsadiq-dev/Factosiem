import React from 'react';

export default function MitreCoverage() {
    return (
        <div className="mitre-coverage-view">
            <div style={{ padding: '0 24px' }}>
                <h3>MITRE ATT&CK Coverage Map</h3>
                <p style={{ color: '#888', fontSize: '13px' }}>Visualizing current detection rules against known adversary tactics.</p>
            </div>

            <div className="mitre-matrix">
                <div className="tactic-column">
                    <div className="tactic-header">Initial Access</div>
                    <div className="technique-cell tech-covered">Phishing (3) ✅</div>
                    <div className="technique-cell">Drive-by Compromise</div>
                    <div className="technique-cell tech-covered">Valid Accounts (1) ✅</div>
                </div>

                <div className="tactic-column">
                    <div className="tactic-header">Execution</div>
                    <div className="technique-cell tech-covered">PowerShell (5) ✅</div>
                    <div className="technique-cell">Scheduled Task</div>
                    <div className="technique-cell tech-covered">Command Line (8) ✅</div>
                </div>

                <div className="tactic-column">
                    <div className="tactic-header">Persistence</div>
                    <div className="technique-cell">Registry Run Keys</div>
                    <div className="technique-cell">Startup Folder</div>
                    <div className="technique-cell tech-covered">New Service (2) ✅</div>
                </div>

                <div className="tactic-column">
                    <div className="tactic-header">Privilege Esc</div>
                    <div className="technique-cell">Token Impersonation</div>
                    <div className="technique-cell tech-covered">Process Injection (1) ✅</div>
                </div>

                <div className="tactic-column">
                    <div className="tactic-header">Exfiltration</div>
                    <div className="technique-cell tech-covered">Exfil over C2 (4) ✅</div>
                    <div className="technique-cell">Exfil over USB</div>
                </div>
            </div>
        </div>
    );
}
