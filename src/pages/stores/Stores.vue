<template lang="">
  <div>
    <StoreList
      v-for="(store, index) in stores"
      :key="index"
      :storeName="store.name"
      :rating="store.rating"
      :operatingHours="store.operatingHours"
      :price="store.price"
      :isBookmarked="store.isBookmarked"
      @toggle-bookmark="toggleBookmark(index)"
      @click="goToStoreDetail(index)"
    />
    <BottomNavBar />
  </div>
</template>
<script>
import axios from 'axios';
import StoreList from '@/components/user/stores/home/StoreList.vue';
import BottomNavBar from '@/components/user/layout/BottomNavBar.vue';

export default {
  name: 'StoresPage',
  components: {
    StoreList,
    BottomNavBar,
  },
  data() {
    return {
      stores: [],
    };
  },
  methods: {
    async fetchStores() {
      try {
        const response = await axios.get('http://localhost:3000/api/stores');
        this.stores = response.data;
      } catch (error) {
        console.error('Failed to fetch stores:', error);
      }
    },
    toggleBookmark(index) {
      // 해당 가게의 북마크 상태를 토글합니다.
      this.stores[index].isBookmarked = !this.stores[index].isBookmarked;
    },

    // 가게 클릭 시 상세 페이지로 이동
    goToStoreDetail(index) {
      const selectedStore = this.stores[index];
      this.$router.push({
        name: 'StoreDetail',
        params: { store_id: selectedStore.storeId },
      });
    },
  },
  mounted() {
    this.fetchStores();
  },
};
</script>
