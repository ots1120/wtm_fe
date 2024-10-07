<template>
  <LogoHeader />
  <AdminDashboard :storeId="store.id" :storeName="store.name" />
  <AdminFooter />
</template>
<script>
import AdminDashboard from "@/components/admin/dashboard/AdminDashboard.vue";
import LogoHeader from "@/components/admin/layout/LogoHeader.vue";
import AdminFooter from "@/components/admin/layout/AdminFooter.vue";
export default {
  data() {
    return {
      store: {
        id: 1,
        name: "인쌩맥주",
      },
    };
  },
  components: {
    AdminDashboard,
    LogoHeader,
    AdminFooter,
  },
};
</script>
<style></style>
