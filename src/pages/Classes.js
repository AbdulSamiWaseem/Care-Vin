import React from 'react'
import './classes.css'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
const Classes = () => {
  return (
    <div className='classes'>
      <h1 className="d-flex justify-content-center align-items-center">Classes</h1>
      <p><Link to="/"><IoHomeOutline color='#FFAA18' size={20} /></Link> / Classes</p>
      <div className='card-row'>
        <div className="card classes-card" >
          <img src="https://www.konnectplugins.com/carevin/images/png/one.png" className="card-img-top" alt="Bag" />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#3E6872" }}>Early Preschool</h4>
            <p style={{ color: "#FFB518" }}>Starts June 28</p>
            <p className="card-text">With supporting text below as supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn" style={{ backgroundColor: "#86C417", color: "white" }}>Apply</a>
          </div>
        </div>
        <div className="card classes-card" >
          <img src="https://www.konnectplugins.com/carevin/images/png/two.png" className="card-img-top" alt="Bag" />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#3E6872" }}>Infants Learning</h4>
            <p style={{ color: "#FFB518" }}>Starts June 28</p>
            <p className="card-text">With supporting text below as supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn" style={{ backgroundColor: "#0BB3A3", color: "white" }}>Apply</a>
          </div>
        </div>
      </div>
      <div className='card-row'>
        <div className="card classes-card" >
          <img src="https://www.konnectplugins.com/carevin/images/png/three.png" className="card-img-top" alt="Bag" />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#3E6872" }}>Nursery Classes</h4>
            <p style={{ color: "#FFB518" }}>Starts June 28</p>
            <p className="card-text">With supporting text below as supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn" style={{ backgroundColor: "#746ECB", color: "white" }}>Apply</a>
          </div>
        </div>
        <div className="card classes-card" >
          <img src="https://www.konnectplugins.com/carevin/images/png/four.png" className="card-img-top" alt="Bag" />
          <div className="card-body">
            <h4 className="card-title" style={{ color: "#3E6872" }}>Toddler Classes</h4>
            <p style={{ color: "#FFB518" }}>Starts June 28</p>
            <p className="card-text">With supporting text below as supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn" style={{ backgroundColor: "#FA3664", color: "white" }}>Apply</a>
          </div>
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
            <div style={{backgroundColor:"#FDA51F",color:"white"}}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff3.jpg' alt='img2' />
            <div style={{backgroundColor:"#86C417",color:"white"}}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff2.jpg' alt='img3' />
            <div style={{backgroundColor:"#FA3664",color:"white"}}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
          <div>
            <img src='https://www.konnectplugins.com/carevin/images/staff4.jpg' alt='img4' />
            <div style={{backgroundColor:"#0BB3A3",color:"white"}}>
              <h2>John Wills</h2>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
