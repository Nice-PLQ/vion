<template>
  <div class="button-demo">
    <demo-document title="样式" :desc="styleDescList">
      <v-button type="primary" @click="handleClick" class="m-r-4">主按钮</v-button>
      <v-button @click="handleClick">次要按钮</v-button>
      <v-button type="ghost" @click="handleClick" class="m-r-4">幽灵按钮</v-button>
      <v-button type="warning" @click="handleClick">警示按钮</v-button>
    </demo-document>

    <demo-document title="状态">
      <v-button type="primary" loading class="m-r-4">加载中 20%</v-button>
      <v-button type="primary" loading :show-loading-icon="false">继续加载 78%</v-button>
      <v-button type="primary" @click="handleClick" disabled class="m-r-4">不可点击态</v-button>
      <v-button @click="handleClick" disabled>不可点击态</v-button>
       <v-button type="warning" disabled>不可点击态</v-button>
    </demo-document>
    <demo-document title="按钮大小" secTitle="大按钮" :desc="largeBtnDescList">
      <div class="button-demo-title__gray">横向一个组合</div>
      <v-button-group>
        <v-button type="primary" size="large">主按钮</v-button>
      </v-button-group>
      <div class="button-demo-title__gray">横向两个组合</div>
      <v-button-group>
        <v-button>默认按钮</v-button>
        <v-button type="primary">主按钮</v-button>
      </v-button-group>
      <div class="button-demo-title__gray">横向三个组合</div>
      <v-button-group>
        <v-button>默认按钮</v-button>
        <v-button>默认按钮</v-button>
        <v-button type="primary">主按钮</v-button>
      </v-button-group>

    </demo-document>
    <demo-document title="中按钮" :desc="middleBtnDescList">
      <v-button type="primary">主按钮</v-button>
    </demo-document>
    <demo-document title="小按钮" :desc="smallBtnDescList">
      <v-button type="primary" size="small" class="m-r-4">主按钮</v-button>
    </demo-document>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styleDescList: [
        '主要按钮：强调核心操作，独立使用或搭配次要按钮使用，同一界面或流程不得超过 2 个；',
        ' 次要按钮：仅次于主要按钮，可独立使用，也可与其它样式的按钮搭配使用；',
        ' 幽灵按钮：在有颜色的背景上使用。'
      ],
      largeBtnDescList: ['适用于表单页面所进行的操作，以及页面底部的常驻按钮。占据页面一整行的空间，不能多于三个按钮；出现多个按钮时，主按钮只能出现一个。'],
      middleBtnDescList: ['全屏布局的空白页，中按钮跟随插图和文案。此外，出现在画面中央，不跟随表单的操作可使用中按钮。'],
      smallBtnDescList: ['全屏布局的空白页，小按钮跟随插图和文案。此外，出现在画面中央，不跟随表单的操作可使用中按钮。'],
    };
  },
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
  &-title__gray {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 0 0 16px 0;
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
