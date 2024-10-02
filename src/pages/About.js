import React from 'react'
import './about.css'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='about'>
      <h1 className="d-flex justify-content-center align-items-center">About Us</h1>
      <p><Link to="/"><IoHomeOutline color='#3F701A' size={20} /></Link> / About Us</p>

      <div className="card m-0" style={{ border: "none", display: "flex", flexDirection: "row", alignItems: "center", width: "100%", padding: "2rem" }}>
        <div className="card-body" style={{ alignItems: "flex-start" }}>
          <h1 className='text-start'>Welcome to <br /><span>CareVin Children Play School</span></h1>
          <h5 className="card-title text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida ex in urna pellentesque tempor.</h5>
          <p className="card-text text-start mt-4 opacity-60 lh-lg">Quisque eu nulla pellentesque, pharetra nisi a, euismod enim. Etiam id nibh cursus, ultrices orci a, luctus sem. Integer non dictum mi. Sed mattis purus justo. Praesent in diam nisl. Ut tincidunt quis tortor sed vulputate. Donec eu tincidunt mi. Maecenas massa libero, posuere et imperdiet at, posuere sit amet quam.</p>
          <a href="#" className="btn btn-danger text-start">More</a>
        </div>
        <div className='card-image'>
          <img src='https://www.konnectplugins.com/carevin/images/play.png' />
        </div>
      </div>

      <div className='container-a'>
        <h1>Visit our <br /><span>CareVin play school</span></h1>
        <button className='btn btn-warning'>Contact Us</button>
      </div>

      <div>
        <h1 style={{color:"#3E5569"}}>Our<span style={{color:"#86C417"}}> Staff</span></h1>
        <p style={{color:"#666666"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida.</p>
        <div className='staff'>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff1.jpg' alt='img1' />
            <div style={{ backgroundColor: "#FDA51F", color: "white" }}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff3.jpg' alt='img2' />
            <div style={{ backgroundColor: "#86C417", color: "white" }}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff2.jpg' alt='img3' />
            <div style={{ backgroundColor: "#FA3664", color: "white" }}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff4.jpg' alt='img4' />
            <div style={{ backgroundColor: "#0BB3A3", color: "white" }}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
