import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/app.css'
import Nav from './Nav';
import Resume from './Resume';
import Projects from './Projects';


function App() {
  return (
    <div className="app">
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
