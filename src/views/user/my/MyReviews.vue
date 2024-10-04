<template>
    <Header :title="title"></Header>
    <section>
        <h1 class=""></h1>
        <ul>
            <ReviewItem v-for="(review, i) in data" :key="i" :review="review" :index="i" @delete-review="deleteCard" />
        </ul>
    </section>
</template>

<script>
import Header from '@/components/user/layout/Header.vue';
import ReviewItem from '@/components/user/my/ReviewItem.vue';
import data from '@/assets/reviewList.js';

export default {
    data() {
        return {
            data: data,
            title: "내 리뷰"
        };
    },
    methods: {
        deleteCard(index) {
            this.data.splice(index, 1);  // 선택된 리뷰 삭제
        }
    },
    components: {
        Header,
        ReviewItem
    }
};
</script>

<style scoped></style>