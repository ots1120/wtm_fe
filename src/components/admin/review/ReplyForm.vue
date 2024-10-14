<template>
  <div class="mt-2">
    <textarea
      v-if="review.reply.length >= 0"
      v-model="replyContent"
      class="w-full h-20 resize-none rounded-md border border-gray-300 p-2 text-xs focus:border-orange-400 focus:outline-none"
      placeholder="답글을 입력해주세요."
      spellcheck="false"
    >
    </textarea>
    <div class="mt-1 flex justify-end">
      <button class="mr-2 text-xs text-blue-500" @click="handleSubmitReply">
        답글 달기
      </button>
      <button
        class="text-xs text-gray-500"
        @click="$emit('cancelReply', index)"
      >
        취소
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      replyContent: '', // 답글 내용 관리
    };
  },
  methods: {
    handleSubmitReply() {
      if (this.review) {
        this.$emit('submitReply', this.review.id, this.replyContent);
      } else {
        console.error('Review data is missing!');
      }
    },
  },
};
</script>
