import React from "react";
import Post_IMG from "./images/post-img.png";
import Facebook from "./images/Facebook.png";
import G_Plus from "./images/g plus.png";
import Rss from "./images/rss.png";
import Twitter from "./images/twitter.png";

import "../Footer/footer.css";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <h3 style={{ color: "white", fontWeight: 400, marginBottom: 18 }} ><b> MODUS </b>versus</h3>
                        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing
                         in adipiscing et, interdum nec .</p>
                        <div className="footer-contacts">
                            <div className="footer-contact">Phone: <a href="tel:18225695896">182 2569 5896</a></div>
                            <div className="footer-contact">e-mail: <a href="tel:info@modu.versus">info@modu.versus</a></div>
                        </div>
                    </div>

                    <div className="col-2">
                        <h3 className="footer-menu__title">Company</h3>
                        <ul className="footer-menu__nav">
                            <li>About</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <h3 className="footer-menu__title">Community</h3>
                        <ul className="footer-menu__nav">
                            <li>Blog</li>
                            <li>Forum</li>
                            <li>Support</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <h3 className="footer-posts-title">from the <strong>BLOG</strong></h3>
                        <div className="post-list">

                            <div className="post-list-item row">
                                <div className="col-3">
                                    <a
                                        href="/#"
                                        className="posts-list__img">
                                        <img
                                            src={Post_IMG}
                                            alt="Post img"
                                        />
                                    </a>
                                </div>
                                <div className="posts-list__data col-9">
                                    <a
                                        href="/#"
                                        className="posts-list__name">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </a>
                                    <div className="posts-list_date">26 May, 2013</div>
                                </div>
                            </div>

                            <div className="post-list-item row" style={{ marginTop: 5 }} >

                                <div className="col-3" >
                                    <a
                                        href="/#"
                                        className="posts-list__img">
                                        <img
                                            src={Post_IMG}
                                            alt="Post img" />
                                    </a>
                                </div>

                                <div className="posts-list__data col-9">
                                    <a
                                        href="/#"
                                        className="posts-list__name">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                    </a>
                                    <div className="posts-list_date">26 May, 2013</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row d-flex justify-content-between footer-bottom__flex">
                        <div className="col-2 copyright">2013  ModusVersus</div>
                        <div className="col-5 footer-socials">
                            <a href="/#" className="footer-socials__link" target="_blank"><img src={Facebook} alt="facebook" /></a>
                            <a href="/#" className="footer-socials__link" target="_blank"><img src={G_Plus} alt="Google plus" /></a>
                            <a href="/#" className="footer-socials__link" target="_blank"><img src={Twitter} alt="Twitter" /></a>
                            <a href="/#" className="footer-socials__link" target="_blank"><img src={Rss} alt="Rss Feed" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}