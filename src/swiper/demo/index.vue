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
    <demo-doc title="图片轮播">
      <v-swiper auto-play class="image-swiper">
        <v-swiper-item v-for="url in imgList" :key="url">
          <img style="width: 100%" draggable="false" :src="url" />
        </v-swiper-item>
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
      imgList: [
        'https://qzonestyle.gtimg.cn/aoi/sola/20200328214934_1PNsjguryC.jpeg',
        'https://qzonestyle.gtimg.cn/aoi/sola/20200328214934_y2eTy3FEwD.jpeg',
        'https://qzonestyle.gtimg.cn/aoi/sola/20200328214934_5JmAmO7Irs.jpeg'
      ]
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
    opacity: 0.65;
    color: #fff;
    text-align: center;
    font-size: 18px;
    &:nth-child(2n) {
      opacity: 1;
      // background-color: var(--brand-standard);
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
  left: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  padding: 4px;
}
</style>
