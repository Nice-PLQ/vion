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
        <v-list title="用户昵称">
          <template v-slot:left>
            <v-avatar uin="2647439900" style="margin-right: 12px;" />
          </template>
          <template v-slot:right>
            <v-button type="gray" size="small">添加</v-button>
          </template>
        </v-list>
        <template #right>
          <div style="display: flex;">
            <button class="button like">
              点赞
              <v-icon name="like" size="14px" />
            </button>
            <button class="button share">
              分享
              <v-icon name="share" size="14px" />
            </button>
          </div>
        </template>
      </v-slip-drawer>
    </demo-doc>
    <demo-doc title="组合">
      <v-slip-drawer-group ref="slipDraserGroup">
        <v-slip-drawer
          :left-items="leftItems1"
          :right-items="rightItems1"
          @right-click="handleRight1"
          @left-click="handleLeft1">
          <v-list title="QQ web团队" help="欢迎活水" arrow-direction="right">
            <template v-slot:left>
              <v-avatar style="margin-right: 12px;" />
            </template>
          </v-list>
        </v-slip-drawer>
        <v-slip-drawer :left-items="leftItems" :right-items="rightItems">
          <v-list title="腾讯web技术支持" help="暂无消息" arrow-direction="right">
            <template v-slot:left>
              <v-avatar uin="2647439900" style="margin-right: 12px;" />
            </template>
          </v-list>
        </v-slip-drawer>
        <v-slip-drawer :left-items="leftItems" :right-items="rightItems">
          <v-list title="QQ问题反馈群" help="该需求排期确认..." arrow-direction="right">
            <template v-slot:left>
              <v-avatar
                :uin="[2647439500, 2647439600, 2647439700, 2647439800]"
                style="margin-right: 12px;"
              />
            </template>
          </v-list>
        </v-slip-drawer>
      </v-slip-drawer-group>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftItems: [
        { text: '置顶', style: 'background: #b0c2cc' },
      ],
      rightItems: [
        { text: '收藏', style: 'background: #15bd62' },
        { text: '标记为已读', style: 'background: #eac707' },
        { text: '删除', style: 'background: #ee0a24' },
      ],
      leftItems1: [
        { text: '联系linkpan', style: 'background: #b0c2cc' }
      ],
      rightItems1: [
        { text: '活水', style: 'background: #15bd62' },
        { text: '考虑一下', style: 'background: #eac707' },
        { text: '不来', style: 'background: #ee0a24' },
      ]
    };
  },
  methods: {
    handleLeft(index) {
      console.log(index);
    },
    handleRight(index) {
      console.log(index);
    },
    handleRight1(index) {
      if (index === 0) {
        window.open('wxwork://message/?username=linkpan');
      } else if (index === 1) {
        this.$dialog.confirm({
          title: '提示',
          cancelBtnText: '继续考虑',
          confirmBtnText: '直接活水',
          cancelBtnTextColor: '#FF596A',
          confirmBtnTextColor: '#00cafc',
          content: '这还需要考虑？',
          callback: (action) => {
            console.log(action);
            if (action === 'confirm') {
              window.open('wxwork://message/?username=linkpan');
            }
          }
        });
      } else {
        this.$dialog.alert({
          content: 'Oops~!有点遗憾呀😭',
          callback: (action) => {
            this.$refs.slipDraserGroup.reset();
            console.log(action);
          }
        });
      }
    },
    handleLeft1() {
      window.open('wxwork://message/?username=linkpan');
    },
    handleOpened() {
      console.log('opened');
    },
    handleClosed() {
      console.log('closed');
    }
  }
};
</script>

<style lang="less">
  .slip-drawer-demo {
    .button {
      height: 56px;
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
