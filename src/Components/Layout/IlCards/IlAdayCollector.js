import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IlAday from './IlAday.js';


 class IlAdayCollector extends Component {
  render() {

    const iller = [34,6,35,16,7,1]

    return (
      <div className='mb-5'>
        <Row>
          {iller.map((il,index) => 
          <Col lg={4} key={index}>
            <IlAday
            ilNumber={il}
            />
            
          </Col>
          )}
        </Row>
      </div>
      
    )
  }
}
export default IlAdayCollector;
