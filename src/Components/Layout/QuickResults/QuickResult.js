import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdayCollector from './adayCollector.js';
import AllianceCollector from './allianceCollector.js';

export default class QuickResult extends Component {
  render() {
    return (
      <div className='mb-3'>
        <Row>
              <Col lg={6}>
                <AdayCollector/>
              </Col>
              <Col lg={6}>
              <AllianceCollector/>
              </Col>
            </Row>
      </div>
    )
  }
}
