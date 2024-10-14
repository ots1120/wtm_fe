import store from '@/store/index';

export function setInterceptors(instance) {
  // request interceptor 등록
  instance.interceptors.request.use(
    (config) => {
      // request 보내기 전에 할 일
      const token = store.state.token;

      if (token) {
        // Bearer는 OAuth 2.0 인증에서 사용하는 토큰 형식 중 하나
        // Bearer Token은 클라이언트가 인증된 사용자임을 증명하는 방법
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Content-Type이 없을 경우 기본으로 application/json 설정
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
      }

      return config;
    },
    (error) => {
      // request 에러 예외 처리
      return Promise.reject(error);
    }
  );

  // response interceptor 등록
  instance.interceptors.response.use(
    (response) => {
      // 2xx 범위 내의 응답은 이 함수에서 처리
      return response;
    },
    (error) => {
      // 2xx 범위를 벗어난 응답은 이 함수에서 처리
      return Promise.reject(error);
    }
  );
  return instance;
}
