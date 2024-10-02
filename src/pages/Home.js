import React from 'react'
import Slider from '../component/Slider/Slider';
import Feature from '../container/Feature';
import Features from '../container/Features';
import Reviews from '../container/Reviews';
import News from '../container/News';
import Footer from '../container/Footer';
const Home = () => {
    return (
        <div>
            <Slider />
            <Feature />
            <Features />
            <Reviews/>
            <News />
        </div>
    )
}

export default Home
