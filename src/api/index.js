import axios from 'axios';
import store from 'vuex';
import { setInterceptors } from '@/api/auth/interceptors';

// JWT 인증 토큰 방식
function createInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      Authorization: store?.state?.token || '',
      'Content-Type': 'application/json',
    },
  });
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
export const user = createInstanceWithAuth('user');
// export const admin = createInstanceWithAuth('admin');
