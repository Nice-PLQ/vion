<template>
  <div class="page-content">
    <header-bar v-if="!isIframe" :navList="navList" :searchVisible="true"></header-bar>
    <aside-bar v-if="!isIframe" :navList="navList" :current="current" :visible="sideVisible"></aside-bar>
    <main-content :class="{'in-iframe': isIframe}" />
    <simulator :url="demoUrl" :label="label" v-show="showSimulator"></simulator>
    <footer v-if="!isIframe">Copyright © 2019-present QQ-Web</footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Content from './components/Content/index.vue';
import Simulator from './components/Simulator/index.vue';
import Aside from './components/Aside/index.vue';
import { kebabCase } from '../util';
import navList from '../config.json';
import compList from './config';

navList.forEach((item) => {
  item.children.forEach((nav) => {
    const pageName = kebabCase(nav.component || nav.name);
    nav.pageName = pageName;
    nav.path = `/${pageName}`;
  });
});

export default {
  components: {
    HeaderBar: Header,
    AsideBar: Aside,
    MainContent: Content,
    Simulator
  },
  data() {
    return {
      demoUrl: '',
      sideVisible: false,
      current: '',
      label: '',
      navList,
      showSimulator: true,
      isIframe: window !== top
    };
  },
  mounted() {
    if (this.isIframe) {
      const main = document.querySelector('.main');
      const timer = setInterval(() => {
        if (main.style.height) {
          clearInterval(timer);
        } else {
          this.getOffsetHeight();
        }
      }, 100);
    }

    const getName = path => path.split('/').pop();
    const getLabel = name => compList.find(nav => kebabCase(nav.alias || nav.name) === name)?.label;

    const setUrl = (name, label) => {
      this.demoUrl = `./demo.html#/${name}`;
      this.current = name;
      this.label = label;
      this.showSimulator = !['intro', 'theme', 'i18n', 'classnames', 'contribute', 'plugin'].includes(name);
    };

    const name = getName(location.hash);
    const label = getLabel(name);
    setUrl(name, label);

    this.$router.afterEach((to, from) => {
      setUrl(to.name, getLabel(to.name));
    });
  },

  methods: {
    getOffsetHeight() {
      const { offsetHeight } = document.querySelector('.main');
      window.parent.postMessage({
        offsetHeight
      }, '*');
    }
  }
};
</script>

<style lang="less">
.is-win {
  ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
  }

  ::-webkit-scrollbar-thumb{
      background-color:#909090;
      border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
      background-color:#bababa;
  }
  ::-webkit-scrollbar-thumb:active {
      background-color:#bababa;
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, 'Noto Sans', 'Helvetica Neue', Helvetica,
    'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB',
    'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN',
    'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti',
    SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #242424;
  }
}

footer {
  position: relative;
  z-index: 99;
  margin-top: 100px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
}
</style>
