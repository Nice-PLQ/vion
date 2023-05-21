<template>
  <v-popup
    :class="name"
    :visible="visible"
    :to="to"
    :teleport-disabled="teleportDisabled"
    :mask-visible="maskVisible"
    @close="onClose"
    position="bottom"
    aria-modal="true"
  >
    <div :class="`${name}-box`">
      <div :class="`${name}__header`" v-if="showCancel || showOk">
        <span v-if="!showCancel && showOk" />
        <button
          :class="`${name}__btn`"
          v-if="showCancel"
          @click="onCancel"
        >{{cancelText || $locale.translate('cancel')}}</button>
        <slot name="title">
          <div :class="`${name}__title`">{{ title }}</div>
        </slot>
        <button
          :class="`${name}__btn`"
          v-if="showOk"
          @click="onOk"
        >{{okText || $locale.translate('confirm')}}</button>
      </div>
      <div :class="`${name}__content`" :style="{height: wrapHeight}">
        <div :class="`${name}__indicator`" />
        <picker-column
          v-for="(column, index) in formatColumns"
          :key="index"
          :ref="(el) => columnRefs[`column_${index}`] = el"
          :column="column"
          :selected-value="formatSelectedValue[index]"
          :show-item-count="showItemCount"
          :value-key="valueKey"
          :inertia="inertia"
          :click-selectable="clickSelectable"
          :immediate-change="immediateChange"
          @change="(selectedIndex, selected) => onColumnChange(selectedIndex, selected, index)"
        />
      </div>
    </div>
  </v-popup>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { simpleClone } from '../utils';
import VPopup from '../popup';
import PickerColumn from './column.vue';

import { prefix } from '../config';

const name = `${prefix}-picker`;

export default defineComponent({
  name,
  components: { VPopup, PickerColumn },
  props: {
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
     * @description 标题
     * @attribute title
     */
    title: String,
    /**
     * @description 每列数据源
     * @attribute columns
     */
    columns: {
      type: Array,
      required: true
    },
    /**
     * @description 设置选中的值
     * @attribute selected-value
     */
    selectedValue: {
      type: [Object, Array],
      default: null
    },
    /**
     * @description 滚动惯性系数
     * @attribute inertia
     */
    inertia: {
      type: [Number, String],
      default: 0.8
    },
    /**
     * @description 每列显示的数量
     * @attribute show-item-count
     */
    showItemCount: {
      type: Number,
      default: 5,
      validator: val => val > 3 && val < 10
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
     * @description 选项文字对应的键名
     * @attribute value-key
     */
    valueKey: {
      type: String,
      default: 'label'
    },
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
  emits: ['ok', 'close', 'change', 'cancel'],
  setup(props, ctx) {
    const wrapHeight = ref(`${46 * props.showItemCount}px`);

    const columnRefs = {};
    for (let i = 0; i < props.columns.length; i++) {
      columnRefs[`column_${i}`] = ref(null);
    }

    const formatColumns = computed(() => {
      const { columns } = props;
      const cloneColumns = simpleClone(columns);
      if (
        cloneColumns.length &&
        cloneColumns.every(column => !Array.isArray(column))
      ) {
        return [cloneColumns];
      }
      return cloneColumns;
    });

    const formatSelectedValue = computed(() => {
      const { selectedValue } = props;
      if (!Array.isArray(selectedValue)) {
        return [selectedValue];
      }

      return selectedValue;
    });

    // 获取所有列选中的值
    function getValues() {
      const values = [];
      for (let index = 0; index < formatColumns.value.length; index++) {
        values.push(getColumnSelectValue(index));
      }

      if (values.length === 1) {
        return values[0];
      }
      return values;
    }

    /**
     * 获取指定列选中的值
     * @param {Number} columnIndex 列的索引
     */
    function getColumnSelectValue(columnIndex) {
      if (isIndexValidate(columnIndex)) {
        return getColumn(columnIndex).getValue();
      }
    }

    function isIndexValidate(index) {
      return index >= 0 && index < props.columns.length;
    }

    function getColumn(index) {
      return columnRefs[`column_${index}`];
    }

    /**
     * 设置所有列选中的值
     * @param {Array} values 每列的选中值
     */
    function setValues(values) {
      if (!Array.isArray(values)) {
        setColumnSelectValue(0, values);
      } else {
        for (let index = 0; index < formatColumns.value.length; index++) {
          setColumnSelectValue(index, values[index]);
        }
      }
    }

    /**
     * 设置指定列选中的值
     * @param {Number} columnIndex 列的索引
     * @param {Object} value 选中的值
     */
    function setColumnSelectValue(columnIndex, value) {
      if (value && isIndexValidate(columnIndex)) {
        getColumn(columnIndex).setValue(value);
      }
    }

    /**
     * 设置指定列的所有项
     * @param {Number} columnIndex 列的索引
     * @param {Array} values 列的数据源
     * @param {Boolean} resetOffset 是否需要重置偏移
     */
    function setColumnValues(columnIndex, values, resetOffset) {
      if (values && isIndexValidate(columnIndex)) {
        getColumn(columnIndex).setColumnValues(
          simpleClone(values),
          resetOffset
        );
      }
    }

    const onClose = () => ctx.emit('close');
    const onCancel = () => {
      ctx.emit('cancel');
      onClose();
    };
    const onOk = () => {
      ctx.emit('ok', getValues());
      onClose();
    };
    const onColumnChange = (selectedIndex, selected, columnIndex) => {
      ctx.emit('change', selectedIndex, selected, columnIndex, {
        getValues,
        setValues,
        getColumnSelectValue,
        setColumnSelectValue,
        setColumnValues
      });
    };

    return {
      name,
      formatColumns,
      wrapHeight,
      columnRefs,
      getValues,
      setValues,
      getColumnSelectValue,
      setColumnSelectValue,
      setColumnValues,
      formatSelectedValue,
      onClose,
      onCancel,
      onOk,
      onColumnChange
    };
  }
});
</script>
