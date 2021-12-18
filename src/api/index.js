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
  return requests({
    url: '/list',
    method: 'post',
    data: params,
  });
};

export const reqGoodsInfo = (skuId) => {
  return requests({
    url: `/item/${skuId}`,
    method: 'get',
  });
};

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
  });
};

export const reqCartList = () => {
  return requests({
    url: '/cart/cartList',
    method: 'get',
  });
};
