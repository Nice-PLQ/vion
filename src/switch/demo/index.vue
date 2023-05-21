<template>
  <div>
    <demo-doc title="基础用法">
      <v-switch v-model="value" />
    </demo-doc>
    <demo-doc title="禁用状态">
      <v-switch v-model="value2" disabled />
      <v-switch v-model="value3" disabled />
    </demo-doc>
    <demo-doc title="自定义大小">
      <v-switch size="18px" :checked="value1" @change="handleChange" />
    </demo-doc>
    <demo-doc title="自定义背景色">
      <v-switch v-model="value4" active-color="#67C23A" inactive-color="#FF596A" />
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value1: true,
      value2: false,
      value3: true,
      value4: true,
      value5: true,
    };
  },
  methods: {
    handleChange(checked) {
      this.value1 = checked;
    }
  }
};
</script>
