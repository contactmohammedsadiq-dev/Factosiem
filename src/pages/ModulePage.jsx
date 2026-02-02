import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MODULES } from '../constants/modules';
import FactosiemLogo from '../assets/factosiem-logo';
import LeftPanel from '../components/LeftPanel';
import MainPanel from '../components/MainPanel';
import RightPanel from '../components/RightPanel';
import './ModulePage.css';

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState(0);
  const [selectedLog, setSelectedLog] = useState(null);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const module = MODULES.find((m) => m.id === moduleId);

  if (!module) {
    return <div>Module not found</div>;
  }

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="module-container active">
      <div className="module-header">
        <button className="module-back-btn" onClick={handleBack}>
          ← Back
        </button>
        <div className="module-logo-header">
          <FactosiemLogo size={32} />
          <span className="module-logo-text">FACTOSIEM</span>
        </div>
        <div className="module-title">
          {module.icon} {module.name}
        </div>
      </div>
      <div className="module-content">
        <LeftPanel
          module={module}
          selectedFeatureIdx={selectedFeatureIdx}
          onFeatureSelect={setSelectedFeatureIdx}
        />
        <MainPanel
          module={module}
          selectedFeatureIdx={selectedFeatureIdx}
          selectedLog={selectedLog}
          setSelectedLog={setSelectedLog}
          selectedAlert={selectedAlert}
          setSelectedAlert={setSelectedAlert}
          selectedIncident={selectedIncident}
          setSelectedIncident={setSelectedIncident}
        />
        <RightPanel
          module={module}
          selectedLog={selectedLog}
          selectedAlert={selectedAlert}
          selectedIncident={selectedIncident}
        />
      </div>
    </div>
  );
}
