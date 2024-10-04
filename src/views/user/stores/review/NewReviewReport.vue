<template>
    <Header :title="title"></Header>
    <section class="flex justify-center items-center my-16">
        <div class="justify-items-center h-fit w-[354px]">
            <h1 class="text-2xl font-bold">신고 사유를 선택해주세요(필수)</h1>
            <div class="pt-5 pl-5 text-center">
                <form @submit="onSubmitForm" action="" class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <input class="block" type="checkbox" id="reason1" value="reason1" v-model="reason" />
                        <label for="reason1">매장/주문과 관련 없는 리뷰</label>
                    </div>

                    <div class="flex items-center space-x-2">
                        <input class="block" type="checkbox" id="reason2" value="reason2" v-model="reason" />
                        <label for="reason2">욕설/비방/음란 등 부적절한 내용</label>
                    </div>

                    <div class="flex items-center space-x-2">
                        <input class="block" type="checkbox" id="reason3" value="reason3" v-model="reason" />
                        <label for="reason3">개인정보 유출 위험</label>
                    </div>

                    <div class="flex items-center space-x-2">
                        <input class="block" type="checkbox" id="reason4" value="reason4" v-model="reason" />
                        <label for="reason4">광고/홍보성 게시물</label>
                    </div>

                    <div class="flex items-center space-x-2">
                        <input class="block" type="checkbox" id="reason5" value="reason5" v-model="reason"
                            @change="handleCheckboxChange" />
                        <label for="reason5">직접 입력</label>
                    </div>

                    <div>
                        <textarea class="bg-slate-100 w-full p-2" :disabled="!isChecked" id="reason-textarea"
                            name="reason-textarea" cols="30" rows="10" placeholder="신고 사유를 적어주세요"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full rounded-xl border-2 px-4 py-2 bg-orange-400 text-white">등록하기</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import Header from '@/components/user/layout/Header.vue';

export default {
    name: 'App',
    data() { //변수 선언 공간
        return {
            title: "리뷰 신고하기",
            reason: [],
            isChecked: false,
        }
    },

    methods: { //함수 선언 공간
        onSubmitForm(e) {

            console.log(this.reason);
            e.preventDefault();
        },
        handleCheckboxChange() {
            // 'reason5'가 reason 배열에 포함되어 있는지를 확인
            this.isChecked = this.reason.includes('reason5');
        },

    },
    computed: {
        // isChecked() {
        //     return this.reason.includes('reason5'); // 배열 내에 'reason5'가 있는지 확인
        // }
    },

    components: { //컴포넌트 변수 할당 공간
        Header: Header,
    },

}
</script>

<style>
textarea {
    resize: none;
}
</style>