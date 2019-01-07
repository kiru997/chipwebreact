import React, { Component } from 'react'

export default class Grid extends Component {
  render() {
    return (
        <section className="contacts-grid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 grid-item white-section d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
              <div className="content d-flex flex-column">
                <h3 className="title">Location</h3>
                <p className="contact">New York, NY 10118</p>
              </div>
            </div>
            <div className="col-md-4 grid-item white-section d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
              <div className="content d-flex flex-column">
                <h3 className="title">Email Us</h3>
                <a href="mailto:" className="contact">info@domain.com</a>
                <a href="mailto:" className="contact">example@domain.com</a>
              </div>
            </div>
            <div className="col-md-4 grid-item black-section d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
              <div className="content white d-flex flex-column">
                <h3 className="title">Let's talk</h3>
                <a href="tel:" className="contact">+ 1-800-222-000</a>
                <a href="tel:" className="contact">+ 1-123-456-789</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
