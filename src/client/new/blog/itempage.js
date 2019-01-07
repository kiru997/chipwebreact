import React, { Component } from 'react';

export default class ItemPage extends Component {
  render() {
    var {pageIndex,index}=this.props;
    var classdetail='';
    if(pageIndex===index)
    {
        classdetail="active";
    }
    return (
     
        <div onClick={()=>this.props.onClick(index)} className={classdetail}>
            {index}
        </div>
     
    )
  }
}
