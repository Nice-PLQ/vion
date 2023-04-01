<template>
  <div class="navbar-demo">
    <demo-document title="一级界面导航">
      <demo-doc title="消息Tab导航">
        <v-nav-bar>
          <template v-slot:left>
            <div class="left-content">
              <v-avatar uin="2647439900" size="18px" />
              <div class="m-l-8">
                飞翔的企鹅
                <div class="status online">
                  4G在线 <v-icon name="ArrowRight" size="12px"></v-icon>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:right>
            <v-icon name="Camera" size="24px" class="m-r-10" />
            <v-icon name="Add" size="24px" />
          </template>
        </v-nav-bar>
      </demo-doc>

      <demo-doc title="联系人/动态Tab导航">
        <v-nav-bar>
          <template v-slot:left>
            <div class="left-content">
              <v-avatar uin="2647439900" size="18px" />
              <div class="m-l-8" style="font-size: 20px">联系人</div>
            </div>
          </template>
          <template v-slot:right>
            <v-icon name="Setting" size="24px" />
          </template>
        </v-nav-bar>
      </demo-doc>

      <demo-doc title="C2C聊天导航">
        <v-nav-bar theme="gray">
          <template v-slot:left>
            <div class="left-content">
              <v-icon name="ArrowLeft" size="24" style="margin-left:-7px"></v-icon>
              <v-badge type="capsule" size="10px">57</v-badge>
              <div class="m-l-4">
                飞翔的企鹅
                <div class="status online">
                  4G在线 <v-icon name="ArrowRight" size="12px"></v-icon>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:right>
            <v-icon name="Telephone" size="24px" class="m-r-10" />
            <v-icon name="ChatSettings" size="24px" />
          </template>
        </v-nav-bar>
      </demo-doc>

      <demo-doc title="群聊导航">
        <v-nav-bar theme="gray">
          <template v-slot:left>
            <div class="left-content">
              <v-icon name="ArrowLeft" size="24" style="margin-left:-7px"></v-icon>
              <v-badge type="capsule" size="10px">57</v-badge>
              <div class="m-l-4">
                企鹅开发组
                <div class="status">
                  24人在线 <v-icon name="ArrowDown" size="12px"></v-icon>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:right>
            <v-icon name="Telephone" size="24px" class="m-r-10" />
            <v-icon name="ChatSettings" size="24px" />
          </template>
        </v-nav-bar>
      </demo-doc>
    </demo-document>

    <demo-document title="二级界面导航">
      <demo-doc title="右侧无操作">
        <v-nav-bar>设置</v-nav-bar>
      </demo-doc>

      <demo-doc title="右侧操作为文本描述">
        <v-nav-bar right-text="文本">导航栏</v-nav-bar>
      </demo-doc>

      <demo-doc title="右侧操作为图标">
        <v-nav-bar right-icon="setting">
          我的资料
          <template v-slot:right>
            <v-icon name="Setting" size="24px" />
          </template>
        </v-nav-bar>
      </demo-doc>
    </demo-document>

    <demo-document title="浮层界面导航" class="p-b-32">
      <demo-doc title="顶部无操作">
        <v-nav-bar right-text="取消">
          选择联系人
          <template v-slot:left>
            <div style="width: 52px;height: 24px;"></div>
          </template>
        </v-nav-bar>
      </demo-doc>

      <demo-doc title="顶部有更多操作">
        <v-nav-bar :show-left-icon="false" left-text="取消" right-text="多选">
          选择联系人
        </v-nav-bar>
      </demo-doc>
    </demo-document>
  </div>
</template>

<script>
import DemoDocument from '../../../site/demo/components/DemoDocument.vue';
export default {
  components: { DemoDocument },
  data() {
    return {};
  },
  methods: {
    handleBack() {
      console.log('click back-----');
    },
    handleTitleClick() {
      console.log('click title-----');
    },
    handleRightClick() {
      console.log('click right-----');
    }
  }
};
</script>

<style lang="less">
.navbar-demo {
  .demo-doc__title {
    padding-top: 16px;
    padding-left: 16px;
  }
  .demo-doc {
    padding: 0;
    margin: 0 -16px;
  }
  .left-content {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: bold;

    .q-badge {
      color: var(--text-primary);
      background: transparent;
      border: 1px solid var(--text-primary);
      padding: 0 3px;
    }

    .status {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: normal;
      &.online::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: linear-gradient(180deg, #3DF291 0%, #0BD983 100%);
        margin-right: 4px;
      }
    }
  }
}
</style>
