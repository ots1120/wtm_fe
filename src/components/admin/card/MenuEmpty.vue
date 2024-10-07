<template>
    <div class="flex justify-center items-center h-64">
        <div class="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <p class="text-gray-700 mb-4">아직 메뉴 정보가 없어요 😢</p>
            <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded" @click="goToNewMenu">메뉴 등록하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuEmpty',
    methods: {
        goToNewMenu() {
            this.$router.push({ name: 'NewMenu' }); // 'NewMenu' 라는 이름의 경로로 이동
        }
    },
};
</script>