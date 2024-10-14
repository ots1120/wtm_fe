<template>
  <div>
    <TheHeader />
    <AdminDashboard :storeId="store.id" :storeName="store.name" />
    <AdminBottomNav />
  </div>
</template>

<script>
import AdminDashboard from '@/components/admin/dashboard/AdminDashboard.vue';
import TheHeader from '@/components/admin/layout/TheHeader.vue';
import AdminBottomNav from '@/components/admin/layout/AdminBottomNav.vue';
import { getDashBoard } from '@/api/admin/admin.js';

export default {
  components: {
    AdminDashboard,
    TheHeader,
    AdminBottomNav,
  },
  data() {
    return {
      store: {
        id: null,
        name: null,
      },
      isLoading: true, // 로딩 상태 추가
      error: null, // 에러 상태 추가
    };
  },
  async created() {
    await this.fetchDashBoardData();
  },
  methods: {
    async fetchDashBoardData() {
      try {
        const response = await getDashBoard(this.$route.params.storeId);
        if (response.data && response.data.store) {
          this.store.id = response.data.store._id;
          this.store.name = response.data.store.name;
        } else {
          console.error('Store 데이터를 찾을 수 없습니다.');
          this.error = 'Store 데이터를 찾을 수 없습니다.'; // 에러 처리
        }
      } catch (error) {
        console.error('Dashboard 데이터를 가져오는데 실패했습니다.', error);
        this.error = 'Dashboard 데이터를 가져오는데 실패했습니다.'; // 에러 처리
      } finally {
        this.isLoading = false; // 로딩 완료
      }
    },
  },
};
</script>
<style></style>
