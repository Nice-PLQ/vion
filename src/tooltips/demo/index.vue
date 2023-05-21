<template>
  <div class="tooltips-demo">
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-center"
        :visible="visible"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible = !visible">Top-Center</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-left"
        :visible="visible1"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible1 = !visible1">Top-Left</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="top-right"
        :visible="visible3"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible3 = !visible3">Top-Right</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips text="自定义气泡提示的内容" :visible="visible4">
        <v-button size="large" type="primary" @click="visible4 = !visible4">自定义内容</v-button>
        <template v-slot:content>
          <ul class="custom-tooltips">
            <li>全选</li>
            <li>复制</li>
            <li>剪切</li>
          </ul>
        </template>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="bottom-center"
        :visible="visible5"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible5 = !visible5">Bottom-Center</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="bottom-left"
        :visible="visible6"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible6 = !visible6">Bottom-Left</v-button>
      </v-tooltips>
    </demo-doc>
    <demo-doc>
      <v-tooltips
        text="气泡提示的内容"
        placement="bottom-right"
        :visible="visible7"
        @visible-change="onVisibleChange"
      >
        <v-button size="large" type="primary" @click="visible7 = !visible7">Bottom-Right</v-button>
      </v-tooltips>
    </demo-doc>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(true);
    const visible1 = ref(true);
    const visible2 = ref(true);
    const visible3 = ref(true);
    const visible4 = ref(true);
    const visible5 = ref(true);
    const visible6 = ref(true);
    const visible7 = ref(true);
    const onVisibleChange = (value) => {
      console.log(value);
    };

    return {
      visible,
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      visible6,
      visible7,
      onVisibleChange,
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
        border-right: 1px solid rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
