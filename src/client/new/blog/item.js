import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ConfigTypes from '../../../const/ConfigTypes';
export default class Item extends Component {


  render() {
      var {post}=this.props;
    return (
        <article className="post-list" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
        <div className="row">
          <div className="col-lg-6">
            <div className="post-image-side">
              <a  className="img-wrapper">
                <img src={`${ConfigTypes.Base_Link}/posts/${post.image}`} alt="" className="img-fluid" />
              </a>
              <a className="tag bg-color-yellow">
                {post.category.name}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="post-content-side">
              <div className="description-box d-flex align-items-center right-side">
                <i className="far fa-clock" />
                <p>Posted on {post.date} by <a >David Spencer</a></p>
              </div>
              <Link to={`/chitiet/${post.slug}`} className="post-title" >{post.name}</Link>
              <p className="post-content">{post.short_description}</p>
              <div className="btn-wrapper d-flex">
              
              <Link to={`/chitiet/${post.slug}`} className="button-default-black">
              Read more
              </Link>
             
              </div>
            </div>
          </div>
        </div>
      </article>
   
    )
  }
}
