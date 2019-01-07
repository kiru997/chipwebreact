import * as PostTypes from '../const/PostTypes';
var initialState = [];
const RePost = (state = initialState, action) => {
   
   
    switch(action.type){
        case PostTypes.LIST_POST:
            state=action.posts;
            return [...state];
        
        default:
            return state;
    }
}

export default RePost;