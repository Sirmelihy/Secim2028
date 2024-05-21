import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IlAday from './IlAday.js';


 class IlAdayCollector extends Component {
  render() {


    return (
      <div className='mb-5'>
        <Row>
          <Col lg={4}>
              <IlAday
              key={34}
              ilNumber ={34}
          />
          </Col>
          <Col lg={4}>
              <IlAday
              key={6}
              ilNumber ={6}
              />
          </Col>
          <Col lg={4}>
              <IlAday
              key={35}
              ilNumber ={35}
              />
          </Col>
          <Col lg={4}>
              <IlAday
              key={16}
              ilNumber ={16}
          />
          </Col>
          <Col lg={4}>
              <IlAday
              key={7}
              ilNumber ={7}
              />
          </Col>
          <Col lg={4}>
              <IlAday
              key={1}
              ilNumber ={1}
              />
          </Col>
        </Row>
      </div>
      
    )
  }
}
export default IlAdayCollector;
