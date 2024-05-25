import React, { Component } from 'react'
import './IlParti.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'



class IlParti extends Component {
    constructor(props) {
        super(props);
        
          this.state = {
            posts : [],
            il :[],
            toplamOy : 0
         }
    }

    componentDidMount() {
        const {ilNumber} = this.props;

        axios.get('https://secim202820240512205232.azurewebsites.net/api/SecimIl/'+ilNumber)
        .then(response => {
            this.setState({il : response.data})
        })
        .catch(error => {
            console.log(error)
        })

        axios.get('https://secim202820240512205232.azurewebsites.net/api/Oylar/GetIlPartiOyOran?ilid='+ilNumber)
        .then(response => {
            let toplam = 0;
            response.data.forEach(post => {
                toplam += post.oySayisi;
            });
            console.log(response)
            this.setState({toplamOy : toplam})
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

    const {posts,il,toplamOy} = this.state;

    return (
        
        <div className='mb-3'>
            <Card className='wrapper-ilparti-card'>
                <Card.Body>
                    <div className='ilparti-manual-header mb-3'>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold' style={{fontSize:'20px'}}>{il.ilAdi}</span>
                            <span className='text-secondary'>{toplamOy + ' Kullanılan Oy'}</span>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ maxWidth:'100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell><span className='fw-bold'>Siyasi Parti</span></TableCell>
                                <TableCell align="center"><span className='fw-bold'>%</span></TableCell>
                                <TableCell align="right"><span className='fw-bold'>Oy</span></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {posts.slice(0,4).map((posts,index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>
                                    <div className='d-flex flex-row align-items-center'>
                                    <div className={getLastWord(posts.siyasiParti.siyasiPartiKisaltma) + 'Color mx-1'} style={{width:'10px', height:'10px' ,borderRadius:'50%'}}></div>
                                    {posts.siyasiParti.siyasiPartiKisaltma}
                                    </div>
                                    </TableCell>
                                <TableCell align="center">{posts.yuzdeOyOrani}</TableCell>
                                <TableCell align="right">{posts.oySayisi}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card.Body>
            </Card>
        </div>
    )
  }
}

export default IlParti;
