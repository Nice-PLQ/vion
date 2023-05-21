<template>
  <div style="padding-bottom: 8px;">
    <demo-doc title="基础用法">
      <div style="margin-bottom: 10px;">
        <v-checkbox v-model="checked" />
      </div>
      <v-checkbox v-model="checked1">带文本</v-checkbox>
    </demo-doc>
    <demo-doc title="设置选中背景色">
      <v-checkbox v-model="checked2" checked-color="#67C23A">自定义背景色</v-checkbox>
    </demo-doc>
    <demo-doc title="只读">
      <v-checkbox checked readonly>选中</v-checkbox>
      <v-checkbox :checked="false" readonly>未选中</v-checkbox>
    </demo-doc>
    <demo-doc title="禁用">
      <v-checkbox :checked="true" disabled>选中态禁用</v-checkbox>
      <v-checkbox :checked="false" disabled>未选中禁用</v-checkbox>
    </demo-doc>
    <demo-doc title="设置大小">
      <v-checkbox v-model="checked3" size="26px">26px</v-checkbox>
      <v-checkbox v-model="checked4" size="32px">32px</v-checkbox>
    </demo-doc>

    <demo-doc title="设置形状">
      <v-checkbox v-model="checked5" shape="square">方形多选框</v-checkbox>
    </demo-doc>
    <demo-doc title="多选组（横向）">
      <v-checkbox-group v-model="checkList">
        <v-checkbox value="a">多选A</v-checkbox>
        <v-checkbox value="b">多选B</v-checkbox>
        <v-checkbox value="c">多选C</v-checkbox>
      </v-checkbox-group>
    </demo-doc>
    <demo-doc title="多选组合（纵向）">
      <v-checkbox-group v-model="checkList1" vertical>
        <v-checkbox value="month">一个月</v-checkbox>
        <v-checkbox value="quarter">一个季</v-checkbox>
        <v-checkbox value="year">一年</v-checkbox>
      </v-checkbox-group>
    </demo-doc>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
      checkList: ['b'],
      checkList1: ['month']
    };
  },
  watch: {
    checkList(val) {
      console.log(val);
    },
    checkList1(val) {
      console.log(val);
    }
  }
};
</script>
