import React from 'react'
import './pg404.css'
import { IoHomeOutline } from 'react-icons/io5'
import {Link} from 'react-router-dom'
const pg404 = () => {
  return (
    <div className='pg404'>
      <h1 className="d-flex justify-content-center align-items-center">404</h1>
      <p><Link to="/"><IoHomeOutline color='#3F701A' size={20} /></Link> / 404</p>
      <h4 className='mt-5 mb-3'>In ullamcorper egestas velit eu condimentum. Nunc nec fermentum arcu.</h4>
      <img className='mb-5' src='https://www.konnectplugins.com/carevin/images/404.png'/>
    </div>
  )
}

export default pg404
