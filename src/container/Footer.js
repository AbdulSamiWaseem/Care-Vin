import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
    return (
        <div>
            <div className='footer-bar'></div>
            <div className='footer pt-5 pb-5'>
                <img style={{ width: "12rem" }} src='https://www.konnectplugins.com/carevin/images/footer-logo.png' alt='careVin' />
                <h3 style={{ color: "#DDDDDD", marginBottom: "2rem", paddingTop: "0.75rem", paddingBottom: "2rem", borderBottom: "2px solid #1F5117" }}>© copy rights 2018</h3>
                <div className='links'>
                    <a onClick={() => { window.open('https://www.facebook.com/') }}><FaFacebookF /></a>
                    <a onClick={() => { window.open('https://www.twitter.com/') }}><FaTwitter /></a>
                    <a onClick={() => { window.open('https://www.linkedin.com/') }}><FaLinkedinIn /></a>
                    <a onClick={() => { window.open('https://www.youtube.com/') }}><TfiYoutube /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer
