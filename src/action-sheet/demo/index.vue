<template>
  <div>
    <demo-doc>
      <v-button @click="visible = true" size="large" class="m-b-16">基础型</v-button>
      <v-button @click="visible1 = true" size="large" class="m-b-16">带提示操作</v-button>
      <v-button @click="visible2 = true" size="large" class="m-b-16">警示型</v-button>
      <!-- <v-button @click="visible3 = true" size="large">有勾选操作</v-button> -->
      <v-button @click="visible4 = true" size="large" class="m-b-16">有勾选操作</v-button>
    </demo-doc>

    <v-action-sheet
      v-model="visible"
      :items="items"
      show-cancel
      @select="handleSelect"
    />

    <v-action-sheet
      title="提示文案"
      v-model="visible1"
      :items="items"
      show-cancel
      @select="handleSelect"
      @cancel="handleCancel"
    />

    <v-action-sheet
      v-model="visible2"
      title="提示文案"
      :items="items1"
      show-cancel
      @select="handleSelect"
      />

    <v-action-sheet
      title="提示文案"
      v-model="visible3"
      :items="items2"
      show-cancel
      show-select-icon
      @select="handleSelect1"
    />
    <v-action-sheet
      title="提示文案"
      v-model="visible4"
      :items="items3"
      show-cancel
      show-select-icon
      @select="handleSelect2"
    />
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
      items: ['选项一', '选项二'],
      items1: ['选项一', { text: '警示选项', color: '#FF5967' }],
      items2: [
        { text: '选项一', selected: false },
        { text: '选项二', selected: false }
      ],
      items3: [
        { text: '选项一', selected: false },
        { text: '选项二', selected: false }
      ],
    };
  },
  methods: {
    handleSelect(selected, selectedIndex) {
      console.log(selected, selectedIndex);
    },
    handleSelect1(selected, selectedIndex) {
      const selectedItem = this.items2[selectedIndex];
      selectedItem.selected = !selectedItem.selected;
    },
    handleSelect2(selected, selectedIndex) {
      this.items3.forEach((item, index) => {
        item.selected = index === selectedIndex;
      });
    },
    handleCancel() {
      console.log('cancel');
    }
  }
};
</script>
