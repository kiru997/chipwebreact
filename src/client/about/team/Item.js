import React, { Component } from 'react';
import * as ConfigTypes from '../../../const/ConfigTypes';
export default class Item extends Component {
  render() {
    var {team}=this.props;
    return (
        <div className="col-lg-3 col-6 member-wrapper" data-aos="flip-right" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
        <div className="img-wrapper">
          <img src={`${ConfigTypes.Base_Link}/users/${team.image}`} alt=""  className="img-fluid" />
          <div className="content d-flex flex-column justify-content-center align-items-center">
            <div>
              <p className="name">{team.name}</p>
              <p className="position">{team.position}</p>
            </div>
            <div className="social-wrapper d-flex">
              <a className="social-box" ><i className="fab fa-facebook-f" /></a>
              <a className="social-box" ><i className="fab fa-twitter" /></a>
              <a className="social-box" ><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
