<template>
  <div>
    <demo-doc title="基础用法">
      <v-button @click="visible = true" type="primary">弹出</v-button>
      <v-action-sheet
        title="ActionSheet标题"
        v-model="visible"
        :items="items"
        @select="handleSelect"
      />
    </demo-doc>
    <demo-doc title="显示取消项">
      <v-button @click="visible1 = true" type="primary">带取消选项</v-button>
      <v-action-sheet
        title="ActionSheet标题"
        v-model="visible1"
        :items="items"
        show-cancel
        @select="handleSelect"
        @cancel="handleCancel"
      />
    </demo-doc>
    <demo-doc title="设置菜单项的文本颜色">
      <v-button @click="visible2 = true" type="primary" style="margin-bottom: 16px;">文本颜色</v-button>
      <v-button @click="visible3 = true" type="primary">单独项文本颜色</v-button>
      <v-action-sheet v-model="visible2" :items="items2" showCancel @select="handleSelect" />
      <v-action-sheet v-model="visible3" :items="items3" showCancel @select="handleSelect" />
    </demo-doc>
    <demo-doc title="带选择图标">
      <v-button @click="visible4 = true" type="primary">多选</v-button>
      <v-button @click="visible5 = true" type="primary">单选</v-button>
      <v-action-sheet
        title="ActionSheet标题"
        v-model="visible4"
        :items="items4"
        show-cancel
        show-select-icon
        @select="handleSelect1"
      />
      <v-action-sheet
        title="ActionSheet标题"
        v-model="visible5"
        :items="items5"
        show-cancel
        show-select-icon
        @select="handleSelect2"
      />
    </demo-doc>
     <demo-doc title="自定义插槽">
      <v-button @click="visible6 = true" type="primary">自定义标题</v-button>
      <v-button @click="visible7 = true" type="primary">自定义选项</v-button>
      <v-action-sheet
        v-model="visible6"
        :items="items4"
        show-cancel
      >
        <template #title>
          <div style="color: #00cafc; font-size: 16px;">自定义标题</div>
        </template>
      </v-action-sheet>
      <v-action-sheet
        title="ActionSheet标题"
        v-model="visible7"
        :items="items5"
      >
        <template #item="{data}">
          <div style="color: #00cafc;">自定义{{data.item.text}}</div>
        </template>
      </v-action-sheet>
    </demo-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      items: ['选项一', '选项二', '选项三'],
      items2: [
        { text: '确定', color: '#00CAFC' },
        { text: '删除', color: 'red' }
      ],
      items3: ['选项一', '选项二', { text: '删除', color: 'red' }],
      items4: [
        { text: '选项一', selected: false },
        { text: '选项二', selected: false }
      ],
      items5: [
        { text: '选项一', selected: false },
        { text: '选项二', selected: false }
      ],
    };
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    handleSelect(selected, selectedIndex) {
      console.log(selected, selectedIndex);
    },
    handleSelect1(selected, selectedIndex) {
      const selectedItem = this.items4[selectedIndex];
      selectedItem.selected = !selectedItem.selected;
    },
    handleSelect2(selected, selectedIndex) {
      this.items5.forEach((item, index) => {
        item.selected = index === selectedIndex;
      });
    },
    handleCancel() {
      console.log('cancel');
    }
  }
};
</script>
