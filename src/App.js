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


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <HDRCards/>
            <Row>
              <Col sm>
                <AdayCollector/>
              </Col>
              <Col sm>
              <AllianceCollector/>
              </Col>
            </Row>

          <div style={{display:'flex', justifyContent:'center'}}>
          <Turkiye/>
          </div>

          <IlAdayCollector/>
          


        </div>
          
        
        
      </header>
    </div>
  );
}

export default App;
