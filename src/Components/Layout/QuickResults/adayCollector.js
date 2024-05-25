import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './adayCollector.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CumhurLogo from '../../../Images/Logos/logoCumhur.jpg'
import Aday from './aday.js'
import axios from 'axios'




class adayCollector extends Component {

  constructor(props) {
    super(props);
    
      this.state = {
        posts : []
     }
}

componentDidMount() {
  axios.get('https://secim202820240512205232.azurewebsites.net/api/Oylar/GetTurkiyeAdayOyOran')
  .then(response => {
      console.log(response)
      this.setState({posts : response.data})
  })
  .catch(error => {
      console.log(error)
  })
}

  render() {

    function getLastWord(str) {
      const words = str.split(' ');
      return words[words.length - 1];
    }

    const {posts} = this.state

    return (
      <div className='wrapper-aday-collector'>
        <Card className='wrapper-card'>
            <Card.Header style={{padding:'25px'}}>
                <Row className='align-items-center' >
                    <Col xs={2} style={{display:'flex', justifyContent:'center'}} >
                        <Card.Img className='aday-card-image' src = {CumhurLogo}/>
                    </Col>
                    <Col xs = {10}>
                            <h3>2028 Cumhurbaşkanlığı Seçimi</h3>
                    </Col>
                </Row>
            </Card.Header>

            
            <Card.Body style={{paddingBottom:'5%' ,}}>
              <div style={{marginTop:'0px'}}>

              {posts.map((posts) => 
                <Aday
                key= {posts.aday.adayId}
                adayImageUrl = {require(`../../../Images/Candidates/${getLastWord(posts.aday.adayAdi)}.png`)}
                adayColor = {getLastWord(posts.aday.adayAdi) + 'Color'}
                adayName = {posts.aday.adayAdi}
                adayVoteRate = {posts.oyOrani}
                adayVoteRateString = {posts.yuzdeOyOrani}
                adayVoteCount = {posts.oySayisi}
                />
              )}
              </div>
            </Card.Body>
            
        </Card>
      </div>
    )
  }
}

export default adayCollector;