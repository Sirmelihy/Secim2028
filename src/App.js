// import './App.css';

import { Routes, Route , BrowserRouter} from 'react-router-dom';
import LandingPage from "./LandingPage";
import IlAdayPage from './IlAdayPage';
import IlPartiPage from './IlPartiPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/il-il-sonuclar-aday" element={<IlAdayPage/>}/>
        <Route path="/il-il-sonuclar-parti" element={<IlPartiPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
