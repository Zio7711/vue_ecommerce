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

export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
  });
};

export const reqUpdateCheckedById = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
  });
};

export const reqGetCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
  });
};

export const reqUserRegister = (data) => {
  return requests({
    url: '/user/passport/register',
    data,
    method: 'post',
  });
};

export const reqUserLogin = (data) => {
  return requests({
    url: '/user/passport/login',
    data,
    method: 'post',
  });
};

export const reqUserInfo = () => {
  return requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  });
};

export const reqLogout = () => {
  return requests({
    url: '/user/passport/logout',
    method: 'get',
  });
};

export const reqAddressInfo = () => {
  return requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
  });
};
