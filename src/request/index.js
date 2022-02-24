import axios from 'axios'
import {getToken} from "@/util/tokenUtil";
//axios.create 创建一个axios实例  我们给这个实例编写配置，后续所有通过实例发送的请求，都受当前配置约束
const $http = axios.create({
    // withCredentials:true,
    baseURL: 'http://8.136.81.47:8081',
    timeout: 3000,
    // baseURL: 'http://localhost:8081',
    headers:{
        'content-type':'application/json'      //改这里就好了
    },
    // changeOrigin: true,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization=getToken()

    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log('请求错误',error)
    return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data=response.data;

    return data;
}, function (error) {
    // 对响应错误做点什么
    console.log('响应错误',error)
    return Promise.reject(error);
});

export default $http
