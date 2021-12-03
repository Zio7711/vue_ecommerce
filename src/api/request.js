import axios from 'axios';

const requests = axios.create({
  baseURL: 'api',
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    res.data;
  },
  (err) => {
    return Promise.reject(new Error('request failed'));
  }
);

export default requests;
