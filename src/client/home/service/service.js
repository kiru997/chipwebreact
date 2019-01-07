import React, { Component } from 'react'
import ImgService1 from '../../../asset/client/img/assets/mockup-digital-services.jpg';
import ImgService2 from '../../../asset/client/img/assets/mockup-digital-services2.jpg';
export default class Service extends Component {
  render() {
    return (
        <section className="digital-services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 content light-gray-section">
              <div className="content-wrapper">
                <h2 className="section-title" data-aos="fade-up" data-aos-delay={250} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Dịch vụ của ChipWeb</h2>
                <p className="subtitle" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Cung cấp những dịch vụ, giải pháp website hoàn hảo, hãy trải nghiệm và tin dùng.</p>
                <div className="row">
                  <div className="col-md-6 col-lg-12 col-xl-6" data-aos="fade-up" data-aos-delay={250} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                    <div className="d-flex service-item-type-2">
                      <div className="icon-wrapper d-flex align-items-center justify-content-center">
                        <i className="fa fa-desktop" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="title-service">Thiết kế website</h6>
                        <p className="service-text">Xây dựng website theo yêu cầu , website bán hàng, giới thiệu, bất động sản, hỗ trợ đa trình duyệt.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                    <div className="d-flex service-item-type-2">
                      <div className="icon-wrapper d-flex align-items-center justify-content-center">
                        <i className="fa fa-bullhorn" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="title-service">Seo từ khóa</h6>
                        <p className="service-text">Giúp website bạn có được thứ hạng mong muốn với một từ khóa riêng biệt.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6" data-aos="fade-up" data-aos-delay={350} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                    <div className="d-flex service-item-type-2">
                      <div className="icon-wrapper d-flex align-items-center justify-content-center">
                        <i className="fa fa-bookmark" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="title-service">Cung cấp domain, hosting</h6>
                        <p className="service-text">Hosting tăng tốc website, bảo mật ssl, backup tự động hàng ngày không lo mất dữ liệu.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-12 col-xl-6" data-aos="fade-up" data-aos-delay={400} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                    <div className="d-flex service-item-type-2">
                      <div className="icon-wrapper d-flex align-items-center justify-content-center">
                        <i className="fa fa-cog" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="title-service">Quản trị website</h6>
                        <p className="service-text">Hỗ trợ khắc phục tất cả các lỗi xảy ra đối với website nếu có sự cố, hỗ trợ đăng nội dung và seo website.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 image parallax-window" data-src={ImgService1}>
            </div>
            <div className="col-lg-6 col-12 image bg_img parallax-window last-image" data-src={ImgService2}>
            </div>
            <div className="col-lg-6 col-12 content-about light-gray-section">
              <div className="content-wrapper" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                <h2 className="section-title">Về ChipWeb</h2>
                <p className="about-text">Thiết kế web bằng tất cả trí tuệ và niềm đam mê. Cùng với đội ngũ lập trình viên có nhiều kinh nghiệm trong lĩnh vực và xu hướng đổi mới theo nhu cầu thị trường đáp ứng được nhu cầu cho khách hàng. <strong>Chipweb</strong> đã mang đến dịch vụ thiết kế website chuyên nghiệp cho khách hàng trên nhiều lĩnh vực bao gồm: dịch vụ, ăn uống, giải trí, thời trang, kinh doanh, bất động sản, ... <strong>Chipweb</strong> là một trong những doanh nghiệp tốt nhất và có các dịch vụ hoàn hảo nhất dành cho khách hàng. Với phương châm khi đến với <strong>Chipweb</strong> bạn sẽ thành công.</p>
                <div className="btn-wrapper d-flex">
                  <a  className="button-default-color">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
