// 데이터 조작과 관련된 CRUD API 함수 파일

import posts from '@/api/index';

// 데이터 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 데이터 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 데이터 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost };
