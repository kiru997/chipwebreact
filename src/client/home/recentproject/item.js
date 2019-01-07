import React, { Component } from 'react';
import * as ConfigTypes from '../../../const/ConfigTypes';
export default class Item extends Component {
  render() {
    var {project}=this.props;
    return (
        <div className="grid-item">
        <div className="img-wrapper">
          <img src={`${ConfigTypes.Base_Link}/projects/${project.image}`} alt=""  className="img-fluid" />
          <div className="description-box hover3d-wrapper">
            <a className="content d-flex align-items-end hover3d-child">
              <div className="content-wrapper d-flex justify-content-between">
                <h6>{project.name}</h6>
                <p className="info">
                  <span>17<i className="fa fa-comments" /></span>
                  <span>24<i className="far fa-heart" /></span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
