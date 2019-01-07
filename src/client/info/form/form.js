import React, { Component } from 'react'
import Img from '../../../asset/client/img/services/services-1.jpg';
export default class Form extends Component {
  render() {
    return (
        <section className="contact-form-section parallax-window color_overlay dark_overlay_gradient" data-src={Img} data-speed="0.5">
        <div className="container heading">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider white-section-title" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Get In Touch <span className="highlight">.</span></h2>
            </div>
          </div>
        </div>
        <div className="container contact-wrapper">
          <div className="row d-flex flex-column" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
            <form id="ajax-contact" className="primary-contact-form d-flex flex-column">
              <div className="input-row">
                <input className="form-name" type="text" name="name" placeholder="Name*" required />
                <input className="form-phone" type="text" name="phone" placeholder="Phone" />
              </div>
              <input className="form-email" type="email" name="email" placeholder="Email*" required />
              <textarea className="form-message" name="message" placeholder="Your message..." defaultValue={""} />
              <div className="d-flex justify-content-center">
                <button className="button-submit" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    )
  }
}
