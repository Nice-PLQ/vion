<template>
  <div class="tag-demo">
    <demo-doc title="默认标签">
      <v-tag @click="handleClick">深圳</v-tag>
      <v-tag class="m-l-6">水瓶座</v-tag>
    </demo-doc>
    <demo-doc title="线性标签">
      <v-tag shape="outline">深圳</v-tag>
      <v-tag shape="outline" class="m-l-6">水瓶座</v-tag>
    </demo-doc>
    <demo-doc title="自定义颜色">
      <v-tag bg-color="#E2F4FF" text-color="#09f">深圳</v-tag>
      <v-tag bg-color="#f671da" text-color="#fff" class="m-l-6">水瓶座</v-tag>
    </demo-doc>
    <demo-doc title="带图标">
      <v-tag>
        <v-icon name="Male" size="12px" class="m-r-3" color="var(--brand-standard)" />18岁
      </v-tag>
      <v-tag class="m-l-6">
        <v-icon name="Female" size="12px" class="m-r-3" color="#f03cc9" />18岁
      </v-tag>
    </demo-doc>
    <demo-doc title="小标签">
      <v-tag size="small" class="m-r-8">小标签</v-tag>
      <v-tag class="m-r-8">中标签</v-tag>
      <v-tag size="large" class="m-r-8">大标签</v-tag>
    </demo-doc>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('click-----');
    },
  }
};
</script>

<style lang="less">
@media (prefers-color-scheme: light) {
  .tag-demo {
    background-color: #FEFEFE;
  }
}
@media (prefers-color-scheme: dark) {
  .tag-demo {
    background-color: #000;
  }
}
.tag-demo {
  padding-bottom: 32px;
}
</style>
