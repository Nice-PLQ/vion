<template>
  <div class="notice-bar-demo">
    <demo-document title="入口型">
      <v-notice-bar @click="click" right-icon-type="right">这是一段超长的提示文本，超长的部分将会自动隐藏</v-notice-bar>
      <v-notice-bar @click="click" type="warning" right-icon-type="right">网络出现异常，请检查。</v-notice-bar>
      <v-notice-bar @click="click" type="info" right-icon-type="right">
        你有新的邮件，请及时查阅。
        <template v-slot:icon>
          <v-icon name="Mail" color="#8e8e8e" />
        </template>
      </v-notice-bar>
    </demo-document>

    <demo-document title="可关闭型">
      <v-notice-bar @click="click" right-icon-type="close">这是一段超长的提示文本，超长的部分将会自动隐藏</v-notice-bar>
      <v-notice-bar @click="click" type="warning" right-icon-type="close">网络出现异常，请检查。</v-notice-bar>
      <v-notice-bar @click="click" type="info" right-icon-type="close">
        你有新的邮件，请及时查阅。
        <template v-slot:icon>
          <v-icon name="Mail" color="#8e8e8e" />
        </template>
      </v-notice-bar>
    </demo-document>

    <demo-document title="带操作型">
      <v-notice-bar
        right-icon-type="close"
        right-text="去设置"
        @click="click"
        @right-text-click="rightTextClick"
      >
        这是一段超长的提示文本，超长的部分将会自动隐藏
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
      你有新的邮件，请及时查阅。
        <template v-slot:icon>
          <v-icon name="Mail" color="#8e8e8e" />
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
