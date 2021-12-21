import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';

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

  async deleteCartListBySkuId(_, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  async updateCheckedById(_, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  async deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked === 1
          ? dispatch('deleteCartListBySkuId', item.skuId)
          : '';

      PromiseAll.push(promise);
    });

    return Promise.all(PromiseAll);
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
