import React from 'react'
import './features.css'
const Features = () => {
    return (
        <div className='features'>
            <div className='container-a'>
                <h1>Visit our <br /><span>CareVin play school</span></h1>
                <button className='btn btn-warning'>Contact Us</button>
            </div>
            <div className='container-b'>
                <h1 style={{color:"#3E5569", paddingTop:"2rem"}}>CareVin <span style={{color:"#86C417"}}>Features</span></h1>
                <p style={{color:"#666666", fontSize:"1.15rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida.</p>
                <div className='cards'>
                    <div className='cards-row'>
                        <div className="card">
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/004-school.png" className="card-img-top" alt="School-Image" />
                                <h5  className="card-title">Fully Equiped</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="card" >
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/006-idea.png" className="card-img-top" alt="Ideas-Image" />
                                <h5 style={{ color:"#FA3664" }} className="card-title">Creative Ideas</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="card" >
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/005-bus.png" className="card-img-top" alt="Bus-Image" />
                                <h5 style={{ color:"#8A6ECB" }} className="card-title">Transport Services</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-row'>
                        <div className="card">
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/003-think.png" className="card-img-top" alt="Thinking-Image" />
                                <h5 style={{ color:"#32C5D6" }} className="card-title">Smart Study</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/002-to-do.png" className="card-img-top" alt="To-do-list-Image" />
                                <h5 style={{ color:"#96C417" }} className="card-title">Fullday Programs</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <img style={{ width: "4.25rem" }} src="https://www.konnectplugins.com/carevin/images/features/001-teacher.png" className="card-img-top" alt="Teacher-Image" />
                                <h5 style={{ color:"#FE009B" }} className="card-title">Expert Staff</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
