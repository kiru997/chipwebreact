import React, { Component } from 'react';
import Img from '../../../asset/client/img/about/about-creative-1.jpg';
export default class Video extends Component {
  render() {
    return (
        <section className="video-section parallax-window default_overlay" data-src={Img} data-speed="0.5">
        <div className="container video-wrapper d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={150} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
          <h2 className="title display-5">Tổng quan về các dịch vụ</h2>
          <p />
          <a className="popup-modal video-popup d-flex align-items-center justify-content-center" href="#video-post-1">
            <div className="play d-flex align-items-center justify-content-center">
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
      </section>
      
    )
  }
}
