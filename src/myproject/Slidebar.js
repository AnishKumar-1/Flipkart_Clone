import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
import fourth from './fourth.jpg';
import './Slidebar.css';
import { CarouselItem } from 'react-bootstrap';
function Slidebar() {
  return (
    <div className='slidebar-container'>
    <Carousel variant="dark">
      <CarouselItem interval={2000}>
      <img src={first}></img>
      </CarouselItem>
      <CarouselItem interval={2000}>
      <img src={second}></img>
        </CarouselItem>
        <CarouselItem interval={2000}>
        <img src={third}></img>
        </CarouselItem>
        <CarouselItem interval={2000}>
        <img src={fourth}></img>
        </CarouselItem>
    </Carousel>
     
     
    
     

    </div>
  )
}

export default Slidebar
