import React, { Component } from 'react';
import Img from '../../../asset/client/img/services/services-2.jpg';
import Img1 from '../../../asset/client/img/services/services-1.jpg';
import Img2 from '../../../asset/client/img/services/services-3.jpg';

export default class Service extends Component {
  render() {
    return (
        <section className="services-grid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 image color_overlay bg_img" style={{backgroundImage: `url(${Img})`}} data-aos="fade-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700} />
            <div className="col-lg-6 content gray-section" data-aos="fade-left" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="content-wrapper left-align-content">
                <h4>High Quality</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, animi architecto
                  asperiores commodi debitis doloribus ex expedita incidunt nemo neque nesciunt officia omnis
                  porro possimus repellendus, sunt vel veniam. Molestiae nam nesciunt nobis
                  odio placeat quaerat quas doloribus ex.</p>
                <div className="btn-wrap d-flex">
                  <a  className="button-default-black-2">Read more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 content gray-section resposive-content" data-aos="fade-right" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="content-wrapper right-align-content">
                <h4>Best Digital Production</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, animi architecto
                  asperiores commodi debitis doloribus ex expedita incidunt nemo neque nesciunt officia omnis
                  porro possimus repellendus, sunt vel veniam. Molestiae nam nesciunt nobis
                  odio placeat quaerat quas doloribus ex.</p>
                <div className="btn-wrap d-flex">
                  <a  className="button-default-black-2">Read more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 image color_overlay resposive-image bg_img" style={{backgroundImage: `url(${Img1})`}} data-aos="fade-left" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700} />
            <div className="col-lg-6 image color_overlay bg_img" style={{backgroundImage: `url(${Img2})`}} data-aos="fade-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700} />
            <div className="col-lg-6 content gray-section" data-aos="fade-left" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="content-wrapper left-align-content">
                <h4>Unique Websites</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium, animi architecto
                  asperiores commodi debitis doloribus ex expedita incidunt nemo neque nesciunt officia omnis
                  porro possimus repellendus, sunt vel veniam. Molestiae nam nesciunt nobis
                  odio placeat quaerat quas doloribus ex.</p>
                <div className="btn-wrap d-flex">
                  <a  className="button-default-black-2">Read more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
