<template>
  <div class="demo-doc">
    <h2 class="demo-doc__title">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DemoDoc',
  props: ['title']
};
</script>

<style lang="less">
.demo-doc {
  padding: 0 16px;

  &:first-child {
    .demo-doc__title {
      padding-top: 16px;
    }
  }
  &__title {
    margin: 0;
    padding: 32px 16px 16px 0;
    color: #999;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
