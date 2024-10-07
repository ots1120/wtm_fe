<template>
    <!-- Modal Background -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <!-- Modal Container -->
        <div class="bg-white rounded-lg w-96 relative shadow-lg">

            <!-- Close Button -->
            <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" @click="closeModal">X</button>
            <div class="border-b border-dashed p-3">
                <!-- Date & Day -->
                <div class="flex items-center text-lg">
                    <span class="text-2xl font-bold">{{ selectedDate }}</span>
                    <span class="ml-2">{{ selectedDay }}</span>

                </div>
            </div>
            <!-- Menu Data or Empty State -->
            <div>
                <MenuItems v-if="menuAvailable" :menu="menuData" />
                <MenuEmpty v-else />
            </div>
        </div>
    </div>
</template>

<script>
import MenuItems from '@/components/admin/card/MenuItems.vue';
import MenuEmpty from '@/components/admin/card/MenuEmpty.vue';

export default {
    components: {
        MenuItems,
        MenuEmpty,
    },
    props: {
        selectedDate: {
            type: String,
            required: true,
        },
        selectedDay: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            menuAvailable: true, // 실제 데이터가 있을 경우 true로 변경
            menuData: {
                main: "제육볶음",
                soup: "들깨 미역국",
                side1: "미역줄기볶음",
                side2: "김치김치강치",
            },
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
}
</script>

<style></style>
