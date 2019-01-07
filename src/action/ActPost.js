import * as PostTypes from '../const/PostTypes';
import callApi from '../utils/callApi';

export const actGetListPostsRequest = () => {
    return dispatch => {
        return callApi(`listposts`, 'GET',null).then(res => {
            dispatch(actGetListPost(res.data.data));
        });
    };
}
export const actGetListPost=(posts)=>{
    return {
        type:PostTypes.LIST_POST,
        posts
    }
}


export const actGetPostRequest = (slug) => {
    return dispatch => {
        return callApi(`post/${slug}`, 'GET',null).then(res => {
            dispatch(actPost(res.data.data));
        });
    };
}
export const actPost=(posts)=>{
    return {
        type:PostTypes.DETAIL_POST,
        posts
    }
}

export const actGetListPaginatePostsRequest=(pageIndex,pageSize)=>{
    return dispatch => {
        return callApi(`listposts/keyWord=null/pageIndex=${pageIndex}/pageSize=${pageSize}`, 'GET',null).then(res => {
          
            dispatch(actGetListPost(res.data.data));
        });
    };
}
