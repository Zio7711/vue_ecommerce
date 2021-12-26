import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api';
import { setToken } from '@/utils/token';

const state = {
  code: '',
  token: '',
  userInfo: {},
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },

  USERLOGIN(state, token) {
    state.token = token;
  },

  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
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

      setToken(result.data.token);

      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },

  async getUserInfo({ commit }) {
    let result = await reqUserInfo();

    if (result.code === 200) {
      commit('GETUSERINFO', result.data);
      return 'ok';
    } else {
      return Promise.reject(new Error('fail'));
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
