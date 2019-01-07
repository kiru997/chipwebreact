import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ConfigTypes from '../../../const/ConfigTypes';
export default class Item extends Component {
  render() {
    var {post}=this.props;
    return (
        <div className="col-lg-4">
        <div className="blog-card-wrapper hover3d-wrapper" data-aos="fade-left" data-aos-delay={300} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={600}>
          <div className="card-content hover3d-child">
            <div className="card-blog-header">
              <div className="img-wrapper d-flex align-items-center justify-content-center">
                <a href="blog-single-post-sidebar-layout.html">
                  <img src={`${ConfigTypes.Base_Link}/posts/${post.image}`} alt="" className="img-fluid img" />
                  <div className="tag bg-color-yellow">{post.category.name}</div>
                </a>
              </div>
            </div>
            <div className="card-blog-body">
              <h5> <Link  to={`/chitiet/${post.slug}`}>{post.name}</Link></h5>
              <p className="content">{post.short_description}<a >[...]</a></p>
              <div className="card-blog-footer d-flex justify-content-between align-items-end">
                <p className="date d-flex align-items-center">
                  <i className="fas fa-calendar-" />
                  {post.date}
                </p>
                <p className="info d-flex align-content-center">
                  <span><i className="fas fa-comment-" />11</span>
                  <span><i className="fas fa-heart" />17</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
