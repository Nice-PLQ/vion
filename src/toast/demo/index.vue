<template>
  <demo-doc title="普通提示">
    <v-button @click="info" size="large">通知类提示</v-button>
    <v-button @click="success" size="large" class="m-y-16">完成类提示</v-button>
    <v-button @click="error" size="large">警示类提示</v-button>
  </demo-doc>
</template>

<script>
export default {
  methods: {
    success() {
      this.$toast.success('草稿已保存');
    },
    error() {
      this.$toast.error('此账号为高风险账号');
    },
    info() {
      this.$toast({
        type: 'info',
        message: '今天的任务已经完成了',
        duration: 3000
      });
    }
  }
};
</script>
