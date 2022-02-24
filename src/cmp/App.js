import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/app.css'
import Nav from './Nav';
import Resume from './Resume';


function App() {
  return (
    <div className="app">
    <Nav />
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
