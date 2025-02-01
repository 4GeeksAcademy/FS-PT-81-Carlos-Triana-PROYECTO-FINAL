import React from "react";

export const Carrusel = () => {

    return (

        <div className="CARRUSEL d-flex justify-content-center aling-items-center mt-4 p-2" style={{ width: '100%', height: '80%' }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%', height: '100%' }}>

                <div className="carousel-inner shadow bg-body rounded-3">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.kfQLW0TMFYFyB-5yRzv8tgHaE8&pid=Api&P=0&h=180" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.C_jPf6ryRSTfTEzb13iE5QHaE6&pid=Api&P=0&h=180" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.jlVOQQmOHWEr3Lw-Op-xGgHaE7&pid=Api&P=0&h=180" className="d-block w-100 h-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>

                    <button className="buttom carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="buttom carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>


            </div>
        </div>

    );
};