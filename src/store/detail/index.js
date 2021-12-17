import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api';

const state = {
  goodsInfo: {},
};

const mutations = {
  GETGOODSINFO(state, goodsInfo) {
    return (state.goodsInfo = goodsInfo);
  },
};

const actions = {
  async getGoodsInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit('GETGOODSINFO', result.data);
    }
  },

  async addOrUpdateShopCart(_, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);

    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },
};

const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },

  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },

  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
