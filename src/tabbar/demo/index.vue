<template>
  <div class="tabbar-demo">
    <demo-doc title="基础用法">
      <v-tabbar v-model="current" @change="onChange">
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Home" size="20px" />
          </template>
          主页
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Message" size="20px" />
          </template>
          消息
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Mail" size="20px" />
          </template>
          邮件
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Contact" size="20px" />
          </template>
          联系人
        </v-tabbar-item>
      </v-tabbar>
    </demo-doc>
    <demo-doc title="带徽章">
      <v-tabbar v-model="current2">
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Home" size="20px" />
          </template>
          主页
        </v-tabbar-item>
        <v-tabbar-item badge="99+">
          <template #icon>
            <v-icon name="Message" size="20px" />
          </template>
          消息
        </v-tabbar-item>
        <v-tabbar-item :badge="true">
          <template #icon>
            <v-icon name="Mail" size="20px" />
          </template>
          邮件
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Contact" size="20px" />
          </template>
          联系人
        </v-tabbar-item>
      </v-tabbar>
    </demo-doc>

    <demo-doc title="自定义颜色">
      <v-tabbar v-model="current3" active-color="#00CAFC" inactive-color="var(--text-primary)">
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Home" size="20px" />
          </template>
          主页
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Message" size="20px" />
          </template>
          消息
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Mail" size="20px" />
          </template>
          邮件
        </v-tabbar-item>
        <v-tabbar-item>
          <template #icon>
            <v-icon name="Contact" size="20px" />
          </template>
          联系人
        </v-tabbar-item>
      </v-tabbar>
    </demo-doc>

    <demo-doc title="自定义单个tab颜色">
      <v-tabbar v-model="current4">
        <v-tabbar-item active-color="#00CAFC">
          <template #icon>
            <v-icon name="Message" size="20px" />
          </template>
          消息
        </v-tabbar-item>
        <v-tabbar-item active-color="#FFCD00">
          <template #icon>
            <v-icon name="Mail" size="20px" />
          </template>
          邮件
        </v-tabbar-item>
        <v-tabbar-item active-color="#67C23A">
          <template #icon>
            <v-icon name="Contact" size="20px" />
          </template>
          联系人
        </v-tabbar-item>
      </v-tabbar>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      current1: 1,
      current2: 0,
      current3: 0,
      current4: 1,
      current5: 0,
    };
  },
  methods: {
    onChange(index) {
      this.$toast.success(`选中项的索引：${index}`);
    }
  }
};
</script>

<style lang="less">
.tabbar-demo {
  .demo-doc {
    margin: 0 -16px;

    &__title {
      padding-left: 16px;
    }
  }
}
</style>
