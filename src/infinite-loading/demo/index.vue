<template>
<div class="infinite-loading-demo" id="infinite-loading">
  <v-infinite-loading @load="handleLoad" :bottom-offset="offSet" @scroll="handleScroll" container="#infinite-loading">
    <ul class="infinite-loading-list">
      <li class="list-item" v-for="(item, index) of list" :key="index">{{index + 1}}</li>
    </ul>
  </v-infinite-loading>
</div>
</template>

<script>
import { defineComponent, ref, } from 'vue';
export default defineComponent({
  setup() {
    const page = ref(1);
    const list = ref(new Array(30 * page.value).fill(0));
    const handleScroll = (e) => {
      console.log(e);
    };
    const handleLoad = (loaded, completed, error) => {
      setTimeout(() => {
        const nextPage = page.value + 1;
        if (nextPage <= 3) {
          list.value = new Array(30 * nextPage).fill(0);
          page.value = nextPage;
          loaded();
        } else {
          completed();
        }
      }, 1000);
    };

    const offSet = ref(100);
    return {
      handleLoad,
      handleScroll,
      page,
      list,
      offSet,
    };
  }
});
</script>

<style lang="less">
.infinite-loading-demo {
  height: 100vh;
  overflow-y: auto;
}
.infinite-loading-list {
  padding: 16px;
  .list-item {
    padding: 15px;
    text-align: center;
    background-color: var(--brand-standard);
    color: #fff;
    margin-bottom: 16px;
    border-radius: 4px;
  }
}

@media (prefers-color-scheme: dark) {
  .infinite-loading-list .list-item {
    background-color: var(--demo-button-bg);
  }
}
</style>
