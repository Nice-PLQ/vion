<template>
  <div class="color">
    <h1>色彩变量</h1>
    <p>设计同学定义的色彩变量表，若需要使用变量的色彩，可使用css variables的用法，如：<code>color: var(--brand-standard)</code>。另外，变量色值已适配深色模式和多彩主题</p>

    <div class="color-panel-title">按下态</div>
    <ul>
      <li>除按钮与列表指定了按下态颜色，图标、文字的按下态，均为为默认状态的50%半透明</li>
      <li>AIO内图片的按下态，覆盖12%的#000000</li>
    </ul>

    <div class="color-panel-title">不可点击态</div>
    <ul>
      <li>除按钮与列表指定了按下态颜色，图标、文字的按下态，均为为默认状态的50%半透明</li>
      <li>AIO内图片的按下态，覆盖12%的#000000</li>
    </ul>
  </div>
</template>

<style lang="less">
@import './index.less';
.color {
  height: 78vh;
}
</style>
