import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import './header.css'
import Navbar from '../component/Navbar/Navbar';
import Slider from '../component/Slider/Slider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Header = () => {
    return (
            <div className='row w-100 m-0'>
                <div className='heading col-12 sticky-top'>
                    <div className='heading-image'>
                        <img className='h-100 w-100' src='https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-0c6ef0bdbf918a098bf915273cd4ca39cb1afd7992deef185dafe33b2c623b2f.svg' />
                    </div>
                </div>
                <div className='top'>
                    <div className='top-info'>
                        <div><CiMail color='#7AA93C' /> info@yourdomain.com</div>
                        <div><CiMobile4 color='#7AA93C' /> +91 12345 56789</div>
                    </div>
                    <div className='top-links'>
                        <a onClick={() => { window.open('https://www.facebook.com/') }}><FaFacebookF /></a>
                        <a onClick={() => { window.open('https://www.twitter.com/') }}><FaTwitter /></a>
                        <a onClick={() => { window.open('https://www.linkedin.com/') }}><FaLinkedinIn /></a>
                        <a onClick={() => { window.open('https://www.youtube.com/') }}><TfiYoutube /></a>
                    </div>
                </div>
                <Navbar />

            </div>
            

    )
}

export default Header
