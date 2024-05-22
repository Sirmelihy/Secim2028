import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IlParti from './IlParti.js';

export default class IlPartiCollector extends Component {
  render() {
    const iller = [34,6,35,16,7,1]
    return (
        <div className='mb-5'>
        <Row>
            {iller.map((il,index) => 
            <Col lg={4} key={index}>
            <IlParti
            key={il}
            ilNumber ={il}
        />
        </Col>
            )}
        </Row>
      </div>
    )
  }
}
