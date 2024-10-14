<template>
  <div>
    <TheHeader :title="title" />
    <section class="flex justify-center">
      <form @submit.prevent="submitReview" enctype="multipart/form-data">
        <!-- 리뷰 평가 항목 -->
        <div class="review-category mt-8 mb-8 w-96">
          <h1 class="hidden">리뷰 평가 항목</h1>
          <!-- 각 항목을 StarRating 컴포넌트로 분리 -->
          <StarRating label="맛" category="taste" v-model="ratings.taste" />
          <StarRating
            label="청결도"
            category="cleanliness"
            v-model="ratings.cleanliness"
          />
          <StarRating label="분위기" category="mood" v-model="ratings.mood" />
          <StarRating
            label="친절도"
            category="kindness"
            v-model="ratings.kindness"
          />
        </div>
        <!-- 재방문 체크박스 -->
        <RevisitCheckbox v-model="revisit" />
        <!-- 사진 업로드 -->
        <PhotoUpload v-model="imageFile" />
        <!-- 리뷰 작성 -->
        <ReviewTextArea v-model="reviewText" />
        <!-- 작성 완료 버튼 -->
        <SubmitButton />
      </form>
    </section>
  </div>
</template>

<script>
import TheHeader from '@/components/user/layout/TheHeader.vue';
import StarRating from '@/components/user/stores/review/StarRating.vue';
import RevisitCheckbox from '@/components/user/stores/review/RevisitCheckbox.vue';
import PhotoUpload from '@/components/user/stores/review/PhotoUpload.vue';
import ReviewTextArea from '@/components/user/stores/review/ReviewTextArea.vue';
import SubmitButton from '@/components/user/stores/review/SubmitButton.vue';

export default {
  components: {
    TheHeader,
    StarRating,
    RevisitCheckbox,
    PhotoUpload,
    ReviewTextArea,
    SubmitButton,
  },
  data() {
    return {
      title: '리뷰작성하기',
      ratings: {
        taste: 0,
        cleanliness: 0,
        mood: 0,
        kindness: 0,
      },
      revisit: false,
      imageFile: null,
      reviewText: '',
    };
  },
  methods: {
    submitReview() {
      const formData = new FormData();
      formData.append('taste', this.ratings.taste);
      formData.append('cleanliness', this.ratings.cleanliness);
      formData.append('mood', this.ratings.mood);
      formData.append('kindness', this.ratings.kindness);
      formData.append('revisit', this.revisit);
      formData.append('file', this.imageFile);
      formData.append('reviewText', this.reviewText);

      // 여기에서 formData를 서버에 제출하는 로직을 구현합니다.
      console.log('Form submitted', formData);
    },
  },
};
</script>
