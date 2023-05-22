<template>
  <div class="button-demo">
    <demo-doc title="按钮类型">
      <v-button @click="handleClick" class="m-r-4">默认按钮</v-button>
      <v-button type="primary" @click="handleClick">主按钮</v-button>
      <v-button type="warning" @click="handleClick" class="m-r-4">警示按钮</v-button>
      <v-button type="gray" @click="handleClick">灰色按钮</v-button>
      <v-button type="link">文本按钮</v-button>
    </demo-doc>

    <demo-doc title="loading状态">
      <v-button type="primary" loading class="m-r-4">主按钮</v-button>
      <v-button type="warning" loading>警示按钮</v-button>
    </demo-doc>

    <demo-doc title="禁用状态">
      <v-button type="primary" disabled>主按钮</v-button>
    </demo-doc>

    <demo-doc title="按钮大小">
      <v-button type="gray" size="medium">灰色按钮</v-button>
      <v-button size="large">默认按钮</v-button>
      <v-button type="primary" size="large">主按钮</v-button>
      <v-button size="small" class="m-r-4">默认按钮</v-button>
      <v-button type="primary" size="small" class="m-r-4">主按钮</v-button>
      <v-button type="gray" size="small" class="m-r-4">灰色按钮</v-button>
      <v-button type="warning" size="small" class="m-r-4">警示按钮</v-button>
      <v-button type="primary" size="small" loading class="m-r-4">默认按钮</v-button>
      <v-button type="link" size="small">文本按钮</v-button>
    </demo-doc>

    <demo-doc title="按钮组合">
      <v-button-group>
        <v-button type="primary">主按钮</v-button>
        <v-button>默认按钮</v-button>
      </v-button-group>
    </demo-doc>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log('点击了按钮！');
    }
  }
};
</script>

<style lang="less">
.button-demo {
  button {
    margin-bottom: 16px;
  }
  .v-button-group {
    margin: 0 -16px 16px;
    padding: 13px 16px;
    align-items: center;
    background-color: var(--background-white);
    button {
      margin-bottom: 0;
    }
  }
}
</style>
