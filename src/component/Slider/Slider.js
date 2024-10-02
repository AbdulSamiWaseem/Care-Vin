import React from 'react'
import './slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide p-0">
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className='slider-item d-flex align-items-center'>
                        <div ><img src='https://www.konnectplugins.com/carevin/images/slide1.jpg' className='slider-image1' /></div>
                        <div className='slider-content'>
                            <h1 className='text-white'>Hugs can do great amounts of good - especially for children.</h1>
                            <button className='btn btn-primary'>Visit Our School</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className='slider-item d-flex align-items-center'>
                        <div className='slider-content'>
                            <h1 className='text-white'>It is easier to build strong children than to repair broken men.</h1>
                            <button className='btn btn-primary'>Visit Our School</button>
                        </div>
                        <div className='slider-image col-4'><img src='https://www.konnectplugins.com/carevin/images/slide3.jpg' className='slider-image1' /></div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slider-item d-flex align-items-center'>
                        <div className=''><img src='https://www.konnectplugins.com/carevin/images/slide2.jpg' className='slider-image1' /></div>
                        <div className='slider-content'>
                            <h1 className='text-white'>Always kiss your children goodnight, even if they're already asleep</h1>
                            <button className='btn btn-primary'>Visit Our School</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Slider
