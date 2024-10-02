import React from 'react'
import './gallery.css'
import { IoHomeOutline } from 'react-icons/io5'
import {Link} from 'react-router-dom'
const Gallery = () => {
  return (
    <div className='gallery'>
      <h1 className="d-flex justify-content-center align-items-center">Gallery</h1>
      <p><Link to="/"><IoHomeOutline color='#3F701A' size={20} /></Link> / Gallery</p>
      <h5 className='mt-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida.</h5>
      <div className='gallery-card-row'>
        <div style={{border:"5px solid #FDA51F"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/one.jpeg'/>
        </div>
        <div style={{border:"5px solid #FA3664"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/two.jpeg'/>
        </div>
        <div style={{border:"5px solid #86C417"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/three.jpeg'/>
        </div>
      </div>
      <div className='gallery-card-row'>
        <div style={{border:"5px solid #746ECB"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/four.jpeg'/>
        </div>
        <div style={{border:"5px solid #0BB3A3"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/five.jpeg'/>
        </div>
        <div style={{border:"5px solid #FE009B"}}>
          <img src='https://www.konnectplugins.com/carevin/images/gallery/six.jpeg'/>
        </div>
      </div>
    </div>


  )
}

export default Gallery
