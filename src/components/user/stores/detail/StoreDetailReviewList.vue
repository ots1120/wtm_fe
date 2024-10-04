<template lang="">
    <div class="border-b border-gray-300 p-4">
    <!-- 이미지 섹션 (여러 이미지 가로로 정렬) -->
    <div class="mb-4 flex space-x-2 overflow-x-scroll p-1">
        <div class="h-32 w-32 flex-shrink-0 rounded bg-gray-300">
        <img src="#" alt="리뷰 사진 1" class="h-full w-full rounded-md object-cover" />
        </div>
        <div class="h-32 w-32 flex-shrink-0 rounded bg-gray-300">
        <img src="#" alt="리뷰 사진 2" class="h-full w-full rounded-md object-cover" />
        </div>
        <div class="h-32 w-32 flex-shrink-0 rounded bg-gray-300">
        <img src="#" alt="리뷰 사진 3" class="h-full w-full rounded-md object-cover" />
        </div>
        <!-- 추가 이미지가 있을 경우 -->
        <div class="h-32 w-32 flex-shrink-0 rounded bg-gray-300">
        <img src="#" alt="리뷰 사진 4" class="h-full w-full rounded-md object-cover" />
        </div>
    </div>

    <!-- 리뷰 내용 섹션 -->

    <div class="mb-2 flex justify-between">
        <div>
            <div class="mb-2">★★★★★</div>
            <div class="text-sm text-gray-500">익명 8일전</div>
        </div>
            <div><a href="">신고</a></div>
        </div>

        <!-- 리뷰 텍스트 -->
        <div class="mb-4">
            <p class="text-gray-700">맛있게 잘 먹었습니다! 쌈채소까지 있어서 더 좋았어요~</p>
        </div>

        <!-- 도움이 돼요 버튼 -->
        <div>
            <form action="#" method="post">
            <button type="submit" class="flex items-center space-x-2 rounded-full border border-gray-300 px-3 py-2 text-gray-500">
                <!-- 아이콘 (SVG) -->
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 9l-6 6m0 0l6 6m-6-6h18" />
                </svg>
                <!-- 텍스트 -->
                <span>도움돼요</span>
                <!-- 숫자 -->
                <span>0</span>
            </button>
            </form>
        </div>
    </div>                 
</template>
<script>
export default {
    props: {
       
    }
}
</script>
<style lang="">
    
</style>