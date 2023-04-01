<template>
  <div>
    <demo-doc>
      <v-button @click="visible = true" size="large">基础型</v-button>
      <v-picker
        value-key="text"
        ref="picker"
        title="选择省份"
        :columns="columns"
        :visible="visible"
        :click-selectable="false"
        @change="handleChange"
        @close="visible = false"
        @ok="handleOk"
      />
    </demo-doc>
    <demo-doc title="多列选择">
      <v-button @click="visible1 = true" size="large" class="m-b-16">两列</v-button>
      <v-button @click="visible2 = true" size="large">三列</v-button>
      <v-picker
        title="选择时间"
        :columns="columns1"
        :visible="visible1"
        :click-selectable="false"
        @close="visible1 = false"
        @change="handleChange"
        @ok="handleOk"
      />
      <v-picker
        title="选择时间"
        :columns="columns2"
        :visible="visible2"
        :click-selectable="false"
        @close="visible2 = false"
        @change="handleChange"
        @ok="handleOk"
      />
    </demo-doc>
    <!-- <demo-doc title="每列显示的数量">
      <v-button @click="visible3 = true" size="large">列展示7个选项</v-button>
      <v-picker
        :show-item-count="7"
        :columns="columns"
        :visible="visible3"
        :click-selectable="false"
        value-key="text"
        @close="visible3 = false"
        @change="handleChange"
        @ok="handleOk"
      />
    </demo-doc> -->
    <demo-doc title="多级联动">
      <v-button @click="visible4 = true" size="large">级联</v-button>
      <v-picker
        title="请选择城市"
        :columns="columns3"
        :visible="visible4"
        :click-selectable="false"
        @close="visible4 = false"
        @change="handleChange1"
        @ok="handleOk"
      />
    </demo-doc>
    <demo-doc title="设置选中值">
      <v-button @click="visible5 = true" size="large" class="m-b-16">单列</v-button>
      <v-button @click="visible6 = true" size="large">多列</v-button>
      <v-picker
        :columns="columns"
        :visible="visible5"
        :selected-value="columns[10]"
        :click-selectable="false"
        value-key="text"
        @close="visible5 = false"
        @change="handleChange"
        @ok="handleOk"
      />
      <v-picker
        :columns="columns3"
        :visible="visible6"
        :click-selectable="false"
        :selected-value="selectedValue"
        @close="visible6 = false"
        @change="handleChange1"
        @ok="handleOk"
      />
    </demo-doc>
  </div>
</template>

<script>
import { province, years, months, days } from './data';
const area = {
  // 省
  province: [
    { id: 1000, label: '广东省' },
    { id: 1001, label: '浙江省' }
  ],
  // 市
  city: [
    { id: 2000, parentId: 1000, label: '深圳市' },
    { id: 2001, parentId: 1000, label: '广州市' },
    { id: 2002, parentId: 1000, label: '东莞市' },
    { id: 2003, parentId: 1001, label: '杭州市' },
    { id: 2004, parentId: 1001, label: '宁波市' }
  ],
  // 区
  district: [
    { id: 3000, parentId: 2000, label: '罗湖区' },
    { id: 3001, parentId: 2000, label: '南山区' },
    { id: 3002, parentId: 2001, label: '天河区' },
    { id: 3003, parentId: 2001, label: '越秀区' },
    { id: 3004, parentId: 2002, label: '长安镇' },
    { id: 3005, parentId: 2002, label: '常平镇' },
    { id: 3006, parentId: 2003, label: '西湖区' },
    { id: 3007, parentId: 2003, label: '余杭区' },
    { id: 3008, parentId: 2004, label: '北仑区' },
    { id: 3009, parentId: 2004, label: '奉化区' }
  ]
};
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
      columns: province,
      columns1: [years, months],
      columns2: [years, months, days],
      columns3: [],
      selectedValue: []
    };
  },
  mounted() {
    const provinceData = area.province;
    const cityData = area.city.filter(item => item.parentId === provinceData[0].id);
    const district = area.district.filter(item => item.parentId === cityData[0].id);
    this.columns3 = [provinceData, cityData, district];
    this.selectedValue = [
      this.columns3[0][0],
      this.columns3[1][0],
      this.columns3[2][1]
    ];
  },
  methods: {
    handleChange(selectedIndex, selected, columnIndex) {
      console.log(selectedIndex, selected, columnIndex);
    },
    handleChange1(selectedIndex, selected, columnIndex, picker) {
      // 选择第一列后，设置第二列的数据
      if (columnIndex === 0) {
        const cityData = area.city.filter(item => item.parentId === selected.id);
        const districtData = area.district.filter(item => item.parentId === cityData[0].id);
        picker.setColumnValues(1, cityData);
        picker.setColumnValues(2, districtData);
      }

      if (columnIndex === 1) {
        const districtData = area.district.filter(item => item.parentId === selected.id);
        picker.setColumnValues(2, districtData);
      }
    },
    handleOk(selected) {
      console.log(selected);
    }
  }
};
</script>
