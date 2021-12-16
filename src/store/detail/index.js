import { reqGoodsInfo } from '@/api';

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
};
const getters = {
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
