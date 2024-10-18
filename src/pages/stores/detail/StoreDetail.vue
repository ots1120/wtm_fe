<template>
  <div>
    <!-- 상단 이미지와 식당 정보 섹션 -->
    <StoreDetailInfo :store="selectedStore" />

    <!-- 경로, 저장, 공유 버튼 섹션 -->
    <StoreDetailActionButtons :actions="actionButtons" />

    <!-- 탭 섹션 -->
    <StoreDetailTabs :tabs="['홈', '메뉴', '식권', '리뷰', '공지']">
      <!-- 첫 번째 탭: 식당정보 -->
      <template #tab0>
        <div>
          <StoreDetailHome class="p-4" :store="selectedStore" />
        </div>
      </template>

      <!-- 두 번째 탭: 메뉴 -->
      <template #tab1>
        <div v-if="storeMenu">
          <StoreDetailMenu class="p-4" :menu="storeMenu" />
        </div>
        <div v-else>
          <StoreDetailMenuNone class="p-4" />
        </div>
      </template>

      <!-- 세 번째 탭: 식권 -->
      <template #tab2>
        <div>
          <StoreDetailTicket
            class="p-4"
            :key="index"
            :storeName="ticketInf.storeName"
            :remainingTickets="ticketInf.remainingTickets"
          />
        </div>
      </template>

      <!-- 네 번째 탭: 리뷰 -->
      <template #tab3>
        <div>
          <StoreDetailReviewScore class="p-4" :store="selectedStore" />
        </div>
        <div>
          <StoreDetailReviewCount class="p-4" :store="selectedStore" />
        </div>
        <div>
          <StoreDetailReviewList
            class="p-4"
            v-for="(noticeData, index) in noticeDatas"
            :key="index"
            :storeName="noticeData.storeName"
            :daysAgo="noticeData.daysAgo"
            :noticeName="noticeData.noticeName"
            :noticeContent="noticeData.noticeContent"
          />
        </div>
      </template>

      <!-- 다섯 번째 탭: 공지 -->
      <template #tab4>
        <div>
          <StoreDetailNoticeList
            class="p-4"
            v-for="(noticeData, index) in noticeDatas"
            :key="index"
            :storeName="noticeData.storeName"
            :daysAgo="noticeData.daysAgo"
            :noticeName="noticeData.title"
            :noticeContent="noticeData.content"
          />
        </div>
      </template>
    </StoreDetailTabs>
    <!-- 하단 네비게이션 바 -->
    <BottomNavBar />
  </div>
</template>

<script>
import axios from 'axios';
import StoreDetailTabs from '@/components/user/stores/detail/StoreDetailTabs.vue';
import StoreDetailHome from '@/components/user/stores/detail/StoreDetailHome.vue';
import StoreDetailMenu from '@/components/user/stores/detail/StoreDetailMenu.vue';
import StoreDetailMenuNone from '@/components/user/stores/detail/StoreDetailMenuNone.vue';
import StoreDetailNoticeList from '@/components/user/stores/detail/StoreDetailNoticeList.vue';
import StoreDetailTicket from '@/components/user/stores/detail/StoreDetailTicket.vue';
import StoreDetailReviewCount from '@/components/user/stores/detail/StoreDetailReviewCount.vue';
import StoreDetailReviewList from '@/components/user/stores/detail/StoreDetailReviewList.vue';
import StoreDetailReviewScore from '@/components/user/stores/detail/StoreDetailReviewScore.vue';
import StoreDetailInfo from '@/components/user/stores/detail/StoreDetailInfo.vue';
import StoreDetailActionButtons from '@/components/user/stores/detail/StoreDetailActionButtons.vue';
import BottomNavBar from '@/components/user/layout/BottomNavBar.vue';

export default {
  components: {
    StoreDetailTabs,
    StoreDetailHome,
    StoreDetailMenu,
    StoreDetailMenuNone,
    StoreDetailNoticeList,
    StoreDetailTicket,
    StoreDetailReviewCount,
    StoreDetailReviewList,
    StoreDetailReviewScore,
    StoreDetailInfo,
    StoreDetailActionButtons,
    BottomNavBar,
  },
  data() {
    return {
      selectedStore: {},
      noticeDatas: [],
      ticketInf: {},
      ReviewDatas: {},
      storeMenu: [],
    };
  },
  mounted() {
    // 가게 정보를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}`)
      .then((response) => {
        console.log('Store API response:', response.data); // 확인용 로그
        const { store, Ticket } = response.data;
        this.selectedStore = store;
        this.ticketInf = {
          storeName: store.name,
          remainingTickets: Ticket.length > 0 ? Ticket[0].remainingTickets : 0,
        };
        // 필요시 추가 데이터를 셋업합니다.
      })
      .catch((error) => {
        console.error('Store data fetching error:', error);
      });

    // 공지사항 데이터를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}/notices`)
      .then((response) => {
        this.noticeDatas = response.data;
      })
      .catch((error) => {
        console.error('Notice data fetching error:', error);
      });

    // 메뉴 데이터를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}/menus`)
      .then((response) => {
        this.storeMenu = response.data.menus;
      })
      .catch((error) => {
        console.error('Menu data fetching error:', error);
      });

    // 리뷰 데이터를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}/reviews`)
      .then((response) => {
        this.ReviewDatas = response.data;
      })
      .catch((error) => {
        console.error('Review data fetching error:', error);
      });
  },
};
</script>
