import React, { Component } from 'react';
import ImageAbout1 from '../../../asset/client/img/about/about-creative-1.jpg';
import ImageAbout2 from '../../../asset/client/img/about/about-creative-2.jpg';
export default class About extends Component {
  render() {
    return (
        <section className="about-creative-section large-section">
  <div className="container">
    <div className="container">
        <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700} >ChipWeb Làm Gì 
                <span className="highlight">.</span>
              </h2>
            </div>
        </div>
    </div>
    <div className="row images-wrapper">
      <div className="col-lg-8 col-12 d-flex align-items-center">
        <div className="img-wrapper" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
          <img src={ImageAbout1} alt=""  className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-4 two-side align-items-center">
        <div className="img-wrapper" data-aos="fade-up" data-aos-delay={350} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
          <img src={ImageAbout2} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="row steps-wrapper">
      <div className="col-md-4 step-wrapper d-flex" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
        <div>
          <h2 className="num display-4">01.</h2>
        </div>
        <div className="step-body">
          <h6>Thiết kế website</h6>
          <p>Thiết kế những mẫu website phù hợp với yêu cầu của khách hàng với phong cách hiện đại và hỗ trợ đa thiết bị.</p>
        </div>
      </div>
      <div className="col-md-4 step-wrapper d-flex" data-aos="fade-up" data-aos-delay={350} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
        <div>
          <h2 className="num display-4">02.</h2>
        </div>
        <div className="step-body">
          <h6>Tối ưu hóa</h6>
          <p>Tối ưu tốc độ tải trang web, tối ưu các công cụ tìm kiếm, chuẩn seo. Trải nghiệm người dùng tốt nhất trên website.</p>
        </div>
      </div>
      <div className="col-md-4 step-wrapper d-flex" data-aos="fade-up" data-aos-delay={400} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
        <div>
          <h2 className="num display-4">03.</h2>
        </div>
        <div className="step-body">
          <h6>Seo từ khóa</h6>
          <p>Với tốc độ nhanh, tối ưu chuẩn seo. Chúng tôi tin chắc với kinh nghiệm của mình sẽ đưa website của bạn lên top tìm kiếm.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
}
