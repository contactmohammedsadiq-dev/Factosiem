import { useState } from 'react';
import './SearchExplorer.css';

export default function SearchExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [isQueryValid, setIsQueryValid] = useState(true);
  const [executionTime, setExecutionTime] = useState(null);
  const [resultCount, setResultCount] = useState(5);

  const sampleEvents = [
    { time: '2025-01-28 14:32:45', source: '192.168.1.105', user: 'jsmith', action: 'login_success', status: 'low' },
    { time: '2025-01-28 14:31:22', source: '192.168.1.205', user: 'mdavis', action: 'file_access', status: 'medium' },
    { time: '2025-01-28 14:30:18', source: '10.0.0.50', user: 'system', action: 'process_start', status: 'low' },
    { time: '2025-01-28 14:29:01', source: '192.168.1.150', user: 'ajones', action: 'failed_login', status: 'high' },
    { time: '2025-01-28 14:27:45', source: '10.0.1.20', user: 'rbrown', action: 'data_exfil_attempt', status: 'critical' },
  ];

  // SPL Commands reference
  const splCommands = {
    search: 'search - Find events matching conditions',
    stats: 'stats - Calculate statistics (count, avg, sum, max, min)',
    timechart: 'timechart - Create time-based charts',
    top: 'top - Find most frequent values',
    fields: 'fields - Select specific fields',
    rename: 'rename - Rename fields',
    dedup: 'dedup - Remove duplicate events',
    eval: 'eval - Create new fields with calculations',
    where: 'where - Filter events by expression',
    table: 'table - Display results in table format'
  };

  // AI Query Suggestions
  const aiSuggestions = [
    { query: 'source=* status=critical | stats count by user', description: 'Find critical events by user' },
    { query: 'action=failed_login | timechart count by source', description: 'Track failed logins over time' },
    { query: 'action=data_exfil_attempt | dedup user | fields user, time, source', description: 'Identify unique users with exfil attempts' },
    { query: 'status=high OR status=critical | stats count, avg(time) by action', description: 'Analyze high-severity events' },
    { query: 'user=* action=* | top 10 source', description: 'Top 10 source IPs' },
  ];

  const validateSPLQuery = (query) => {
    if (!query.trim()) return true;
    const validPatterns = [
      /^\s*(source|action|user|status|time)=/,
      /\|\s*(stats|timechart|top|fields|dedup|eval|where|table)/,
      /\s*(AND|OR|NOT)\s+/i
    ];
    return validPatterns.some(pattern => pattern.test(query)) || query.length === 0;
  };

  const handleSearch = () => {
    const isValid = validateSPLQuery(searchQuery);
    setIsQueryValid(isValid);
    if (isValid) {
      setExecutionTime(Math.random() * 2 + 0.5);
      setShowAISuggestions(false);
    }
  };

  const applySuggestion = (suggestion) => {
    setSearchQuery(suggestion.query);
    setShowAISuggestions(false);
  };

  const applyQuickFilter = (filter) => {
    let query = searchQuery;
    switch(filter) {
      case 'critical':
        query = (query ? query + ' AND ' : '') + 'status=critical';
        break;
      case 'last24h':
        query = (query ? query + ' AND ' : '') + 'time >= -24h';
        break;
      case 'errors':
        query = (query ? query + ' AND ' : '') + 'status=high OR status=critical';
        break;
      default:
        break;
    }
    setSearchQuery(query);
  };

  const getSeverityColor = (status) => {
    const colors = {
      low: 'var(--severity-low)',
      medium: 'var(--severity-medium)',
      high: 'var(--severity-high)',
      critical: 'var(--severity-critical)'
    };
    return colors[status] || 'var(--text-secondary)';
  };

  return (
    <div className="search-explorer">
      <div className="search-header">
        {/* SPL Query Input */}
        <div className="spl-query-section">
          <div className="spl-label">SPL Query</div>
          <div className="search-bar-wrapper">
            <textarea
              className={`spl-input ${!isQueryValid ? 'error' : ''}`}
              placeholder="Enter SPL query (e.g., source=* status=critical | stats count by user)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsQueryValid(validateSPLQuery(e.target.value));
              }}
              spellCheck="false"
            />
            <button 
              className="search-btn"
              onClick={handleSearch}
              title="Execute SPL Query (Ctrl+Enter)"
            >
              ⚡ Execute
            </button>
            <button 
              className="ai-btn"
              onClick={() => setShowAISuggestions(!showAISuggestions)}
              title="AI Query Suggestions"
            >
              ✨ AI
            </button>
          </div>
          {!isQueryValid && <div className="query-error">❌ Invalid SPL syntax. Check query format.</div>}
          {executionTime && <div className="query-success">✓ Query executed in {executionTime.toFixed(2)}s ({resultCount} results)</div>}
        </div>

        {/* AI Suggestions Panel */}
        {showAISuggestions && (
          <div className="ai-suggestions-panel">
            <div className="ai-panel-header">
              <span>🤖 AI Query Suggestions</span>
              <button className="close-btn" onClick={() => setShowAISuggestions(false)}>✕</button>
            </div>
            <div className="suggestions-list">
              {aiSuggestions.map((suggestion, idx) => (
                <div key={idx} className="suggestion-item">
                  <div className="suggestion-query">{suggestion.query}</div>
                  <div className="suggestion-desc">{suggestion.description}</div>
                  <button 
                    className="use-suggestion-btn"
                    onClick={() => applySuggestion(suggestion)}
                  >
                    Use This Query
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPL Commands Reference */}
        <div className="spl-commands-section">
          <div className="commands-header">
            <span>📚 SPL Commands Reference</span>
          </div>
          <div className="commands-grid">
            {Object.entries(splCommands).map(([cmd, desc]) => (
              <div key={cmd} className="command-item">
                <div className="command-name">{cmd}</div>
                <div className="command-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Filters & Tools */}
        <div className="search-filters">
          <span className="filter-label">Quick Filters:</span>
          <button className="filter-btn" onClick={() => applyQuickFilter('critical')}>🔴 Critical Only</button>
          <button className="filter-btn" onClick={() => applyQuickFilter('errors')}>⚠️ Errors & Alerts</button>
          <button className="filter-btn" onClick={() => applyQuickFilter('last24h')}>📅 Last 24h</button>
          <button className="filter-btn">📊 Save Search</button>
        </div>
      </div>

      {/* Results Section */}
      <div className="results-section">
        <div className="results-header">
          <span className="results-count">Results: {resultCount} events</span>
          {executionTime && <span className="execution-time">Executed in {executionTime.toFixed(2)}s</span>}
        </div>

        <div className="events-table">
          <div className="table-header">
            <div className="col-time">Time</div>
            <div className="col-source">Source IP</div>
            <div className="col-user">User</div>
            <div className="col-action">Action</div>
            <div className="col-status">Status</div>
          </div>
          {sampleEvents.map((event, idx) => (
            <div key={idx} className="table-row">
              <div className="col-time log-data">{event.time}</div>
              <div className="col-source log-data">{event.source}</div>
              <div className="col-user log-data">{event.user}</div>
              <div className="col-action log-data">{event.action}</div>
              <div className="col-status">
                <span 
                  className="severity-badge" 
                  style={{ color: getSeverityColor(event.status) }}
                >
                  {event.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
