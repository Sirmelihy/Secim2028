import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiLineVerticalThin  } from "react-icons/pi";
import './alliance.css'

export default class alliance extends Component {
  render() {
    const {adayColor,adayName,adayVoteRate,adayVoteCount,adayVoteRateString} = this.props;
    const widthPercentage = adayVoteRate + '%';

    return (
        <div className='alliance-obj'>
        <Row className='align-items-center'>
          <Col xs = {12} >
              <h5 className='alliance-title'>{adayName}</h5>
              <div className='alliance-content'>
                <span style={{marginRight:'5px'}}>{adayVoteRateString}</span>
                <PiLineVerticalThin />
                <span className='alliance-vote-count'>{adayVoteCount} oy</span>
                  
              </div>
              <div className='gray-line'>
                    <div className={'alliance-oy-line ' +  adayColor} style={{width:widthPercentage}}></div>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
}
