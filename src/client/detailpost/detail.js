import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {actGetPostRequest} from '../../action/ActPost';
import {actGetListPaginatePostsRequest} from '../../action/ActPost';
import Content from './content/content';
import Slider from './slider/slider';
import Recent from './recentpost/recent';
class Detail extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         detail:'',
         posts:'',
         paginateposts:'',
      }
    }
    
    componentWillMount()
    {
        var{match}=this.props;
        console.log(1);
        this.props.onGetDetail(match.params.slug);
        this.props.onGetPaginatePosts(1);

    }
    componentWillReceiveProps(nextProps)
    {
     
        if(nextProps && nextProps.detail)
        {
            this.setState({detail:nextProps.detail});
        }
        if(nextProps && nextProps.posts)
        {
            this.setState({posts:nextProps.posts});
        }
        if(nextProps && nextProps.match)
        {
            this.props.onGetDetail(nextProps.match.params.slug);
        }
      
    }
  render() {
     var {detail,posts}=this.state;
    return (
      <Fragment>
          <Slider></Slider>
          <section className="white-section blog-section single-post-section">
            <div className="container" data-aos="fade" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={800}>
                <div className="row">
                    <div className="col single-post-wrapper">
                        <Content detail={detail}></Content>
                        <Recent posts={posts}></Recent>
                    </div>
                </div>
            </div>
        </section>
      </Fragment>
    )
  }

}
const mapStateToProps=(state)=>{
    
    return{
        detail:state.ReDetailPost,
        posts:state.RePost,
       
    }
}
const mapDispatchToProps = (dispacth,props)=>{
    return {

        onGetPaginatePosts:(pageIndex)=>{
            dispacth(actGetListPaginatePostsRequest(pageIndex,3));
        },
       onGetDetail:(slug)=>{
           dispacth(actGetPostRequest(slug));
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail)
