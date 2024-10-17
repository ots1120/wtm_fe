<template>
  <section>
    <h1 class="hidden">내 정보</h1>

    <!-- 내 정보 컴포넌트 -->
    <UserInfo :user="user" />

    <!-- 공통 메뉴 리스트 컴포넌트 -->
    <CommonMenuList :menuList="menuList" />
    <BottomNavBar />
  </section>
</template>

<script>
import UserInfo from '@/components/user/my/UserInfo.vue';
import CommonMenuList from '@/components/user/my/CommonMenuList.vue';
import BottomNavBar from '@/components/user/layout/BottomNavBar.vue';

export default {
  components: {
    UserInfo,
    CommonMenuList,
    BottomNavBar,
  },
  data() {
    return {
      //jwt 토큰 활용 필요
      user: {
        userName: '홍길동',
        userId: 'hong123',
        profileImage: '', // 여기에 프로필 사진의 경로를 추가
      },
      menuList: [
        { title: '내 정보 수정', link: '/my/settings' },
        { title: '식권 구매 · 사용내역', link: '/my/bookmarks' },
        { title: '내 북마크 관리', link: '/my/bookmarks' },
        { title: '내 리뷰 관리', link: '/my/reviews' },
      ],
    };
  },

  // created() {
  //     this.fetchUserData(); // 컴포넌트가 생성될 때 사용자 데이터 요청
  // },
  // methods: {
  //     async fetchUserData() {
  //         try {
  //             // JWT 토큰을 로컬 스토리지에서 가져온다고 가정
  //             const token = localStorage.getItem('token');

  //             const response = await axios.get('/api/user-info', {
  //                 headers: {
  //                     Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 포함
  //                 }
  //             });

  //             // 서버로부터 받은 사용자 데이터를 user 객체에 저장
  //             this.user = response.data;
  //         } catch (error) {
  //             console.error("사용자 정보를 불러오는 중 오류가 발생했습니다:", error);
  //         }
  //     }
  // },
};
</script>

<style scoped></style>
