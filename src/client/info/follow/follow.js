import React, { Component } from 'react'

export default class Follow extends Component {
  render() {
    return (
        <section className="follow-us-section large-section gray-section">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Follow Us <span className="highlight">.</span></h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="social-wrapper d-flex" data-aos="flip-down" data-aos-delay={100} data-aos-anchor=".map-section " data-aos-easing="ease-in-out" data-aos-duration={800}>
              <a className="social-box facebook-h" >
                <i className="fab fa-facebook-f" />
              </a>
              <a className="social-box instagram-h" >
                <i className="fab fa-instagram" />
              </a>
              <a className="social-box twitter-h" >
                <i className="fab fa-twitter" />
              </a>
              <a className="social-box linkedin-h" >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="social-box google-plus-h" >
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
