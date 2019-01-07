import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGetListPaginatePostsRequest} from '../../../action/ActPost';
import {actGetPagePostRequest } from '../../../action/ActPage';
import Item from './item';
import ItemPage from './itempage';
class Blog extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:'',
       page:'',
       pageIndex:1
    }
  }
  componentDidMount()
  {
    this.props.onGetPaginatePosts(1);
    this.props.onGetPage();
  }
  componentWillReceiveProps(nextProps)
  {
    if(nextProps)
    {
      if(nextProps.posts)
      {
        this.setState({posts:nextProps.posts});
      }
      if(nextProps.page)
      {
        this.setState({page:nextProps.page});
      }
     
    }
    
  }
  onChangePage = (page) =>{
    this.props.onGetPaginatePosts(page);
    this.setState({pageIndex:page});
  }
 
  
  render() {
    var {posts,page,pageIndex}=this.state;
    return (
        <section className="blog-section large-section gray-section">
        <div className="container">
          <div className="row blog-list-row">
            <div className="col">
             
           
                {this.showPost(posts)}
             </div>
             </div>
          <div className="d-flex justify-content-center"   >
            <div className="blog-nav d-flex">
             
              {this.showPage()}

              <div onClick={()=>this.onChangePage((pageIndex+1)>page ? page : (pageIndex+1)  )}>
                <i className="fa fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
  showPost(posts)
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
  showPage()
  {
      var {page,pageIndex}=this.state;
      var realPage;
      var item;
      if(!page)
      {
        page=1;
      }
      if(page>2)
      {
        item=Array.from({length: 3});
      }
      else
      {
        item=Array.from({length: page});
      }
      
      var result=null;
      if(pageIndex-2<=0)
      {
          realPage=1;
      }
      else
      {
        realPage=pageIndex-1;
      }
      var index=realPage;
   
      if(index+1===page)
      {
          index=page-1;
      }
     
      result=item.map((elemnet,key)=>{
        if(key>0)
        {
          ++index;
        }
       
          return(
            <ItemPage onClick={this.onChangePage} pageIndex={pageIndex} index={index} key={key}></ItemPage>
          )
      });
      return result;
     
  }
}
const mapStateToProps = state => {
 
  return {
      posts: state.RePost,
      page:state.RePage
  
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      
      onGetPaginatePosts:(pageIndex)=>{
        dispatch(actGetListPaginatePostsRequest(pageIndex,5));
      },
      onGetPage:()=>{
        dispatch(actGetPagePostRequest(5));
      }
      
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Blog)
