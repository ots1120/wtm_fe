import { instance } from '@/api/index';

//Dashboard 관련 API
export const getDashBoard = (storeId) => {
  return instance.get(`/store/${storeId}`);
};

//Review 관련 API
export const getReviews = (storeId) => {
  return instance.get(`/store/${storeId}/reviews`);
};

//Review Reply 관련 API
export const getReply = (storeId, reviewId) => {
  return instance.get(`/store/${storeId}/reviews/${reviewId}/reply`);
};

export const postReply = (storeId, reviewId, replyData) => {
  return instance.post(
    `/store/${storeId}/reviews/${reviewId}/reply`,
    replyData
  );
};

export const updateReply = (storeId, reviewId, replyId, updatedReplyData) => {
  return instance.put(
    `/store/${storeId}/reviews/${reviewId}/reply/${replyId}`,
    updatedReplyData
  );
};

export const deleteReply = (storeId, reviewId, replyId) => {
  return instance.delete(
    `/store/${storeId}/reviews/${reviewId}/reply/${replyId}`
  );
};

//Notice 관련 API
export const getNotices = (storeId) => {
  return instance.get(`/store/${storeId}/notices`);
};

export const postNotices = (storeId, noticeData) => {
  return instance.post(`/store/${storeId}/notices`, noticeData);
};

export const updateNotices = (storeId, noticeId, updatedNoticeData) => {
  return instance.put(
    `/store/${storeId}/notices/${noticeId}`,
    updatedNoticeData
  );
};

export const deleteNotices = (storeId, noticeId) => {
  return instance.delete(`/store/${storeId}/notices/${noticeId}`);
};

//Store Info 관련 API
export const getMyStore = (storeId) => {
  return instance.get(`/store/${storeId}/myStore`);
};

export const updateMyStore = (storeId, updatedMyStoreData) => {
  return instance.put(`/store/${storeId}/myStore`, updatedMyStoreData);
};
