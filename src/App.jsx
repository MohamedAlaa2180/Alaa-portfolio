import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';
import Layout from './components/Layout';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

// Analytics wrapper component
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (analytics) {
      // Log page view
      logEvent(analytics, 'page_view', {
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router basename="/Alaa-portfolio">
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

