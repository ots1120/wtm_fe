<template>
    <div class="space-y-4">
        <div class="flex justify-between">
            <span class="text-gray-700">메인메뉴</span>
            <span class="text-orange-500">제육볶음</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-700">국물류</span>
            <span class="text-orange-500">들깨 미역국</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-700">기타메뉴1</span>
            <span class="text-orange-500">미역줄기볶음</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-700">기타메뉴2</span>
            <span class="text-orange-500">김치김치강치</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuItems',
    props: {
        menu: Object,
    },
};
</script>