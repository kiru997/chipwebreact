import React, { Component } from 'react';
import Imgslider1 from '../../../asset/client/img/home/home-slider-2.jpg';
import Imgslider2 from '../../../asset/client/img/home/home-slider-5.jpg';
export default class Slider extends Component {
  render() {
    return (
      <section className="hero-header hero-default dark_overlay" data-section-type="slider_vertical">
  <div className="swiper-container swiper-hero">
    <div className="swiper-wrapper">
      <div className="swiper-slide bg_img" style={{backgroundImage: `url(${Imgslider1})`}}>
        <div className="container hero-content hero-center d-flex align-items-center">
          <div className="content-default">
            <h2 className="display-3 content-heading bold-heading"><span className="highlight">Bạn chỉ cần lựa chọn phong cách, còn lại ChipWeb sẽ giúp bạn.</span></h2>
            <p className="subtitle">Hãy trải nghiệm và tin dùng.</p>
          </div>
        </div>
      </div>
      <div className="swiper-slide bg_img" style={{backgroundImage: `url(${Imgslider2})`}}>
        <div className="container hero-content hero-center d-flex align-items-center">
          <div className="content-default">
            <h2 className="display-3 content-heading bold-heading">Giao diện độc đáo, phong cách hiện đại, chức năng đáp ứng.<span className="highlight">.</span></h2>
            <p className="subtitle">Hãy bắt đầu cùng ChipWeb ngay bây giờ.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination-bullets-vertical" />
    <div className="swiper-button-prev-vertical"><i className="fa fa-angle-up" /></div>
    <div className="swiper-button-next-vertical"><i className="fa fa-angle-down" /></div>
    <div className="angle-down" data-aos="zoom-in" data-aos-delay={1300} data-aos-anchor=".hero-header" data-aos-easing="ease-in-out" data-aos-duration={700}>
      <p>scroll down</p>
      <i className="fa fa-chevron-down" />
    </div>
  </div>
</section>


    )
  }
}
