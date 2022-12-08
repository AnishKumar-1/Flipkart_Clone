import React from 'react'
import toys from './toys-removebg-preview.png';
import cycle from './cycle-removebg-preview.png';
import printer from './butter-removebg-preview.png';
import accessories from './football-removebg-preview.png';
import monitor from './dumbbells-removebg-preview.png';
import hairdryer from './bat-removebg-preview.png';
import './beauty.css';
function Beauty() {
  return (
    <div className='beauty-container'>
      <div className='sideImage2'>
        <h1>Beauty,Toys & More</h1>
        <button>View All</button><br />
        <img src={toys}></img>
      </div>

      <div className='sideItem2-one'>
        <img src={cycle}></img><br />
        <h1>Premium Non-Geared Cycle</h1>
        <h2>Upto 40% Off</h2>
        <p>Explore Now!</p>
      </div>
      <div className='sideItem2-two'>
        <img src={printer}></img><br />
        <h1>Peanut Butter</h1>
        <h2>Upto 20% Off</h2>
        <p>Explore Now</p>
      </div>
      <div className='sideItem2-three'>
        <img src={accessories}></img><br />
        <h1>Football</h1>
        <h2>Upto 30% Off</h2>
        <p>Buy Now!</p>
      </div>
      <div className='sideItem2-four'>
        <img src={monitor}></img><br />
        <h1>Dumbbells</h1>
        <h2>From ₹2999</h2>
        <p>Buy Now!</p>
      </div>
      <div className='sideItem2-five'>
        <img src={hairdryer}></img><br />
        <h1>Cricket Bat</h1>
        <h2>Upto 40% Off</h2>
        <p>Explore Now</p>
      </div>
    </div>
  )
}

export default Beauty
