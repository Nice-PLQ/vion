<template>
  <div class="popup-demo">
    <demo-doc title="基础用法">
      <v-button size="large" @click="top = true" class="m-b-16">上方</v-button>
      <v-button size="large" @click="bottom = true" class="m-b-16">下方</v-button>
      <v-button size="large" @click="left = true" class="m-b-16">左侧</v-button>
      <v-button size="large" @click="right = true" class="m-b-16">右侧</v-button>
      <v-button size="large" @click="center = true">中间</v-button>
      <v-popup v-model="left" position="left">
        <div style="width: 150px; height: 100%;"></div>
      </v-popup>

      <v-popup v-model="right" position="right">
        <div style="width: 150px; height: 100%;"></div>
      </v-popup>

      <v-popup v-model="top" position="top">
        <div style="height: 200px;"></div>
      </v-popup>

      <v-popup v-model="bottom" position="bottom">
        <div style="height: 200px;"></div>
      </v-popup>
      <v-popup v-model="center" position="center">
        <div style="height: 200px; width: 200px;"></div>
      </v-popup>

    </demo-doc>
    <demo-doc title="渲染到指定dom结点下">
      <v-button @click="bottom2 = true" size="large">渲染到指定dom结点</v-button>
      <!-- 这个el必须在createApp执行前就存在 -->
      <v-popup
        to="#popup-el"
        v-model="bottom2"
        position="center"
      >
        <div style="width: 200px; height: 200px;"></div>
      </v-popup>
    </demo-doc>
    <demo-doc title="自定义内容区的动画">
      <v-button @click="bottom1 = true" size="large">1.5s的slide-fade动画</v-button>
      <v-popup
        v-model="bottom1"
        position="bottom"
        transition-name="slide-fade"
        @open="open"
        @opened="opened"
        @close="close"
        @closed="closed"
      >
        <div style="height: 200px;"></div>
      </v-popup>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      top: false,
      right: false,
      bottom: false,
      bottom1: false,
      center: false,
      bottom2: false
    };
  },
  unmounted() {
    document.body.classList.remove('q-overflow-hidden');
  },
  methods: {
    open() {
      console.log('open--------');
    },
    opened() {
      console.log('opened--------');
    },
    close() {
      console.log('close--------');
    },
    closed() {
      console.log('closed--------');
    }
  }
};
</script>

<style lang="less">
@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideFadeOut {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}

.slide-fade-enter-active {
  animation: slideFadeIn 1.5s;
}

.slide-fade-leave-active {
  animation: slideFadeOut 1.5s;
}

.v-popup__content {
  & > div {
    background-color: var(--background-dialogue);
  }
}
</style>
