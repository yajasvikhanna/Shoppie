import React from 'react';
import Hero1 from '../../Assets/Hero1.avif';
import Hero2 from '../../Assets/Hero2.avif';
import Hero3 from '../../Assets/Hero3.avif';

const HeroSection=()=>{
    return(
        <div id="carouselExampleCaptions" className="carousel slide container-fluid px-0 pb-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Hero1} className="d-block w-100" alt="Image1"/>
                </div>
                <div className="carousel-item">
                    <img src={Hero3} className="d-block w-100" alt="Image2"/>
                </div>
                <div className="carousel-item">
                    <img src={Hero2} className="d-block w-100" alt="Image3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default HeroSection;