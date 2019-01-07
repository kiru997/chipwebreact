import * as PageTypes from '../const/PageTypes';
import callApi from '../utils/callApi';

export const actGetPagePostRequest = (pageSize) => {
    return dispatch => {
        return callApi(`getpagepost/pageSize=${pageSize}`, 'GET',null).then(res => {
        
            dispatch(actGetPage(res.data));
        });
    };
}
export const actGetPage=(page)=>{
    return {
        type:PageTypes.PAGE_DETAIL,
        page
    }
}


