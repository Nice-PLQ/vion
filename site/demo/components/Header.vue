<template>
  <header class="header">
    <v-icon name="ArrowLeft" size="24px" color="#fff" @click="handleClick" />
    <div class="header-title">
      <slot></slot>
    </div>
    <div class="version">{{version}}</div>
  </header>
</template>

<script>
import { version } from '../../version';
export default {
  data() {
    return {
      version
    };
  },
  methods: {
    handleClick() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less">
.header {
  height: 48px;
  background-color: var(--brand-standard);
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 16px;

  .q-icon {
    position: absolute;
    left: 16px;
  }

  &-title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
  }

  .version {
    position: absolute;
    right: 16px;
    font-size: 12px;
    border: 1px solid #fff;
    padding: 4px 8px;
    border-radius: 50px;
    transform: scale(0.8);
  }
}
</style>
