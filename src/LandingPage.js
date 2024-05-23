import React, { Component } from 'react'
import './apper.css';
import "bootstrap/dist/css/bootstrap.min.css"
import HDRCards from './Components/Layout/PoliticalPartyCards/HdrCards.js';
import Turkiye from './Components/Layout/Map/MapCollector.js';
import IlAdayCollector from './Components/Layout/IlCards/IlAdayCollector.js';
import MVResults from './Components/Layout/ParliamentaryResults/MVResults.js'
import IlPartiCollector from './Components/Layout/IlCards/IlPartiCollector.js'
import Header from './Components/Common/Header.js'
import Fot from './Components/Common/Fot.js'
import QuickResult from './Components/Layout/QuickResults/QuickResult.js';

export default class LandingPage extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
          <div className="container">
          
            <HDRCards/>
            <QuickResult/>
  
            <div style={{display:'flex', justifyContent:'center'}}>
            <Turkiye/>
            </div>
  
            <IlAdayCollector/>
            <MVResults/>
  
            <IlPartiCollector/>
            
  
  
          </div>
          <Fot/>
      </div>
    )
  }
}
