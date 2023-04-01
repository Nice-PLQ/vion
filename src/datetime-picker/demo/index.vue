<template>
  <div>
    <demo-doc title="基础用法">
      <v-button size="large" class="m-b-16" @click="visible = true">年</v-button>
      <v-button size="large" class="m-b-16" @click="visible1 = true">年-月</v-button>
      <v-button size="large" class="m-b-16" @click="visible2 = true">年-月-日</v-button>
      <v-button size="large"  class="m-b-16" @click="visible3 = true">年-月-日-时-分</v-button>
      <v-button size="large" @click="visible4 = true">时-分</v-button>
      <v-datetime-picker
        :click-selectable="false"
        type="year"
        :visible="visible"
        @close="visible = false"
        :immediate-change="true"
        @change="handleChange"
      />
      <v-datetime-picker
        :click-selectable="false"
        type="year-month"
        :visible="visible1"
        @close="visible1 = false"
        @change="handleChange"
      />
      <v-datetime-picker
        :click-selectable="false"
        type="date"
        :visible="visible2"
        @close="visible2 = false"
        @change="handleChange"
      />
      <v-datetime-picker
        :click-selectable="false"
        type="date-time"
        :visible="visible3"
        :value="new Date(2025, 10, 11, 11, 11)"
        @close="visible3 = false"
        @change="handleChange"
      />
      <v-datetime-picker
        :click-selectable="false"
        type="time"
        :visible="visible4"
        @close="visible4 = false"
        @change="handleChange"
      />
    </demo-doc>
    <demo-doc title="自定义年份范围">
      <v-button size="large" @click="visible5 = true">2019-2040</v-button>
      <v-datetime-picker
        type="year"
        :min-year="2019"
        :max-year="2040"
        :visible="visible5"
        :click-selectable="false"
        @close="visible5 = false"
        @change="handleChange"
      />
    </demo-doc>
    <demo-doc title="默认选中某个时间">
      <v-button size="large" @click="visible6 = true">2030-11-11 11:11</v-button>
      <v-datetime-picker
        type="date-time"
        :min-year="2019"
        :max-year="2040"
        :visible="visible6"
        :click-selectable="false"
        v-model="value1"
        @close="visible6 = false"
        @change="handleChange"
      />
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
      value: null,
      value1: new Date(2030, 10, 11, 11, 11)
    };
  },
  methods: {
    handleOk(value) {
      this.visible3 = true;
      this.value = new Date(2030, 3, 20, 10, 11);
    },
    handleChange(value) {
      console.log('change------:', value);
    }
  }
};
</script>
