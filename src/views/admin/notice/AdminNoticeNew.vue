<template>
  <Header title="공지 등록" />
  <NewForm :isEditMode="false" @open-modal="submitFormModal" />
  <ModalComponent
    :visible="isModalVisible"
    messageTitle="공지 등록을 하시겠습니까?"
    messageBody="공지를 등록하시려면 확인을 눌러주세요"
    @confirm="submit"
    @cancel="cancel"
  />
</template>
<script>
import Header from "@/components/admin/layout/Header.vue";
import NewForm from "@/components/admin/notice/NoticeForm.vue";
import ModalComponent from "@/components/admin/modal/ModalComponent.vue";
export default {
  data() {
    return {
      isModalVisible: false,
    };
  },
  components: {
    Header,
    NewForm,
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
