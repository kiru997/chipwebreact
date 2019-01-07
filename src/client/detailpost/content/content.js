import React, { Component } from 'react';
import * as ConfigTypes from '../../../const/ConfigTypes';
import ReactHtmlParser from 'react-html-parser';
export default class Content extends Component {
  render() {
    var {detail}=this.props;
    return (
      <div className="post-content">
        <h3 className="post-title">{detail.name}</h3>
        <p className="text-part">{detail.short_description}</p>
        <div className="post-thumb-wrapper">
          <img src={`${ConfigTypes.Base_Link}/posts/${detail.image}`} alt="" className="img-fluid" />
        </div>
 
        <blockquote className="blockquote-type-1">
          <div>{ReactHtmlParser(detail.description)}</div>
        </blockquote>
  
      </div>

    )
  }
}
