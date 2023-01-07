
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import UploadButton from './components/UploadButton';
import UserLocation from './components/userLocation';
import Capture from './components/capture';
import Dashboard from './components/dashboard';
function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Dashboard/>} />
        <Route path='/upload' element={<Capture/>} />
    </Routes>
    </Router>
  );
}

export default App;
