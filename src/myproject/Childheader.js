import React from 'react'
import './childheader.css';
import grocery from './grocery.png';
import Mobiles from './mobiles.png';
import fashion from './fashion.png';
import electronics from './electronics.png';
import home from './home.png';
import appliance from './appliance.png';
import travells from './travells.png';
import topoffers from './topoffers.png';
import beautytoy from './beautytoy.png';
import twowheelers from './twowheelers.png';

function Childheader() {
  return (
    <div className='childeheader-container'>
      <ul>
        <li key={1}><img src={grocery} /><h1 className='subheader-h1'>Grocery</h1></li>
        <li key={2}><img src={Mobiles} /><h1 className='subheader-h1'>Mobiles</h1></li>
        <li key={3}><img src={fashion} /><h1 className='subheader-h1'>Fashion</h1></li>
        <li key={4}><img src={electronics} /><h1 className='subheader-h1'>Electronics</h1></li>
        <li key={5}><img src={home} /><h1 className='subheader-h1' style={{ "paddingLeft": "27px" }}>Home</h1></li>
        <li key={6}><img src={appliance} /><h1 className='subheader-h1'>Appliances</h1></li>
        <li key={7}><img src={travells} /><h1 className='subheader-h1'>Travel</h1></li>
        <li key={8}><img src={topoffers} /><h1 className='subheader-h1'>Top Offers</h1></li>
        <li key={9} ><img src={beautytoy} /><h1 className='subheader-h1'>Beauty,Toys</h1></li>
        <li key={10}><img src={twowheelers} /><h1 className='subheader-h1'>2-Wheelers</h1></li>
      </ul>
    </div>
  )
}

export default Childheader
