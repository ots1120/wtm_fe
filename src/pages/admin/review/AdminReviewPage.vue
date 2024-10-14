<template>
  <div>
    <AdminHeader title="리뷰 관리" />
    <!-- 임시로 데이터 불러오는 역할-->
    <ReviewItem :reviews="reviews" />
    <AdminBottomNav />
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import ReviewItem from '@/components/admin/review/ReviewItem.vue';
import AdminBottomNav from '@/components/admin/layout/AdminBottomNav.vue';
import { getReviews } from '@/api/admin/admin.js';

export default {
  components: {
    AdminHeader,
    ReviewItem,
    AdminBottomNav,
  },
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    const storeId = this.$route.params.storeId;

    getReviews(storeId)
      .then((response) => {
        this.reviews = response.data;
      })
      .catch((error) => {
        console.error('리뷰를 가져오는 중 에러가 발생하였습니다: ', error);
      });
  },
};
</script>
<style></style>
