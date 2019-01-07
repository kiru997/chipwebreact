import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGetListUsersRequest} from '../../../action/ActUser';
import Img from '../../../asset/client/img/assets/inspiration-geometry.png';
import Item from './Item';

class Team extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:''
    }
  }
  componentDidMount()
  {
    this.props.onGetAllUser()
  }
  componentWillReceiveProps(nextProps)
  {
    if(nextProps && nextProps.users)
    {
      this.setState({users:nextProps.users});
    }
  }
  
  render() {
    var {users}=this.state;
    return (
        <section className="team-section-about large-section" style={{backgroundImage: `url(${Img})`}}>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="section-title text-center title-divider" data-aos="fade-up" data-aos-delay={100} data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-duration={700}>Đội ngũ nhân viên <span className="highlight">.</span></h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row team-member-type-1">
           {this.showTeams(users)}
           
          
          </div>
        </div>
      </section>
      
    )
  }
  showTeams(teams){
    var result=null;
    if(teams.length>0)
    {
      result=teams.map((element,index)=>{
        return(
          <Item key={index} team={element}/>
        )
       
      })
    }
    return result
  }
}
const mapStateToProps = state => {
 
  return {
      users: state.ReUser,
  
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      
      onGetAllUser:()=>{
        dispatch(actGetListUsersRequest());
      },
      
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Team)
