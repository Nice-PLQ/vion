<template>
  <div class="color">
    <v-list-group v-for="(group, index) in list" :title="group.title" :key="index">
      <v-list
        v-for="item in group.children"
        :title="item.var"
        :desc="item.label"
        :key="item.var"
        desc-ellipsis="multiple"
      >
        <template v-slot:left>
          <div class="color-placeholder" :style="`color: var(${item.var})`"></div>
        </template>
      </v-list>
    </v-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: '品牌色',
          children: [
            { var: '--brand-standard', label: '品牌色' },
          ]
        },
        {
          title: '文本色',
          children: [
            { var: '--text-primary', label: '一级标题正文' },
            { var: '--text-secondary', label: '二级辅助文字' },
            { var: '--text-tertiary', label: '三级弱提示文字' },
            { var: '--text-white', label: '白色文字' },
            { var: '--text-link', label: '链接文字' },
            { var: '--text-nav-primary', label: '一级导航栏文字' },
            { var: '--text-nav-secondary', label: '二级导航栏文字' },
          ]
        },
        {
          title: '图标色',
          children: [
            { var: '--icon-primary', label: '一级主要图标' },
            { var: '--icon-secondary', label: '二级辅助图标' },
            { var: '--icon-tertiary', label: '三级弱提示图标' },
            { var: '--icon-white', label: '白色图标' },
            { var: '--icon-nav-primary', label: '一级导航栏的图标' },
            { var: '--icon-nav-secondary', label: '二级导航栏的图标' },
          ]
        },
        {
          title: '反馈色',
          children: [
            { var: '--feedback-normal', label: '表达中立/普通信息的图标或文字' },
            { var: '--feedback-success', label: '表达成功的图标或文字' },
            { var: '--feedback-warning', label: '表达警示的图标或文字' },
            { var: '--feedback-error', label: '表达错误的图标或文字' },
          ]
        },
        {
          title: '背景色',
          children: [
            { var: '--bg-bottom-dark', label: '页面的全局背景颜色' },
            { var: '--bg-bottom-standard', label: '页面的全局背景颜色' },
            { var: '--bg-bottom-light', label: '页面的全局背景颜色' },
            { var: '--bg-top-light', label: '弹窗、浮层、actionsheet等背景色' },
            { var: '--fill-light-secondary', label: '卡片式列表的背景色' },
            { var: '--overlay-light', label: '置顶背景色' },
            { var: '--fill-standard-primary', label: '搜索框、输入框等输入区的填充色，卡片式列表内的方块、圆形背景等' },
            { var: '--fill-light-primary', label: '通栏列表的背景色' },
            { var: '--overlay-standard-primary', label: '通栏列表的按下态' },
          ]
        },
        {
          title: '分割色',
          children: [
            { var: '--border-standard', label: '标准分割线' },
            { var: '--border-light', label: '浅分割线' },
          ]
        },
        {
          title: '气泡色',
          children: [
            { var: '--bubble-host-top', label: '主人态气泡色' },
            { var: '--bubble-guest', label: '客人态气泡色' },
            { var: '--bubble-host-text', label: '主人态气泡内的文字颜色（含link）' },
            { var: '--bubble-guest-text', label: '客人态气泡内的文字颜色（含link）' },
          ]
        },
      ]
    };
  }
};
</script>

<style lang="less">
  .color {
    padding: 16px;
    &-placeholder {
      margin-right: 8px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: currentColor;
    }
  }
</style>
