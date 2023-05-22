<template>
  <div class="divider-demo">
    <demo-doc title="分割线">
      <v-divider />
    </demo-doc>

    <demo-doc title="分割区块">
      <div class="divider-wrap">
        <v-divider type="bold" />
      </div>
    </demo-doc>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
  .divider-demo {
    .divider-wrap {
      padding: 35px 0;
      margin: 0 -16px;
      background: var(--background-white);
    }
  }
</style>
