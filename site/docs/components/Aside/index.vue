<template>
  <aside :class="{sidebar: true, visible}">
    <ul class="sidebar-links">
      <li v-for="nav in navList" :key="nav.name">
        <div class="sidebar-links-group-title">{{nav.label}}</div>
        <ul>
          <li v-for="item in nav.children" :key="item.name">
            <router-link
              :to="item.path"
              :class="{
            'sidebar-link-item': true,
            active: item.pageName === current,
          }"
            >{{item.type !== 1 ? item.name : ''}} {{item.label}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: ['visible', 'navList', 'current'],
};
</script>

<style lang="less">
@import './index.less';
</style>
