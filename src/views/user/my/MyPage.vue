<template>
    <section>
        <h1 class="hidden">내 정보</h1>

        <!-- 내 정보 컴포넌트 -->
        <UserInfo :user="user" />

        <!-- 공통 메뉴 리스트 컴포넌트 -->
        <CommonMenuList :menuList="menuList" />
    </section>
    <router-view></router-view>
</template>

<script>
import UserInfo from '@/components/user/my/UserInfo.vue';
import CommonMenuList from '@/components/user/my/CommonMenuList.vue';

export default {
    data() {
        return {
            user: {
                userName: '홍길동',
                userId: 'hong123',
                profileImage: '', // 여기에 프로필 사진의 경로를 추가
            },
            menuList: [
                { title: '내 정보 수정', link: '/my/edit'},
                { title: '식권 구매 · 사용내역', link: '/my' },
                { title: '내 북마크 관리', link: '/my/reviews'},
                { title: '내 리뷰 관리', link: '/my/reviews'},
            ],
        };
    },
    components: {
        UserInfo,
        CommonMenuList,
    },
};
</script>

<style scoped></style>



<!-- export default {
props: {
    user: {
             type: Object as PropType<{
                 userName: string;
                 userId: string;
             }>,
             required: true
         }
     }, -->
