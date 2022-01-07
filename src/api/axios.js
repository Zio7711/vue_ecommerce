// encapsulate axios
import axios from 'axios';
import nprogress from 'nprogress';

//if the progress bar does not display, you must be forgetting import the css file
import 'nprogress/nprogress.css';

//import store in the module
import store from '@/store';

// request is the instance of axios
const requests = axios.create({
  baseURL: 'api',
  // the request cannot exceed 5 seconds
  timeout: 5000,
});

//请求拦截器
// before sending request, do something here
requests.interceptors.request.use((config) => {
  // config object
  // let progress bar run
  if (store.state.detail.uuid_token) {
    // add userTempId to the header, so that backend can read it
    config.headers.userTempId = store.state.detail.uuid_token;
  }

  // add token to header sending to the backend
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  nprogress.start();

  return config;
});

//响应拦截器
// after sending request, if successful, do something here
requests.interceptors.response.use(
  //config object, header as a property
  (res) => {
    // finish the progress bar
    nprogress.done();
    // something that will be done after request
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error('request failed', err));
  }
);

// export the axios instance
export default requests;
