<template>
  <div class="demo-document">
    <h1 v-if="title" class="demo-document__title">{{title}}</h1>
    <h2 v-if="secTitle" class="demo-document__sectitle">{{secTitle}}</h2>
    <p v-for="(item, index) in descContent" :key="index" class="demo-document__desc">{{item}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DemoDocument',
  props: ['title', 'secTitle', 'desc'],
  computed: {
    descContent() {
      return typeof this.desc === 'string' ? [this.desc] : this.desc;
    }
  }
};
</script>

<style lang="less">
.demo-document {
  user-select: none;
  padding: 16px 16px;

  &:first-child {
    .demo-document__title {
      padding-top: 16px;
    }
  }
  &__title {
    margin: 0;
    padding: 0 16px 16px 0;
    color: var(--text-primary);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  &__sectitle {
    margin: 0;
    padding: 0 16px 7px 0;
    color: var(--text-primary);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  &__desc {
    margin: 0;
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    &:last-of-type {
      margin-bottom: 16px;
    }
  }
}
</style>
