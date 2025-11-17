import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router basename="/Alaa-portfolio">
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

