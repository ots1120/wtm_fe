<template>
  <div>
    <TheHeader title="북마크" />
    <div>
      <div v-if="stores.length > 0">
        <BookmarkList
          class="p-4"
          v-for="(store, index) in stores"
          :key="index"
          :storeName="store.name"
          :rating="store.rating"
          :operatingHours="store.operatingHours"
          :price="store.price"
          :isBookmarked="store.isBookmarked"
          @toggle-bookmark="toggleBookmark(index)"
        />
      </div>
      <!--예외처리-->
      <p v-else class="text-center mt-4">북마크된 가게가 없습니다.</p>
    </div>

    <BottomNavBar />
  </div>
</template>

<script>
import TheHeader from '@/components/user/layout/TheHeader.vue';
import BookmarkList from '@/components/user/my/BookmarkList.vue';
import BottomNavBar from '@/components/user/layout/BottomNavBar.vue';
import axios from 'axios';

export default {
  name: 'BookmarkComponent', // 컴포넌트 이름을 다중 단어로 변경

  components: {
    TheHeader,
    BookmarkList,
    BottomNavBar,
  },

  data() {
    return {
      stores: [],
    };
  },

  created() {
    this.fetchBookMarks();
  },
  methods: {
    toggleBookmark(index) {
      // 해당 가게의 북마크 상태를 토글합니다.
      this.stores[index].isBookmarked = !this.stores[index].isBookmarked;
    },

    async fetchBookMarks() {
      try {
        const response = await axios.get('/api/bookmarks');
        this.stores = response.data;
      } catch (error) {
        console.error('가게 목록 불러오는 중 오류 발생');
      }
    },
  },
};
</script>
