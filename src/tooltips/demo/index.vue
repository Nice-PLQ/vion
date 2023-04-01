<template>
  <div class="tooltips-demo">
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-center"
        :visible="btn1Visible"
        theme="dark"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" @click="btn1Visible = !btn1Visible">top-center</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-left"
        :visible="btn2Visible"
        theme="dark"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" @click="btn2Visible = !btn2Visible">top-left</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-right"
        :visible="btn3Visible"
        theme="dark"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" @click="btn3Visible = !btn3Visible">top-right</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips text="自定义气泡提示的内容" :visible="btn7Visible">
        <v-button size="large" @click="btn7Visible = !btn7Visible">自定义内容</v-button>
        <template v-slot:content>
          <ul class="custom-tooltips">
            <li>粘贴</li>
            <li>全屏输入</li>
            <li>换行</li>
          </ul>
        </template>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="bottom-center"
        :visible="btn4Visible"
        theme="dark"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" @click="btn4Visible = !btn4Visible">bottom-center</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="bottom-left"
        :visible="btn5Visible"
        theme="dark"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" @click="btn5Visible = !btn5Visible">bottom-left</v-button>
      </v-tooltips>
    </demo-doc>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const btn1Visible = ref(true);
    const btn2Visible = ref(true);
    const btn3Visible = ref(true);
    const btn4Visible = ref(true);
    const btn5Visible = ref(true);
    const btn6Visible = ref(true);
    const btn7Visible = ref(true);
    const onVisibleChange = (value) => {
      console.log(value);
    };
    const onTooltipsClick = () => {
      console.log('click');
    };
    return {
      btn1Visible,
      btn2Visible,
      btn3Visible,
      btn4Visible,
      btn5Visible,
      btn6Visible,
      btn7Visible,
      onVisibleChange,
      onTooltipsClick,
    };
  }
});
</script>

<style lang="less">
.tooltips-demo {
  padding-top: 16px;
  padding-bottom: 50px;

  .custom-tooltips {
    color: var(--text-white);
    display: flex;
    font-size: 14px;
    li {
      padding: 8px;
      &:not(:last-child) {
        border-right: 1px solid var(--border-standard);
      }
    }
  }
}
</style>
