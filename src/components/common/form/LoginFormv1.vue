<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <input
            id="username"
            type="text"
            v-model="username"
            placeholder="이메일"
          />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              이메일 주소를 입력해주세요
            </span>
          </p>
        </div>
        <div>
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="비밀번호"
          />
        </div>
        <button :disabled="!isUsernameValid || !password" type="submit">
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
    <div>
      <p>아직 회원이 아니신가요?</p>
      <button @click="goToSignUp">회원가입</button>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        // 로그인 관련 비즈니스 로직을 actions 레벨로 넘김
        // 비동기 처리를 끝내고 나면 로그인 폼에서 라우터로 진입해야하기 때문에, await 반드시 필요
        // await가 없으면 로그인이 끝나지도 않았는데, 메인화면으로 진입
        await this.$store.dispatch('LOGIN', userData);

        // 로그인 완료 후 main 화면으로 라우팅 - Programmatic Routing
        this.$router.push('/main');
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
    goToSignUp() {
      this.$router.push('/signup');
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
