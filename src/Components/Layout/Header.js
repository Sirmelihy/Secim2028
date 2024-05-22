import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Logo from '../../Images/headerLogo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='w-100' style={{ backgroundColor: '#f54033' }}>
        <div className='container header-main'>
            <img src={Logo} style={{ width: '12%' }} alt='test' />
            <div className='right-header-content'>
                <h1 className='text-light fw-bold'>SEÇİM 2028</h1>
                <div className='ms-auto'>
                <span className='text-light'>Veri Kaynağı:<a className='text-light' href='https://secim202820240512205232.azurewebsites.net/swagger/index.html'> Secim2028 API</a></span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
