<template>
  <div class="tab-demo">
    <demo-doc title="基础用法">
      <v-tab v-model="active" @click="handleClick" @change="handleChange">
        <v-tab-panel
          v-for="tab in tabs1"
          :name="tab.name"
          :title="tab.title"
          :key="tab.name"
        ></v-tab-panel>
      </v-tab>
    </demo-doc>
    <demo-doc title="自定义颜色">
      <v-tab
        v-model="active1"
        active-indicator-color="#e47575"
        active-text-color="#e47575"
        @click="handleClick"
        @change="handleChange"
      >
        <v-tab-panel v-for="(tab,index) in tabs2" :title="tab" :key="index"></v-tab-panel>
      </v-tab>
    </demo-doc>
    <demo-doc title="选项卡滚动">
      <v-tab v-model="active2" @click="handleClick" @change="handleChange">
        <v-tab-panel v-for="(tab,index) in tabs" :title="tab" :key="index"></v-tab-panel>
      </v-tab>
    </demo-doc>
    <demo-doc title="设置动画过渡时长和方法">
      <v-tab
        v-model="active3"
        duration="500ms"
        timing-function="linear"
        @click="handleClick"
        @change="handleChange"
      >
        <v-tab-panel v-for="(tab,index) in tabs" :title="tab" :key="index"></v-tab-panel>
      </v-tab>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        '选项一',
        '选项二',
        '选项三',
        '选项四',
        '选项五',
        '选项六',
        '选项七',
        '选项八',
        '选项九',
        '选项十',
      ],
      tabs1: [
        { title: '选项一', name: 'a' },
        { title: '选项二', name: 'b' },
      ],
      tabs2: ['选项一', '选项二', '选项三'],
      active: 'a',
      active1: 0,
      active2: 3,
      active3: 0,
    };
  },
  methods: {
    handleClick(index) {
      console.log('click-----: ', index);
    },
    handleChange(index) {
      console.log('change-----: ', index);
    }
  }
};
</script>

<style lang="less">
.tab-demo {
  .v-tab {
    // background-color: #fff;
  }
}
</style>
