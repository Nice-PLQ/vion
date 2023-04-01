<template>
  <div>
    <demo-doc title="图标类型">
      <ul class="v-icon-list">
        <li class="v-icon_item" v-for="icon in iconList" :key="icon.name" @click="handleSelect(icon.name)">
          <component :is="icon" />
          <div class="v-icon_name">{{icon.name.replace('Q', '')}}</div>
        </li>
      </ul>
    </demo-doc>

    <demo-doc title="图标大小">
      <ul class="v-icon-size">
        <li>
          <component :is="iconList.Emoji" size="32px" />
          <div>32px</div>
        </li>
        <li>
          <component :is="iconList.Emoji" size="48px" />
          <div>48px</div>
        </li>
        <li>
          <component :is="iconList.Emoji" size="56px" />
          <div>56px</div>
        </li>
        <li>
          <component :is="iconList.Emoji" size="64px" />
          <div>64px</div>
        </li>
      </ul>
    </demo-doc>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import * as VIcons from 'vion-svg-icon';

export default {
  data() {
    return {};
  },
  computed: {
    iconList() {
      const { version, ...icons } = VIcons;
      return icons;
    },
  },
  methods: {
    handleSelect(type) {
      const clipboard = new Clipboard(event.currentTarget, {
        text: () => `<${type.replace('Q', '')} />`,
      });
      clipboard.on('success', () => {
        clipboard.off('error');
        clipboard.off('success');
        clipboard.destroy();
        this.$toast.success('已复制到剪贴板');
      });
      clipboard.on('error', () => {
        clipboard.off('error');
        clipboard.off('success');
        clipboard.destroy();
        this.$toast.error('复制失败');
      });
      clipboard.onClick(event);
    }
  }
};
</script>

<style lang="less">
.v-icon-list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 16px 0;

  .v-icon_item {
    width: 33.333%;
    padding: 16px 0;
    cursor: pointer;
    color: var(--text-primary);

    &:active {
      opacity: 0.5;
    }
    &:hover {
      background: var(--background-list);
      border-radius: 4px;
    }
  }

  .v-icon_name {
    font-size: 12px;
    margin-top: 4px;
  }
}

.v-icon-size {
  display: flex;
  justify-content: space-between;
  padding: 16px 10px;
  text-align: center;
  color: var(--text-primary);

  li {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    > div {
      font-size: 14px;
    }
  }
}

.v-icon-list,
.v-icon-size {
  [class^='q-icon-'] {
    color: #989eb4;
  }
}

.v-icon-color{
  padding: 16px 10px;
}
</style>
