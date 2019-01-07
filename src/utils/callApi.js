import axios from 'axios';
import * as Config from '../const/ConfigTypes';
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
export default async function callApi(endpoint, method = 'GET', body){
    return await axios({
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin':'*'
        },
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    },config).catch(err => {
        console.log(err);
    });
};