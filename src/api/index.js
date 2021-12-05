//api management
import requests from './request';

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
