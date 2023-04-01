<template>
  <div class="divider-demo">
    <demo-document title="分割线" desc="用于分割列表或输入框的不同项。">
      <v-divider />
    </demo-document>

    <demo-document title="分割区块" desc="列表或输入框的若干项可以根据含义组成不同的组，这些组之间用分割区块来分割。">
      <div class="divider-wrap">
        <v-divider type="bold" />
      </div>
    </demo-document>
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
