import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import HDRCard from './hdrCard';
import axios from 'axios'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";



 class hdrCards extends Component {
    constructor(props) {
        super(props);
        
          this.state = {
            posts : []
         }
    }

    componentDidMount() {
      const apiBaseUrl = process.env.REACT_APP_API_URI;
      axios.get(`${apiBaseUrl}/api/Oylar/GetTurkiyePartiOran`)
        .then(response => {
            console.log(response)
            this.setState({posts : response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
    const { posts } = this.state;
    

  // Check if posts array is not empty and has at least one element

  // Check if firstPost is not null before accessing its properties

    const scrollLeft = () => {
      const mediaScrollerLeft = document.querySelector('.mediaScroller');
      mediaScrollerLeft.scrollLeft -= 128; // Adjust scroll distance as needed
    };

    const scrollRight = () => {
      const mediaScrollerRight = document.querySelector('.mediaScroller');
      mediaScrollerRight.scrollLeft += 128; // Adjust scroll distance as needed
    };
    return (
        <div className='slc-container' >
            <button id='prev-slider' className='slider' onClick={scrollLeft}>
            <MdArrowBackIosNew />
            </button>
              <div className='mediaScroller'>
              {posts.map((posts) => 
                <HDRCard
                key = {posts.id}
                  partiAdi = {posts.siyasiParti.siyasiPartiKisaltma}
                  oyOrani = {posts.yuzdeOyOrani}
                  partiCss = {posts.siyasiParti.siyasiPartiKisaltma + 'header'}
                  partiImageUrl = {require(`../../../Images/PoliticalParties/${posts.siyasiParti.siyasiPartiKisaltma}.jpg`)}
                />
              )}
              </div>
            <button id='next-slider' className='slider' onClick={scrollRight}>
            <MdArrowForwardIos />
            </button>
        </div>
    )
  }
}


export default hdrCards;
