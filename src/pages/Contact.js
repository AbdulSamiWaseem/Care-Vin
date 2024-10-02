import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className='contact'>
      <h1 className="d-flex justify-content-center align-items-center">Contact Us</h1>
      <p><Link to="/"><IoHomeOutline color='#FFAA18' size={20} /></Link> / Contact Us</p>
      <div className='location'>
      <iframe width="500" height="450" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      <form>
        <h3 className='text-center' style={{ color: "#3E5569" }}>Enquiry</h3>
        <div className='form-entry'>
          <label style={{ color: "#75D4CB" }}>Your Name</label>
          <input style={{ borderBottom: "2px solid #75D4CB" }} />
        </div>
        <div className='form-entry'>
          <label style={{ color: "#FDA51F" }}>Email</label>
          <input style={{ borderBottom: "2px solid #FDA51F" }} />
        </div>
        <div className='form-entry'>
          <label style={{ color: "#99CD3C" }}>Your Message</label>
          <textarea style={{ borderBottom: "2px solid #99CD3C" }} rows={"3"}></textarea>
        </div>
        <button className='btn btn-primary' style={{ backgroundColor: "#138496", border: "none", borderRadius: "0" }}>Submit</button>

      </form>
      </div>
      <div className='container-a'>
        <h1>Visit our <br /><span>CareVin play school</span></h1>
        <button className='btn btn-warning'>Contact Us</button>
      </div>
      <div className='contacts w-100'>
        <div className='w-30'>
          <img className='text-start pt-3' src='https://www.konnectplugins.com/carevin/images/address.png' />
          <h3 style={{ color: "#FDA51F" }} className='text-start pt-4'><br />Address</h3>
          <p className='text-start'>Koramangala</p>
          <p className='text-start'>Banglore, India</p>
        </div>
        <div className='w-30'>
          <img className='text-start pt-3' src='https://www.konnectplugins.com/carevin/images/email.png' />
          <h3 style={{ color: "#FA367D" }} className='text-start pt-4'><br />Email</h3>
          <p className='text-start'>info@site.com</p>
          <p className='text-start'>support@site.com</p>
        </div>
        <div className='w-30'>
          <img className='text-start pt-3' src='https://www.konnectplugins.com/carevin/images/phone.png' />
          <h3 style={{ color: "#746ECB" }} className='text-start pt-4'><br />Phone</h3>
          <p className='text-start'>+91 12345 67890</p>
          <p className='text-start'>+91 09876 54321</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
