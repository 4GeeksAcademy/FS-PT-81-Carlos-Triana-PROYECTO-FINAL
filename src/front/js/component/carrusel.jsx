import React, { useState, useEffect } from "react";

export const Carrusel = () => {
    
    const [] = useState(false);   

    return (
        <div id="carouselExampleCaptions" className="carousel slide mt-5 pt-5" data-bs-ride="carousel" style={{ width: '100%' }}>
            <div className="carousel-inner shadow" style={{ height: '400px' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-item active">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                        <img 
                            src="https://tse1.mm.bing.net/th?id=OIP.t8rMUtyw0czD72ksHfq8agHaD0&pid=Api&P=0&h=180" 
                            className="d-block" 
                            style={{ height: '100%', objectFit: 'cover' }} 
                            alt="..." 
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Escoja su videojuegos preferido</h5>
                        <p>Para todos los dispositivos</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                        <img 
                            src="https://tse2.mm.bing.net/th?id=OIP.ph8Vm3YHPJT_1aLsSrL4XAHaDs&pid=Api&P=0&h=180" 
                            className="d-block" 
                            style={{ height: '100%', objectFit: 'cover' }} 
                            alt="..." 
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                        <img 
                            src="https://tse1.mm.bing.net/th?id=OIP.7TEyHwVXZLMKOeN8EkGY0wHaDl&pid=Api&P=0&h=180" 
                            className="d-block" 
                            style={{ height: '100%', objectFit: 'cover' }} 
                            alt="..." 
                        />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>

                <button className="buttom ms-5 carousel-control-prev position-absolute top-50 start-0 translate-middle-y" style={{ width:"35px", height:"30px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-secondary rounded-pill" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="buttom me-5 carousel-control-next position-absolute top-50 end-0 translate-middle-y" style={{ width:"35px", height:"30px" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-secondary rounded-pill" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
