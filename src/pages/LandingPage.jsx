import { useNavigate } from 'react-router-dom';
import { MODULES } from '../constants/modules';
import FactosiemLogo from '../assets/factosiem-logo';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleModuleClick = (moduleId) => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <div className="landing-container">
      <div className="landing-header">
        <div className="landing-logo-container">
          <FactosiemLogo size={48} />
          <div className="landing-logo-text">FACTOSIEM</div>
        </div>
        <div className="landing-subtitle">
          Enterprise Threat Intelligence • AI-Native Investigations • Real-Time Response
        </div>
      </div>
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Your SOC Platform</h1>
        <p className="landing-description">
          Unified threat investigation, detection, and response across your entire infrastructure. Select a module to begin.
        </p>

        <div className="tabs-grid">
          {MODULES.map((module) => (
            <div
              key={module.id}
              className="tab-card"
              onClick={() => handleModuleClick(module.id)}
            >
              <div className="tab-icon">{module.icon}</div>
              <div className="tab-name">{module.name}</div>
              <div className="tab-description">{module.description}</div>
              <div className="tab-badge">{module.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
