import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchInvestigate.css';

export default function SearchInvestigate({ selectedLogId, onLogSelect }) {
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [riskFilter, setRiskFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('Newest');

    // Check for incoming navigation state (e.g. from Alerts module)
    useEffect(() => {
        if (location.state && location.state.query) {
            setQuery(location.state.query);
            // Optional: Clean up state to prevent persistent filtering on refresh effectively
            // history.replaceState({}, document.title) // This might be too aggressive in React Router context
        }
    }, [location.state]);

    // Mock Data for Investigation
    const investigationData = [
        { id: 1, time: '2025-01-29 14:02:11', user: 'john.smith', result: 'Fail', ip: '192.168.1.45', port: '443', host: 'AUTH-SRV-01', source: 'IAM', risk: 'High' },
        { id: 2, time: '2025-01-29 14:02:15', user: 'john.smith', result: 'Fail', ip: '192.168.1.45', port: '443', host: 'AUTH-SRV-01', source: 'IAM', risk: 'High' },
        { id: 3, time: '2025-01-29 14:02:18', user: 'john.smith', result: 'Fail', ip: '192.168.1.45', port: '443', host: 'AUTH-SRV-01', source: 'IAM', risk: 'High' },
        { id: 4, time: '2025-01-29 14:02:22', user: 'john.smith', result: 'Success', ip: '192.168.1.45', port: '443', host: 'AUTH-SRV-01', source: 'IAM', risk: 'Medium' },
        { id: 5, time: '2025-01-29 14:03:01', user: 'john.smith', result: 'Success', ip: '192.168.1.45', port: '22', host: 'DB-PROD-01', source: 'Network', risk: 'Critical' },
        { id: 6, time: '2025-01-29 14:05:30', user: 'system', result: 'Success', ip: '10.0.0.5', port: 'N/A', host: 'DB-PROD-01', source: 'Cloud', risk: 'Low' },
        { id: 7, time: '2025-01-29 14:06:12', user: 'admin', result: 'Success', ip: '10.0.0.2', port: '80', host: 'WEB-01', source: 'Network', risk: 'Low' },
        { id: 8, time: '2025-01-29 14:07:05', user: 'sarah.jones', result: 'Fail', ip: '192.168.1.50', port: '3389', host: 'RDP-SRV-02', source: 'Network', risk: 'Medium' },
        { id: 9, time: '2025-01-29 14:08:11', user: 'sarah.jones', result: 'Fail', ip: '192.168.1.50', port: '3389', host: 'RDP-SRV-02', source: 'Network', risk: 'Medium' },
        { id: 10, time: '2025-01-29 14:10:00', user: 'service_account', result: 'Success', ip: '10.1.1.5', port: '443', host: 'API-GW-01', source: 'Cloud', risk: 'Low' },
    ];

    const filteredData = useMemo(() => {
        let data = [...investigationData];

        // 1. Filter by Natural Language Query (Simple Implementation)
        if (query.trim().length > 0) {
            const lowerQuery = query.toLowerCase();
            // Heuristic: If query contains "john.smith", only show related logs
            if (lowerQuery.includes('john.smith')) {
                data = data.filter(item => item.user === 'john.smith');
            } else if (lowerQuery.includes('fail')) {
                data = data.filter(item => item.result === 'Fail');
            } else {
                // Generic search
                data = data.filter(item =>
                    item.user.toLowerCase().includes(lowerQuery) ||
                    item.host.toLowerCase().includes(lowerQuery) ||
                    item.ip.includes(lowerQuery)
                );
            }
        }

        // 2. Filter by Risk
        if (riskFilter !== 'All') {
            data = data.filter(item => item.risk === riskFilter);
        }

        // 3. Sort
        data.sort((a, b) => {
            if (sortOrder === 'Risk') {
                const riskScore = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
                return riskScore[b.risk] - riskScore[a.risk];
            }
            return b.id - a.id; // Newest by ID (proxy for time)
        });

        return data;
    }, [query, riskFilter, sortOrder]);

    return (
        <div className="search-investigate">
            {/* Search Header */}
            <div className="search-header">
                <div className="nl-search-container">
                    <span className="search-icon-overlay">🔍</span>
                    <input
                        type="text"
                        className="nl-search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask AI: 'Show failed logins for john.smith' or just type..."
                    />
                </div>

                {/* Filters and Sort */}
                <div className="filter-controls">
                    <select
                        className="filter-select"
                        value={riskFilter}
                        onChange={(e) => setRiskFilter(e.target.value)}
                    >
                        <option value="All">Risk: All</option>
                        <option value="Critical">Risk: Critical</option>
                        <option value="High">Risk: High</option>
                        <option value="Medium">Risk: Medium</option>
                        <option value="Low">Risk: Low</option>
                    </select>

                    <select
                        className="filter-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="Newest">Sort: Newest</option>
                        <option value="Risk">Sort: Risk Level</option>
                    </select>
                </div>
            </div>

            {/* Action Toolbar */}
            <div className="investigation-actions">
                <button className="action-btn primary">🚨 Create Incident</button>
                <button className="action-btn">📂 Add to Case</button>
                <button className="action-btn">🔗 Correlate Events</button>
                <button className="action-btn">⬇️ Export Logs</button>
            </div>

            {/* Results Table */}
            <div className="results-table-container">
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>User</th>
                            <th>Result</th>
                            <th>Source IP</th>
                            <th>Port</th>
                            <th>Host</th>
                            <th>Source</th>
                            <th>Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((row) => (
                                <tr
                                    key={row.id}
                                    className={selectedLogId === row.id ? 'selected-row' : ''}
                                    onClick={() => onLogSelect(row)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <td style={{ color: '#888' }}>{row.time}</td>
                                    <td style={{ color: '#fff', fontWeight: '500' }}>{row.user}</td>
                                    <td className={row.result === 'Fail' ? 'result-fail' : 'result-success'}>
                                        {row.result}
                                    </td>
                                    <td>{row.ip}</td>
                                    <td>{row.port}</td>
                                    <td>{row.host}</td>
                                    <td><span className="source-badge">{row.source}</span></td>
                                    <td>
                                        <span className={`risk-badge risk-${row.risk.toLowerCase()}`}>
                                            {row.risk}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No logs found matching your criteria.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
