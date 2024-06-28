import React, { Component } from 'react'
import './apper.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Common/Header.js'
import Fot from './Components/Common/Fot.js'
import IlAdayResults from './Components/Layout/IlAdayResultsPage/IlAdayResults.js'

export default class IlAdayPage extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
          <div className="container">
            <IlAdayResults/>
          </div>
          <Fot/>
      </div>
    )
  }
}
