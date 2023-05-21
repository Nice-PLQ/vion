<template>
  <div>
    <demo-doc title="基础用法">
      <v-button @click="alert" type="primary" size="large">Alert</v-button>
    </demo-doc>
    <demo-doc title="html片段">
      <v-button @click="alert2" type="primary" size="large">内容支持html片段</v-button>
    </demo-doc>
    <demo-doc title="延时关闭">
      <v-button @click="alert3" type="primary" size="large">手动关闭，延时1s</v-button>
    </demo-doc>
    <demo-doc title="选择对话框">
      <v-button @click="confirm" type="primary" size="large">Confirm</v-button>
    </demo-doc>
    <demo-doc title="设置按钮文本颜色">
      <v-button @click="confirm2" type="primary" size="large">Confirm</v-button>
    </demo-doc>
    <demo-doc title="组件方式引用">
      <v-button @click="visible = true" type="primary" size="large">显示</v-button>
      <v-dialog title="提示" v-model="visible">
        <div>这是组件的弹窗用法</div>
      </v-dialog>
    </demo-doc>
    <demo-doc title="自定义按钮">
      <v-button @click="customButtons" type="primary" size="large" class="m-b-16">自定义3个按钮</v-button>
    </demo-doc>
  </div>
</template>

<script>
export default {
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
        title: '提示',
        content: '这是Alert弹窗',
        callback: (action) => {
          console.log(action);
        }
      });
    },
    alert2() {
      this.$dialog.alert({
        title: '提示',
        content: '<strong style="color: red;">这是alert弹窗</strong>',
        dangerouslyUseHTMLString: true,
        callback: action => {
          console.log(action);
        }
      });
    },
    alert3() {
      this.$dialog.alert({
        title: '提示',
        content: '这是alert弹窗',
        beforeClose: (action, done) => {
          console.log(action);
          setTimeout(done, 1000);
        }
      });
    },
    confirm() {
      this.$dialog.confirm({
        title: '提示',
        content: '这是confirm弹窗',
        callback: action => {
          console.log(action);
        }
      });
    },
    confirm2() {
      this.$dialog.confirm({
        title: '提示',
        content: '这是confirm弹窗',
        cancelBtnTextColor: '#FF596A',
        confirmBtnTextColor: '#00cafc',
        callback: action => {
          console.log(action);
        }
      });
    },
    customButtons() {
      this.$dialog.show({
        title: '提示',
        content: '可自定义多个按钮，建议最多3个',
        buttons: ['使用', '不使用', { text: '取消', color: '#FF596A' }],
        callback: index => {
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
