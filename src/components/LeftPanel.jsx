import './LeftPanel.css';

export default function LeftPanel({ module, selectedFeatureIdx, onFeatureSelect }) {
  return (
    <div className="panel-left">
      <div className="module-overview">
        <div className="health-indicator">
          <div className="health-dot"></div>
          <div className="health-text">System Healthy</div>
        </div>
      </div>

      <div className="module-overview">
        <div className="overview-title">Key Metrics</div>
        <div className="metrics-grid">
          {module.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-trend">{metric.trend}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <div className="overview-title">Features</div>
        {module.features.map((feature, idx) => (
          <button
            key={idx}
            className={`feature-btn ${idx === selectedFeatureIdx ? 'active' : ''}`}
            onClick={() => onFeatureSelect(idx)}
          >
            {feature}
          </button>
        ))}
      </div>
    </div>
  );
}
