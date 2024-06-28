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
        const apiBaseUrl = process.env.REACT_APP_API_URI;

        axios.get(`${apiBaseUrl}/api/Oylar/GetIlAdayOyOran?ilid=`+ilNumber)
        .then(response => {
            let toplam = 0;
            response.data.forEach(post => {
                toplam += post.oySayisi;
            });
            console.log(response)
            this.setState({toplamOy : toplam})
            this.setState({posts : response.data})
            console.log(response.data)
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

    const {posts,toplamOy} = this.state;

    return (
        
        <div className='mb-3'>
            <Card className='wrapper-iladay-card'>
                <Card.Body>
                    <div className='iladay-manual-header mb-3'>
                        <div className='d-flex flex-column'>
                            <span className='fw-bold' style={{fontSize:'20px'}}>{posts.length > 0 ? posts[0].ilAdi : 'No Data'}</span>
                            <span className='text-secondary'>{toplamOy + ' Kullanılan Oy'}</span>
                        </div>
                        <div className='d-flex flex-column mx-2'>
                            <span className='fw-bold' style={{fontSize:'20px'}}>{posts.length > 0 ? ((posts[0].ilID < 10) ? '0' + posts[0].ilID : posts[0].ilID) : 'No Data'}</span>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ maxWidth:'100%' }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell><span className='fw-bold'>Aday</span></TableCell>
                                <TableCell align="center"><span className='fw-bold'>%</span></TableCell>
                                <TableCell align="right"><span className='fw-bold'>Oy</span></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {posts.map((posts,index) => (
                                <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>
                                    <div className='d-flex flex-row align-items-center'>
                                    <div className={getLastWord(posts.aday.adayAdi) + 'Color mx-1'} style={{width:'10px', height:'10px' ,borderRadius:'50%'}}></div>
                                    {posts.aday.adayAdi}
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

export default IlAday;
