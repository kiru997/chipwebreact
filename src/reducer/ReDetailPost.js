import * as PostTypes from '../const/PostTypes';
var initialState = [];
const ReDetailPost = (state = initialState, action) => {
   
   
    switch(action.type){
        case PostTypes.DETAIL_POST:
           
            state=action.posts;
            return state;
        
        default:
            return state;
    }
}

export default ReDetailPost;