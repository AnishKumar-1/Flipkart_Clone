import React, { useState } from 'react'
import './headerbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import flipkart_logo from '../myproject/flipkart_logo.png';
import LoginHover from './LoginHover';
function Headerbar() {
   const[loginvar, setlogin]=useState(false);
    return (
        <>
        <div className='headerbar'>
            <div className='logo'>
                <h1><i>Flipkart</i></h1><br />
                <img src={flipkart_logo} className="flipkart_logo" style={{ "paddingTop": "5px" }} />
            </div>
            <div className='input-search'>
                <input type="text" placeholder="Search for products,brands and more" />
                <div className='searchbar'>
                    <AiOutlineSearch className='search-icon' />
                </div>
            </div>
            <button className='login-btn' onMouseOver={()=>setlogin(true)} onMouseOut={()=>setlogin(false)}>Login</button>
            <h2>Become a Seller</h2>
            <div className='h3-icon'>
                <h3>More</h3>
                <span className='more-icon'>
                    <AiOutlineDown />
                </span>
            </div>
            <div className='cart-h4'>
                <div className='cart'>
                    <AiOutlineShoppingCart />
                </div>
                <h4>Carts</h4>
            </div>
        </div>
        <div onMouseEnter={()=>setlogin(true)} onMouseLeave={()=>setlogin(false)}> 
           {loginvar?<LoginHover/>:null}
        </div>
     
        </>
    )
}

export default Headerbar
