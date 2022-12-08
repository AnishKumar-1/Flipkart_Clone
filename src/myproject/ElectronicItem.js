import React from 'react'
import headphoneimage from './headphone.webp';
import camera from './camera-removebg-preview.png';
import printer from './printer2-removebg-preview.png';
import accessories from './camera_accessories-removebg-preview.png';
import monitor from './moniter3-removebg-preview.png';
import hairdryer from './hair_dryer-removebg-preview.png';
import './electronicItem.css';
function ElectronicItem() {
  return (
    <div className='electronicItem-container'>
      <div className='sideImage'>
        <h1>Best Of Electronics</h1>
        <button>View All</button><br />
        <img src={headphoneimage}></img>
      </div>

      <div className='sideItem-one'>
        <img src={camera}></img><br />
        <h1>Top Mirrorless Cameras</h1>
        <h2>Shop Now!</h2>
        <p>Canon,sony,fujifilm..</p>
      </div>
      <div className='sideItem-two'>
        <img src={printer}></img><br />
        <h1>Printers</h1>
        <h2>From ₹9999</h2>
        <p>HP</p>
      </div>
      <div className='sideItem-three'>
        <img src={accessories}></img><br />
        <h1>Accessories</h1>
        <h2>From ₹5555</h2>
        <p>Samsung</p>
      </div>
      <div className='sideItem-four'>
        <img src={monitor}></img><br />
        <h1>Monitors</h1>
        <h2>From ₹9999</h2>
        <p>Samsung</p>
      </div>
      <div className='sideItem-five'>
        <img src={hairdryer}></img><br />
        <h1>Hairdrayer</h1>
        <h2>From ₹399</h2>
        <p>Nova</p>
      </div>
    </div>
  )
}

export default ElectronicItem
