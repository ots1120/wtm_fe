<template lang="">
  <div>
    <AdminHeader title="식권 관리" />
    <TicketSummary
      :month="ticketData.month"
      :purchasePrice="ticketData.purchasePrice"
      :usedPrice="ticketData.usedPrice"
      :remainingCount="ticketData.remainingCount"
    />
    <TicketHistoryList :history="ticketData.history" />
    <AdminBottomNav />
  </div>
</template>
<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import TicketSummary from '@/components/admin/ticket/TicketSummary.vue';
import TicketHistoryList from '@/components/admin/ticket/TicketHistoryList.vue';
import AdminBottomNav from '@/components/admin/layout/AdminBottomNav.vue';

export default {
  components: {
    AdminHeader,
    TicketSummary,
    TicketHistoryList,
    AdminBottomNav,
  },
  data() {
    return {
      ticketData: {
        month: '6', // Example month
        purchasePrice: '72,000', // Example purchase amount
        usedPrice: '64,000', // Example used amount
        remainingCount: '1', // Example remaining tickets
        history: [
          {
            date: '오늘',
            price: '-8,000',
            storeName: '인쌩맥주',
            time: '14:00',
          },
          {
            date: '23일 월요일',
            price: '-8,000',
            storeName: '인쌩맥주',
            time: '14:00',
          },
          {
            date: '20일 금요일',
            price: '-8,000',
            storeName: '인쌩맥주',
            time: '14:00',
          },
          {
            date: '20일 금요일',
            price: '-8,000',
            storeName: '인쌩맥주',
            time: '14:00',
          },
        ],
      },
    };
  },
};
</script>
<style></style>
