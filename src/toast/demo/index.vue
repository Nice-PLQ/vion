<template>
  <demo-doc title="基础用法">
    <v-button @click="info" size="large">通知类提示</v-button>
    <v-button @click="success" size="large" class="m-y-16">完成类提示</v-button>
    <v-button @click="error" size="large">警示类提示</v-button>
  </demo-doc>
</template>

<script>
export default {
  methods: {
    success() {
      this.$toast.success('通知类提示');
    },
    error() {
      this.$toast.error('警示类提示');
    },
    info() {
      this.$toast({
        type: 'info',
        message: '完成类提示',
        duration: 3000,
      });
    }
  }
};
</script>
