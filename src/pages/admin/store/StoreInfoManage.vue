<template>
  <div>
    <AdminHeader title="가게 정보 수정" />
    <StoreEdit @open-modal="submitFormModal" />
    <AdminBottomNav />
    <ModalComponent
      :visible="isModalVisible"
      messageTitle="가게 정보를 저장하시겠습니까?"
      messageBody="가게 정보를 저장하시려면 확인을 눌러주세요"
      @confirm="submit"
      @cancel="cancel"
    />
  </div>
</template>
<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import StoreEdit from '@/components/admin/store/StoreEdit.vue';
import ModalComponent from '@/components/admin/modal/BasicModal.vue';
import AdminBottomNav from '@/components/admin/layout/AdminBottomNav.vue';

export default {
  data() {
    return {
      isModalVisible: false,
    };
  },

  components: {
    AdminHeader,
    StoreEdit,
    AdminBottomNav,
    ModalComponent,
  },
  methods: {
    submitFormModal() {
      this.isModalVisible = true; // 모달을 열기 위해 상태를 true로 변경
    },
    submit() {
      this.isModalVisible = false; // 모달을 닫고 폼 제출 실행
      this.submitForm();
    },
    cancel() {
      this.isModalVisible = false; // 모달을 닫음
    },
  },
};
</script>
<style></style>
