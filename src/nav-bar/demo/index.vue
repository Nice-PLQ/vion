<template>
  <div style="padding-bottom: 16px;">
    <demo-doc title="基本用法">
      <v-nav-bar @back="handleBack" @title-click="handleTitleClick">标题</v-nav-bar>
    </demo-doc>
    <demo-doc title="设置左右的图标或文本">
      <v-nav-bar right-text="设置" left-text="返回" @right-click="handleRightClick">导航栏标题长度超出范围</v-nav-bar>
      <v-nav-bar left-icon="close" right-icon="setting" style="margin-top: 8px;">标题</v-nav-bar>
    </demo-doc>
    <demo-doc title="自定义左右区域的内容">
      <v-nav-bar>
        标题
        <template v-slot:left>
          <button style="display: flex; align-items: center;">
            <v-icon name="ArrowLeft" />
            <v-badge type="capsule">99+</v-badge>
          </button>
        </template>
      </v-nav-bar>
      <v-nav-bar style="margin-top: 8px;">
        标题
        <template v-slot:left>
          <v-avatar size="14px" />
        </template>
        <template v-slot:right>
          <button title="分享">
            <v-icon name="Share" size="18px" />
          </button>
        </template>
      </v-nav-bar>
    </demo-doc>

    <demo-doc title="主题">
      <v-nav-bar theme="black" right-icon="setting">黑色主题</v-nav-bar>
      <v-nav-bar theme="white" style="margin-top: 8px;" right-icon="scan">白色主题</v-nav-bar>
      <v-nav-bar theme="gray" style="margin-top: 8px;" right-icon="quit">灰色主题</v-nav-bar>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBack() {
      console.log('click back-----');
    },
    handleTitleClick() {
      console.log('click title-----');
    },
    handleRightClick() {
      console.log('click right-----');
    }
  }
};
</script>
