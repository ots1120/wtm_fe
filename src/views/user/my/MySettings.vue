<template>
    <Header :title="title">
    </Header>
    <section class="flex justify-center">
        <form @submit="onSubmitForm" action="" enctype="multipart/form-data">
            <div class="items-center justify-center text-center border-b">
                <svg width="120px" height="120px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3" stroke="#000000" fill="none"
                    class="block stroke-white bg-gray-300 rounded-full mx-auto mt-4 mb-3">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">

                        <circle cx="32" cy="18.14" r="11.14" />

                        <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />

                    </g>

                </svg>
                <div class="mb-3">
                    <label for="profileImg" class="text-blue-500" style="cursor: pointer;">프로필 사진 수정</label>
                    <input type="file" id="profileImg" name="profileImg" class="hidden" />
                </div>
            </div>

            <div class="">
                <div class="grid grid-cols-2 gap-4 py-2 border-b">
                    <label for="nickname" class="font-extrabold text-lg text-gray-700 content-center">닉네임</label>
                    <input type="text" id="nickname" class="w-full max-w-sm p-2" placeholder="닉네임" />
                </div>
                <div class="grid grid-cols-2 gap-4 py-2 border-b">
                    <label for="userid" class="font-extrabold text-lg text-gray-700 content-center">아이디</label>
                    <input type="text" id="userid" class="w-full max-w-sm p-2" placeholder="아이디" />
                </div>

                <div class="grid grid-cols-2 gap-4 py-2 border-b">
                    <label for="password" class="font-extrabold text-lg text-gray-700 content-center">비밀번호</label>
                    <input type="password" id="password" class="w-full max-w-sm p-2" placeholder="비밀번호(9~16자리)" />
                </div>
                <div class="grid grid-cols-2 gap-4 py-2 border-b">
                    <label for="phone" class="font-extrabold text-lg text-gray-700 content-center">휴대폰번호</label>
                    <input type="text" id="phone" class="w-full max-w-sm p-2" placeholder="010-1234-1234" />
                </div>

                <div class="grid grid-cols-2 gap-4 py-2 border-b">
                    <label for="email" class="font-extrabold text-lg text-gray-700 content-center">이메일</label>
                    <input type="email" id="email" name="email" value="" class="w-full max-w-sm p-2"
                        placeholder="example@ex.com" />
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import Header from '@/components/user/layout/Header.vue';

export default {
    data() {
        return {
            title: "마이페이지",
        }
    },

    methods: {

    },

    components: {
        Header: Header,
    },

}
</script>

<style></style>