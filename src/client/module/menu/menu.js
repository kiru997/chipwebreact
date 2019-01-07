import React, { Component } from 'react';
import { Link,Route } from "react-router-dom";
import Logolight from '../../../asset/client/img/logo/logo-light.png';
import Logodark from '../../../asset/client/img/logo/logo-dark.png';
export default class Menu extends Component {
  render() {
    const LogoLink = ({to}  ) => (
      <Route
        path={to}
       
        children={() => (
         
           
            <Link to={to} className="logo-link d-flex align-items-center aos-init aos-animate" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-out" data-aos-duration="700" >
              <img src={Logolight} alt=""  className="logo-img logo-light" />
              <img src={Logodark} alt=""  className="logo-img logo-dark" />
            </Link>
          
        )}
      />
    );
    return (
      
        <nav className="navbar navbar-default desktop-menu logo-right">
        <div className="container-fluid navbar-inner">
          <div className="navbar-logo">
           <LogoLink to="/"/>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-menu-list">
              <li className="menu-primary-item"><Link  to="/">Trang chủ</Link></li>
              <li className="menu-primary-item"><Link to="/gioithieu">Giới thiệu</Link></li>
              <li className="menu-primary-item"><Link to="/dichvu">Dịch Vụ</Link></li>
              <li className="menu-primary-item"><Link to="/tintuc">Tin Tức</Link></li>
              <li className="menu-primary-item"><Link to="/lienhe">Liên Hệ</Link></li>
            </ul>
            <div className="navbar-additional align-items-center">
              <div className="social-box">
                <a >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
              <div className="social-box">
                <a >
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <div className="social-box">
                <a >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="navbar-search align-items-center justify-content-center">
              <div className="search-input d-flex align-items-center justify-content-center">
                <div className="search-icon">
                  <i className="fa fa-search" />
                </div>
                <div className="search-times">
                  <i className="fa fa-times" />
                </div>
              </div>
              <form className="search-form">
                <input type="text" placeholder="Bạn cần tìm gì ?" />
              </form>
            </div>
          </div>
          <button className="hamburger justify-content-center align-items-center hamburger--spin" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </nav>
    
    
      
    )
    
  }
}
