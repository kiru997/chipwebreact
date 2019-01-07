import React, { Component } from 'react';
import Img from '../../../asset/client/img/about/about-us.jpg';
export default class Content extends Component {
  render() {
    return (
        <section className="content-section-type-1 large-section gray-section">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Giới thiệu<span className="highlight">.</span></h2>
            </div>
          </div>
        </div>
        <div className="container content-wrapper accordion-type-1">
          <div className="content">
            <div className="row">
              <div className="col-lg-6">
                <div className="video-wrapper d-flex align-items-start justify-content-center" data-aos="fade-right" data-aos-delay={150} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                  <img src={Img} alt=""  className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion-wrapper" data-aos="fade-left" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
                  <div className="accordion active-accordion">
                    <p className="accordion-header">Lịch sử hình thành</p>
                    <div className="accordion-body">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container content-footer">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="service-item-type-1">
                <div className="service-wrapper d-flex">
                  <div className="icon-wrapper">
                    <i className="fa fa-globe" />
                  </div>
                  <div className="description">
                    <h6>Về chúng tôi</h6>
                    <p>Chúng tôi đem đến cho khách hàng những dịch vụ sáng tạo và bắt kịp theo xu hướng hiện đại của thế giới cho khách hàng về Website. Đến với Chipweb là sự lựa chọn để bạn thành công.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={150} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="service-item-type-1">
                <div className="service-wrapper d-flex">
                  <div className="icon-wrapper">
                    <i className="fa fa-users" />
                  </div>
                  <div className="description">
                    <h6>Nhân viên giàu kinh nghiệm</h6>
                    <p>Đội ngũ nhân viên giàu kinh nghiệm, mỗi nhân viên là một chuyên gia đảm nhiệm trong lĩnh vực của mình. Kết hợp lại tạo nên gia đình ChipWeb vui vẻ, thân thiện, khơi nguồn sáng tạo và luôn luôn làm việc có hiệu quả.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
              <div className="service-item-type-1">
                <div className="service-wrapper d-flex">
                  <div className="icon-wrapper">
                    <i className="fa fa-universal-access" />
                  </div>
                  <div className="description">
                    <h6>Hãy trải nghiệm và tin dùng</h6>
                    <p>Bạn đang kinh doanh và muốn mở rộng để nhiều người biết đến. Hãy để ChipWeb giúp bạn, bằng kinh nghiệm và những yêu cầu khắt khe ChipWeb sẽ đáp ứng được hơn cả sự mong đợi cho bạn.</p>
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
