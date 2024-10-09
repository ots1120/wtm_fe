<template>

  <Header title="식권" />
  <div>
    <MyTicketList class="p-4"
      v-for="(store, index) in stores"
      :key="index"
      :storeName="store.name"
      :rating="store.rating"
      :remainingTickets="store.remainingTickets"
      :operatingHours="store.operatingHours"
      :price="store.price"
      :isBookmarked="store.isBookmarked"
      @toggle-bookmark="toggleBookmark(index)"
      @click="goToStoreDetail(index)" 
    />
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/user/layout/Header.vue";
import MyTicketList from '@/components/user/my/MyTicketList.vue';
import Footer from "@/components/user/layout/Footer.vue";

export default {
  

  components: {
    Header,
    MyTicketList,
    Footer
  },

  data() {
    return {
      stores: [
        {
          storeId: 1,
          name: '인쌩맥주',
          rating: 4.6,
          remainingTickets: 10,
          operatingHours: '10시 30분 ~ 12시 30분',
          price: 8000,
          isBookmarked: false // 초기 북마크 상태
        },
        {
          storeId: 2,
          name: '브롱스',
          rating: 4.2,
          remainingTickets: 0,
          operatingHours: '11시 00분 ~ 23시 00분',
          price: 12000,
          isBookmarked: false // 초기 북마크 상태
        },
        {
          storeId: 3,
          name: '한식당',
          rating: 4.8,
          remainingTickets: 3,
          operatingHours: '09시 00분 ~ 22시 00분',
          price: 10000,
          isBookmarked: false // 초기 북마크 상태
        }
      ]
    };
  },
  methods: {
    toggleBookmark(index) {
      // 해당 가게의 북마크 상태를 토글합니다.
      this.stores[index].isBookmarked = !this.stores[index].isBookmarked;
    },

    // 가게 클릭 시 상세 페이지로 이동
    goToStoreDetail(index) {
      const selectedStore = this.stores[index];
      console.log(selectedStore.storeId);  // store_id 확인
      this.$router.push({
        name: 'MyTicketDetail',  
        params: { 
          remainingTickets: selectedStore.remainingTickets,
          storeName: selectedStore.name,
          store_id: selectedStore.storeId }
      });
    }
  },



};
</script>
