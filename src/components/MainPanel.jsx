import { MODULES } from '../constants/modules';
import { useState } from 'react';
import SettingsTab from './SettingsTab';
import AlertsPieChart from './AlertsPieChart';
import SearchInvestigate from './SearchInvestigate';
import AlertsDetection from './AlertsDetection';
import IncidentsWorkspace from './IncidentsWorkspace';
import DetectionEngineering from './DetectionEngineering';
import ThreatIntelligence from './ThreatIntelligence';
import AutomatedResponse from './AutomatedResponse';
import AnalyticsReporting from './AnalyticsReporting';
import UEBAModule from './UEBAModule';
import TicketingOrchestration from './TicketingOrchestration';
import './MainPanel.css';

export default function MainPanel({ module, selectedFeatureIdx, selectedLog, setSelectedLog, selectedAlert, setSelectedAlert, selectedIncident, setSelectedIncident }) {
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    if (module.id === 'telemetry') {
      return <SettingsTab />;
    } else if (module.id === 'analytics') {
      return (
        <AnalyticsReporting
          selectedFeatureIdx={selectedFeatureIdx}
        />
      );
    } else if (module.id === 'search') {
      return (
        <SearchInvestigate
          selectedLogId={selectedLog ? selectedLog.id : null}
          onLogSelect={setSelectedLog}
        />
      );
    } else if (module.id === 'alerts') {
      return (
        <AlertsDetection
          selectedAlertId={selectedAlert ? selectedAlert.id : null}
          onAlertSelect={setSelectedAlert}
        />
      );
    } else if (module.id === 'incidents') {
      return (
        <IncidentsWorkspace
          selectedIncident={selectedIncident}
          onIncidentSelect={setSelectedIncident}
        />
      );
    } else if (module.id === 'detection') {
      return (
        <DetectionEngineering
          selectedFeatureIdx={selectedFeatureIdx}
        />
      );
    } else if (module.id === 'threats') {
      return (
        <ThreatIntelligence
          selectedFeatureIdx={selectedFeatureIdx}
        />
      );
    } else if (module.id === 'response') {
      return (
        <AutomatedResponse
          selectedFeatureIdx={selectedFeatureIdx}
        />
      );
    } else if (module.id === 'behavior') {
      return (
        <UEBAModule
          selectedFeatureIdx={selectedFeatureIdx}
        />
      );
    } else if (module.id === 'ticketing') {
      return <TicketingOrchestration />;
    } else {
      return (
        <div className="content-section">
          <div className="section-title">Module Overview</div>
          <div className="info-grid">
            {module.metrics.map((metric, idx) => (
              <div key={idx} className="info-card">
                <div className="info-label">{metric.label}</div>
                <div className="info-value">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="panel-main">
      <div className="workspace-title">{module.features[selectedFeatureIdx]}</div>
      <div className="workspace-subtitle">Module workspace for {module.name}</div>
      {renderContent()}
    </div>
  );
}
