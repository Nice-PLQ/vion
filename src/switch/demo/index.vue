<template>
  <div class="switch-demo">
    <demo-doc title="基础用法">
      <v-switch v-model="value" />
    </demo-doc>
    <demo-doc title="禁用状态">
      <v-switch v-model="value2" disabled class="m-r-4" />
      <v-switch v-model="value3" disabled />
    </demo-doc>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value: ref(true),
      value1: ref(true),
      value2: ref(false),
      value3: ref(true),
      value4: ref(true),
      value5: ref(true),
    };
  }
});
</script>

<style lang="less">
.switch-demo {
  user-select: none;
}
</style>
