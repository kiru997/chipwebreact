import * as PageTypes from '../const/PageTypes';
var initialState=[];
const RePage = (state = initialState, action) => {
   
   
    switch(action.type){
        case PageTypes.PAGE_DETAIL:
            state=action.page;
            return state;
        
        default:
            return state;
    }
}

export default RePage;