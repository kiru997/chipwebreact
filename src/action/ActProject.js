import * as ProjectTypes from '../const/ProjectTypes';
import callApi from '../utils/callApi';


export const actGetListProjectRequest = () => {
    return dispatch => {
        return callApi(`listproject`, 'GET',null).then(res => {
            dispatch(actGetListProject(res.data.data));
        });
    };
}
export const actGetListProject=(projects)=>{
    return {
        type:ProjectTypes.LIST_PROJECT,
        projects
    }
}


export const actGetListProjectByTypeRequest = (idtype) => {
    return dispatch => {
        return callApi(`listproject/type=${idtype}`, 'GET',null).then(res => {
            
            dispatch(actGetListProjectByType(res.data.data));
        });
    };
}
export const actGetListProjectByType=(projects)=>{
    return {
        type:ProjectTypes.LIST_PROJECT_BY_TYPE,
        projects
    }
}



export const actGetProjectRequest = (id) => {
    return dispatch => {
        return callApi(`project/${id}`, 'GET',null).then(res => {
            
            dispatch(actGetProject(res.data.data));
        });
    };
}
export const actGetProject=(projects)=>{
    return {
        type:ProjectTypes.DETAIL_PROJECT,
        projects
    }
}