import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './allianceCollector.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TbmmLogo from '../../../Images/Logos/TBMM.jpg'
import Alliance from './alliance.js'
import axios from 'axios'

export default class allianceCollector extends Component {

  constructor(props) {
    super(props);
    
      this.state = {
        posts : []
     }
}

componentDidMount() {
  const apiBaseUrl = process.env.REACT_APP_API_URI;
  axios.get(`${apiBaseUrl}/api/Oylar/GetTurkiyeIttifakOran`)
  .then(response => {
      console.log(response)
      this.setState({posts : response.data})
  })
  .catch(error => {
      console.log(error)
  })
}

  render() {

    function getFirstWord(str) {
      const words = str.split(' ');
      return words[0];
    }

    const {posts} = this.state

    return (
        <div className='wrapper-aday-collector'>
        <Card className='wrapper-alliance-card'>
            <Card.Header style={{padding:'25px'}}>
                <Row className='align-items-center' >
                    <Col xs={2} style={{display:'flex', justifyContent:'center'}} >
                        <Card.Img className='aday-card-image' src = {TbmmLogo}/>
                    </Col>
                    <Col xs = {10}>
                            <h3>2028 Milletvekili Seçimi</h3>
                    </Col>
                </Row>
            </Card.Header>

            
            <Card.Body style={{paddingBottom:'5%' ,}}>

            {posts.map((posts) => 
                <Alliance
                key = {posts.ittifak.id}
                adayColor = {getFirstWord(posts.ittifak.ittifakName) +'Color'}
                adayName = {posts.ittifak.ittifakName}
                adayVoteRate = {posts.oyOrani}
                adayVoteRateString = {posts.yuzdeOyOrani}
                adayVoteCount = {posts.oySayisi}
                />
              )}

            </Card.Body>
            
        </Card>
      </div>
    )
  }
}
