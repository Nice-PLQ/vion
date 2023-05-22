<template>
  <div style="padding-bottom: 16px;">
    <demo-doc title="基础用法">
      <v-swiper>
        <v-swiper-item v-for="n in 4" :key="n">{{n}}</v-swiper-item>
      </v-swiper>
    </demo-doc>
    <demo-doc title="自动轮播">
      <v-swiper auto-play>
        <v-swiper-item v-for="n in 4" :key="n">{{n}}</v-swiper-item>
      </v-swiper>
    </demo-doc>
    <demo-doc title="自定义指示器">
      <v-swiper auto-play duration="1000" @change="change">
        <v-swiper-item v-for="n in 4" :key="n">{{n}}</v-swiper-item>

        <template v-slot:indicator>
          <div class="custom-indicator">{{current}} / 4</div>
        </template>
      </v-swiper>
    </demo-doc>
    <demo-doc title="取消无限轮播">
      <v-swiper :loop="false">
        <v-swiper-item v-for="n in 4" :key="n">{{n}}</v-swiper-item>
      </v-swiper>
    </demo-doc>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    change(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less">
@import "../../style/var.less";
.demo-doc {
  .@{prefix}-swiper__item {
    line-height: 150px;
    background-color: var(--brand-standard);
    opacity: 0.8;
    color: #fff;
    text-align: center;
    font-size: 18px;
    &:nth-child(2n) {
      opacity: 1;
    }
  }
}

.image-swiper {
  .@{prefix}-swiper__item {
    line-height: 0;
  }
}

.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  padding: 4px;
}
</style>
