<template>
  <Header title="가게 정보 수정" />
  <StoreEdit @open-modal="submitFormModal" />
  <AdminFooter />
  <ModalComponent
    :visible="isModalVisible"
    messageTitle="가게 정보를 저장하시겠습니까?"
    messageBody="가게 정보를 저장하시려면 확인을 눌러주세요"
    @confirm="submit"
    @cancel="cancel" />
</template>
<script>
import Header from "@/components/admin/layout/Header.vue";
import StoreEdit from "@/components/admin/store/StoreEdit.vue";
import AdminFooter from "@/components/admin/layout/AdminFooter.vue";
import ModalComponent from "@/components/admin/modal/ModalComponent.vue";

export default {
  data() {
    return {
      isModalVisible: false,
    };
  },

  components: {
    Header,
    StoreEdit,
    AdminFooter,
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
