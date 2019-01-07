import React, { Component } from 'react'
import ImgBlock from '../../../asset/client/img/assets/main-simple-bg.jpg';
export default class Blockquote extends Component {
  render() {
    return (
        <section className="simple-background blockquote-section-type-1 parallax-window default_overlay" data-src={ImgBlock} data-speed="0.4">
        <div className="container blockquote-wrapper d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col blockquote-col d-flex justify-content-center">
              <blockquote data-aos="zoom-in" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
                <h4>Tạo trang web tuyệt vời với giao diện hiện đại và chức năng độc đáo, hãy cùng đến với ChipWeb để trải nghiệm và tin dùng.</h4>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
