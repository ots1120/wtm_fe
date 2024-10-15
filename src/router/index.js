import { createRouter, createWebHistory } from 'vue-router';

// 각 경로와 컴포넌트를 매핑하는 라우터 설정
const routes = [
  // home
  {
    path: '/',
    redirect: '/login',
  },

  // user, login
  { path: '/login', component: () => import('@/pages/login/LoginPage.vue') },

  {
    path: '/user',
    children: [
      {
        path: 'signup',
        component: () => import('@/pages/user/SignupPage.vue'),
      },
      {
        path: 'id',
        component: () => import('@/pages/user/RecoveryId.vue'),
      },
      {
        path: 'pw',
        component: () => import('@/pages/user/RecoveryPw.vue'),
      },
    ],
  },

  // stores
  {
    path: '/stores/:storeId',
    children: [
      {
        path: '',
        component: () => import('@/pages/stores/detail/StoreDetail.vue'),
      },
      {
        path: 'menu/new',
        component: () => import('@/pages/stores/menu/NewMenu.vue'),
      },
      {
        path: 'reviews/new',
        component: () => import('@/pages/stores/review/NewReview.vue'),
      },
      {
        path: 'reviews/:reviewId/report/new',
        component: () => import('@/pages/stores/review/NewReviewReport.vue'),
      },
    ],
  },

  {
    path: '/my',
    children: [
      { path: '', component: () => import('@/pages/my/MyPage.vue') },
      {
        path: 'settings',
        component: () => import('@/pages/my/MySettings.vue'),
      },
      {
        path: 'bookmarks',
        component: () => import('@/pages/my/MyBookmarks.vue'),
      },
      {
        path: 'reviews',
        component: () => import('@/pages/my/MyReviews.vue'),
      },
      {
        path: 'tickets',
        component: () => import('@/pages/my/MyTickets.vue'),
      },
      {
        path: 'tickets/history',
        component: () => import('@/pages/my/MyTicketHistory.vue'),
      },
      {
        path: 'tickets/stores/:storeId',
        component: () => import('@/pages/my/MyTicketDetail.vue'),
        props: true,
      },
    ],
  },

  // Admin
  {
    path: '/admin',
    children: [
      {
        path: '',
        component: () => import('@/pages/admin/dashboard/AdminDashboard.vue'),
      },
      {
        path: ':storeId',
        component: () => import('@/pages/admin/dashboard/AdminDashboard.vue'),
      },
      {
        path: ':storeId/mystore',
        component: () => import('@/pages/admin/store/StoreInfoManage.vue'),
      },
      {
        path: ':storeId/review',
        component: () => import('@/pages/admin/review/AdminReviewPage.vue'),
      },
      {
        path: ':storeId/notice',
        component: () => import('@/pages/admin/notice/AdminNoticePage.vue'),
      },
      {
        path: ':storeId/notice/new',
        component: () => import('@/pages/admin/notice/AdminNoticeNew.vue'),
      },
      {
        path: ':storeId/notice/edit/:noticeId',
        component: () => import('@/pages/admin/notice/AdminNoticeEdit.vue'),
        props: true,
      },
      {
        path: ':storeId/menu',
        component: () => import('@/pages/admin/menu/AdminMenu.vue'),
      },
      {
        path: ':storeId/menu/edit',
        component: () => import('@/pages/admin/menu/AdminMenuEdit.vue'),
      },
      {
        path: ':storeId/ticket',
        component: () => import('@/pages/admin/ticket/StoreTicketHistory.vue'),
      },
      {
        path: ':storeId/menu/reg',
        component: () => import('@/pages/admin/menu/AdminMenuReg.vue'),
      },
    ],
  },
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(), // 히스토리 모드 사용 (URL에 해시(#)가 없는 깔끔한 URL)
  routes, // 설정한 경로들
});

export default router;
