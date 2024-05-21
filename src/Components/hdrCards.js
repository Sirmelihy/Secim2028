import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import HDRCard from '../Components/hdrCard';
import axios from 'axios'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


 class hdrCards extends Component {
    constructor(props) {
        super(props);
        
          this.state = {
            posts : []
         }
    }

    componentDidMount() {
        axios.get('https://localhost:7137/api/Oylar/GetTurkiyePartiOran')
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
              <FaArrowLeft />
            </button>
              <div className='mediaScroller'>
              {posts.map((posts) => 
                <HDRCard
                key = {posts.id}
                  partiAdi = {posts.siyasiParti.siyasiPartiKisaltma}
                  oyOrani = {posts.yuzdeOyOrani}
                  partiCss = {posts.siyasiParti.siyasiPartiKisaltma + 'header'}
                  partiImageUrl = {require(`../Images/${posts.siyasiParti.siyasiPartiKisaltma}.jpg`)}
                />
              )}
              </div>
            <button id='next-slider' className='slider' onClick={scrollRight}>
              <FaArrowRight />
            </button>
        </div>
    )
  }
}


export default hdrCards;
