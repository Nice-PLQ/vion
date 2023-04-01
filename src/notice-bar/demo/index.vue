<template>
  <div class="notice-bar-demo">
    <demo-document title="入口型" desc="用于通知操作结果，不可添加额外操作。">
      <v-notice-bar @click="click" right-icon-type="right">正在浏览 “文化5G创新时代”。</v-notice-bar>
      <v-notice-bar @click="click" type="warning" right-icon-type="right">网络出现异常，请检查。</v-notice-bar>
      <v-notice-bar @click="click" type="info" right-icon-type="right">
        QQ已登录Mac，iPad。
        <template v-slot:icon>
          <v-icon name="Qq" color="#8e8e8e" />
        </template>
      </v-notice-bar>
    </demo-document>

    <demo-document title="可关闭型" desc="用于通知操作结果，可进行额外操作。">
      <v-notice-bar @click="click" right-icon-type="close">正在浏览 “文化5G创新时代”。</v-notice-bar>
      <v-notice-bar @click="click" type="warning" right-icon-type="close">网络出现异常，请检查。</v-notice-bar>
      <v-notice-bar @click="click" type="info" right-icon-type="close">
        QQ已登录Mac，iPad。
        <template v-slot:icon>
          <v-icon name="Qq" color="#8e8e8e" />
        </template>
      </v-notice-bar>
    </demo-document>

    <demo-document title="带操作型" desc="用于通知操作结果，可进行额外操作。">
      <v-notice-bar
        right-icon-type="close"
        right-text="去设置"
        @click="click"
        @right-text-click="rightTextClick"
      >
        正在浏览 “文化5G创新时代”。
      </v-notice-bar>
      <v-notice-bar
        type="warning"
        right-icon-type="close"
        right-text="去设置"
        @click="click"
        @right-text-click="rightTextClick"
      >
        网络出现异常，请检查。
      </v-notice-bar>
      <v-notice-bar
        type="info"
        right-icon-type="close"
        right-text="去设置"
        @click="click"
        @right-text-click="rightTextClick"
      >
        QQ已登录Mac，iPad。
        <template v-slot:icon>
          <v-icon name="Qq" color="#8e8e8e" />
        </template>
      </v-notice-bar>
    </demo-document>

    <demo-document title="多人协同型" desc="用于通知操作结果，不可进行操作。">
      <v-notice-bar @click="click" type="info" right-icon-type="right">
        林克正在语音通话
        <template v-slot:icon>
          <v-avatar uin="2647439900" size="12px" style="margin-right:-2px" />
        </template>
      </v-notice-bar>
    </demo-document>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIcon: true
    };
  },
  methods: {
    click() {
      console.log('click');
    },
    rightTextClick() {
      console.log('rightTextClick');
    },
  }
};
</script>

<style lang="less">
@import "../../style/var.less";
.@{prefix}-notice {
  margin: 0 -16px 16px;
}
</style>
