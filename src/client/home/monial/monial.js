import React, { Component } from 'react'
import Img1 from '../../../asset/client/img/assets/testimonials.jpg';
import Img2 from '../../../asset/client/img/assets/client4.jpg';
import Img3 from '../../../asset/client/img/assets/client5.jpg';
export default class Monials extends Component {
  render() {
    return (
        <section className="testimonials large-section black_overlay" style={{backgroundImage: `url(${Img1})`}}>
        <div className="container-fluid testimonials-wrapper" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-quad" data-aos-duration={800}>
          <div className="swiper-container swiper-testimonials">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="review-wrapper">
                  <div className="img-wrapper">
                    <img src={Img2} alt=""  />
                  </div>
                  <h5 className="client">Richard Smith</h5>
                  <p className="position">Founder &amp; CEO, Facebook</p>
                  <p className="review">
                    Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.
                    Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id
                    quam. Morbi mi quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
                    amet, augue proin sodales libero eget ante.
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrapper">
                  <div className="img-wrapper">
                    <img src={Img3} alt=""  />
                  </div>
                  <h5 className="client">Frank Horrigan</h5>
                  <p className="position">Developer, Envato</p>
                  <p className="review">
                    Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
                    auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie
                    dui. Praesent blandit dolor sed non quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-bullets-default" />
            <div className="nav justify-content-between">
              <div className="swiper-button-prev-testimonials"><i className="fa fa-angle-left" /></div>
              <div className="swiper-button-next-testimonials"><i className="fa fa-angle-right" /></div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
