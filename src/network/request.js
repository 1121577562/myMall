// 导入 axios库，并对它进行封装
import axios from 'axios'


export function request(config) {
    // 1.创建 axios的实例
    const axiosInstance = new axios.create({
        baseURL: 'http://127.0.0.1:3000',
        timeout: 3000
    });

    // 2.设置请求和响应拦截器
    axiosInstance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err);
    });

    axiosInstance.interceptors.response.use(result => {
        return result.data;
    }, err => {
        console.log(err);
    })

    // 3.发送真正的网络请求 (axios实例本身返回的就是一个promise实例)
}