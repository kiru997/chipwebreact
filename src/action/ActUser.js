import * as UserTypes from '../const/UserTypes';
import callApi from '../utils/callApi';

export const actGetListUsersRequest = () => {
    return dispatch => {
        return callApi(`listuser`, 'GET',null).then(res => {
            dispatch(actGetListUser(res.data.data));
        });
    };
}
export const actGetListUser=(users)=>{
    return {
        type:UserTypes.LIST_USER,
        users
    }
}


