<template>
  <div style="padding-bottom: 8px;">
    <demo-doc title="基础用法">
      <v-radio-group v-model="selected">
        <v-radio value="a">选项A</v-radio>
        <v-radio value="b">选项B</v-radio>
        <v-radio value="c">选项C</v-radio>
      </v-radio-group>
    </demo-doc>
    <demo-doc title="纵向排列">
      <v-radio-group v-model="privance" vertical>
        <v-radio value="gd">广东省</v-radio>
        <v-radio value="zj">浙江省</v-radio>
        <v-radio value="sd">山东省</v-radio>
      </v-radio-group>
    </demo-doc>
    <demo-doc title="设置选中背景色">
      <v-radio v-model="checked2" checked-color="#67C23A">自定义背景色</v-radio>
    </demo-doc>
    <demo-doc title="只读">
      <v-radio checked readonly class="m-r-16">选中</v-radio>
      <v-radio :checked="false" readonly>未选中</v-radio>
    </demo-doc>
    <demo-doc title="禁用">
      <v-radio :checked="true" disabled class="m-r-16">选中态禁用</v-radio>
      <v-radio :checked="false" disabled>未选中禁用</v-radio>
    </demo-doc>
    <demo-doc title="设置大小">
      <v-radio v-model="checked3" size="26px" class="m-r-16">26px</v-radio>
      <v-radio v-model="checked4" size="32px">32px</v-radio>
    </demo-doc>
    <demo-doc title="设置形状">
      <v-radio v-model="checked5" shape="square">方形选择框</v-radio>
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
      selected: 'b',
      privance: 'gd'
    };
  },
  watch: {
    selected(val) {
      console.log(val);
    },
    privance(val) {
      console.log(val);
    }
  }
};
</script>
