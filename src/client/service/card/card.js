import React, { Component } from 'react';
import Img from '../../../asset/client/img/assets/axiom-pattern.png';
import Img1 from '../../../asset/client/img/services/card-service-1.jpg';
import Img2 from '../../../asset/client/img/services/card-service-2.jpg';
import Img3 from '../../../asset/client/img/services/card-service-3.jpg';
export default class Card extends Component {
  render() {
    return (
        <section className="services-cards-section border-top-simple border-bottom-simple gray-section cards-section bg_img" style={{backgroundImage: `url(${Img})`}}>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>About Agency <span className="highlight">.</span></h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="card-wrapper">
                <div className="img-wrapper">
                  <a href={Img1}  className="image-popup">
                    <img src={Img1} alt=""  className="img-fluid" />
                    <i className="fa fa-search plus" />
                  </a>
                </div>
                <div className="card-service-body">
                  <h6>E-Commerce Solutions</h6>
                  <p>Morbi in ipsum sit amet pede facilisis laoreet.
                    Donec lacus nunc viverra nec lacinia moltie
                    luctus et ultrices amet posuere </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="card-wrapper">
                <div className="img-wrapper">
                  <a href={Img2} className="image-popup">
                    <img src={Img2} alt="" className="img-fluid" />
                    <i className="fa fa-search plus" />
                  </a>
                </div>
                <div className="card-service-body">
                  <h6>E-Commerce Solutions</h6>
                  <p>Morbi in ipsum sit amet pede facilisis laoreet.
                    Donec lacus nunc viverra nec lacinia moltie
                    luctus et ultrices amet posuere </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={400} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="card-wrapper">
                <div className="img-wrapper">
                  <a href={Img3} className="image-popup">
                    <img src={Img3} alt=""  className="img-fluid" />
                    <i className="fa fa-search plus" />
                  </a>
                </div>
                <div className="card-service-body">
                  <h6>E-Commerce Solutions</h6>
                  <p>Morbi in ipsum sit amet pede facilisis laoreet.
                    Donec lacus nunc viverra nec lacinia moltie
                    luctus et ultrices amet posuere </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrapper d-flex justify-content-center" data-aos="fade-up" data-aos-delay={500} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
            <a  className="button-default-color-2"><i className="fa fa-terminal" />Explore Features</a>
          </div>
        </div>
      </section>
      
    )
  }
}
