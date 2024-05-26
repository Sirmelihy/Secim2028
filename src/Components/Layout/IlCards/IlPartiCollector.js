import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
        <div className='d-flex justify-content-center'>
            <Col xs ={4} sm={4} md={3} lg={2} xl={2} xxl={2} style={{padding:'15px'}}>
              <a href='/#'>
              <Button className='rounded-pill w-100' variant='primary'>
                Tümünü Gör
              </Button>
              </a>
            </Col>
        </div>
      </div>
    )
  }
}
