import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Img from '../../../asset/client/img/home/404.jpg';
export default class Slider extends Component {
  render() {
    return (
        <section className="hero-header hero-default default_overlay bg_img parallax-window page-header" data-src={Img} data-section-type="canvas_default_particles">
        <div id="canvas-parent" className="canvas-wrapper">
        </div>
        <header className="page-header">
          <div className="container breadcrumbs-wrapper">
            <div className="breadcrumbs d-flex flex-column justify-content-center">
              <h1 className="title">Tin Tức</h1>
              <div>
                <ul className="breadcrumbs-list d-flex">
                <li>
                  <Link to="/">Trang Chủ</Link>
                  </li>
                  <li>
                  <Link to="/gioithieu">Giới thiệu</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="angle-down" data-aos="zoom-in" data-aos-delay={1300} data-aos-anchor=".hero-header" data-aos-easing="ease-in-out" data-aos-duration={700}>
          <p>scroll down</p>
          <i className="fa fa-chevron-down" />
        </div>
      </section>
      
    )
  }
}
