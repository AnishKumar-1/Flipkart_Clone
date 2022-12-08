import React from 'react'
import './loginHover.css';
import { CgProfile } from 'react-icons/cg';
import { FcPlus } from 'react-icons/fc';
import { TbBorderStyle2 } from 'react-icons/tb';
import { RiHeartFill } from 'react-icons/ri';
import { GiWantedReward } from 'react-icons/gi';
import { MdAccountBalanceWallet } from 'react-icons/md';

function LoginHover() {
    return (
        <div className='outerdiv'>
            <div className='paragraph_login_hover'>    
              <p className='p1'>New customer ?</p>
              <p className='p2'>Sing Up</p>
            </div>
            <ul className='list-group'>
                <li key={1} className="list-group-item"><CgProfile className='profile'/>&nbsp; My Profile</li>
                <li key={2}  className="list-group-item"><FcPlus className='profile '/> &nbsp; Flipkart Plus Zone</li>
                <li key={3}  className="list-group-item"><TbBorderStyle2 className='profile '/>&nbsp; Orders</li>
                <li key={4}  className="list-group-item"><RiHeartFill className='profile '/>&nbsp; Wishlist</li>
                <li key={5}  className="list-group-item"><GiWantedReward className='profile '/>&nbsp; Rewards</li>
                <li key={6}  className="list-group-item"><MdAccountBalanceWallet className='profile'/>&nbsp; Gift Cards</li>
            </ul>
        </div>
    )
}

export default LoginHover
