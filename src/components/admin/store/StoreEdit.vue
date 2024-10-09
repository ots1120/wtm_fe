<template>
  <section class="flex justify-center">
    <form
      @submit.prevent="openModal"
      action=""
      enctype="multipart/form-data"
      class="w-full max-w-lg">
      <div class="items-center justify-center border-b text-center">
        <!-- 프로필 이미지 미리보기 -->
        <img
          :src="profileImg"
          alt="Profile Image"
          class="mx-auto mb-3 mt-4 block rounded-full bg-gray-300"
          width="120"
          height="120" />
        <div class="mb-3">
          <label for="profileImg" class="text-blue-500 cursor-pointer"
            >가게 사진 수정</label
          >
          <input
            type="file"
            id="profileImg"
            name="profileImg"
            class="hidden"
            @change="handleImageUpload" />
        </div>
      </div>

      <div class="flex flex-col">
        <!-- 가게 이름 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="nickname" class="text-lg font-extrabold text-gray-700"
            >가게이름</label
          >
          <input
            type="text"
            id="nickname"
            v-model="nickname"
            class="w-full max-w-sm p-2"
            placeholder="가게이름" />
        </div>

        <!-- 아이디 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="userid" class="text-lg font-extrabold text-gray-700"
            >아이디</label
          >
          <input
            type="text"
            id="userid"
            v-model="userid"
            class="w-full max-w-sm p-2"
            placeholder="아이디" />
        </div>

        <!-- 비밀번호 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="password" class="text-lg font-extrabold text-gray-700"
            >비밀번호</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full max-w-sm p-2"
            placeholder="비밀번호(9~16자리)" />
        </div>

        <!-- 가게 번호 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="phone" class="text-lg font-extrabold text-gray-700"
            >가게번호</label
          >
          <input
            type="text"
            id="phone"
            v-model="phone"
            class="w-full max-w-sm p-2"
            placeholder="010-1234-5678" />
        </div>

        <!-- 이메일 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="email" class="text-lg font-extrabold text-gray-700"
            >이메일</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full max-w-sm p-2"
            placeholder="example@ex.com" />
        </div>

        <!-- SNS -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="sns" class="text-lg font-extrabold text-gray-700"
            >SNS</label
          >
          <input
            type="text"
            id="sns"
            v-model="sns"
            class="w-full max-w-sm p-2"
            placeholder="SNS 주소" />
        </div>

        <!-- 영업시간 -->
        <div class="flex justify-between items-center border-b py-2">
          <label for="startTime" class="text-lg font-extrabold text-gray-700"
            >영업시간</label
          >
          <input
            type="time"
            id="startTime"
            v-model="startTime"
            class="w-1/3 p-2" />
          <span>~</span>
          <input type="time" id="endTime" v-model="endTime" class="w-1/3 p-2" />
        </div>
      </div>
      <div class="mt-20">
        <button
          class="w-full h-12 mt-4 bg-orange-400 text-white p-2 rounded-xl"
          type="submit">
          저장
        </button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  methods: {
    openModal() {
      this.$emit("open-modal");
    },
  },
};
</script>
<style></style>
