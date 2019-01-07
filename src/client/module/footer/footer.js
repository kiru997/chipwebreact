import React, { Component } from 'react'
import Logo from '../../../asset/client/img/logo/logo-mini.png';
import Img1 from '../../../asset/client/img/blog/blog-recent-2.jpg';
import Img2 from '../../../asset/client/img/blog/blog-recent-3.jpg';
import Img3 from '../../../asset/client/img/blog/blog-recent-1.jpg';
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="container-fluid footer-inner">
          <div className="footer-top">
            <div className="container footer-top-inner">
              <p className="info-text">ChipWeb.Vn - Giải pháp website hoàn hảo, trải nghiệm và tin dùng</p>
              <a href="index-2.html">
                <div className="footer-logo">
                  <img src={Logo} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="social-networks">
                <p className="title" />
                <div className="social-wrapper">
                  <a  className="social-box">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a  className="social-box">
                    <i className="fab fa-twitter" />
                  </a>
                  <a  className="social-box">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a  className="social-box">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-body">
            <div className="container">
              <div className="footer-sidebar">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="sidebar-widget text-widget">
                      <h6 className="sidebar-title">Về ChipWeb</h6>
                      <p>Chúng tôi đem đến cho khách hàng những dịch vụ sáng tạo, bắt kịp với xu hướng hiện đại của thế giới cho khách hàng về Website. Đến với Chipweb là sự lựa chọn để bạn thành công.</p>
                      <h6 className="sidebar-title">Đăng ký để nhận thông báo</h6>
                      <form className="newsletter-form-widget">
                        <input type="email" placeholder="Email*" required />
                        <button type="submit"><i className="fa fa-envelope" /></button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-widget latest-posts-widget">
                      <h6 className="sidebar-title">Latest Blog Posts</h6>
                      <ul className="post-list">
                        <li className="post">
                          <a >
                            <div className="img-wrapper">
                              <img src={Img1} alt=""  className="img-fluid" />
                            </div>
                          </a>
                          <div className="post-body">
                            <h6 className="post-title"><a >Good design is obvious</a></h6>
                            <div className="description-box"><p className="date">25 April 2018 | by <a >Alex Gray</a></p></div>
                          </div>
                        </li>
                        <li className="post">
                          <a >
                            <div className="img-wrapper">
                              <img src={Img2} alt="" className="img-fluid" />
                            </div>
                          </a>
                          <div className="post-body">
                            <h6 className="post-title"><a >Guide to UX prototyping</a></h6>
                            <div className="description-box"><p className="date">26 April 2018 | by <a >Sara Smith</a></p></div>
                          </div>
                        </li>
                        <li className="post">
                          <a >
                            <div className="img-wrapper">
                              <img src={Img3} alt="" className="img-fluid" />
                            </div>
                          </a>
                          <div className="post-body">
                            <h6 className="post-title"><a >Social Media Today</a></h6>
                            <div className="description-box"><p className="date">27 April 2018 | by <a >Frank Doe</a></p></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-widget contact-info-widget">
                      <h6 className="sidebar-title">Liên Hệ</h6>
                      <p className="description" />
                      <ul className="contact-info">
                        <li><i className="fa fa-map-marker" />
                          <p>119 Nam Kỳ Khởi Nghĩa, P.7, Q.3, TPHCM</p></li>
                        <li><i className="fa fa-envelope" /><a >sale@chipweb.vn</a></li>
                        <li><i className="fa fa-phone" /><a >028.3575.3757</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper">
            <p className="copyright"><i className="fa fa-copyright" />2018 ChipWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    )
  }
}
