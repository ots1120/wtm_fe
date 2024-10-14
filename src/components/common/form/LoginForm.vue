<template>
  <div class="flex flex-col items-center">
    <!-- 토글 버튼 -->
    <div class="flex flex-col items-center">
      <span>손님</span>
      <input
        role="switch"
        type="checkbox"
        @change="toggleUserType"
        v-model="isAdmin"
      />
      <span>사장님</span>
    </div>

    <!-- 고객 로그인 폼 -->
    <div v-if="!isAdmin">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="submitForm"
      >
        <input type="email" id="email" v-model="email" placeholder="이메일" />
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
      </form>
      <div>
        <p>아직 회원이 아니신가요?</p>
        <button @click="goToSignUp">회원가입</button>
      </div>
    </div>

    <!-- 사장님 로그인 폼 -->
    <div v-else>
      <form @submit.prevent="submitForm">
        <input type="email" id="email" v-model="email" placeholder="이메일" />
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호"
        />
        <button type="submit">사장님 로그인</button>
      </form>
      <div>
        <p>아직 회원이 아니신가요?</p>
        <button @click="goToAdminSignUp">사장님 회원가입</button>
      </div>
    </div>
  </div>
</template>
<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      email: '',
      password: '',
      isAdmin: false, // 기본값은 일반 고객
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    methods: {
      toggleUserType() {
        this.isAdmin = !this.isAdmin; // 토글 상태 전환
      },
      async submitForm() {
        try {
          // 비즈니스 로직
          const userData = {
            email: this.email,
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
        this.email = '';
        this.password = '';
      },
      goToSignUp() {
        this.$router.push('/signup');
      },
      goToAdminSignUp() {
        this.$router.push('/admin/signup');
      },
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 0;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 5px 0;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

[type='checkbox'] {
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  width: 2.25em;
  height: 1.25em;
}

[type='checkbox']::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1.5px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: scale(0.8);
  background-color: gray;
  transition: left 250ms linear;
}

[type='checkbox']:checked {
  background-color: tomato;
  border-color: tomato;
}

[type='checkbox']:checked::before {
  background-color: white;
  left: 1em;
}

[type='checkbox']:disabled {
  border-color: lightgray;
  opacity: 0.7;
  cursor: not-allowed;
}

[type='checkbox']:disabled:before {
  background-color: lightgray;
}

[type='checkbox']:disabled + span {
  opacity: 0.7;
  cursor: not-allowed;
}

[type='checkbox']:focus-visible {
  outline-offset: max(2px, 0.1em);
  outline: max(2px, 0.1em) solid tomato;
}

[type='checkbox']:enabled:hover {
  box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
}

/* Global CSS */
body {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
