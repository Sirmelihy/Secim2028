import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PiLineVerticalThin  } from "react-icons/pi";
import './aday.css'

export default class aday extends Component {
  render() {
    const {adayImageUrl,adayColor,adayName,adayVoteRate,adayVoteCount,adayVoteRateString} = this.props;
    const widthPercentage = adayVoteRate + '%';
    return (
        <div className='aday-obj'>
        <Row className='align-items-center'>
          <Col xs = {2}>
          <Card.Img className={adayColor} src = {adayImageUrl} style= {{maxWidth:'500px' , borderRadius:'50%'}}/>
          </Col>

          <Col xs = {10} >
              <h5 className='aday-title'>{adayName}</h5>
              <div className='aday-content'>
                <span style={{marginRight:'5px'}}>{adayVoteRateString}</span>
                <PiLineVerticalThin />
                <span className='aday-vote-count'>{adayVoteCount} oy</span>
                  
              </div>
              <div className='gray-line'>
                    <div className={'oy-line ' +  adayColor} style={{width:widthPercentage}}></div>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
}
