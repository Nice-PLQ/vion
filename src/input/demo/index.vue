<template>
  <div class="input-demo">
    <demo-doc title="基本用法">
      <v-input
        placeholder="输入文本"
        show-clear
        v-model="value"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <v-input
        type="tel"
        placeholder="请输入验证码"
        v-model="value1"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <template v-slot:extra>
          <button class="sms-code-btn">发送验证码</button>
        </template>
      </v-input>
    </demo-doc>

    <demo-doc title="有标题">
      <v-input
        label="标题"
        placeholder="请输入手机号"
        show-clear
        v-model="value2"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <v-input
        placeholder="输入电话号码"
        type="tel"
        label-width="90px"
        v-model="value3"
        @change="handleChange"
      >
        <template v-slot:label>
          <div class="custom-label">中国+86</div>
        </template>
      </v-input>
    </demo-doc>

    <demo-doc title="限制输入字数并显示指示器">
      <v-input
        label="标题"
        placeholder="最多10个字符"
        show-clear
        :max-length="10"
        v-model="value4"
        show-count-indicator
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </demo-doc>

    <demo-doc title="多行输入">
      <v-input
        label="标题"
        type="textarea"
        rows="6"
        show-count-indicator
        :max-length="128"
        v-model="value5"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </demo-doc>

    <demo-doc title="自动撑起内容高度">
      <v-input
        label="标题"
        placeholder="请输入"
        type="textarea"
        :autoSize="true"
        v-model="value6"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </demo-doc>

    <demo-doc title="标题对齐方式（右对齐）">
      <v-input
        label="新密码"
        type="password"
        v-model="value7"
        label-align="right"
        label-width="70px"
        placeholder="请设置新密码"
      />
      <v-input
        label="确认密码"
        type="password"
        v-model="value8"
        label-align="right"
        label-width="70px"
        placeholder="请再次输入新密码"
      />
    </demo-doc>

    <demo-doc title="输入框组合（带边框）">
      <v-input-group border label-align="center" label-width="70px">
        <v-input label="职业" placeholder="请输入职业" v-model="value9" />
        <v-input label="公司" placeholder="请输入公司" v-model="value10" />
        <v-input
          label="毕业学校"
          placeholder="请输入毕业学校"
          v-model="value11"
        />
      </v-input-group>
    </demo-doc>

    <demo-doc title="实时报错" class="m-b-16">
      <v-input
        is-error
        show-clear
        label="标题"
        v-model="value12"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </demo-doc>
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
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '输入错误',
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
    },
  },
};
</script>

<style lang="less">
.input-demo {
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
