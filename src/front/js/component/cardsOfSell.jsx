import React from "react";

export const CardOfSell = () => {
    return (
        <div className="d-flex pt-5">
            <div className="d-flex mb-5 mx-5 me-5 bg-white rounded">
                <div className="card border-0" style={{ width: "18rem", backgroundColor: "transparent" }}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.roE_4NuhG6fCbgo9gLI_AAHaEo&pid=Api&P=0&h=180" className="card-img-top p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-success">
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
