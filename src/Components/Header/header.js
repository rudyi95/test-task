import React from "react";

/* import Path from "./images/Path.png"; */
import SearchIcon from '@material-ui/icons/Search';

import "../Header/header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand"
                style={{
                    color: "white",
                    backgroundColor: "#76c7c0",
                    display: "flex",
                    justifyContent: "space-around",
                }}
            >
                <div className="col-3 header-logo" style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>
                    <b> MODUS </b>versus
                </div>

                <div className="col-7 collapse navbar-collapse" id="navbarSupportedContent" style={{ display: "flex", justifyContent: "space-around" }}>

                    <ul className="navbar-nav d-flex justify-content-between" style={{ width: "100%" }}>
                        <li className="nav-item active">
                            <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/#">About</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/#">Services</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Portfolio
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#76c7c0" }}>
                                <a className="dropdown-item" href="/#">Portfolio 2 column page</a>
                                <a className="dropdown-item" href="/#">Portfolio 2 column page</a>
                                <a className="dropdown-item" href="/#">Portfolio 2 column page</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/#">Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                <SearchIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}