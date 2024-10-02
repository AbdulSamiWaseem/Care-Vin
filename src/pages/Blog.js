import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-header d-flex align-items-center justify-content-center'>
        <h1 className="d-flex justify-content-center align-items-center">Blog</h1>
        <p><Link to="/"><IoHomeOutline color='#FFAA18' size={20} /></Link> / Blog</p>
      </div>
      <div className='blog-row'>
        <div className='blog-col-1 p-4'>
          <div className="card blog-card">
            <div className='position-relative w-100'>
              <img src="https://www.konnectplugins.com/carevin/images/blog1.jpg" className="card-img-top w-100" alt="child-image" />
              <p className="position-absolute top-30 start-40 translate-start" style={{ backgroundColor: "#86C417" }}>Tips</p>
            </div>
            <div className="card-body ">
              <h5 className="card-title text-start pt-0" style={{ color: "#86C417" }}>Ask an Expert: How to find the right school</h5>
              <p className="card-text fs-6" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card blog-card" >
            <img src="https://www.konnectplugins.com/carevin/images/blog2.jpg" className="card-img-top w-100" alt="child-image" />
            <div className="card-body">
              <h5 className="card-title text-start pt-0" style={{ color: "#FA3664" }}>Ask an Expert: How to find the right school</h5>
              <p className="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card blog-card">
            <img src="https://www.konnectplugins.com/carevin/images/blog3.jpg" className="card-img-top w-100" alt="child-image" />
            <div className="card-body">
              <h5 className="card-title text-start pt-0" style={{ color: "#746ECB" }}>Ask an Expert: How to find the right school</h5>
              <p className="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
        <div className='blog-col-2 p-4 mr-4 pt-0'>
          <div className='blog-row-1 m-4 w-100'>
            <h2 className='text-start p-2'>Get Connected</h2>
            <div className='blog-links p-3 d-flex justify-content-start'>
              <a className="p-2" onClick={() => { window.open('https://www.facebook.com/') }}><FaFacebookF /></a>
              <a className="p-2" onClick={() => { window.open('https://www.twitter.com/') }}><FaTwitter /></a>
              <a className="p-2" onClick={() => { window.open('https://www.linkedin.com/') }}><FaLinkedinIn /></a>
              <a className="p-2" onClick={() => { window.open('https://www.youtube.com/') }}><TfiYoutube /></a>
            </div>
          </div>
          <div className='blog-row-2 m-4 w-100'>
            <h2 className=' text-start p-2'>Recent Post</h2>
            <div className='post'>
              <h5 className='text-start p-2' style={{ color: "#746ECB" }}>Two Ways to Make Sure Kids Stay Safe Around junk foods</h5>
              <p className='text-start ps-2' style={{ color: "#3E5569" }}>July 7, 2018</p>
            </div>
            <div className='post'>
              <h5 className='text-start p-2' style={{ color: "#FE559B" }}>Ask an Expert: How to find the right school</h5>
              <p className='text-start ps-2' style={{ color: "#3E5569" }}>June 14, 2018</p>
            </div>
            <div className='post'>
              <h5 className='text-start p-2' style={{ color: "#86C417" }}>Ten Nostalgic Easy Kids Crafts from your Childhood</h5>
              <p className='text-start ps-2' style={{ color: "#3E5569" }}>Mar 30, 2018</p>
            </div>

          </div>
          <div className='blog-row-3 card m-4 w-100'>
                <div className="card-body blog-card2">
                  <h5 className="card-title fs-3 text-start" style={{color:"#3E5569"}}>Special title treatment</h5>
                  <p className="card-text fs-5" style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus dolor eget commodo facilisis. Fusce vestibulum purus in suscipit egestas. Praesent accumsan porttitor orci, eu molestie neque pharetra et.</p>
                  <a href="#" className="btn btn-dark">View</a>
                </div>
          </div>
          <div className='blog-row-4 m-4 w-100'>
            <h2 className=' text-start p-2'>Tags</h2>
            <div className='tags'>
              <p>Childhood</p>
              <p>Kids</p>
              <p>School</p>
              <p>Play School</p>
              <p>Facilities</p>
              <p>Uniform</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
