import React from "react";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Jquery from "./images/jquery.png";
import Button from 'react-bootstrap/Button';

import "./clients.css";
import { makeStyles } from "@material-ui/core";

const arrowBtns = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        outline: "none !important",
        background: "#98a3a3",
        border: "1px #98a3a3 solid"
    }
});
const arrows = makeStyles({
    root: {
        color: "white",
        fontSize: "40px",
        marginTop: "-5px"
    }
});

export default function Clients() {

    const arrow = arrows();
    const arrowBtn = arrowBtns();

    return (
        <section className="clients">
        <div className="container" >
          <div className="row flex-row">
            <div className="col-lg-2 col-md-3  col-sm-6 col-6 clients-title">Our Happy Clients</div>
            <div className=" col-lg-8 col-md-6 d-sm-none d-none d-md-block block-line"><div class="line"></div></div>
            <div className="turn-clients">
                <Button  className={arrowBtn.root} variant="danger" size="sm">
                    <ChevronLeftIcon className={arrow.root} />
                </Button>
                <Button  className={arrowBtn.root} variant="danger" size="sm">
                    <ChevronRightIcon className={arrow.root} />
                </Button>
            </div>
          </div>
        </div>
        <div className="container clients-block">
          <div className="clients-logo">
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
            <div className="item"><img src={Jquery} alt="Clinet logo" /></div>
          </div>
        </div>
      </section>
        )
    }