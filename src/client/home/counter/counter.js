import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
        <section className="counters-section-type-2 border-bottom-simple border-top-simple">
  <div className="container-fluid">
    <div className="row counters-wrapper justify-content-center">
      <div className="col-sm-4 col-6 counter-box first-side d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={700}>
        <p className="title-counter">Dự án đã hoàn thành</p>
        <span className="prop-obj prop-obj1" data-count={128}>0</span>
      </div>
      <div className="col-sm-4 col-6 counter-box second-side d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={700}>
        <p className="title-counter">Đối tác</p>
        <span className="prop-obj prop-obj2" data-count={256}>0</span>
      </div>
      <div className="col-sm-4 col-6 counter-box third-side d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in" data-aos-duration={700}>
        <p className="title-counter">Giải thưởng</p>
        <span className="prop-obj prop-obj3" data-count={512}>0</span>
      </div>
    </div>
  </div>
</section>

    )
  }
}
