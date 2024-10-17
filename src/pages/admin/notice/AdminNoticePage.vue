<template>
  <div>
    <AdminHeader title="공지관리" />
    <!-- 임시로 데이터 불러오는 역할-->
    <NoticeList :notices="noticesData" />
    <WriteButton :pushRoute="`/admin/${storeId}/notice/new`" />
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/layout/AdminHeader.vue';
import NoticeList from '@/components/admin/notice/NoticeList.vue';
import WriteButton from '@/components/admin/ui/WriteButton.vue';

export default {
  components: {
    AdminHeader,
    NoticeList,
    WriteButton,
  },
  data() {
    return {
      storeId: null,
      noticesData: [
        {
          id: 1,
          storeName: '인쌩맥주',
          content:
            '빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑빵상깨랑깨랑',
          day: 3, // 3일 전
        },
        {
          id: 2,
          storeName: '광장818',
          content: '이것은 가게 B의 공지입니다.',
          day: 1, // 1일 전
        },
      ],
    };
  },
};
</script>
