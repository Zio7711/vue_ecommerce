//api management
import requests from './axios';

//api/product/getBaseCategoryList get no parameters

import mockRequests from './mockAjax';

export const reqCategoryList = () => {
  //send request return a Promise
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
};

export const reqGetBannerList = () => {
  return mockRequests.get('/banner');
};

export const reqFloorList = () => {
  return mockRequests.get('/floor');
};

// post request with params /api/list
export const reqGetSearchInfo = (params) => {
  requests({
    url: '/list',
    method: 'post',
    data: params,
  });
};
