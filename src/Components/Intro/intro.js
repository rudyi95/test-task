import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../Intro/intro.css";

export default function Intro() {

    return (
        <section className="intro">
            <div className="container">
                <div className="row intro-container">
                    <div className="col-lg-9  col-md-7 col-sm-12">
                        <div className="itnro-title">Some of our top services</div>
                        <div className="itnro-text">Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut</div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12"><a href="/#" className="more-link intro-more">View more</a></div>
                </div>
            </div>
        </section>
    )
}