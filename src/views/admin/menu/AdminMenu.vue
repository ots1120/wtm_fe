<template>
  <Header title="메뉴 관리"></Header>
  <AdminCalender></AdminCalender>
  <AdminFooter />
</template>
<script>
import AdminCalender from "@/components/admin/calender/MenuCalender.vue";
import AdminFooter from "@/components/admin/layout/AdminFooter.vue";

export default {
  components: {
    AdminCalender: AdminCalender,
    AdminFooter,
  },
};
</script>
<style></style>
