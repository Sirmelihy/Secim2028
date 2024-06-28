import React, { Component } from 'react'
import './apper.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Common/Header.js'
import Fot from './Components/Common/Fot.js'
import IlPartiResults from './Components/Layout/IlPartiResultsPage/IlPartiResults.js';

export default class IlPartiPage extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
          <div className="container">
            <IlPartiResults/>
          </div>
          <Fot/>
      </div>
    )
  }
}
