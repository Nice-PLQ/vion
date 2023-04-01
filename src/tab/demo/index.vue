<template>
  <div class="tab-demo">
    <demo-document title="普通型页签" desc="用于界面当中">
    <demo-doc title="2个页签">
      <v-tab v-model="active" @click="handleClick" @change="handleChange">
        <v-tab-panel name="a" title="最多五个字"></v-tab-panel>
        <v-tab-panel name="b" title="最多五个字"></v-tab-panel>
      </v-tab>
    </demo-doc>

    <demo-doc title="3个页签">
      <v-tab v-model="active1" @click="handleClick" @change="handleChange">
        <v-tab-panel name="c" title="最多五个字"></v-tab-panel>
        <v-tab-panel name="d" title="最多五个字"></v-tab-panel>
        <v-tab-panel name="e" title="最多五个字"></v-tab-panel>
      </v-tab>
    </demo-doc>

    <demo-doc title="4个页签">
      <v-tab v-model="active2" @click="handleClick" @change="handleChange">
        <v-tab-panel name="f" title="最多四字"></v-tab-panel>
        <v-tab-panel name="g" title="最多四字"></v-tab-panel>
        <v-tab-panel name="h" title="最多四字"></v-tab-panel>
        <v-tab-panel name="i" title="最多四字"></v-tab-panel>
      </v-tab>
    </demo-doc>

    <demo-doc title="5个页签">
      <v-tab v-model="active3" :show-count="5" @click="handleClick" @change="handleChange">
        <v-tab-panel name="j" title="三个字"></v-tab-panel>
        <v-tab-panel name="k" title="三个字"></v-tab-panel>
        <v-tab-panel name="l" title="三个字"></v-tab-panel>
        <v-tab-panel name="m" title="三个字"></v-tab-panel>
        <v-tab-panel name="n" title="三个字"></v-tab-panel>
      </v-tab>
    </demo-doc>

    <demo-doc title="6个页签">
      <v-tab v-model="active4" :show-count="6" @click="handleClick" @change="handleChange">
        <v-tab-panel name="o" title="选项"></v-tab-panel>
        <v-tab-panel name="p" title="选项"></v-tab-panel>
        <v-tab-panel name="q" title="选项"></v-tab-panel>
        <v-tab-panel name="r" title="选项"></v-tab-panel>
        <v-tab-panel name="s" title="选项"></v-tab-panel>
        <v-tab-panel name="t" title="选项"></v-tab-panel>
      </v-tab>
    </demo-doc>

    <demo-doc title="滚动页签" class="p-b-32">
      <v-tab v-model="active5" @click="handleClick" @change="handleChange">
        <v-tab-panel v-for="(tab,index) in tabs" :title="tab" :key="index"></v-tab-panel>
      </v-tab>
    </demo-doc>
    </demo-document>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        '热门赛事',
        'QQ飞车手游',
        '英雄联盟',
        '王者荣耀',
        '和平精英',
        '绝地求生端游',
        '穿越火线',
        'DNF端游',
        '刀塔2',
        'LOL云顶之奕',
        '穿越火线之枪战之王'
      ],
      active: 'a',
      active1: 'c',
      active2: 'f',
      active3: 'j',
      active4: 'o',
      active5: 0,
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
  .demo-doc__title {
    padding-top: 16px;
  }
  .q-tab,
  .demo-doc {
    margin: 0 -16px;
  }
}

</style>
