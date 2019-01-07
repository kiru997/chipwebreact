import * as ConfigTypes from '../const/ConfigTypes';
var initialState = [];
const ReRerender = (state = initialState, action) => {
   
   
    switch(action.type){
        case ConfigTypes.RE_RENDER:
            state=action.rerender;
            return [...state];
        
        default:
            return state;
    }
}

export default ReRerender;