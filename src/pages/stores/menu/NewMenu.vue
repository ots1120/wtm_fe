<template lang="">
  <div>
    <main class="flex min-h-screen items-center justify-center">
      <section class="w-full max-w-md p-8">
        <h1 class="hidden">메뉴 등록</h1>
        <form
          @submit.prevent="submitForm"
          name=""
          method="POST"
          class="space-y-4"
          enctype="multipart/form-data"
        >
          <!-- 메뉴 사진 업로드 -->
          <div>
            <label class="mb-2 block text-sm font-medium text-gray-700"
              >메뉴사진 업로드</label
            >
            <div class="flex w-full items-center justify-center">
              <label
                class="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
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
                  class="h-32 w-32 object-cover mt-2 rounded-lg"
                />
              </label>
            </div>
          </div>

          <!-- 메인메뉴 입력 -->
          <div>
            <label
              for="mainMenu"
              class="mb-2 block text-sm font-medium text-gray-700"
              >메인메뉴</label
            >
            <input
              v-model="formData.mainMenu"
              id="mainMenu"
              name="mainMenu"
              class="menu-register__input w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="메인 메뉴 하나를 입력해주세요."
            />
          </div>

          <!-- 국물류 입력 -->
          <div>
            <label
              for="soup-menu"
              class="mb-2 block text-sm font-medium text-gray-700"
              >국물류</label
            >
            <input
              v-model="formData.soupMenu"
              id="soup-menu"
              name="soupMenu"
              class="menu-register__input w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="국 혹은 찌개류 하나를 입력해주세요."
            />
          </div>

          <!-- 기타메뉴 입력 -->
          <div v-for="(etcMenu, index) in formData.etcMenus" :key="index">
            <label
              :for="'etc-menu-' + index"
              class="mb-2 block text-sm font-medium text-gray-700"
              >기타메뉴1</label
            >
            <input
              v-model="formData.etcMenus[index]"
              :id="'etc-menu-' + index"
              :name="'etcMenu' + index"
              class="menu-register__input w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="그 외 메뉴 하나를 입력해주세요."
            />
          </div>

          <!-- 메뉴 추가 -->
          <div>
            <button
              type="button"
              class="font-medium text-orange-500"
              @click="addMenu"
              :disabled="formData.etcMenus.length >= 5"
            >
              + 메뉴 추가
            </button>
          </div>

          <!-- 작성 완료 버튼 -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600"
            >
              작성 완료
            </button>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>
<script>
import { instance } from '@/api/index';

export default {
  data() {
    return {
      formData: {
        mainMenu: '',
        soupMenu: '',
        etcMenus: [''],
        menuImages: [],
      },
      imagePreview: null, //이미지 미리보기 저장
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.menuImages = event.target.files; // 파일 업로드 처리
      // 이미지 미리보기를 위한 처리
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addMenu() {
      // 기타 메뉴 입력란이 5개가 넘지 않으면 새로운 항목 추가
      if (this.formData.etcMenus.length < 5) {
        this.formData.etcMenus.push('');
      }
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('mainMenu', this.formData.mainMenu);
      formData.append('soupMenu', this.formData.soupMenu);

      this.formData.etcMenus.forEach((etcMenu, index) => {
        formData.append(`etcMenus[${index}]`, etcMenu);
      });

      // 업로드한 파일들을 FormData에 추가
      Array.from(this.formData.menuImages).forEach((file, index) => {
        formData.append(`menuImages[${index}]`, file);
      });

      try {
        // axios를 사용하여 multipart/form-data로 전송
        const response = await instance.post('menu', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('서버 응답:', response);
      } catch (error) {
        console.error('메뉴 등록 중 오류 발생:', error);
      }
    },
  },
};
</script>
<style></style>
