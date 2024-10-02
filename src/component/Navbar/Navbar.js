import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
const Navbar = () => {
    return (
        <div className='p-0'>
            <nav className="navbar navbar-expand-lg shadow">
                <div className="container-fluid">
                    <img className="navbar-brand" src='https://www.konnectplugins.com/carevin/images/logo.png' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/classes" >Classes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery" >Gallery</Link>
                            </li>
                            <li className="nav-item dropdown">

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"#86C417",border:"none"}}>
                                        Pages
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <li><Dropdown.Item className="dropdown-item" href="/aboutus" style={{color:"#555555"}}>About Us</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="/blog" style={{color:"#555555"}}>Blog Detail</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="/pg404" style={{color:"#555555"}}>404</Dropdown.Item></li>
                                        <li><Dropdown.Item className="dropdown-item" href="/faq" style={{color:"#555555"}}>FAQ</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/facilities">Facilities</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
