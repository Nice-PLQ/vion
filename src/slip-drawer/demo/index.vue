<template>
  <div class="slip-drawer-demo">
    <demo-doc title="基础用法">
      <v-slip-drawer
        :left-items="leftItems"
        :right-items="rightItems"
        @left-click="handleLeft"
        @right-click="handleRight"
        @opened="handleOpened"
        @closed="handleClosed"
      >
        <v-list title="左右滑动" arrow-direction="right" />
      </v-slip-drawer>
    </demo-doc>
    <demo-doc title="自定义操作项">
      <v-slip-drawer>
        <template #left>
          <button class="button reset">撤销</button>
        </template>
        <v-list title="标题">
          <template v-slot:left>
            <div
              style="
                width: 48px;
                height: 48px;
                background: var(--brand-standard);
                border-radius: 4px;
                margin-right: 8px;
              "
            ></div>
          </template>
          <template v-slot:right>
            <v-button type="gray" size="small">添加</v-button>
          </template>
        </v-list>
        <template #right>
          <button class="button like">
            点赞
            <v-icon name="like" size="14px" />
          </button>
          <button class="button share">
            分享
            <v-icon name="share" size="14px" />
          </button>
        </template>
      </v-slip-drawer>
    </demo-doc>
    <demo-doc title="组合">
      <v-slip-drawer-group>
        <v-slip-drawer :left-items="leftItems" :right-items="rightItems">
          <v-list
            title="标题一"
            help="辅助文本"
            arrow-direction="right"
          ></v-list>
        </v-slip-drawer>
        <v-slip-drawer :left-items="leftItems" :right-items="rightItems">
          <v-list
            title="标题二"
            help="辅助文本"
            arrow-direction="right"
          ></v-list>
        </v-slip-drawer>
        <v-slip-drawer :left-items="leftItems" :right-items="rightItems">
          <v-list
            title="标题三"
            help="辅助文本"
            arrow-direction="right"
          ></v-list>
        </v-slip-drawer>
      </v-slip-drawer-group>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftItems: [{ text: '置顶', style: 'background: #b0c2cc' }],
      rightItems: [
        { text: '收藏', style: 'background: #15bd62' },
        { text: '标记为已读', style: 'background: #eac707' },
        { text: '删除', style: 'background: #ee0a24' },
      ],
    };
  },
  methods: {
    handleLeft(index) {
      console.log(index);
    },
    handleRight(index) {
      console.log(index);
    },
    handleOpened() {
      console.log('opened');
    },
    handleClosed() {
      console.log('closed');
    },
  },
};
</script>

<style lang="less">
.slip-drawer-demo {
  .button {
    height: 100%;
    padding: 0 16px;
    border: none;
    color: #fff;

    &.reset {
      background: #ee0a24;
    }

    &.share {
      background: #15bd62;
    }

    &.like {
      background: #13a2ea;
    }
  }
  .q-list {
    border-radius: 0;
  }
}
</style>
