<template>
  <div class="flex-col text-center">
    <h2 class="">오늘의 메뉴</h2>
    <div class="m-auto w-1/2 rounded-2xl border-0 bg-slate-200">
      <p>{{ menu.main }}</p>
      <p>{{ menu.soup }}</p>
      <p>{{ menu.etc }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style></style>
