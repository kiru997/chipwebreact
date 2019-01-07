import React, { Component } from 'react'
import ImgContent from '../../../asset/client/img/assets/two-side-img-2.jpg';
export default class Content extends Component {
  render() {
    return (
        <section className="content-section-type-2 flip-section large-section gray-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="flip-container" data-aos="zoom-in" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
                <div className="img-wrapper">
                  <div className="front side">
                    <img src={ImgContent} alt=""  className="img-fluid" />
                  </div>
                  <div className="back side">
                    <div className="content-wrapper d-flex flex-column justify-content-center align-items-center">
                      <h4>Dịch vụ thiết kế Website chuyên nghiệp</h4>
                      <p>Chúng tôi đem đến cho khách hàng những dịch vụ sáng tạo và bắt kịp với nhu cầu theo xu hướng hiện đại của thế giới cho khách hàng về Website. Đến với Chipweb là sự lựa chọn để bạn thành công. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row services-wrapper">
                <div className="col-12 service-wrapper d-flex align-items-center" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={600}>
                  <div className="icon-wrapper d-flex align-items-center justify-content-center">
                    <i className="fa fa-th" />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <h5>Phong cách website đa dạng</h5>
                    <p>Thiết kế sáng tạo với nhiều mẫu giao diện đa dạng và hiện đại, phù hợp với nhu cầu người sử dụng.</p>
                  </div>
                </div>
                <div className="col-12 service-wrapper d-flex align-items-center" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={600}>
                  <div className="icon-wrapper d-flex align-items-center justify-content-center">
                    <i className="fas fa-terminal" />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <h5>Tối ưu code</h5>
                    <p>Góp phần tạo nên sự thành công không thể không nhắc đến là sự nhanh nhẹn, website cũng vậy tốc độ tải trang phải nhanh để tăng tính trải nghiệm người dùng.</p>
                  </div>
                </div>
                <div className="col-12 service-wrapper d-flex align-items-center" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={600}>
                  <div className="icon-wrapper d-flex align-items-center justify-content-center">
                    <i className="fa fas fa-lock" />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <h5>Bảo mật website</h5>
                    <p>Bảo mật tuyệt đối cho website của bạn bằng nhiều hình thức và kinh nghiệm của chúng tôi. Website của bạn sẽ luôn được an toàn.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
