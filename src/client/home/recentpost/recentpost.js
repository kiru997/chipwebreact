import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actGetListPostsRequest} from '../../../action/ActPost';
import Img1 from '../../../asset/client/img/assets/absurdity.png';
import Item from './item';
class RecentPost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:''
    }
  }
  
  componentDidMount()
  {
    this.props.onGetAllPosts();
  }
  componentWillReceiveProps(nextProps)
  {
   
    if(nextProps && nextProps.posts)
    {
      this.setState({posts:nextProps.posts});
    }
    
  }
  
  render() {
    var {posts}=this.state;
    return (
        <section className="recent-posts gray-section large-section" style={{backgroundImage: `url(${Img1})`}}>
        <div className="container">
          <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Tin Tức Mới <span className="highlight">.</span></h2>
                </div>
              </div>
              </div>
          <div className="row blog-wrapper">
          
         {this.showPosts(posts)}
       
          </div>
        </div>
      </section>
      
    )
  }
  showPosts(post)
  {
   
    var result=null;
    if(post.length>0)
    {
      result= post.map((element,index)=>{
        return(
          <Item key={index} post={element}></Item>
        )
      })
    }
    return result;
  }
}
const mapStateToProps = state => {
 
  return {
      posts: state.RePost,
  
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      
      onGetAllPosts:()=>{
        dispatch(actGetListPostsRequest());
      },
      
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecentPost)
