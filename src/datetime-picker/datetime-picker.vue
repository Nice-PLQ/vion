<template>
  <v-picker
    :class="name"
    :columns="columns"
    :visible="visible"
    :mask-visible="maskVisible"
    :selected-value="selectedValue"
    :show-cancel="showCancel"
    :show-ok="showOk"
    :cancel-text="cancelText"
    :ok-text="okText"
    :inertia="inertia"
    :click-selectable="clickSelectable"
    :immediate-change="immediateChange"
    :to="to"
    :teleport-disabled="teleportDisabled"
    @change="onChange"
    @ok="onOk"
    @close="onClose"
    @cancel="onCancel"
  />
</template>

<script>
import { defineComponent, ref, watch, onMounted, computed } from 'vue';
import VPicker from '../picker';
import { prefix } from '../config';

const name = `${prefix}-datetime-picker`;

const genArrayCount = count => new Array(count).fill(1);
const calcDaysCount = (year, month) => new Date(year, month, 0).getDate();

export default defineComponent({
  name,
  components: { VPicker },
  props: {
    modelValue: Date,
    /**
     * @description 选中的时间值
     * @attribute value
     */
    value: {
      type: Date,
      default: null
    },
    /**
     * @description 是否显示Picker
     * @attribute visible
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * @description 将popup放在哪个el下，该el在createApp前必须存在
     * @attribute to
     */
    to: {
      type: String,
      default: 'body'
    },
    /**
     * @description 是否禁用teleport
     * @attribute teleport-disabled
     */
    teleportDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否显示遮罩
     * @attribute mask-visible
     */
    maskVisible: {
      type: Boolean,
      default: true
    },
    /**
     * @description 日期选择器类型
     * @attribute type
     * @enum ["date", "date-time", "time", "year", "year-month"]
     * @default date
     */
    type: {
      type: String,
      default: 'date',
      validator: val => ['date', 'date-time', 'time', 'year', 'year-month'].indexOf(val) !== -1
    },
    /**
     * @description 滚动惯性系数
     * @attribute inertia
     */
    inertia: [Number, String],
    /**
     * @description 最小年份
     * @attribute min-year
     */
    minYear: {
      type: Number,
      default: () => new Date().getFullYear() - 10
    },
    /**
     * @description 最大年份
     * @attribute max-year
     */
    maxYear: {
      type: Number,
      default: () => new Date().getFullYear() + 10
    },
    /**
     * @description 是否显示取消按钮
     * @attribute show-cancel
     */
    showCancel: {
      type: Boolean,
      default: true
    },
    /**
     * @description 是否显示确定按钮
     * @attribute show-ok
     */
    showOk: {
      type: Boolean,
      default: true
    },
    /**
     * @description 取消按钮文案
     * @attribute cancel-text
     */
    cancelText: String,
    /**
     * @description 确定按钮文案
     * @attribute ok-text
     */
    okText: String,
    /**
     * @description 是否支持点击选择项
     * @attribute click-selectable
     */
    clickSelectable: {
      type: Boolean,
      default: true
    },
    /**
     * @description 是否立即触发change事件
     * @attribute immediate-change
     */
    immediateChange: {
      type: Boolean,
      default: false
    }
  },
  emits: ['ok', 'cancel', 'close', 'change', 'update:modelValue'],
  setup(props, ctx) {
    const columnsRef = ref([]);
    const selectedValueRef = ref(null);
    const currentValue = computed(() => {
      let time = props.modelValue || props.value;
      if (!(time instanceof Date)) time = new Date();
      return {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate(),
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    });

    watch(currentValue, (val) => {
      const { year, month, day, hour, minute } = val;
      const timeValue = [
        { type: 'hour', hour, label: `${hour}时` },
        { type: 'minute', minute, label: `${minute}分` }
      ];
      if (props.type === 'time') {
        selectedValueRef.value = timeValue;
      } else {
        selectedValueRef.value = [
          { type: 'year', year, label: `${year}年` },
          { type: 'month', month, label: `${month}月` },
          { type: 'day', day, label: `${day}日` },
          ...timeValue
        ];
      }
    });

    onMounted(() => {
      genColumnByType();
    });

    function genColumnByType() {
      const { type } = props;
      let columns;
      let selectedValue;

      // 年
      if (type === 'year') {
        const { years, currentYear } = genYears();
        columns = years;
        selectedValue = currentYear;
      }

      // 年-月
      if (type === 'year-month') {
        const {
          years,
          months,
          currentYear,
          currentMonth
        } = genYearMonths();
        columns = [years, months];
        selectedValue = [currentYear, currentMonth];
      }

      // 年-月-日
      if (type === 'date') {
        const {
          years,
          months,
          days,
          currentYear,
          currentMonth,
          currentDay
        } = genDates();

        columns = [years, months, days];
        selectedValue = [currentYear, currentMonth, currentDay];
      }

      // 时-分
      if (type === 'time') {
        const { hours, minutes, currentHour, currentMinute } = genTimes();
        columns = [hours, minutes];
        selectedValue = [currentHour, currentMinute];
      }

      // 年-月-日-时-分
      if (type === 'date-time') {
        const {
          years,
          months,
          days,
          currentYear,
          currentMonth,
          currentDay
        } = genDates();

        const { hours, minutes, currentHour, currentMinute } = genTimes();
        columns = [years, months, days, hours, minutes];
        selectedValue = [
          currentYear,
          currentMonth,
          currentDay,
          currentHour,
          currentMinute
        ];
      }

      columnsRef.value = columns;
      selectedValueRef.value = selectedValue;
    }

    function genYears() {
      const { minYear, maxYear } = props;
      const years = genArrayCount(maxYear - minYear + 1).map((item, index) => ({
        type: 'year',
        year: minYear + index,
        label: `${minYear + index}年`
      }));

      return {
        years,
        currentYear: years.find(item => item.year === currentValue.value.year)
      };
    }

    function genYearMonths() {
      const months = genArrayCount(12).map((item, index) => ({
        type: 'month',
        month: index + 1,
        label: `${index + 1}月`
      }));

      const currentMonth = months.find(item => item.month === currentValue.value.month);

      return {
        ...genYears(),
        months,
        currentMonth
      };
    }

    // 根据年月计算当月的天数
    function genDaysByYearAndMonth(year, month) {
      return genArrayCount(calcDaysCount(year, month)).map((item, index) => ({
        type: 'day',
        day: index + 1,
        label: `${index + 1}日`
      }));
    }

    function genDates() {
      const { year, month, day } = currentValue.value;
      const days = genDaysByYearAndMonth(year, month);

      const currentDay = days.find(item => item.day === day);

      return {
        ...genYears(),
        ...genYearMonths(),
        days,
        currentDay
      };
    }

    function genTimes() {
      const { hour, minute } = currentValue.value;
      const hours = genArrayCount(24).map((item, index) => ({
        type: 'hour',
        hour: index,
        label: `${index}时`
      }));
      const minutes = genArrayCount(60).map((item, index) => ({
        type: 'minute',
        minute: index,
        label: `${index}分`
      }));

      const currentHour = hours.find(item => item.hour === hour);
      const currentMinute = minutes.find(item => item.minute === minute);

      return {
        hours,
        minutes,
        currentHour,
        currentMinute
      };
    }

    function transform2Date(values) {
      values = Array.isArray(values) ? values : [values];

      // 时-分，返回的是当日的时分
      if (props.type === 'time') {
        const time = new Date();
        time.setHours(values[0].hour);
        time.setMinutes(values[1].minute);
        return time;
      }

      const [
        yearValue,
        monthValue = { month: 1 },
        dayValue = { day: 1 },
        hourValue = { hour: 0 },
        minuteValue = { minute: 0 }
      ] = values;

      return new Date(
        yearValue.year,
        monthValue.month - 1,
        dayValue.day,
        hourValue.hour,
        minuteValue.minute
      );
    }

    const onOk = values => ctx.emit('ok', transform2Date(values));
    const onClose = () => ctx.emit('close');
    const onCancel = () => ctx.emit('cancel');

    const onChange = (selectedIndex, selected, columnIndex, picker) => {
      // 联动处理
      const { type } = props;
      if (type === 'date' || type === 'date-time') {
        let days;
        if (selected.type === 'year') {
          const { month } = picker.getColumnSelectValue(1);
          days = genDaysByYearAndMonth(selected.year, month);
        }
        if (selected.type === 'month') {
          const { year } = picker.getColumnSelectValue(0);
          days = genDaysByYearAndMonth(year, selected.month);
        }
        picker.setColumnValues(2, days, false);
      }

      const nextValue = transform2Date(picker.getValues());
      ctx.emit('change', nextValue);
      ctx.emit('update:modelValue', nextValue);
    };

    return {
      name,
      columns: columnsRef,
      selectedValue: selectedValueRef,
      onOk,
      onChange,
      onClose,
      onCancel,
    };
  }
});
</script>
