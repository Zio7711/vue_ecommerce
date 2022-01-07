// import mockjs modules
import Mock from 'mockjs';

// import json file even tho it does not export
// webpack is set to be exported by default: image and json file
import banner from './banner.json';
import floor from './floor.json';

// mock data: 1. address, 2. data
Mock.mock('/mock/banner', {
  code: 200,
  data: banner,
});

Mock.mock('/mock/floor', {
  code: 200,
  data: floor,
});
