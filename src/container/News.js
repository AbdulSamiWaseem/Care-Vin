import React from 'react'
import './news.css'
const News = () => {
    return (
        <div className='news' >
            <h1 style={{color:"#3E5569"}}>Latest <span style={{color:"#0BB3A3"}}>News</span></h1>
            <p style={{color:"#3E5569"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida.</p>
            <div className='news-cards'>
            <div className="card" style={{border:"2px solid #86C417",borderRadius:"7px",borderBottom:"4px solid #86C417"}}>
                <div className='position-relative'>
                <img src="https://www.konnectplugins.com/carevin/images/blog1.jpg" className="card-img-top" alt="child-image" />
                <p className="position-absolute top-30 start-40 translate-start" style={{backgroundColor:"#86C417"}}>Tips</p>
                </div>
                <div className="card-body ">
                    <h5 className="card-title text-start pt-0" style={{color:"#86C417"}}>Ask an Expert: How to find the right school</h5>
                    <p className="card-text fs-6" >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{border:"2px solid #FA3664",borderRadius:"7px",borderBottom:"4px solid #FA3664"}}>
                <img src="https://www.konnectplugins.com/carevin/images/blog2.jpg" className="card-img-top" alt="child-image" />
                <div className="card-body">
                    <h5 className="card-title text-start pt-0" style={{color:"#FA3664"}}>Ask an Expert: How to find the right school</h5>
                    <p className="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{border:"2px solid #746ECB",borderRadius:"7px",borderBottom:"4px solid #746ECB"}}>
                <img src="https://www.konnectplugins.com/carevin/images/blog3.jpg" className="card-img-top" alt="child-image" />
                <div className="card-body">
                    <h5 className="card-title text-start pt-0" style={{color:"#746ECB"}}>Ask an Expert: How to find the right school</h5>
                    <p className="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            
            </div>
        </div>
    )
}

export default News
