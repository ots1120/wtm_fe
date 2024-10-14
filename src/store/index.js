import { createStore } from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth/auth';

export default createStore({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username === '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // async를 사용하면 반드시 Promise가 기본값으로 리턴된다.
    // 하지만 나중에 사용할 수도 있을 data를 리턴
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);

      // console.log(data.token);

      // Vuex 로그인 관련 상태 변경
      commit('setToken', data.token);
      commit('setUsername', data.user.username);

      // 브라우저 저장소에 쿠키 저장
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
