<template>
  <div>
    <demo-doc title="通用/有标题">
      <v-button @click="alert" size="large" class="m-b-16">一个操作</v-button>
      <v-button @click="confirm" size="large">二个操作</v-button>
    </demo-doc>
    <demo-doc title="通用/无标题(1行文字)">
      <v-button @click="alert1" size="large" class="m-b-16">一个操作</v-button>
      <v-button @click="confirm1" size="large">二个操作</v-button>
    </demo-doc>
    <demo-doc title="通用/无标题(2行文字)">
      <v-button @click="alert2" size="large" class="m-b-16">一个操作</v-button>
      <v-button @click="confirm2" size="large">二个操作</v-button>
    </demo-doc>
    <demo-doc title="自定义内容展示">
      <v-button @click="visible = true" size="large">弹窗转发</v-button>
      <v-dialog dialogClass="custom-dialog" v-model="visible">
        <div class="dialog-content-title">发送给：</div>
        <div class="user-content">
          <v-avatar uin="2647439900" />
          <span class="user-name">安德烈</span>
        </div>
        <div class="dialog-content">
          一起去图书馆吧
          <arrow-right name="ArrowRight" size="16px" color="#989EB4" />
        </div>
        <div class="message-container">
          <input type="text" placeholder="输入留言" />
          <emoji color="var(--icon_primary)" size="23px" />
        </div>
      </v-dialog>
    </demo-doc>
    <demo-doc title="三个操作按钮">
      <v-button @click="customButtons" size="large" class="m-b-16">自定义3个按钮</v-button>
    </demo-doc>
  </div>
</template>

<script>
import { Emoji, ArrowRight } from 'vion-svg-icon';

export default {
  components: { Emoji, ArrowRight },
  data() {
    return {
      visible: false,
    };
  },
  unmounted() {
    this.$dialog.close();
    this.visible = false;
  },
  methods: {
    alert() {
      this.$dialog.alert({
        title: '下线通知',
        content: '你的帐号于17:00在一台Android手机登录。如非本人操作，密码可能已经泄露，建议前往 http://110.qq.com/修改密码或者紧急冻结帐号。',
        confirmBtnText: '我知道了',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    confirm() {
      this.$dialog.confirm({
        title: '下线通知',
        content: '你的帐号于17:00在一台Android手机登录。如非本人操作，密码可能已经泄露，建议前往 http://110.qq.com/修改密码或者紧急冻结帐号。',
        confirmBtnText: '重新登录',
        cancelBtnText: '退出',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    alert1() {
      this.$dialog.alert({
        content: '文字一行的情况下居中显示',
        confirmBtnText: '我知道了',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    confirm1() {
      this.$dialog.confirm({
        content: '文字一行的情况下居中显示',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    alert2() {
      this.$dialog.alert({
        content: '在文字超过一行需要换行的情况下，文字居左显示。',
        confirmBtnText: '我知道了',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    confirm2() {
      this.$dialog.confirm({
        content: '在文字超过一行需要换行的情况下，文字居左显示。',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    customButtons() {
      this.$dialog.show({
        title: '是否使用此手机号登录新QQ号',
        content: '每个手机号只能用于1个QQ号的登录。若选择使用手机号18*****248登录，新QQ号则原QQ号无法再用此手机号登录。',
        buttons: ['使用', '不使用', '取消'],
        callback: (index) => {
          console.log('按钮的索引：', index);
        }
      });
    }
  }
};
</script>

<style lang="less">
.custom-dialog {
  .q-dialog__content {
    padding: 16px 30px 22px;
  }
  .q-dialog__description {
    align-self: stretch;
  }
  .dialog-content-title {
    font-size: 18px;
    color: var(--text-primary);
    font-weight: 500;
    margin-bottom: 8px;
  }
  .user-content {
    display: flex;
    align-items: center;
    .user-name {
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .dialog-content {
    font-size: 14px;
    color: #878b99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 18px;
  }
  .message-container {
    height: 40px;
    border-radius: 8px;
    background-color: var(--background-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;

    input {
      background: transparent;
      border:none;
      font-size: 14px;
      color: var(--text-primary);
    }

    input::-webkit-input-placeholder {
      color: #b0b3bf;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>
