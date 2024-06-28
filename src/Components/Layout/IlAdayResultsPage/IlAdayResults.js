import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IlAday from '../IlCards/IlAday.js';

 function IlAdayResults() {
  return (
    <div className='mt-5'>
        <h1 className='text-light text-center mb-5'>İL ADAY SONUÇLARI</h1>
        <div className='mb-5'>
        <Row>
        {Array.from({ length: 81 }, (_, index) => (
                <Col lg={4} key={index}>
                    <IlAday
                        ilNumber={index+1}
                    />
                </Col>
          ))}
        </Row>
        </div>
    </div>
  )
}export default IlAdayResults;
