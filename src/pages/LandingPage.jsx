import { useNavigate } from 'react-router-dom';
import { MODULES } from '../constants/modules';
import fullLogo from '../assets/orlev-siem-full.png'; // Make sure this file exists!
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleModuleClick = (moduleId) => {
    navigate(`/module/${moduleId}`);
  };

  return (
    <div className="landing-container">
      <div className="landing-header">
        <div className="landing-logo-container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img 
            src={fullLogo} 
            alt="ORLEV-SIEM" 
            className="landing-full-logo"
            style={{ 
              maxWidth: '400px', 
              width: '100%', 
              height: 'auto',
              filter: 'drop-shadow(0 0 10px rgba(0, 245, 255, 0.3))' 
            }} 
          />
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
