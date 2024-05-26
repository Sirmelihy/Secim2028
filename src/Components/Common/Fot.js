import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../Images/Logos/headerLogo.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




class Fot extends Component {
  render() {
    return (
      <div className='w-100' style={{ backgroundColor: '#0d0f0d', padding: '20px'}}>
        <Row className='w-100 text-center mb-3'>
            <Col lg={12}>
                <span className='text-light fs-4 fw-bold'>2028 SEÇİM SONUÇLARI</span>
            </Col>
        </Row>
        <div className='container d-flex align-items-center justify-content-between' style={{height:'100%'}}>
          <div style={{ maxWidth: '50%', wordWrap: 'normal' }}>
            <span className='text-light fw-bold'>Bu Projedeki hiçbir veri gerçeği yansıtmamaktadır.</span>
          </div>

          <img src={Logo} alt='logo' style={{width:'15%'}}></img>
        </div>
        <hr className='text-light'/>
        <div className='container d-flex justify-content-between'>
          <div style={{maxWidth:'70%'}}>
            <p className='text-secondary'>Copyright © 2024 - Melih Furkan OKUTAN</p>
          </div>
          <div>
            <a href='https://github.com/Sirmelihy/Secim2028' target="_blank" rel="noreferrer"><FaGithub style={{fontSize:'30px'}} /></a>
            <a href='https://www.linkedin.com/in/melihokutan5/' target="_blank" rel="noreferrer"><FaLinkedin className='ms-3' style={{fontSize:'30px'}} /> </a>
          </div>
            
        </div>
        
      </div>
    );
  }
}

export default Fot;
