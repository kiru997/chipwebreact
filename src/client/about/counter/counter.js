import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <section className="counters-section-type-1 white-section">
        <div className="container-fluid">
            <div className="row counters-wrapper">
            <div className="col-6 col-lg-3 counter-box d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
                <span className="prop-obj prop-obj1" data-count={530}>0</span>
                <p className="title-counter">Dự án hoàn thành</p>
            </div>
            <div className="col-6 col-lg-3 counter-box d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={200} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
                <span className="prop-obj prop-obj2" data-count={740}>0</span>
                <p className="title-counter">Khách hàng</p>
            </div>
            <div className="col-6 col-lg-3 counter-box d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
                <span className="prop-obj prop-obj3" data-count={231}>0</span>
                <p className="title-counter">Giả thưởng</p>
            </div>
            <div className="col-6 col-lg-3 counter-box d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={400} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
                <span className="prop-obj prop-obj4" data-count={1658}>0</span>
                <p className="title-counter">Đối tác</p>
            </div>
            </div>
        </div>
        </section>

    )
  }
}
