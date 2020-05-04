import React from "react";

import BrowserLeft from "./images/Browser left.png";
import BrowserRight from "./images/Browser right.png";
import BrowserTooenterls from "./images/Browser tooenterls.png";
import Percent1 from "./images/percent1.png";
import Percent2 from "./images/percent2.png";
import Percent3 from "./images/percent3.png";
import Percent4 from "./images/percent4.png";

import "./about.css";


export default function About() {

    return (
        <section class="about">

            <div className="container">
                <h2 className="about-title">
                    Why Modus Versus?
                </h2>

                <p className="about-text">
                    Capacitance cascading integer reflective interface
                    data development high bus cache dithering transponder.
                </p>
            </div>

            <div className="container browser-block">
                <div className="row browser-block__row">
                    <div className="col-md-4 col-sm-4 col-xs-12 browser-block__side">
                        <img src={BrowserLeft} alt="Browser left" />
                    </div>
                    <div className="col-md-6 col-sm-4 col-xs-12 browser-block__center">
                        <img src={BrowserTooenterls} alt="Browser tooenterls" />
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 browser-block__side">
                        <img src={BrowserRight} alt="Browser right" />
                    </div>
                </div>
            </div>

            <div className="container about-bottom">
                <div className="row about-bottom-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 wy-choose-us">
                        
                        <h3 className="wy-choose-us-title" >Why choose us?</h3>
                        
                        <ul className="wy-choose-us-list">
                            <li>Quisque at massa ipsum</li>
                            <li>Maecenas a lorem augue, egestas</li>
                            <li>Cras vitae felis at lacus eleifend</li>
                            <li>Etiam auctor diam pellentesque</li>
                            <li>Nulla ac massa at dolor</li>
                            <li>Condimentum eleifend vitae vitae  </li>
                        </ul>
                    
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 skils-block">
                        <p className="skils-block__text">
                            Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus
                            <a href="/#">vehicula mattis</a>
                            . Nulla ac massa at dolor condimentum eleifend vitae vitae urna.
                            </p>
                        <div className="container-fluid">

                            <div className="row skils-row">

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 skils-block__item">

                                    <div className="skils-block__percent">

                                        <img style={{width:100, height:56}} src={Percent1} alt="Suspendisse skill 50%" />
                                        <span className="skils-block__number">50</span>

                                    </div>

                                    <h5 className="skils-block__text">Suspendisse</h5>

                                </div>

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 skils-block__item">

                                    <div className="skils-block__percent">

                                        <img style={{width:100, height:56}} src={Percent2} alt="Maecenas skill 70%" />
                                        <span className="skils-block__number">70</span>

                                    </div>

                                    <h5 className="skils-block__text">Maecenas</h5>

                                </div>

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 skils-block__item">

                                    <div className="skils-block__percent">

                                        <img style={{width:100, height:56}} src={Percent3} alt="Aliquam skill 80%" />
                                        <span className="skils-block__number">80</span>

                                    </div>

                                    <h5 className="skils-block__text">Aliquam</h5>

                                </div>

                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 skils-block__item">

                                    <div className="skils-block__percent">

                                        <img style={{width:100, height:56}} src={Percent4} alt="Habitasse skill 100%" />
                                        <span className="skils-block__number">100</span>

                                    </div>

                                    <h5 className="skils-block__text">Habitasse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12 testemoials">
                        <h3 className="testemoials-block__title">What Client’s Say ?</h3>
                        <div className="testemoials-block__review">
                            <div className="testemoials-block__text">
                                <i> Curabitur quis nisl in leo euismod venenatis eu in diam.
                                Etiam auctor diam pellentesque lectus vehicula mattis.
                                    </i>
                                    Nulla ac massa at dolor condimentum
                                </div>
                            <div className="testemoials-block__name">Jhon Doe</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}