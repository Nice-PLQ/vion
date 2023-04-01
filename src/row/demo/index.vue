<template>
  <div class="flex-demo">
    <demo-doc title="基础用法">
      <v-row>
        <v-col span="6">
          <div>span: 6</div>
        </v-col>
        <v-col span="6">
          <div>span: 6</div>
        </v-col>
        <v-col span="6">
          <div>span: 6</div>
        </v-col>
        <v-col span="6">
          <div>span: 6</div>
        </v-col>
      </v-row>
    </demo-doc>
    <demo-doc title="列的偏移">
      <v-row>
        <v-col span="6" offset="3">
          <div>offset: 3</div>
        </v-col>
        <v-col span="6" offset="6">
          <div>offset: 6</div>
        </v-col>
      </v-row>
    </demo-doc>

    <demo-doc title="列的间距">
      <v-row gutter="8" class="flex-gutter-demo">
        <v-col span="6">
          <div>gutter: 8</div>
        </v-col>
        <v-col span="6">
          <div>gutter: 8</div>
        </v-col>
        <v-col span="6">
          <div>gutter: 8</div>
        </v-col>
      </v-row>
    </demo-doc>

    <demo-doc title="水平方向对齐方式">
      <v-row>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
        <v-col span="4">
          <div>start</div>
        </v-col>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-top: 24px;">
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
        <v-col span="4">
          <div>center</div>
        </v-col>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
      </v-row>
      <v-row justify="end" style="margin-top: 24px;">
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
        <v-col span="4">
          <div>end</div>
        </v-col>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
      </v-row>
      <v-row justify="space-between" style="margin-top: 24px;">
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
        <v-col span="10">
          <div>space-between</div>
        </v-col>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
      </v-row>
      <v-row justify="space-around" style="margin-top: 24px;">
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
        <v-col span="10">
          <div>space-around</div>
        </v-col>
        <v-col span="4">
          <div>span: 4</div>
        </v-col>
      </v-row>
    </demo-doc>
    <demo-doc title="垂直方向对齐方式">
      <v-row justify="space-around" align="top">
        <v-col span="4">
          <div style="height: 50px;">top</div>
        </v-col>
        <v-col span="4">
          <div style="height: 70px;">top</div>
        </v-col>
        <v-col span="4">
          <div style="height: 40px;">top</div>
        </v-col>
      </v-row>
      <v-row justify="space-around" align="center" style="margin-top: 24px;">
        <v-col span="4">
          <div style="height: 50px;">center</div>
        </v-col>
        <v-col span="4">
          <div style="height: 70px;">center</div>
        </v-col>
        <v-col span="4">
          <div style="height: 40px;">center</div>
        </v-col>
      </v-row>
      <v-row justify="space-around" align="bottom" style="margin-top: 24px;">
        <v-col span="4">
          <div style="height: 50px;">bottom</div>
        </v-col>
        <v-col span="4">
          <div style="height: 70px;">bottom</div>
        </v-col>
        <v-col span="4">
          <div style="height: 40px;">bottom</div>
        </v-col>
      </v-row>
    </demo-doc>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
@import "../../style/var.less";
.flex-demo {
  .@{prefix}-row {
    margin-bottom: 8px;
  }

  .@{prefix}-col {
    text-align: center;
    color: #fff;

    &:nth-child(2n+1) {
      > div {
        background-color: var(--brand-standard);
        opacity: 0.65;
        padding: 6px 0;
      }
    }

    &:nth-child(2n) {
      > div {
        background-color: var(--brand-standard);
        padding: 6px 0;
      }
    }
  }
}
</style>
