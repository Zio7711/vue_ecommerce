import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api';

const state = {
  code: '',
  token: '',
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },

  USERLOGIN(state, token) {
    state.token = token;
  },
};

const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code === 200) {
      commit('GETCODE', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  async userRegister(_, data) {
    let result = await reqUserRegister(data);
    if (result.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(result.message));
    }
  },

  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code === 200) {
      commit('USERLOGIN', result.data.token);
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  async getUserInfo() {
    let result = await reqUserInfo();
    console.log(result);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
