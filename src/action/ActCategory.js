import * as CategoryTypes from '../const/CategoryTypes';
import callApi from '../utils/callApi';

export const actGetListCategoryProjectRequest = () => {
    return dispatch => {
        return callApi(`listprojectcategory`, 'GET',null).then(res => {
            
            dispatch(actGetListCategoryProject(res.data.data));
        });
    };
}
export const actGetListCategoryProject=(categories)=>{
    return {
        type:CategoryTypes.LIST_CATEGOTY_PROJECT,
        categories
    }
}