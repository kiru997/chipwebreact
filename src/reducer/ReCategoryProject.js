
import * as CategoryTypes from '../const/CategoryTypes';

var initialState = [];

const ReCategoryProject = (state = initialState, action) => {
   
   
    switch(action.type){
        case CategoryTypes.LIST_CATEGOTY_PROJECT:
            state=action.categories;
            return [...state];
        default:
            return state;
    }
}

export default ReCategoryProject;