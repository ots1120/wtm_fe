<template lang="">
    <Header title="식권" />
    <div>
        <section class="mx-auto w-60 rounded-lg bg-white p-5 text-center">
            <h1 class="text-lg font-semibold">{{storeName}}</h1>
            <div class="mt-5 rounded-lg bg-gray-100 p-5">
                <div class="mb-4">
                <span class="text-sm font-semibold">잔여개수</span><br />
                <span class="text-xl font-bold" id="remainingCount">{{remainingTickets}}</span>개
                </div>

                <div class="mb-4 flex items-center justify-center">
                <button @click="decreaseQuantity" class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">-</button>
                <div class="mx-4 text-lg font-semibold" id="quantity">{{quantity}}</div>
                <button @click="increaseQuantity" class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">+</button>
                </div>

                <div class="h-14 flex justify-between">
                <form action="" method="POST" class="mr-1 w-1/2">
                    <button @click="openModal" type="button" class="h-full w-full rounded-lg bg-blue-500 py-2 text-white">사용하기</button>
                </form>

                <form action="" method="POST" class="ml-1 w-1/2">
                    <button type="submit" class="h-full w-full rounded-lg bg-red-500 py-2 text-white">충전하기</button>
                </form>
                </div>

                <form action="" method="POST" class="mt-4 h-10">
                <button @click="goToMyTicketHistoryPage" type="submit" class="h-full w-full rounded-lg border border-gray-300 bg-white py-2">사용내역 확인</button>
                </form>
            </div>
        </section>
    </div>

    <!-- 모달 창 (화면 전체 덮기, 배경 어둡게 처리) -->
    <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <MyTicketsDetailModal
            :quantity="quantity"
            :selectedStore="storeName" 
            @closeModal="closeModal"
        />
    </div>
    <Footer/>

</template>
<script>

import Header from "@/components/user/layout/Header.vue";
import MyTicketsDetailModal from "@/components/user/my/MyTicketsDetailModal.vue";
import Footer from "@/components/user/layout/Footer.vue";

export default {

    props: {
        storeName: String, // storeName을 props로 받음
        storeId: Number, 
        remainingTickets: Number
    },

    data() {
        return {
            isModalVisible: false,
            quantity: 1, //초기값 1로 설정함
            // storeName: this.$route.params.storeName // URL params에서 storeName 가져오기
        }; 

    },
    

    methods: {
        // quantity 감소 메서드
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        // quantity 증가 메서드
        increaseQuantity() {
            this.quantity++;
        },
        // 모달 열기
        openModal() {
            this.isModalVisible = true;
        },
        // 모달 닫기
        closeModal() {
            this.isModalVisible = false;
        },
        //
        goToMyTicketHistoryPage() {
            this.$router.push('/my/tickets/history');
        }
    },

    components: {
        Header,
        MyTicketsDetailModal,
        Footer
  },
    
}
</script>
<style lang="">
    
</style>