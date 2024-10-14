<template>
  <div>
    <AdminHeader title="공지 수정" />
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
  </div>
</template>

<script>
import NoticeForm from '@/components/admin/notice/NoticeForm.vue';
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import ModalComponent from '@/components/admin/modal/BasicModal.vue';

export default {
  components: {
    AdminHeader,
    NoticeForm,
    ModalComponent,
  },
  data() {
    return {
      noticeData: {
        content: '', // 실제 데이터를 여기에 할당
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
        content: '기존 공지 내용',
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
