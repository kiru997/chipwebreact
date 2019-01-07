import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetListCategoryProjectRequest} from '../../../action/ActCategory';
import { actGetListProjectByTypeRequest,actGetListProjectRequest} from '../../../action/ActProject';
import Item from './item';
class RecentProject extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       categories:'',
       projects:'',
       idcategory:-1,
    }
  }
  
  componentDidMount()
  {

    this.props.onGetCategoryProject();
    this.props.onGetAllProject();
    
  }
  onClick=(id)=>{
    this.setState({idcategory:id});

    this.props.onGetProjectByType(id);
  }
   
  componentWillReceiveProps(nextProps)
  {
    if(nextProps)
    {
      if(nextProps.projects)
      {
        this.setState({ projects: nextProps.projects });
      }
      if(nextProps.categories)
      {
        this.setState({ categories:nextProps.categories });
      }
    }
  }
  render() {
    
    var {categories,projects,idcategory}=this.state;
    var classactive='';
    if(idcategory===-1)
    {
        classactive="active-button";
    }
   
    return (
        <section className="projects-section light-gray-section">
        <div className="container">
          <div className="button-group button-group-default d-flex justify-content-center">
          <button className={classactive}  onClick={()=>this.onClick(-1)} >Tất Cả</button>
           {this.showCategories(categories)}
          </div>
        </div>
        <div className="container-fluid">
          <div className="grid row"  >
           {this.showProjects(projects)}
          </div>
        </div>
      </section>
      
    )
  }
    showCategories(categories)
    {
        var result=null;
        var {idcategory}=this.state;
        if(categories.length>0)
        {

          result=categories.map((element,index)=>{
            var classactive='';
            if(element.id===idcategory)
            {
              classactive="active-button";
            }
              return(

                  <button key={index} onClick={()=>this.onClick(element.id)} className={classactive}>{element.name}</button>
              )
                  
              })
        }
        return result;
    }
    showProjects(projects)
    {
        var result=null;
        if(projects.length>0)
        {
        result=projects.map((element,index)=>{
            return(
                <Item
                key={index}
                project={element}
                />
            )
                
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
 
  return {
      projects: state.ReProject,
      
      categories:state.ReCategoryProject
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      
      onGetProjectByType:(id)=>{
        dispatch(actGetListProjectByTypeRequest(id));
      },
      onGetAllProject:()=>{
        dispatch(actGetListProjectRequest());
      },
      onGetCategoryProject:()=>{
        dispatch(actGetListCategoryProjectRequest());
      },
     
     
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecentProject)
