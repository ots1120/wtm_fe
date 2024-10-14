<template>
  <div>
    <MyTicketList
      class="p-4"
      v-for="(store, index) in stores"
      :key="index"
      :storeName="store.name"
      :rating="store.rating"
      :remainingTickets="store.remainingTickets"
      :operatingHours="store.operatingHours"
      :price="store.price"
      :isBookmarked="store.isBookmarked"
      @toggle-bookmark="toggleBookmark(index)"
    />
  </div>
</template>

<script>
import MyTicketList from '@/components/user/my/MyTicketList.vue';

export default {
  components: {
    MyTicketList,
  },

  data() {
    return {
      stores: [
        {
          name: '인생맥주',
          rating: 4.6,
          remainingTickets: 10,
          operatingHours: '10시 30분 ~ 12시 30분',
          price: 8000,
          isBookmarked: false, // 초기 북마크 상태
        },
        {
          name: '삼겹살 식당',
          rating: 4.2,
          remainingTickets: 0,
          operatingHours: '11시 00분 ~ 23시 00분',
          price: 12000,
          isBookmarked: false, // 초기 북마크 상태
        },
        {
          name: '한식당',
          rating: 4.8,
          remainingTickets: 3,
          operatingHours: '09시 00분 ~ 22시 00분',
          price: 10000,
          isBookmarked: false, // 초기 북마크 상태
        },
      ],
    };
  },
  methods: {
    toggleBookmark(index) {
      // 해당 가게의 북마크 상태를 토글합니다.
      this.stores[index].isBookmarked = !this.stores[index].isBookmarked;
    },
  },
};
</script>
