// import './App.css';
import './apper.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HDRCards from './Components/hdrCards';
import AdayCollector from './Components/adayCollector.js';
import AllianceCollector from './Components/allianceCollector.js';
import Turkiye from './Components/MapCollector.js';
import IlAdayCollector from './Components/IlAdayCollector.js';
import MVResults from './Components/MVResults.js'
import IlPartiCollector from './Components/IlPartiCollector.js'
import Header from './Components/Layout/Header.js'
import Fot from './Components/Layout/Fot.js'


function App() {
  return (
    <div className="App">
      <Header/>
        <div className="container">
        
          <HDRCards/>
            <Row>
              <Col lg={6}>
                <AdayCollector/>
              </Col>
              <Col lg={6}>
              <AllianceCollector/>
              </Col>
            </Row>

          <div style={{display:'flex', justifyContent:'center'}}>
          <Turkiye/>
          </div>

          <IlAdayCollector/>
          <MVResults/>

          <IlPartiCollector/>
          


        </div>
        <Fot/>
    </div>
  );
}

export default App;
