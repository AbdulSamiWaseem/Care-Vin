import React from 'react'
import './feature.css'
const Feature = () => {
    return (
            <div className="card m-0" style={{border:"none",display:"flex",flexDirection:"row",alignItems:"center",width:"100%",padding:"2rem"}}>
                <div className="card-body" style={{alignItems:"flex-start"}}>
                    <h1 className='text-start'>Welcome to <br/><span>CareVin Children Play School</span></h1>
                    <h5 className="card-title text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida ex in urna pellentesque tempor.</h5>
                    <p className="card-text text-start mt-4 opacity-60 lh-lg">Quisque eu nulla pellentesque, pharetra nisi a, euismod enim. Etiam id nibh cursus, ultrices orci a, luctus sem. Integer non dictum mi. Sed mattis purus justo. Praesent in diam nisl. Ut tincidunt quis tortor sed vulputate. Donec eu tincidunt mi. Maecenas massa libero, posuere et imperdiet at, posuere sit amet quam.</p>
                    <a href="#" className="btn btn-danger text-start">More</a>
                </div>
                <div className='card-image'>
                <img src='https://www.konnectplugins.com/carevin/images/play.png'/>
                </div>
            </div>
    )
}

export default Feature
