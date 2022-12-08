import React from 'react'
import { BsFillBagFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { AiTwotoneGift } from 'react-icons/ai';
import { RiQuestionLine } from 'react-icons/ri';
import './footer.css';
function Footer() {
  return (
    <>
    <div className='footer-container'>
    <ul className='first-ul'>
        <h1>ABOUT</h1>
        <li key={1}>Contact Us</li>
        <li key={2}>About Us</li>
        <li key={3}>Careers</li>
        <li key={4}>Flipkart Stories</li>
        <li key={5}>Press</li>
        <li key={6}>Flipkart</li>
        <li key={7}>Information</li>
    </ul>
    <ul className='second-ul'>
        <h1>HELP</h1>
        <li key={8}>Payments</li>
        <li key={9}>Shipping</li>
        <li key={10}>Cancellation</li>
        <li key={11}>Return</li>
        <li key={12}>Report</li>
     
    </ul>
    <ul className='third-ul'>
        <h1>POLICY</h1>
        <li key={13}>Return Policy</li>
        <li key={14}>Terms Of Use</li>
        <li key={15}>Security</li>
        <li key={16}>Privacy</li>
        <li key={17}>Sitemap</li>
        <li key={18}>EPR Compliance</li>
       
    </ul>
    <ul className='four-ul'>
        <h1>SOCIAL</h1>
        <li key={19}>Facebook</li>
        <li key={20}>Twitter</li>
        <li key={21}>YouTube</li>
      
    </ul>
    
      <div className='address'>
      <h1>Mail Us:</h1>
        <p>Flipkart Internet Private Limited,<br/>
        Buildings Alyssa,Begonia &<br/>
    Clove Embassy Tech Vilage,<br/>
        Outer Ring Road,Devarabeesanahalli Village,<br/>
        Benglaru,560103,<br/>karnataka india</p>
      </div>
   
    
    </div>
    <div className='footer-last'>
      <ul>
        <li key={56}><BsFillBagFill className='selling'/> Become a seller</li>
        <li key={57}><AiFillStar className='selling'/> advertise</li>
        <li key={58}><AiTwotoneGift className='selling'/> gift cards</li>
        <li key={59}><RiQuestionLine className='selling'/> help center</li>
      <p style={{"color":"white","paddingTop":"39px"}}> © 2007-2022 Flipkart.com</p>
      </ul>
      </div>
      </>
  )
}

export default Footer
