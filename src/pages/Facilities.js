import React from 'react'
import './facilities.css'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Facilities = () => {
  return (
    <div className='facilities'>
      <h1 className="d-flex justify-content-center align-items-center">Facilities</h1>
      <p><Link to="/"><IoHomeOutline color='#3F701A' size={20} /></Link> / Facilities</p>
      <div className='card-row'>
        <div className="card facility-card">
            <img src="https://www.konnectplugins.com/carevin/images/png/facilities/one.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#86C417"}} className="card-title">Learning</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
        
        <div className="card facility-card">
          <img src="https://www.konnectplugins.com/carevin/images/png/facilities/two.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#0BB3A3"}} className="card-title">Safety First</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
      </div>
      <div className='card-row'>
        <div className="card facility-card">
          <img src="https://www.konnectplugins.com/carevin/images/png/facilities/three.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#8A79CB"}} className="card-title">Color Full Class Rooms</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
        <div className="card facility-card">
          <img src="https://www.konnectplugins.com/carevin/images/png/facilities/four.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#FA3664"}} className="card-title">Fun Games</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
      </div>
      <div className='card-row'>
        <div className="card facility-card">
          <img src="https://www.konnectplugins.com/carevin/images/png/facilities/five.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#FE009B"}} className="card-title">School Bus</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
        <div className="card facility-card">
          <img src="https://www.konnectplugins.com/carevin/images/png/facilities/six.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{color:"#FDA51F"}} className="card-title">Play Park</h5>
            <p className="card-text fs-6">Vestibulum rhoncus vulputate elit, et sodales ante finibus eu. Quisque consequat sem ac ante pulvinar semper. Nunc rhoncus libero non mauris.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
