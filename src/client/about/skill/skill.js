import React, { Component } from 'react';
import Img from '../../../asset/client/img/about/skills.jpg';

export default class Skill extends Component {
  render() {
    return (
        <section className="skills-section gray-section border-top-simple">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 image" style={{backgroundImage: `url(${Img})`}} data-aos="slide-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
            </div>
            <div className="col-md-6" data-aos="fade" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
              <div className="skills-wrapper">
                <h2 className="section-title">Kỹ Năng</h2>
                <p className="subtitle" />
                <div className="progress-bar-type-1">
                  <div className="progress-bar-line1 progress-bar-line" data-progress="0.8">
                    <p className="skill-title">Thiết kế web (5 năm kinh nghiệm)</p>
                  </div>
                  <div className="progress-bar-line2 progress-bar-line" data-progress="0.75">
                    <p className="skill-title">Web Marketing (4 năm kinh nghiệm)</p>
                  </div>
                  {/* <div class="progress-bar-line3 progress-bar-line" data-progress='0.85'>
                                <p class="skill-title">Web Marketing (7 years experience)</p>
                            </div>
                            <div class="progress-bar-line4 progress-bar-line" data-progress='0.9'>
                                <p class="skill-title">WordPress (5 years experience)</p>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
