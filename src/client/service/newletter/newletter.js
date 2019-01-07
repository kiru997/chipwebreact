import React, { Component } from 'react';
import Img from '../../../asset/client/img/services/newsletter.jpg';
export default class NewLetter extends Component {
  render() {
    return (
        <section className="newsletter-section dark_overlay dark_overlay_gradient bg_img" style={{backgroundImage: `url(${Img})`}}>
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center">
              <div className="content-wrapper" data-aos="fade-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                <h2>Subscribe newsletter</h2>
                <p>Integer euismod lacus luctus magna quisque cursus, metus vitae pharetra auctor, sem massa
                  mattis
                  sem, at interdum magna augue eget diam</p>
              </div>
              <div className="newsletter-wrapper" data-aos="fade-left" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                <form id="form-newsletter" className="d-flex">
                  <input type="email" placeholder="E-mail" />
                  <button>Send <i className="fa fa-paper-plane" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
