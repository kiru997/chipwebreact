
import * as ProjectTypes from '../const/ProjectTypes';

var initialState = [];

const ReProject = (state = initialState, action) => {
   
   
    switch(action.type){
        case ProjectTypes.LIST_PROJECT:
            state=action.projects;
           
            return [...state];
        case ProjectTypes.LIST_PROJECT_BY_TYPE:
            state=action.projects;
            return [...state];
        default:
            return state;
    }
}

export default ReProject;