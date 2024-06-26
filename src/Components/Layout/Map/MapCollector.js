import React, {useState , useEffect} from 'react'
import './mapCollector.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import TurkiyeAday from './turkiyeAday.js';
import TurkiyeParti from './turkiyeParti.js';
import Cumhur from '../../../Images/Logos/logoCumhur.jpg'
import TBMM from '../../../Images/Logos/TBMM.jpg'
import axios from 'axios'
import Loading from '../../../Images/loading.gif'

function MapCollector() {

  function getLastWord(str) {
    const words = str.split(' ');
    return words[words.length - 1];
  }
  
  const [adayData, setAdayData] = useState([]);
  const [adayWinners,setAdayWinners] = useState([]);
  const [partiData, setPartiData] = useState([]);
  const [partiWinners,setPartiWinners] = useState([]);
  const [loadingParti, setLoadingParti] = useState(false);
  const [loadingAday, setLoadingAday] = useState(false);
  const [page,setPage] = useState("aday")
  const[adayColor,setAdayColor] = useState('danger')
  const[partiColor,setPartiColor] = useState('light')

  useEffect(() => {
    const apiBaseUrl = process.env.REACT_APP_API_URI;
    const fetchDataParti = async () => {
      try {

        setLoadingParti(true);
        
        const partiResponse = await axios.get(`${apiBaseUrl}/api/Oylar/GetTurkiyePartiOranEachIl`);
        setPartiData(partiResponse.data);

        const winnerPartiResponse = await axios.get(`${apiBaseUrl}/api/Oylar/PartiWinOfTimesIl`);
        setPartiWinners(winnerPartiResponse.data);

        


      } catch (err) {
        console.log(err);
      }finally {
        setLoadingParti(false);  // Stop loading
      }
    };

    const fetchDataAday = async () => {
      try {

        setLoadingAday(true);

        const adayResponse = await axios.get(`${apiBaseUrl}/api/Oylar/GetTurkiyeAdayOranEachIl`);
        setAdayData(adayResponse.data);

        const winnerAdayResponse = await axios.get(`${apiBaseUrl}/api/Oylar/AdayWinTimesOfIl`);
        setAdayWinners(winnerAdayResponse.data);
        

      } catch (err) {
        console.log(err);
      }finally {
        setLoadingAday(false);  // Stop loading
      }
    };


    fetchDataAday();
    fetchDataParti();

  }, []);

    return (
      <div className='map-collector-wrapper mb-5' style={{width:'100%'}}>
        <Card style={{border:'none', paddingBottom:'20px'}} >
                <Row>
                    <Col xs={6} style={{ paddingRight:'0'}}>
                        <Button className='button-map-collector' onClick={() => { setPage("aday"); setAdayColor("danger"); setPartiColor("light")}} variant={adayColor}>
                            <Card.Img className='hide-on-small-screen map-image' src={Cumhur}></Card.Img>
                            <span className='fw-bold presidency-text'>2028 Cumhurbaşkanlığı Seçimi</span>
                        </Button>
                        
                    </Col>
                    <Col xs={6} style={{paddingLeft:'0'}}>
                    <Button className='button-map-collector' onClick={() => { setPage("parti"); setAdayColor("light"); setPartiColor("primary")}} variant={partiColor}>
                        <Card.Img className='hide-on-small-screen map-image' src={TBMM}></Card.Img>
                        <span className='fw-bold presidency-text'>2028 Milletvekili Seçimi</span>
                        </Button>
                    </Col>
                </Row>

                <div className='aday-map'>
                {page === 'aday' ? 
                (loadingAday ? 
                (<div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={Loading} alt="Loading..." />
                  </div>) : 
                  (
                  <>
                  <TurkiyeAday posts={adayData} />
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      {adayWinners.map((winner,index) => (
                      <React.Fragment key={index}>
                        <div className='aday-names' style={{display:'flex',alignItems:'inherit',marginRight:'20px'}}>
                          <div className={getLastWord(winner.adayName) + 'Color'} style={{width:'15px' , height:'15px' , borderRadius:'50%', marginRight:'10px'}}></div>
                          <span>{getLastWord(winner.adayName)}</span>
                        </div>
                      </React.Fragment>))}
                    </div>
                    </>
                    )) : null}
                </div>

                <div className='parti-map'>
                {page === 'parti' ? 
                (loadingParti ? 
                (<div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={Loading} alt="Loading..." />
                  </div>) : 
                  (
                  <>
                  <TurkiyeParti posts={partiData} />
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexWrap:'wrap', width:'100%'}}>
                      {partiWinners.map((winner,index) => (
                      <React.Fragment key={index}>
                        <div className='parti-names' style={{display:'flex',alignItems:'inherit',marginRight:'20px'}}>
                          <div className={getLastWord(winner.partiName) + 'Color'} style={{width:'15px' , height:'15px' , borderRadius:'50%', marginRight:'10px'}}></div>
                          <span>{getLastWord(winner.partiName)}</span>
                        </div>
                      </React.Fragment>))}
                    </div>
                    </>
                    )) : null}
                </div>

                
                
        
        </Card>
        
      </div>
    )
}

export default MapCollector
