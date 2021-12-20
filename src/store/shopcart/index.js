import { reqCartList, reqDeleteCartById } from '@/api';

const state = {
  cartList: [],
};

const mutations = {
  CARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};

const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code === 200) {
      commit('CARTLIST', result.data);
    }
  },

  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },
};

const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
