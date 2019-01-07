import * as ConfigTypes from '../const/ConfigTypes';

export const actRerenderRequest = (rereder) => {
    return {
        type:ConfigTypes.RE_RENDER,
        rereder
    }
}


