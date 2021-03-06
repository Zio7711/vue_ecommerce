//api management
// import axios instance
import requests from './axios';

//api/product/getBaseCategoryList get no parameters

import mockRequests from './mockAjax';

// notes: the function must return the request Promise
export const reqCategoryList = () => {
  //send request return a Promise
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
};

// getting banner info for the Home component
export const reqGetBannerList = () => {
  return mockRequests.get('/banner');
};

// getting floor data
export const reqFloorList = () => {
  return mockRequests.get('/floor');
};

// post request with params /api/list
// method: post
export const reqGetSearchInfo = (params) => {
  return requests({
    url: '/list',
    method: 'post',
    data: params,
  });
};

//getting products info
export const reqGoodsInfo = (skuId) => {
  return requests({
    url: `/item/${skuId}`,
    method: 'get',
  });
};

// getting shopcart info
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
  });
};

//getting shop cart item info
export const reqCartList = () => {
  return requests({
    url: '/cart/cartList',
    method: 'get',
  });
};

// delete item in the shop cart
export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
  });
};

// update checked item by it
export const reqUpdateCheckedById = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
  });
};

// getting verification code
export const reqGetCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
  });
};

// registering an account for new users
export const reqUserRegister = (data) => {
  return requests({
    url: '/user/passport/register',
    data,
    method: 'post',
  });
};

// requesting login
export const reqUserLogin = (data) => {
  return requests({
    url: '/user/passport/login',
    data,
    method: 'post',
  });
};

// getting user information after login
export const reqUserInfo = () => {
  return requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  });
};

// requesting user log out
export const reqLogout = () => {
  return requests({
    url: '/user/passport/logout',
    method: 'get',
  });
};

// getting user shipping location info
export const reqAddressInfo = () => {
  return requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
  });
};

// getting user order info
export const reqOrderInfo = () => {
  return requests({
    url: '/order/auth/trade',
    method: 'get',
  });
};

// submitting order
export const reqSubmitOrder = (tradeNo, data) => {
  return requests({
    url: `order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post',
  });
};

// requesting checkout
export const reqPayInfo = (orderId) => {
  return requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get',
  });
};

// checking payment status
export const reqPayStatus = (orderId) => {
  return requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get',
  });
};

// getting user order list
export const reqMyOrderList = (page, limit) => {
  return requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get',
  });
};
