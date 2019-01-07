
import * as ProjectTypes from '../const/ProjectTypes';

var initialState = [];

const ReDetailProject = (state = initialState, action) => {
   
   
    switch(action.type){
        case ProjectTypes.DETAIL_PROJECT:
            state=action.projects;
            return [...state];
      
        default:
            return state;
    }
}

export default ReDetailProject;