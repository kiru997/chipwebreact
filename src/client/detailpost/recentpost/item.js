import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as ConfigTypes from '../../../const/ConfigTypes';
export default class Item extends Component {
  render() {
    var {post}=this.props;
    return (
        <div className="col-lg-4">
        <div className="recent-post">
          <div className="img-wrapper">
            <a href={`${ConfigTypes.Base_Link}/posts/${post.image}`}>
              <img src={`${ConfigTypes.Base_Link}/posts/${post.image}`} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="recent-post-body">
         <h4 className="title"> <Link to={`/chitiet/${post.slug}`}>{post.name}</Link></h4>
            <p className="recent-post-content">{post.short_descripton}</p>
            <div className="recent-description-box d-flex align-items-center">
              <p>Posted on {post.date} by <a >Alex Gray</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
