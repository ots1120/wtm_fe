// router.js
// user
import { createRouter, createWebHistory } from "vue-router";
// import index from
// import Stores from
import StoreDetail from "@/views/user/stores/detail/StoreDetail.vue";
import NewMenu from "@/views/user/stores/menu/NewMenu.vue";
import NewReview from "@/views/user/stores/review/NewReview.vue";
import NewReviewReport from "@/views/user/stores/review/NewReviewReport.vue";

import MyPage from "@/views/user/my/MyPage.vue";
import MySettings from "@/views/user/my/MySettings.vue";
import MyBookmarks from "@/views/user/my/MyBookmarks.vue";
import MyReviews from "@/views/user/my/MyReviews.vue";
import MyTickets from "@/views/user/my/MyTickets.vue";
import MyTicketHistory from "@/views/user/my/MyTicketHistory.vue";
import MyTicketDetail from "@/views/user/my/MyTicketDetail.vue";

// Admin
import AdminReviewManage from "@/views/admin/review/AdminReviewManage.vue";
import AdminNoticeManage from "@/views/admin/notice/AdminNoticeManage.vue";
import AdminNoticeNew from "@/views/admin/notice/AdminNoticeNew.vue";
import AdminNoticeEdit from "@/views/admin/notice/AdminNoticeEdit.vue";
import AdminMenuEdit from "@/views/admin/menu/AdminMenuEdit.vue";
import AdminMenuReg from "@/views/admin/menu/AdminMenuReg.vue";
import AdminMenu from "@/views/admin/menu/AdminMenu.vue";

// 각 경로와 컴포넌트를 매핑하는 라우터 설정
const routes = [
  // user
  // { path: '/index', component: index },
  // { path: '/stores', component: Stores },
  { path: "/stores/store_id", component: StoreDetail },
  { path: "/stores/store_id/menu/new", component: NewMenu },
  { path: "/stores/store_id/reviews/new", component: NewReview },
  {
    path: "/stores/store_id/reviews/{review_id}/report/new",
    component: NewReviewReport,
  },

  // { path: '/login', component: Login},
  // { path: '/member', component: SignUp},
  // { path: '/member/id', component: ChangeId},
  // { path: '/member/pw', component: ChangePw},

  { path: "/my", component: MyPage },
  { path: "/my/settings", component: MySettings },
  { path: "/my/bookmarks", component: MyBookmarks },
  { path: "/my/reviews", component: MyReviews },
  { path: "/my/tickets", component: MyTickets },
  { path: "/my/tickets/history", component: MyTicketHistory },
  {
    path: "/my/tickets/stores/:store_id",
    name: "MyTicketDetail",
    component: MyTicketDetail,
    props: true,
  },

  // Admin
  { path: "/admin/review", component: AdminReviewManage },
  { path: "/admin/notice", component: AdminNoticeManage },
  { path: "/admin/notice/new", component: AdminNoticeNew },
  {
    path: "/admin/notice/edit/:noticeId",
    name: "noticeEdit",
    component: AdminNoticeEdit,
    props: true,
  }, // 경로 수정
  { path: "/admin/menu", component: AdminMenu },
  { path: "/admin/menu/edit", component: AdminMenuEdit },
  { path: "/admin/menu/Reg", component: AdminMenuReg },
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(), // 히스토리 모드 사용 (URL에 해시(#)가 없는 깔끔한 URL)
  routes, // 설정한 경로들
});

export default router;
