<template>
  <Header title="공지 수정" />
  <NoticeForm
    :isEditMode="true"
    :initialData="noticeData"
    @open-modal="submitFormModal"
  />
  <ModalComponent
    :visible="isModalVisible"
    messageTitle="공지 수정을 하시겠습니까?"
    messageBody="공지를 수정하시려면 확인을 눌러주세요"
    @confirm="submit"
    @cancel="cancel"
  />
</template>

<script>
import NoticeForm from "@/components/admin/notice/NoticeForm.vue";
import Header from "@/components/admin/layout/Header.vue";
import ModalComponent from "@/components/admin/modal/ModalComponent.vue";

export default {
  components: {
    NoticeForm,
    Header,
    ModalComponent,
  },
  data() {
    return {
      noticeData: {
        content: "", // 실제 데이터를 여기에 할당
      },
      isModalVisible: false, // 모달 상태를 여기에 추가
    };
  },
  props: {
    noticeId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.fetchNotice();
  },
  methods: {
    fetchNotice() {
      this.noticeData = {
        content: "기존 공지 내용",
      };
    },
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
