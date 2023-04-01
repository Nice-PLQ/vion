<template>
  <div class="loading-demo">
    <div class="p-x-16">
      <v-button size="large" class="m-t-22" @click="handleShow">豆腐块加载</v-button>
    </div>
    <demo-doc title="局部加载">
      <v-loading>加载中，请稍候...</v-loading>
      <br />
      <v-loading class="m-t-46" />
    </demo-doc>
    <demo-doc title="其他颜色的图标">
      <v-loading theme="white" class="m-r-16" />
      <v-loading theme="gray" class="m-r-16" />
      <v-loading theme="red" />
    </demo-doc>
    <demo-doc title="环形进度">
      <div class="circle-loading">
        <v-loading type="circle" :ratio="ratio" />
      </div>
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

<style lang="less">
.loading-demo {
  .circle-loading {
    width: 278px;
    height: 198px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: url('https://nbgroup.cdn-go.cn/url-resource/latest/bg/bg_01.png') no-repeat;
    background-size: cover;
  }
}
</style>
