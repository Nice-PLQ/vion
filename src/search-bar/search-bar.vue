<template>
  <div
    :class="{
      [`${name}`]: true,
    }"
  >
    <arrow-left
      :class="`${name}__back-icon`"
      v-if="backBtnVisible"
      @click="onBackBtnClick"
    />
    <form
      action
      :class="`${name}__${type}`"
      @submit.prevent
    >
      <div v-if="!isFocus && !backBtnVisible && type === 'capsule'" :class="`${name}_unfocus`" @click="onFocus">
        <search :class="`${name}_search-icon_unfocus`" />
        <p>{{ placeholder || $locale.translate('search')}}</p>
      </div>
      <div v-else :class="`${name}_focus`">
        <search :class="`${name}__search-icon`" />
        <input
          type="search"
          :placeholder="placeholder || $locale.translate('search')"
          :value="currentValue"
          @input="onInputChange"
          @blur="onInputBlur"
          @focus="$emit('focus')"
          @keyup.enter="onSearch"
          ref="inputArea"
        />
        <close-filled v-if="currentValue" :class="`${name}__clear-icon`" @click="onClear" />
      </div>
    </form>
    <div
      v-if="cancelBtnVisible && isFocus"
      :class="`${name}__cancel`"
      @click="onCancel"
    >{{$locale.translate('cancel')}}</div>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, ref } from 'vue';
import { ArrowLeft, Search, CloseFilled } from 'vion-svg-icon';
import { prefix } from '../config';
const name = `${prefix}-search-bar`;

export default defineComponent({
  name,
  components: { ArrowLeft, Search, CloseFilled },
  props: {
    modelValue: String,
    /**
     * @description 输入框的值
     * @attribute value
     */
    value: {
      type: String,
      default: ''
    },
    /**
     * @description 提示信息
     * @attribute placeholder
     */
    placeholder: String,
    /**
     * @description 搜索框样式
     * @attribute type
     * @enum ["capsule", "form"]
     * @default capsule
     */
    type: {
      type: String,
      default: 'capsule',
      validator: val => ['capsule', 'form'].indexOf(val) !== -1
    },
    /**
     * @description 右侧取消按钮是否显示
     * @attribute cancel-btn-visible
     */
    cancelBtnVisible: {
      type: Boolean,
      default: false
    },
    /**
     * @description 左侧后退箭头是否显示
     * @attribute back-btn-visible
     */
    backBtnVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change', 'clear', 'cancel', 'back-btn-click', 'blur', 'search', 'focus'],
  setup(props, ctx) {
    const currentValue = computed(() => props.modelValue || props.value);
    const inputArea = ref(null);
    const isFocus = ref(false);

    const onFocus = () => {
      isFocus.value = true;
      nextTick(() => {
        inputArea.value.focus();
      });
    };

    const onClear = () => {
      ctx.emit('change', '');
      ctx.emit('update:modelValue', '');
      ctx.emit('clear');
      inputArea.value.focus();
    };

    const onCancel = () => {
      ctx.emit('change', '');
      ctx.emit('update:modelValue', '');
      ctx.emit('cancel');
      isFocus.value = false;
    };

    const onBackBtnClick = () => {
      ctx.emit('back-btn-click');
    };

    const onInputChange = (e) => {
      ctx.emit('change', e.target.value);
      ctx.emit('update:modelValue', e.target.value);
    };

    const onInputBlur = (e) => {
      if (!e.target.value) {
        isFocus.value = false;
      }
      ctx.emit('blur');
    };

    const onSearch = (e) => {
      inputArea.value.blur();
      ctx.emit('search', e.target.value);
    };
    return {
      name,
      currentValue,
      inputArea,
      isFocus,
      onFocus,
      onClear,
      onCancel,
      onBackBtnClick,
      onInputChange,
      onInputBlur,
      onSearch
    };
  }
});
</script>
