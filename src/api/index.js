//api management
import requests from './request';

//api/product/getBaseCategoryList get no parameters

export const reqCategoryList = () => {
  //send request return a Promise
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
};
