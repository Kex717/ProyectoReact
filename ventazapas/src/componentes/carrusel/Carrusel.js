import React from 'react'
import Initiator from './initiator.png';
import airMax from './airmax.png';
import dunklowretro from './dunklowretro.png';
import dunklow from './dunklow.png';
import airforce from './airforce.png';
import invincible from './invincible.png';
import p6000 from './p-6000.png';
import './carrusel.css'
function Carrusel() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" arialabel="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={invincible} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Initiator} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={airMax} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={airforce} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={dunklow} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={dunklowretro} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={p6000} className="d-block" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carrusel