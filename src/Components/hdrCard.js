import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import './cardGeneral.css'
import './partyHeaders.css'



class hdrCard extends Component {
  render() {
    const {partiAdi,oyOrani,partiCss,partiImageUrl} = this.props;
    return (
      <div>
        <Card className='cardG'>
        <div className={partiCss}>
          <Card.Header className='cardheader white-text'>{partiAdi}</Card.Header>
        </div>
        <div className="imageCenterer">
          <Card.Img src={partiImageUrl} className='imageConf'></Card.Img>
        </div>
        <Card.Text className="mb-2 texter">{oyOrani}</Card.Text>
      </Card>
      </div>
    )
  }
}


export default hdrCard;
