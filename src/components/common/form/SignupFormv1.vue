<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">이메일</label>
          <input id="email" type="email" v-model="email" />
          <span class="warning" v-if="!isUsernameValid && email">
            이메일 주소를 작성해주세요
          </span>
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="name">이름 </label>
          <input id="name" type="text" v-model="name" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth/auth';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      email: '',
      password: '',
      nickname: '',
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
        if (!this.isUsernameValid) {
          this.logMessage = '유효한 이메일 주소를 입력해주세요.';
          return;
        }
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        console.log(data.nickname);

        this.logMessage = `${data.nickname} 님이 가입되었습니다`;
        this.initForm();
      } catch (error) {
        // 예외 발생 시 로그 출력 및 사용자에게 메시지 표시
        console.error('회원가입 중 오류 발생:', error);

        // 서버에서 전달된 오류 메시지가 있을 경우
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          this.logMessage = `오류: ${error.response.data.message}`;
        } else {
          this.logMessage =
            '회원가입 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
        }
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
