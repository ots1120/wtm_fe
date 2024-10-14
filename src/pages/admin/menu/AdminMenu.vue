<template>
  <div>
    <AdminHeader title="메뉴 관리"></AdminHeader>
    <MenuCalendar></MenuCalendar>
    <AdminBottomNav />
  </div>
</template>
<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import MenuCalendar from '@/components/admin/calender/MenuCalender.vue';
import AdminBottomNav from '@/components/admin/layout/AdminBottomNav.vue';

export default {
  components: {
    AdminHeader,
    MenuCalendar,
    AdminBottomNav,
  },
};
</script>
<style></style>
