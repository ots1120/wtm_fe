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
          <StoreDetailHome class="p-4" 
          :store="selectedStore"
          :storeSns="storeSns" 
          :Ticket="Ticket"/>
        </div>
      </template>

      <!-- 두 번째 탭: 메뉴 -->
      <template #tab1>
        <div v-if="storeMenu && storeMenu.length > 0">
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
            :storeName="ticketInf.name"
            :remainingTickets="ticketInf.remainingTickets"
          />
        </div>
      </template>

      <!-- 네 번째 탭: 리뷰 -->
      <template #tab3>
        <div>
          <StoreDetailReviewScore class="p-4" />
        </div>
        <div>
          <StoreDetailReviewCount class="p-4" 
            :reviewCount="ReviewDatas.reviewCount"
          />
        </div>
        <div>
          <StoreDetailReviewList
            class="p-4"
            v-for="(reviewData, index) in ReviewDatas.reviews"
            :key="index"
            :reviewerName="reviewData.user.name"
            :daysAgo="calculateDaysAgo(reviewData.createdAt)"
            :reviewContent="reviewData.content"
            :reviewImages="reviewData.images.map((img) => img.url)"
            :ratingStars="reviewData.avgScore"
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
      Ticket:{},
      storeSns:[],
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
        const { store,storeSns,Ticket } = response.data;
        this.selectedStore = store;
        this.Ticket = Ticket;
        this.storeSns = storeSns;
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
        const menus = response.data.menus;

      // 모든 메뉴를 배열로 저장 (카테고리 구분 없이)
      this.storeMenu = menus.map((item) => item.name);
      })
      .catch((error) => {
        console.error('Menu data fetching error:', error);
      });


    // 식권 데이터를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}/tickets`)
      .then((response) => {
        console.log('식권데이터:' + response)
        this.ticketInf = response.data;
      })
      .catch((error) => {
        console.error('Menu data fetching error:', error);
      });

    // 리뷰 데이터를 가져오는 API 호출
    axios
      .get(`http://localhost:3000/stores/${this.$route.params.storeId}/reviews`)
      .then((response) => {
        console.log('리뷰 데이터:', response.data); // API에서 받아온 리뷰 데이터 확인
        this.ReviewDatas = response.data;
        console.log(this.ReviewDatas);
      })
      .catch((error) => {
        console.error('Review data fetching error:', error);
      });
  },
  methods: {
    // 작성일로부터 경과한 날짜 계산
    calculateDaysAgo(reviewDate) {
      const now = new Date();
      const reviewDateTime = new Date(reviewDate);
      const timeDiff = now - reviewDateTime;
      return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 일 단위 계산
    },
  },
};
</script>
