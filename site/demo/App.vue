<template>
  <div class="container">
    <Header v-if="showHeader">
      <span>{{title}}</span>
    </Header>
    <router-view :class="{'comp-container': showHeader}"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import components from './config.json';
import { kebabCase } from '../util';

export default {
  components: { Header },
  data() {
    return {
      title: '',
      showHeader: false
    };
  },
  watch: {
    $route: 'routeChange'
  },
  mounted() {
    const hash = location.hash
      .split('/')
      .pop()
      .split('?');
    if (hash[1] && hash[1] === 'm') {
      this.title = this.getComponentName(hash[0]);
      this.showHeader = true;
    }
  },
  methods: {
    routeChange() {
      const { name, query } = this.$route;
      if ('m' in query) {
        this.title = this.getComponentName(name);
        this.showHeader = true;
      } else {
        this.showHeader = false;
      }
    },
    getComponentName(name) {
      let compName;
      components.some(item => {
        if (name === kebabCase(item.name)) {
          compName = `${item.name} ${item.label}`;
          return true;
        }
      });
      return compName;
    }
  }
};
</script>

<style lang="less">
:root {
  --demo-button-bg: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --demo-button-bg: #393939;
  }
}

.q-button_default.q-button_large {
  background-color: var(--demo-button-bg);
  border: none
}

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

html,
body {
  min-height: 100vh;
  background-color: #F5F5F5;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: -apple-system; // stylelint-disable-line
}

@media (prefers-color-scheme: dark) {
  body {
    .dark;
  }
}

.dark {
  background-color: #2d2d2d;
}

.comp-container {
  padding-top: 48px;
}

button {
  background: transparent;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
