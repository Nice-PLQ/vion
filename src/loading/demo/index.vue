<template>
  <div>
    <demo-doc title="普通类型的">
      <v-loading />
    </demo-doc>
    <demo-doc title="带文本">
      <v-loading>正在加载</v-loading>
    </demo-doc>
    <demo-doc title="其他颜色的图标">
      <v-loading color="#67C23A" class="m-r-8" />
      <v-loading color="#00CAFC" class="m-r-8" />
      <v-loading color="#FF596A" />
    </demo-doc>
    <demo-doc title="自定义大小">
      <v-loading size="24px" />
    </demo-doc>
    <demo-doc title="快捷调用">
      <v-button @click="handleShow" type="primary">显示浮层loading</v-button>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: 0,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.ratio >= 100) {
        this.ratio = 0;
        return;
      }
      this.ratio += 10;
    }, 1000);
  },
  unmounted() {
    this.$loading.hide();
    clearInterval(this.timer);
  },
  methods: {
    handleShow() {
      this.$loading.show({
        text: '加载中',
        duration: 3000
      });
    },
    handleHide() {
      this.$loading.hide();
    },
  }
};
</script>
