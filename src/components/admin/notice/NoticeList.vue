<template>
  <div
    v-for="(notice, noticeIndex) in notices"
    :key="notice.id"
    class="flex-col p-3"
  >
    <div class="mb-2 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <svg
          class="w-9"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <circle cx="8" cy="8" r="8" fill="#d9d9d9"></circle>
          </g>
        </svg>
        <span class="text-xl font-medium">{{ notice.storeName }}</span>
        <!-- store 이름을 notice 객체에서 직접 가져오기 -->
      </div>
      <div>
        <span class="text-xs text-gray-400">{{ notice.day }}일전</span>
      </div>
    </div>
    <div class="flex-col">
      <!-- 내용이 길면 더보기/접기 버튼을 표시 -->
      <p
        :style="
          isExpanded[noticeIndex]
            ? 'height:auto;'
            : 'height:4.5rem; overflow:hidden;'
        "
      >
        {{ notice.content }}
      </p>
      <button
        v-if="notice.content.length > 100"
        @click="toggleExpanded(noticeIndex)"
        class="text-xs text-blue-500"
      >
        {{ isExpanded[noticeIndex] ? "접기" : "더보기" }}
      </button>
    </div>
    <div class="flex justify-end gap-4">
      <button class="text-xs text-red-500">삭제</button>
      <button class="text-xs text-blue-500" @click="goToEditForm(notice.id)">
        수정
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notices: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: {}, // 각 공지의 확장 여부를 저장할 객체
    };
  },
  methods: {
    toggleExpanded(noticeIndex) {
      // noticeIndex를 키로 확장 상태를 관리
      this.isExpanded[noticeIndex] = !this.isExpanded[noticeIndex];
    },
    goToEditForm(noticeId) {
      this.$router.push({ name: "noticeEdit", params: { noticeId } });
    },
  },
};
</script>
<style></style>
