import React, { Component } from 'react'
import './IlAday.css'
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



class IlAday extends Component {
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

        axios.get('https://localhost:7137/api/SecimIl/'+ilNumber)
        .then(response => {
            this.setState({il : response.data})
        })
        .catch(error => {
            console.log(error)
        })

        axios.get('https://localhost:7137/api/Oylar/GetIlAdayOyOran?ilid='+ilNumber)
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
            <Card className='wrapper-iladay-card'>
                <Card.Body>
                    <div className='iladay-manual-header mb-3'>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold' style={{fontSize:'20px'}}>{il.ilAdi}</span>
                            <span className='text-secondary'>{toplamOy + ' Kullanılan Oy'}</span>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ maxWidth:'100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Aday</TableCell>
                                <TableCell align="middle">%</TableCell>
                                <TableCell align="right">Oy</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {posts.map((posts) => (
                                <TableRow
                                key={posts.aday.adayId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>
                                    <div className='d-flex flex-row align-items-center'>
                                    <div className={getLastWord(posts.aday.adayAdi) + 'Color mx-1'} style={{width:'10px', height:'10px' ,borderRadius:'50%'}}></div>
                                    {posts.aday.adayAdi}
                                    </div>
                                    </TableCell>
                                <TableCell align="middle">{posts.yuzdeOyOrani}</TableCell>
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

export default IlAday;
