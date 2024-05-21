import React, { Component } from 'react'
import './mvResults.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LinearProgress  from '@mui/material/LinearProgress'


 class MVResults extends Component {
    constructor(props) {
        super(props);
        
          this.state = {
            posts : []
         }
    }

    componentDidMount() {

        axios.get('https://localhost:7137/api/Oylar/GetTurkiyePartiOran')
        .then(response => {
            this.setState({posts : response.data})
        })
        .catch(error => {
            console.log(error)
        })
      }

  render() {
    const colorDictionary = (parti) => {
        const colors = {
            AKP: '#ea8512',
            CHP: 'red',
            MHP: '#150542',
            IP: '#c0d642',
            DEM: '#690361',
            DEVA: '#1f36cd',
            GEL: '#074210',
            SP: '#f44343',
            YRP: '#59391b',
            MEMLEKET: '#167fca',
            ZP: '#000306',
            LDP: '#0C4DA1'
          };

          return colors[parti] || 'gray';

      };
    const {posts} = this.state;

    return (
      <div className='w-100 mb-5'>
        <div className='mv-results-header d-flex justify-content-center p-2 mb-4'>
            <span className='text-white fs-4 fw-bold'>Milletvekili Seçim Sonuçları</span>
        </div>

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth:'100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><span className='fw-bolder'>Siyasi Parti</span></TableCell>
                            <TableCell><span className='fw-bolder d-flex justify-content-center'>Oy Oranı</span></TableCell>
                            <TableCell align="right"><span className='fw-bolder'>Toplam Oy</span></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((posts) => (
                        <TableRow
                        key={posts.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <div className='d-flex flex-row align-items-center'>
                                    <Avatar className='mx-3' alt="Remy Sharp" src={require(`../Images/${posts.siyasiParti.siyasiPartiKisaltma}.jpg`)}/>
                                    <span className='fw-bold'>{posts.siyasiParti.siyasiPartiKisaltma }</span>
                                    </div>
                                    </TableCell>
                                <TableCell><span className='fw-bold'>{posts.yuzdeOyOrani}</span><LinearProgress variant="determinate" value={posts.oyOrani}
                                sx={{
                                    '& .MuiLinearProgress-bar': {
                                      backgroundColor: colorDictionary(`${posts.siyasiParti.siyasiPartiKisaltma}`), // Replace with your custom color
                                    },
                                  }} /></TableCell>
                                <TableCell align="right"><span className='fw-bold'>{posts.oySayisi}</span></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        


      </div>
    )
  }
}

export default MVResults;