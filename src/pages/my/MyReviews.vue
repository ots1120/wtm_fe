<template>
  <div>
    <TheHeader :title="title"></TheHeader>

    <h1 class=""></h1>
    <ul>
      <ReviewItem
        v-for="(review, i) in reviews"
        :key="i"
        :review="review"
        :index="i"
        @delete-review="deleteCard"
      />
    </ul>
    <BottomNavBar></BottomNavBar>
  </div>
</template>

<script>
import TheHeader from '@/components/user/layout/TheHeader.vue';
import ReviewItem from '@/components/user/my/ReviewItem.vue';
import BottomNavBar from '@/components/user/layout/BottomNavBar.vue';
import axios from 'axios';

export default {
  components: {
    TheHeader,
    ReviewItem,
    BottomNavBar,
  },
  data() {
    return {
      reviews: [], // 리뷰 데이터를 저장할 배열
      title: '내 리뷰',
    };
  },
  created() {
    this.fetchReviews(); // 컴포넌트 생성 시 리뷰 데이터를 가져옴
  },
  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get('/api/reviews'); // 백엔드 API에서 리뷰 데이터 요청
        this.reviews = response.data; // 응답 데이터를 reviews 배열에 저장
      } catch (error) {
        console.error('리뷰 데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    },
    deleteCard(index) {
      this.reviews.splice(index, 1); // 선택된 리뷰 삭제
    },
  },
};
</script>

<style scoped></style>
