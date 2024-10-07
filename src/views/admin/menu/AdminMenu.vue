<template>
    <Header title="메뉴 관리"></Header>
    <AdminCalender></AdminCalender>

</template>
<script>
import AdminCalender from '@/components/admin/calender/MenuCalender.vue'

export default {
    components:{
        AdminCalender: AdminCalender,
    }
}
</script>
<style></style>