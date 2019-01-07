import React, { Component } from 'react';
import Img from '../../../asset/client/img/services/services-about.jpg';
export default class About extends Component {
  render() {
    return (
        <section className="services-about large-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 img-wrapper d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <img src={Img} alt="" className="img-fluid" />
              <a className="popup-modal video-popup d-flex align-items-center justify-content-center" href="#video-post-1">
                <div className="play-btn-scale">
                  <i className="fa fa-play" />
                </div>
              </a>
              <div id="video-post-1" className="white-popup-block mfp-hide mfp-fade">
                <div className="modal-video-box">
                  <iframe title="This is a unique title" src="https://www.youtube.com/embed/KyKgBzFypzc" allowFullScreen />
                  <button title="Close (Esc)" type="button" className="mfp-close">×</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row content-wrapper">
            <div className="col-lg-4 service-wrapper" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <span className="up-text">Digital</span>
              <h5 className="title">Digital services</h5>
              <p>Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in.</p>
            </div>
            <div className="col-lg-4 service-wrapper" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <span className="up-text">Creative</span>
              <h5 className="title">Creative thinking &amp; design</h5>
              <p>Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in.</p>
            </div>
            <div className="col-lg-4 service-wrapper" data-aos="fade-up" data-aos-delay={400} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <span className="up-text">Marketing</span>
              <h5 className="title">SEO &amp; marketing</h5>
              <p>Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in.</p>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
