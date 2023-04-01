<template>
  <div :class="{
    [`${name}`]: true,
    [`${name}_error`]: isError,
    [`${name}_circle`]: currentCircle,
    [`${name}__textarea`]: type === 'textarea',
  }">
    <div :class="`${name}__inner`">
      <div
        :class="{
          [`${name}__label`]: true,
          [`${name}__label-textarea`]: type === 'textarea'
        }"
        :style="{textAlign: currentLabelAlign, width: currentLabelWidth}"
        v-if="$slots.label || label"
      >
        <slot name="label">
          <span v-if="label">{{label}}</span>
        </slot>
      </div>
      <div
        :class="{
        [`${name}__wrap`]: true,
        [`${name}_clear`]: clearIconVisible
      }"
      >
        <textarea
          v-if="type === 'textarea'"
          ref="textarea"
          :value="currentValue"
          :placeholder="placeholder"
          :maxlength="maxLength"
          :rows="autoSize ? 1 : rows"
          :pattern="pattern"
          :readonly="currentReadonly"
          @input="onChange"
          @focus="onFocus"
          @blur="onBlur"
        ></textarea>
        <input
          v-else
          ref="input"
          :type="type === 'input' ? 'text' : type"
          :value="currentValue"
          :placeholder="placeholder"
          :maxlength="maxLength"
          :pattern="pattern"
          :readonly="currentReadonly"
          @input="onChange"
          @focus="onFocus"
          @blur="onBlur"
        />
        <button
          v-if="clearIconVisible"
          @click="onClear"
          :class="`${name}__btn-clear`"
          aria-label="删除"
        >
          <close-filled size="15px" />
        </button>
      </div>
      <div :class="`${name}__extra`" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div :class="`${name}__help`" v-if="help || (maxLength && showCountIndicator)">
      <div :class="`${name}__help-txt`" v-if="help">{{ help }}</div>
      <div
        v-if="maxLength && showCountIndicator"
        :class="`${name}__indicator`"
      >{{maxLength - currentValue.length}}字</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch, inject } from 'vue';
import textAreaAutoSize from 'autosize';
import { CloseFilled } from 'vion-svg-icon';
import { prefix } from '../config';

const name = `${prefix}-input`;

export default defineComponent({
  name,
  components: { CloseFilled },
  props: {
    modelValue: [String, Number],
    /**
     * @description 当前输入框的值
     * @attribute value
     */
    value: {
      type: [String, Number],
      default: ''
    },
    /**
     * @description 输入框类型
     * @attribute type
     * @enum ["input", "textarea", "tel", "password"]
     * @default input
     */
    type: {
      type: String,
      default: 'input',
      validator: val => ['input', 'textarea', 'tel', 'password'].indexOf(val) !== -1
    },
    /**
     * @description 输入框标题
     * @attribute label
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * @description 输入框标题对齐方式
     * @attribute label-align
     * @enum ["left", "center", "right"]
     */
    labelAlign: {
      type: String,
      validator: val => ['left', 'center', 'right'].indexOf(val) !== -1
    },
    /**
     * @description 输入框标题宽度
     * @attribute label-width
     */
    labelWidth: String,
    /**
     * @description 底部说明文本
     * @attribute help
     */
    help: {
      type: String,
      default: ''
    },
    /**
     * @description 占位文字
     * @attribute placeholder
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * @description 是否只读
     * @attribute readonly
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * @description 允许输入的最大长度
     * @attribute max-length
     */
    maxLength: Number,
    /**
     * @description 文本域的行数
     * @attribute rows
     */
    rows: {
      type: [Number, String],
      default: 3
    },
    /**
     * @description 是否显示字数指示器
     * @attribute show-count-indicator
     */
    showCountIndicator: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否显示清除的Icon
     * @attribute show-clear
     */
    showClear: {
      type: Boolean,
      default: false
    },
    /**
     * @description 原生pattern
     * @attribute pattern
     */
    pattern: String,
    /**
     * @description textarea高度是否自适应
     * @attribute autoSize
     */
    autoSize: {
      type: Boolean,
      default: false,
    },
    /**
     * @description 是否圆角
     * @attribute circle
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否输入错误
     * @attribute is-error
     */
    isError: {
      type: Boolean,
      default: false,
    },

  },
  emits: ['change', 'focus', 'blur', 'update:modelValue'],
  setup(props, ctx) {
    const groupLabelAlign = inject('groupLabelAlign', undefined);
    const groupLabelWidth = inject('groupLabelWidth', undefined);
    const groupReadonly = inject('groupReadonly', false);
    const groupCircle = inject('groupCircle', false);

    const textarea = ref(null);
    const input = ref(null);
    const isFocus = ref(false);
    const currentValue = computed(() => props.modelValue || props.value);
    const clearIconVisible = computed(() => isFocus.value && currentValue.value && props.showClear);
    const currentLabelAlign = computed(() => groupLabelAlign || props.labelAlign);
    const currentLabelWidth = computed(() => groupLabelWidth || props.labelWidth);
    const currentReadonly = computed(() => groupReadonly || props.readonly);
    const currentCircle = computed(() => groupCircle || props.circle);

    watch(currentValue, (val) => {
      if (val) {
        isFocus.value = true;
      }

      if (props.autoSize && textarea?.value) {
        textAreaAutoSize(textarea.value);
      }
    });

    const onChange = (e) => {
      const val = e.target.value;
      ctx.emit('change', val);
      ctx.emit('update:modelValue', val);
    };

    const onFocus = (e) => {
      isFocus.value = true;
      ctx.emit('focus', e);
    };

    const onBlur = (e) => {
      ctx.emit('blur', e);
      // 在下一个事件循环处理失焦，否则清除的icon会在被click之前就消失了，导致无法点击
      setTimeout(() => {
        isFocus.value = false;
      }, 0);
    };

    const onClear = (e) => {
      ctx.emit('change', '');
      ctx.emit('update:modelValue', '');
      if (props.type === 'textarea') {
        textarea.value.focus();
      } else {
        input.value.focus();
      }
      setTimeout(() => {
        isFocus.value = false;
      }, 0);
    };

    return {
      name,
      textarea,
      input,
      currentValue,
      isFocus,
      clearIconVisible,
      currentLabelAlign,
      currentLabelWidth,
      currentReadonly,
      currentCircle,
      onChange,
      onFocus,
      onBlur,
      onClear
    };
  }
});
</script>
