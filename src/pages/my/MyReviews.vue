<template>
  <div>
    <TheHeader :title="title"></TheHeader>
    <section>
      <h1 class=""></h1>
      <ul>
        <ReviewItem
          v-for="(review, i) in data"
          :key="i"
          :review="review"
          :index="i"
          @delete-review="deleteCard"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/user/layout/TheHeader.vue';
import ReviewItem from '@/components/user/my/ReviewItem.vue';
import data from '@/assets/reviewList.js';

export default {
  data() {
    return {
      data: data,
      title: '내 리뷰',
    };
  },
  methods: {
    deleteCard(index) {
      this.data.splice(index, 1); // 선택된 리뷰 삭제
    },
  },
  components: {
    TheHeader,
    ReviewItem,
  },
};
</script>

<style scoped></style>
