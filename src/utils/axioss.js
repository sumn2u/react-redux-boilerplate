import axios from 'axios';

import {
    store
} from './store'
const http = axios.create();
http.interceptors.request.use(config => {

    // store.commit('loader/START_LOADING');
    store.dispatch({
        type: 'START_LOADING'
    })
    return config;

}, error => {

    // store.commit('loader/FINISH_LOADING');
    store.dispatch({
        type: 'FINISH_LOADING'
    })
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    // store.commit('loader/FINISH_LOADING');
    // store.dispatch({type:'FINISH_LOADING'})
    setTimeout(() => {
        store.dispatch({
            type: 'FINISH_LOADING'
        })
    }, 1000);
    return response;
}, error => {

    // store.commit('loader/FINISH_LOADING');
    store.dispatch({
        type: 'FINISH_LOADING'
    })
    return Promise.reject(error);
});

export default http;