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
            :noticeName="noticeData.noticeName"
            :noticeContent="noticeData.noticeContent"
          />
        </div>
      </template>
    </StoreDetailTabs>
    <!-- 하단 네비게이션 바 -->
    <BottomNavBar />
  </div>
</template>

<script>
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
      selectedStore: {
        id: 1,
        address: '서울시 강남구 테헤란로',
        sns: '@store_sns',
        contact: '010-1234-5678',
        operatingHours: '09:00 - 22:00',
        price: '₩10,000',
      },

      noticeDatas: [
        {
          storeName: '인쌩맥주', // Example month
          daysAgo: '2', // Example purchase amount
          noticeName: '임시휴무', // Example used amount
          noticeContent:
            '여름휴가일정으로 15~17일 휴무입니다! 여름 휴가로 15일~17일(목~토)임시 휴일입니다. 감사합니다!', // Example remaining tickets
        },
        {
          storeName: '인쌩맥주', // Example month
          daysAgo: '2', // Example purchase amount
          noticeName: '임시휴무', // Example used amount
          noticeContent:
            '여름휴가일정으로 15~17일 휴무입니다! 여름 휴가로 15일~17일(목~토)임시 휴일입니다. 감사합니다!', // Example remaining tickets
        },
      ],

      ticketInf: {
        storeName: '인쌩맥주',
        remainingTickets: 6,
      },

      ReviewInf: {
        storeName: '인쌩맥주',
        remainingTickets: 6,
      },

      ReviewDatas: {
        reviewCount: 20,
      },
    };
  },
};
</script>
