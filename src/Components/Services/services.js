import React from "react";

import "../Services/services.css";

export default function Services() {

    return (
        <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 services-block">
              <div className="services-item">
                <div className="services-item-icon"><i className="far fa-thumbs-up"></i></div>
                <h3 className="services-item-name">Suspendisse</h3>
                <p className="services-item-desc">Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc.</p>
                <a href="/#" className="services-item-more">read more</a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 services-block">
              <div className="services-item">
                <div className="services-item-icon"><i className="fas fa-key"></i></div>
                <h3 className="services-item-name">Maecenas</h3>
                <p className="services-item-desc">Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.</p>
                <a href="/#" className="services-item-more">read more</a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 services-block">
              <div className="services-item">
                <div className="services-item-icon"><i className="fas fa-flag"></i></div>
                <h3 className="services-item-name">Aliquam</h3>
                <p className="services-item-desc">Vivamus eget ante bibendum arcu vehicula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor non.</p>
                <a href="/#" className="services-item-more">read more</a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 services-block">
              <div className="services-item">
                <div className="services-item-icon"><i class="fas fa-flask"></i></div>
                <h3 className="services-item-name">Habitasse</h3>
                <p claclassNamesclassNames="services-item-desc">Astehicula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor non.</p>
                <a href="/#" className="services-item-more">read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

