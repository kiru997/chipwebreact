import React, { Component } from 'react';
import Item from './item';
export default class Recent extends Component {
  render() {
    var {posts}=this.props;
    return (
        <div className="recent-posts-section">
            <div className="row">
                <div className="col">
                        <h6 className="recent-posts-title">
                        Recent Posts
                        </h6>
                </div>
            </div>
            <div className="row">
        
              {this.showpost(posts)}
            
            </div>
      </div>
      
    )
  }
  showpost(posts)
  {
    let result=null;
    if(posts.length>0)
    {
      result=posts.map((element,index)=>{
        return(
          <Item key={index} post={element}></Item>
        )
      })
    }
    return result;
  }
}
