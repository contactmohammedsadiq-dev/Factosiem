import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ModulePage from './pages/ModulePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/module/:moduleId" element={<ModulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
