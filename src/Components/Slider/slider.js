import React from "react";


import "../Slider/slider.css";

export default function Slider() {


    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" style={{ bottom: "-41px" }}>
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="text-in-slider-1">
                        <div className="vestibulum">
                            <b>VESTIBULUM</b>
                        </div>
                        <div className="text-content-slider-1">
                            Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.
                </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="text-in-slider-1">
                        <div className="vestibulum">
                            <b>VESTIBULUM</b>
                        </div>
                        <div className="text-content-slider-1">
                            Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="text-in-slider-1">
                        <div className="vestibulum">
                            <b>VESTIBULUM</b>
                        </div>
                        <div className="text-content-slider-1">
                            Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.
                </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>

    )
}