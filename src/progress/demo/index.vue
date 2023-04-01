<template>
  <div class="progress-demo">
    <demo-doc title="基础用法">
      <v-progress :value="val" />
      <v-progress :value="val1" :show-txt="false" />
    </demo-doc>
    <demo-doc title="自定义颜色">
      <v-progress :value="val2" background="linear-gradient(135deg, #F9C278 0%, #F29D2B 100%)" />
    </demo-doc>
    <demo-doc title="自定义文本">
      <v-progress :value="val3">
        <template v-slot:text>
          <span style="color: #05c9fa; font-size: 12px; margin-left: 8px;">LV{{Math.round(val3 * 10)}}</span>
        </template>
      </v-progress>
    </demo-doc>
    <demo-doc title="进度条高度">
      <v-progress :value="val2" height="10px" background="#67C23A" />
    </demo-doc>
    <v-button-group>
      <v-button size="large" @click="reduce">-</v-button>
      <v-button type="primary" size="large" @click="add">+</v-button>
    </v-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 0.35,
      val1: 0.5,
      val2: 0.7,
      val3: 0.8
    };
  },
  methods: {
    add() {
      this.val = this.limit(this.val + 0.1);
      this.val1 = this.limit(this.val1 + 0.1);
      this.val2 = this.limit(this.val2 + 0.1);
      this.val3 = this.limit(this.val3 + 0.1);
    },
    reduce() {
      this.val = this.limit(this.val - 0.1);
      this.val1 = this.limit(this.val1 - 0.1);
      this.val2 = this.limit(this.val2 - 0.1);
      this.val3 = this.limit(this.val3 - 0.1);
    },
    limit(val) {
      if (val > 1) return 1;
      if (val < 0) return 0;
      return val;
    }
  }
};
</script>

<style lang="less">
@import "../../style/var.less";
.progress-demo {
  .@{prefix}-progress {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .@{prefix}-button-group {
    padding: 32px 16px;
  }
}
</style>
