<template>
  <div>
    <AdminHeader title="공지 등록" />
    <NoticeForm :isEditMode="false" @open-modal="submitFormModal" />
    <ModalComponent
      :visible="isModalVisible"
      messageTitle="공지 등록을 하시겠습니까?"
      messageBody="공지를 등록하시려면 확인을 눌러주세요"
      @confirm="submit"
      @cancel="cancel"
    />
  </div>
</template>
<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import NoticeForm from '@/components/admin/notice/NoticeForm.vue';
import ModalComponent from '@/components/admin/modal/BasicModal.vue';
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  components: {
    AdminHeader,
    NoticeForm,
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
