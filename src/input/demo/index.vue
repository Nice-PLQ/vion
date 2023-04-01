<template>
  <div class="input-demo" :class="{full: !circle}">
    <v-list title="通栏样式">
      <template v-slot:right>
        <v-switch v-model="circle" />
      </template>
    </v-list>
    <demo-document title="单行输入框">
      <demo-doc title="无标题">
        <v-input
          placeholder="输入文本"
          show-clear
          :circle="circle"
          v-model="value"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </demo-doc>

      <demo-doc title="有标题">
        <v-input
          label="标题五个字"
          placeholder="输入文本"
          show-clear
          v-model="value1"
          :circle="circle"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </demo-doc>

      <demo-doc title="电话号码">
        <v-input
          placeholder="输入电话号码"
          type="tel"
          label-width="90px"
          :circle="circle"
          v-model="value2"
          @change="handleChange"
        >
          <template v-slot:label>
            <div class="custom-label">中国+86</div>
          </template>
        </v-input>
      </demo-doc>

      <demo-doc title="短信验证码">
        <v-input
          type="tel"
          placeholder="请输入验证码"
          v-model="value3"
          :circle="circle"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        >
          <template v-slot:extra>
            <button class="sms-code-btn">发送验证码</button>
          </template>
        </v-input>
      </demo-doc>

      <demo-doc title="多个组合">
        <v-input-group :circle="circle" border label-align="center" label-width="100px">
          <v-input label="标题五个字" placeholder="输入文本" v-model="value4" />
          <v-input label="标题五个字" placeholder="输入文本" v-model="value5" />
          <v-input label="标题五个字" placeholder="输入文本" v-model="value6" />
        </v-input-group>
      </demo-doc>

      <demo-doc title="实时报错">
        <v-input
          is-error
          show-clear
          label="标题五个字"
          v-model="value7"
          :circle="circle"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </demo-doc>

      <demo-doc title="单条_有说明文案及计数器">
        <v-input
          label="标题五个字"
          placeholder="输入文本"
          show-clear
          help="说明文本"
          :max-length="10"
          :circle="circle"
          v-model="value8"
          show-count-indicator
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </demo-doc>

    </demo-document>

    <demo-document title="长文本输入">
      <v-input
        placeholder="输入文本"
        help="说明文本"
        type="textarea"
        rows="6"
        show-count-indicator
        :circle="circle"
        :max-length="128"
        v-model="value9"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </demo-document>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '输入文本',
      value8: '',
      value9: '',
      circle: false,
    };
  },
  methods: {
    handleChange(value, e) {
      console.log('change-----: ', value, e);
    },
    handleFocus(e) {
      console.log('focus------: ', e);
    },
    handleBlur(e) {
      console.log('blur------: ', e);
    }
  }
};
</script>

<style lang="less">
.input-demo {

  .demo-doc {
    padding: 0;
    &__title {
      padding-top: 12px;
      padding-bottom: 8px;
    }
  }

  &.full {
    .q-input {
      margin: 0 -16px;
    }
  }
  .q-list {
    border-radius: 0;
  }
}
.custom-label {
  color: var(--text-link);
}

.sms-code-btn {
  font-size: 14px;
  color: var(--text-link);
  margin-right: 16px;
  padding: 6px;
  border: 1px solid var(--text-link);
  border-radius: 6px;
  &:active {
    opacity: 0.75;
  }
}
</style>
