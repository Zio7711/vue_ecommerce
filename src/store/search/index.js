import { reqGetSearchInfo } from '@/api';

const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};

const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);

    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data);
    }
  },
};
const getters = {
  goodList(state) {
    return state.search.searchList.goodList;
  },

  trademarkList(state) {
    return state.search.searchList.trademarkList;
  },

  attrsList(state) {
    return state.search.searchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
