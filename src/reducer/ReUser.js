import * as UserTypes from '../const/UserTypes';
var initialState = [];
const ReUser = (state = initialState, action) => {
   
   
    switch(action.type){
        case UserTypes.LIST_USER:
            state=action.users;
            return [...state];
        
        default:
            return state;
    }
}

export default ReUser;