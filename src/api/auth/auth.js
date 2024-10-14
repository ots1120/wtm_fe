// 로그인, 회원가입, 회원탈퇴 관련 API
import { instance } from '@/api/index';

// 회원가입 API
export const registerUser = (userData) => {
  // const url = 'http://localhost:5174/signup';
  // axios.post(url, userData);
  console.log(instance.baseURL);
  return instance.post('user/signup', userData);
};
// 로그인 API
export const loginUser = (userData) => {
  // const url = 'http://localhost:5174/signup';
  return instance.post('user/login', userData);
};
