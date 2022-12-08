import React from 'react'
import headphoneimage from './winter.jpg';
import camera from './cap.jpg';
import printer from './menssweetshirt-removebg-preview.png';
import accessories from './flask-removebg-preview.png';
import monitor from './track.jpg';
import hairdryer from './jacket-removebg-preview.png';
import './winter.css';

function Winter() {
  return (
    <div className='winter-container'>
      <div className='sideImage3'>
        <h1>Winter Essentials</h1>
        <button>View All</button><br />
        <img src={headphoneimage}></img>
      </div>

      <div className='sideItem3-one'>
        <img src={camera}></img><br />
        <h1>Winter Cap</h1>
        <h2>From ₹299</h2>
        <p>Buy Now!</p>
      </div>
      <div className='sideItem3-two'>
        <img src={printer}></img><br />
        <h1>Winter Sweeters</h1>
        <h2>Upto 40% Off</h2>
        <p>Explore Now</p>
      </div>
      <div className='sideItem3-three'>
        <img src={accessories}></img><br />
        <h1>Flask</h1>
        <h2>From ₹199</h2>
        <p>Buy Now!</p>
      </div>
      <div className='sideItem3-four'>
        <img src={monitor}></img><br />
        <h1>Track Pents</h1>
        <h2>From ₹399</h2>
        <p>Buy Now!</p>
      </div>
      <div className='sideItem3-five'>
        <img src={hairdryer}></img><br />
        <h1>Men's Jackets</h1>
        <h2>Upto 40% Off</h2>
        <p>Explore Now</p>
      </div>
    </div>
  )
}

export default Winter
