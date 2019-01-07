import React, { Component } from 'react'
import Img from '../../../asset/client/img/assets/absurdity.png';
export default class Pricing extends Component {
  render() {
    return (
        <section className="pricing-table-type-1 cards-section border-bottom-simple border-top-simple light-gray-section bg_img" style={{backgroundImage: `url(${Img})`}}>
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>
            <div className="col-lg-3 pricing-table-wrapper">
              <div className="pricing-table">
                <div className="pricing-header">
                  <p className="pricing-type">Starter</p>
                  <h2 className="price"><span>$</span>19</h2>
                </div>
                <ul className="features-list">
                  <li><p>Free Setup</p></li>
                  <li><p>Powerful Customization</p></li>
                  <li><p>Unlimited Items</p></li>
                  <li><p>24/7 Support</p></li>
                </ul>
                <div className="btn-wrapper d-flex">
                  <a >Sign up</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 pricing-table-wrapper">
              <div className="pricing-table">
                <div className="pricing-header">
                  <p className="pricing-type">Silver</p>
                  <h2 className="price"><span>$</span>39</h2>
                </div>
                <ul className="features-list">
                  <li><p>Free Setup</p></li>
                  <li><p>Powerful Customization</p></li>
                  <li><p>Unlimited Items</p></li>
                  <li><p>24/7 Support</p></li>
                </ul>
                <div className="btn-wrapper d-flex">
                  <a >Sign up</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 pricing-table-wrapper active-card">
              <div className="pricing-table">
                <div className="pricing-header">
                  <div className="best-value">Best Value</div>
                  <p className="pricing-type">Gold</p>
                  <h2 className="price"><span>$</span>49</h2>
                </div>
                <ul className="features-list">
                  <li><p>Free Setup</p></li>
                  <li><p>Powerful Customization</p></li>
                  <li><p>Unlimited Items</p></li>
                  <li><p>24/7 Support</p></li>
                </ul>
                <div className="btn-wrapper d-flex">
                  <a >Sign up</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 pricing-table-wrapper">
              <div className="pricing-table">
                <div className="pricing-header">
                  <p className="pricing-type">Platium</p>
                  <h2 className="price"><span>$</span>99</h2>
                </div>
                <ul className="features-list">
                  <li><p>Free Setup</p></li>
                  <li><p>Powerful Customization</p></li>
                  <li><p>Unlimited Items</p></li>
                  <li><p>24/7 Support</p></li>
                </ul>
                <div className="btn-wrapper d-flex">
                  <a >Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
