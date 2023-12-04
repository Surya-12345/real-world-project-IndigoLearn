import React from 'react'
import "./index.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { BsBookHalf } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";



const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='logo'>
            <GiHamburgerMenu size={20} />
            <p className='logo-heading'>IndigoLearn</p>
        </div>
        <div className='n-links-list'>
            <ul className='n-links'>
                <li>BUY COURSES</li>
                <li>BUY PRODUCTS</li>
                <li>PROGRAMS</li>
                <li>FREE RESOURCES</li>
            </ul>
        </div>
        <button className='button'><FaUserCircle />Log In/Sign Up</button>
    </div>
    <div className='mobile-nav'>
        <div className='logo'>
            <GiHamburgerMenu size={15} />
            <p className='logo-heading'>IndigoLearn</p>
        </div>
        <div className='mobile-link-list'>
            <ul className='m-links'>
                <li><IoIosSchool size={22}/></li>
                <li><FaShoppingCart size={20}/></li>
                <li><MdEmojiEvents size={20}/></li>
                <li><BsBookHalf size={20}/></li>
            </ul>
        </div>
        <IoLogIn className='mobile-link-list' size={30} />
    </div>
    </>
  )
}

export default Header