<template>
  <div class="p-8">
    <form @submit.prevent="openModal" method="POST">
      <h2 class="text-2xl font-bold">사진 업로드</h2>
      <p class="text-sm">식당과 메뉴에 관련한 사진을 업로드해주세요</p>

      <div class="mt-4">
        <div class="flex items-center">
          <label
            class="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-orange-200 hover:border-orange-400"
          >
            <input
              type="file"
              id="menu-img"
              name="menuImg"
              class="hidden"
              accept="image/*"
              multiple
              @change="handleFileUpload"
            />
            <!-- 이미지 미리보기 -->
            <img
              v-if="imagePreview"
              :src="imagePreview"
              alt="Image Preview"
              class="h-32 w-32 rounded-lg object-cover"
            />
          </label>
        </div>

        <h2 class="mb-4 mt-12 text-2xl font-bold">공지 내용</h2>
        <textarea
          v-model="formData.content"
          name="noticeContent"
          cols="30"
          rows="10"
          class="h-96 w-full resize-none rounded-lg border-2 bg-slate-200 p-3 focus:border-orange-400 focus:outline-none"
          placeholder="이 곳에 공지를 작성해주세요"
          spellcheck="false"
        ></textarea>

        <button
          class="w-full h-12 mt-4 bg-orange-400 text-white p-2 rounded-xl"
          type="submit"
        >
          {{ isEditMode ? "수정 완료" : "등록" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialData: {
      type: Object,
      default: () => ({ content: "", menuImages: [] }), // 공지 초기 데이터
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: { ...this.initialData }, // 공지 내용 데이터
      imagePreview: null, // 이미지 미리보기
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.menuImages = event.target.files; // 업로드된 파일을 저장
      const file = event.target.files[0]; // 첫 번째 파일을 선택
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result; // 이미지 미리보기 데이터 설정
        };
        reader.readAsDataURL(file); // 파일을 데이터 URL로 읽음
      }
    },
    openModal() {
      this.$emit("open-modal");
    },
  },
};
</script>
