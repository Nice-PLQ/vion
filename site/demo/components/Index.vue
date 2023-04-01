<template>
  <div>
    <Header :showBackIcon="false">
      <v-icon name="Qq" color="#fff" size="30px" />vion
    </Header>
    <ul class="comp-list">
      <li class="comp-item" v-for="item in components" :key="item.name">
        <router-link :to="`/${item.linkName}?m`">{{item.name}} {{item.label}}</router-link>
        <v-icon name="ArrowRight" size="20px" color="#989EB4" />
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './Header.vue';
import { kebabCase } from '../../util';
import components from '../config.json';
components.forEach(item => (item.linkName = kebabCase(item.component || item.name)));
export default {
  components: {
    Header
  },
  data() {
    return {
      components,
      title: '',
      showBackIcon: true
    };
  }
};
</script>

<style lang="less">
.comp-list {
  padding: 48px 16px 16px;
  overflow: hidden;
  .comp-item {
    height: 48px;
    background-color: #fff;
    margin-top: 16px;
    padding: 0 16px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      flex: 1;
      height: 100%;
      color: #333;
      text-decoration: none;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .dark;
}

.dark {
  .comp-list .comp-item{
      background-color: #262626;
      a {
        color: #fff;
      }
  }
}
</style>
